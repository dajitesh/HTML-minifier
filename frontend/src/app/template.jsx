'use client';
import Navbar from '@/components/navbar';
import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';

const Template = ({ children }) => {

    return (
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={1000}>
            <Navbar />
            {children}
        </SnackbarProvider>
    )
}

export default Template;