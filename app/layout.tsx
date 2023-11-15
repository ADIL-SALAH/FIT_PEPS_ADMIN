"use client";

import './globals.css'
import { BASE_URL } from '../urls/urls'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react';
import Layout from '../Components/UI/Layout/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = new QueryClient();

  axios.defaults.baseURL = BASE_URL


  return (

    <html lang="en">

      <body>

        <QueryClientProvider client={queryClient}>

          {/* <Header /> */}
          <Layout>{children}</Layout>



        </QueryClientProvider>

      </body>

    </html>
  )
}
