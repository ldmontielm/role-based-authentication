'use client'

import {useEffect, useReducer} from 'react'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function page() {

    const {logout} = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        logout()
        router.push("/login")
    })

    return null
}
