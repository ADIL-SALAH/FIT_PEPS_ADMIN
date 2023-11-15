'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter()
    Cookies.remove('auth_token')
    router.push('/login')
    return (
        <div></div>
    )
}

export default page