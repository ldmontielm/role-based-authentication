import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/admin-components'

export default function page() {
  return (
    <div>
      <Navbar />
      <div className='mt-2 w-full flex items-center justify-center h-96'>
        <p className='text-4xl font-bold text-stone-600'>Dashboard</p>
      </div>
    </div>
  )
}
