"use client";

import { useEffect } from 'react';
import { isAuthenticated } from '@/app/utils/auth';
import { redirect } from 'next/navigation';

const isAuth=(Component)=>{
    return (props)=>{
        const auth=isAuthenticated;
        useEffect(()=>{
            if(!auth){
               return redirect('/');    // redirect to home page if not authenticated
            }
        }, []);
        if (!auth){
            return null;
        }
        return <Component {...props} />;
    }
};

export default isAuth;