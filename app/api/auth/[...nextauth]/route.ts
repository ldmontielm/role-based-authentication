import NextAuth from "next-auth/next"
import  CredentialsProvider  from "next-auth/providers/credentials"
import axios from "axios"

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
              },
            async authorize(credentials, req){
                const res = await axios.post("http://127.0.0.1:8000/token", credentials, {
                    headers: {
                        "Accept": 'application/json',
                        "Content-Type": "application/x-www-form-urlencoded" 
                    }
                })
                const user = await res.data
                if (res.status === 200) {
                    return user
                }else {
                    return null
                }
            }
        })    
    
    ],
    callbacks: {
        async jwt({token, user}){
            if (user) {
                const res = await axios.get("http://127.0.0.1:8000/user/me",{
                    headers: { Authorization: `Bearer ${user.access_token}` },
                })
                token.access_token = user.access_token;
                token.refresh_token = user.token_type;
                token.user = res.data
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as any
            session.access_token = token.access_token as any
            return session;
        },
    },
    pages: {
        signOut: '/dashboard/logout'
    }
}) 
export { handler as GET, handler as POST }