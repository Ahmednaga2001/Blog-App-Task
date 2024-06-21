'use client'
import { usePathname } from 'next/navigation';
import BreadCrumb from './BreadCrumb';
import React from 'react';

const BreadCrumbClient = () => {
    const path = usePathname()
    return (
        <BreadCrumb path={path}/>
    );
}

export default BreadCrumbClient;
