'use client'

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useAuthContext, AuthTokens } from '@/context/AuthContext';
import { accessTokenLogin, Credentials } from '../../services/login.service';


const formSchema = z.object({
  username: z.string({
    required_error: 'El correo es requerido'
  }).email({
    message: 'Dirección de correo inválida'
  }),
  password: z.string({
    required_error: "La contraseña es requerida",
    invalid_type_error: "La contraseña debe ser una cadena",
  })
});


export default function FormLogin() {
  const router = useRouter()
  const { login, loginUser } = useAuthContext();
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
  
  async function fetchPostLogin(credentials: Credentials) {
    const data = await accessTokenLogin(credentials)
    if(data !== undefined){
      login(data.data as unknown as AuthTokens);
      loginUser()
      router.push("/dashboard");
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetchPostLogin(values)
  }

  return (
    <div className='w-full'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='mb-5'>
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input placeholder="correo" type='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem> 
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='mb-5'>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="contraseña" type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem> 
            )}
          />
          <Button type="submit" className='w-full'>Iniciar sesión</Button>
          <div className='flex items-center justify-start'>
            <Button variant="link" className='p-0'>
              <Link href='/' className='font-medium'>Recuperar contraseña</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
