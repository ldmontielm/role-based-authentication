'use client'

import {useEffect} from 'react'
import { signOut } from 'next-auth/react'

export default function page() {
    useEffect(() => {
        signOut()
    })
    return null
}
