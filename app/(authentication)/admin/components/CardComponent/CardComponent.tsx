'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import { FormProfile } from '..'


export default function CardComponent() {
    const {data: session} = useSession()
    console.log(session)
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-lg'>Detalles de Cuenta</CardTitle>
                <CardDescription>Gestiona tu información personal</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <div className='flex flex-col gap-2 md:flex-row items-center justify-between'>
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='w-20 h-20 rounded-full overflow-hidden'>
                                <Image width='500' height='500' src='https://limewire-ai2-production.s3.amazonaws.com/u/e8a8be06-0450-4164-aee5-992aa0485cec/image/b81b8cfe-1b90-4ea5-bd74-df3bb449aa3f?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIEYcL8wlcYXAb8RuX2gVklZ3EBy5CE0sCGa4HLj9PHQLAiBkMLWqeQV050szd1nxyQvv%2B88ubsnkSXoTZRaB7qZgrCqiBQi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDQ3MjQ2MzA2MzY1NyIM7ZJLD24JfruzpzWhKvYEZADRdHdehLwFnYYghWAZuIxy5DCaaaw%2B8kvJTNvlzoATA1xQ5frj7VSeR8HPUlwtTuJ7l%2FsjkD07vpMxc4HWJ8G2%2FWugX8gsJe70s35UFcBVYCnMdt7665IQ9ZuFwXELagurxCmYilQqt2W6RXJxGE9vcotO5CSzWufaaLepRbseGngis0xX%2FS2NAfvLSy%2B3hXw4tdZ22Kv0ZXgQzX4LVoRUPgjkwcNaEOlt6eCEpIc8UG%2BhQbdgvJsIK4A1ExlzSo5mlZqPbUuDOE8AZtCqLyfyNs0zqXFxJSfLJIPd0AOxVeUSjPIK3%2FM8onYQ%2BRIwOMrtBPQqODjllqfTZX0W7B3oXa18RIBkl%2FXdD1gq7QpJ9b2HgTEK%2BKaNPQDn4Z%2F7Whf2tcp8BJgByWXvJfpOZqIH33HWgY5vaMWnk2AW1KMqZec53RjopU28CNiTI3lo1zWd5uwsTAQmPgZoxhHLuwut69pThop9nrhxz%2F78T976b3woyEYI8CpF8yQok6ehD7OsUPF%2Fh5FHSuIdN8n8AlJIyw5Fs42PgucCNoYF1GLgE9oKKoeGlAFKJ%2Fyl23X1ZqSzioUc2gC%2BfWuUuvARO%2F6hkETGfCR6W0SGRFnvbhBHqpdf4vblxoSAAPRVfFXchC65DTNvxv095mphTK9U1%2BGOUw1Z77agJzztxECOu2d36tAMam9qO2VmoaIxJB1tgIqEIzl5zsbwI2t4p7SK9IPPdGPveO9g97jmcylwMCMHUJ3YAxkbrE7lt1kNgsNYYk%2F1jrJ4syDOaPyzgIchs%2BxnRBOvTXdk94kyhjimwcywsdM0IYSWa7SAUfHq0vENOWZA0K3tMLXojakGOpwBvxHaDAWO5y%2FMeqMqMGMuxwGoDOtaN80wOqFmndIjXEOUx6niaQ6j8TZ59NzF3mEwtDk6p4LJO3orgqQ20ZMIxK8%2BNQXVp1psOOiS%2F90yGHdYP7SZabg2p%2FNEIi9JJH7vO%2FlJFrjJQaZUuN9wDxrhEIuKpQ5UBlooMh7mLnPcIhE4M8uE2Ll5NGiKMpIPos96AuQoRa4Ektdx43bF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231009T040854Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Credential=ASIAW4AH6HJUQDHRAJOI%2F20231009%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8a865ad2ab792d2ac0e9057aaeeb67df40d7f68cacda44dc2e6b74b66b8754c3' alt='foto de perfil' />
                            </div>
                            <div className='flex flex-col gap-2 text-center md:text-left'>
                                <p className='font-semibold'>Imagen de Perfil</p>
                                <p>Imagen máximo de 5MB</p>
                            </div>
                        </div>
                        <div className='w-full md:w-fit'>
                            <Button variant='outline' className='w-full'>Cambiar</Button>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <FormProfile />
                </div>
            </CardContent>
        </Card>
    )
}
