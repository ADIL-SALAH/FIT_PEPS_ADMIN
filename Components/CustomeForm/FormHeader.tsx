"use client"
import { Box, Button, Grid, Typography, useAutocomplete } from '@mui/material'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function FormHeader(props: any) {

    const { heading, edit } = props

    const router = useRouter()

    return (
        <Grid container sx={{

        }}>

            <Typography sx={{

                fontSize: 28, fontWeight: 550, m: 1

            }}> {heading} </Typography>


            <Grid sx={{
                bgcolor: '',
                ml: 'auto', mr: 10, mt: 1
            }}>

                <Button variant="contained"

                    onClick={() => router.back()}
                    sx={{
                        mx: 3, bgcolor: 'dodgerblue'
                    }}>Back</Button>

                <Button type='submit' variant="contained" sx={{
                    bgcolor: 'green'
                }}>{edit ? 'Edit' : 'Create'}</Button>
            </Grid>

        </Grid>
    )
}
