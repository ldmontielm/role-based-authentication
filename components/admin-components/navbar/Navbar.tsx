'use client'

import { getCurrentUsertActivate } from '@/app/(authentication)/dashboard/services/dashboard.service'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Permission, useAuthContext } from '@/context/AuthContext'
import { ArrowRightOnRectangleIcon, ShoppingBagIcon,CircleStackIcon,  Bars3Icon, CreditCardIcon,Cog6ToothIcon, Squares2X2Icon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import useSWR from 'swr'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'


export default function Navbar() {
  const {data:session} = useSession()

  const getCharFromWord = (word:string | undefined) => {
    const spliceWord = Array.from(word!= undefined ? word : "U"  )
    return spliceWord[0]
  }

  return (
    <div className='border rounded py-2 px-3 flex items-center justify-between'>
        <h3 className='font-bold'>Auth🔒</h3>
        <div className='flex items-center gap-2'>         
          <Popover>
            <PopoverTrigger asChild>
              <Button variant='outline' size='icon'>
                <Bars3Icon className='w-6 h-6' />
              </Button>
            </PopoverTrigger>
            <PopoverContent align='end' className='p-2 w-52 text-sm'>
              <div className='flex items-center px-2'>
                <div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center'>
                  <p className='uppercase text-white font-bold'>{getCharFromWord(session?.user.email)}</p>
                </div>
                <div className='py-2 px-3'>
                  <p>{session?.user.fullname}</p>
                  <p>{session?.user.email}</p>
                </div>
              </div>
              <Link href="/dashboard" className='flex items-center gap-4 hover:bg-gray-100 cursor-pointer rounded py-2 px-3'>
                <Squares2X2Icon className='w-5 h-5 text-gray-500' />
                <p>Dashboard</p>
              </Link>
              {
                session?.user.permissions.includes("gestión de ventas") && (
                  <Link href="/sales" className='flex items-center gap-4 hover:bg-gray-100 cursor-pointer rounded py-2 px-3'>
                    <CreditCardIcon className='w-5 h-5 text-gray-500' />
                    <p>Sales</p>
                  </Link>
                )
              }
              
              {
                session?.user.permissions.includes("gestión de productos") && (
                  <Link href="/products" className='flex items-center gap-4 hover:bg-gray-100 cursor-pointer rounded py-2 px-3'>
                    <CircleStackIcon className='w-5 h-5 text-gray-500' />
                    <p>Products</p>
                  </Link>
                )
              }
              {
                session?.user.permissions.includes("gestión de compras") && (
                  <Link href="/purchases" className='flex items-center gap-4 hover:bg-gray-100 cursor-pointer rounded py-2 px-3'>
                    <ShoppingBagIcon className='w-5 h-5 text-gray-500' />
                    <p>Compras</p>
                  </Link>
                )
              }
              {
                session?.user.permissions.includes("gestión de proveedores") && (
                  <Link href="/products" className='flex items-center gap-4 hover:bg-gray-100 cursor-pointer rounded py-2 px-3'>
                    <CircleStackIcon className='w-5 h-5 text-gray-500' />
                    <p>Proveedores</p>
                  </Link>
                )
              }
              {
                session?.user.permissions.includes("gestión de insumos") && (
                  <Link href="/products" className='flex items-center gap-4 hover:bg-gray-100 cursor-pointer rounded py-2 px-3'>
                    <CircleStackIcon className='w-5 h-5 text-gray-500' />
                    <p>Insumos</p>
                  </Link>
                )
              }
              <Link href="/admin" className='flex items-center gap-4 hover:bg-gray-100 cursor-pointer rounded py-2 px-3'>
                <Cog6ToothIcon className='w-5 h-5 text-gray-500' />
                <p>Settings</p>
              </Link>
              
              <Link href='/dashboard/logout' className='mt-5 flex items-center gap-4 hover:bg-gray-100 cursor-pointer rounded py-2 px-3'>
                <p>Sign Out</p>
              </Link>
            </PopoverContent>
          </Popover>
        </div>
    </div>
  )
}
