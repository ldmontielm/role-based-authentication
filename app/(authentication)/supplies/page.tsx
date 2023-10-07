'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default function page() {
  const {data: session} = useSession()
  const router = useRouter()

  if(session?.user.permissions.includes("gestión de insumos") === false) {
    router.push("/dashboard")
  }

  return (
    <div>
      <div className='mt-2 w-full flex items-center justify-center h-96'>
        <p className='text-4xl font-bold text-stone-600'>Insumos</p>
      </div>
    </div>
  )
}
