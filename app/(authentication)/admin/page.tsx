import React from 'react'
import { CardComponent } from './components'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function page() {
  return (
    <div className='mt-5'>  
      <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
        <div className='md:col-span-3'>
          <Card className='border rounded-lg w-full'>
            <CardHeader>
              <CardTitle>Menu Lateral</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex rem eaque placeat nulla quas quo. Exercitationem qui explicabo quasi impedit tempora corrupti aliquam cupiditate delectus nulla, placeat aperiam beatae.</p>
            </CardContent>
          </Card>
        </div>
        <div className='md:col-start-4 md:col-end-13'>
          <CardComponent />
        </div>
      </div>
    </div>
  )
}
