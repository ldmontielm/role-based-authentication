'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import {ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline'
import { useAuthContext } from '@/context/AuthContext'



export default function Navbar() {
  const {user} = useAuthContext()
  return (
    <div className='border rounded py-2 px-3 flex items-center justify-between'>
        <h3 className='font-bold'>Auth🔒</h3>
        <div className='flex items-center gap-2'>
          <p className='capitalize font-semibold'>{user.full_name}</p>
          <Button variant='outline' size='icon'>
              <Link href="/dashboard/logout">
                  <ArrowRightOnRectangleIcon className='w-4 h-4' />
              </Link>
          </Button>
        </div>
    </div>
  )
}
