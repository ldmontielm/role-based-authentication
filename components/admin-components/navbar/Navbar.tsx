'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import {ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline'
import { getCurrentUsertActivate } from '@/app/(authentication)/dashboard/services/dashboard.service'
import useSWR from 'swr'
import Cookies from 'js-cookie'

export default function Navbar() {
  // const data = await getCurrentUsertActivate()
  const {data} = useSWR("http://localhost:8000/user/me", getCurrentUsertActivate)
  const setLocalStorage = () => {
    Cookies.set("PERMISSIONS-TOKEN", JSON.stringify(data?.data.permissions))
  }
  setLocalStorage()
  return (
    <div className='border rounded py-2 px-3 flex items-center justify-between'>
        <h3 className='font-bold'>Auth🔒</h3>
        <div className='flex items-center gap-2'>
          {
            data !== undefined ? (
              <p className='capitalize font-semibold'>{data.data.username}</p>
            ) : ""
          }
          <Button variant='outline' size='icon'>
              <Link href="/dashboard/logout">
                  <ArrowRightOnRectangleIcon className='w-4 h-4' />
              </Link>
          </Button>
        </div>
    </div>
  )
}
