import { Box, Button, Grid, Typography } from '@mui/material'
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { PRIMARY_COLOUR } from '../../../urls/colours';
import { PrimaryButton } from '../Button/Button';


export default function FormHeader(props: any) {

    const { heading, parts, type, xs, md } = props

    const router = useRouter()

    const { id } = useParams()

    return (
        <Grid container sx={{ m: 2 }}>

            <Typography variant='h5' mr="auto" sx={{ fontWeight: 550, color: "black" }}>{heading}</Typography>

            <Grid sx={{

                display: { xs: xs, md: md }
            }}>

                <PrimaryButton bgcolor="black" mx={1}   >Back</PrimaryButton>

                <PrimaryButton mx={1} bgcolor={PRIMARY_COLOUR} >{type == "edit" ? "Update" : "Create"}</PrimaryButton>

            </Grid>

        </Grid >
    )
}
