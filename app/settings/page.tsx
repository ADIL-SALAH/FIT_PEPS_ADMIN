"use client"

import { Button, Grid } from '@mui/material'
import Cookies from 'js-cookie'
import React from 'react'
import { PrimaryButton } from '../../Components/UI/Button/Button'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter();

    const Logout = () => {

        Cookies.remove("auth_token")

        router.push("/")

    }

    return (

        <Grid sx={{ m: 1 }}>

            <PrimaryButton bgcolor="dodgerblue"
                onClick={Logout}>Log Out</PrimaryButton>

        </Grid>

    )
}

export default page