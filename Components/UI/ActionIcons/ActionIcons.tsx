"use client"

import { Grid, Typography } from '@mui/material';
import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';
import useBearerToken from '../../../hooks/useBearerToken';
import axios from 'axios';
import { message } from 'antd';


export const Edit = (props: any) => {

    const { id, path, } = props;

    const router = useRouter();

    return (

        <Grid container sx={{
            cursor: 'pointer', py: 1, "&:hover": {
                bgcolor: "#F6F6F6"
            }
        }}
            onClick={() => router.push(`${path}/${id}`)}>

            <ModeEditIcon sx={{ cursor: 'pointer', ml: 1, color: '#38BF09' }} />

            <Typography variant="subtitle1" fontWeight="normal"
                px={1} sx={{ color: '#38BF09' }}>Edit</Typography>

        </Grid>

    )
}





export const Delete = (props: any) => {

    const { id, url, setReload, reload } = props;
    const router = useRouter();

    const deleteItem = () => {

        const token = useBearerToken();

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        axios.delete(`/${url}/${id}`,
            {
                headers
            }
        ).then((res) => {
            if (res.data.success) {
                message.success(res.data.message, 1)
            } else {
                message.error(res.data.message, 1)
            }
            setReload(!reload)
        })
    }



    return (

        <Grid container sx={{
            cursor: 'pointer', py: 1, "&:hover": {
                bgcolor: "#F6F6F6",
            }
        }}
            onClick={deleteItem}>


            <DeleteIcon sx={{ ml: 1, color: '#FF000F' }} />

            <Typography variant="subtitle1" px={1} sx={{ color: '#FF000F' }}>Delete</Typography>

        </Grid>

    )
}

