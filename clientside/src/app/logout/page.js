"use client"
import { useAuth } from '@/context/context'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import  { useState } from 'react';


function page() {
        const router=useRouter()
    const{logout}=useAuth()
    useEffect(()=>{
logout()
router.push('/');
    },[])
  return (
    <div>page</div>
  )
}

export default page