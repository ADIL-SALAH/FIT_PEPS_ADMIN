import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { subRoutes } from '../../SideBar/helper';


export default function MobileHeader() {

    const [menu, setMenu] = useState(false)

    const router = useRouter();


    const MenuBar = (item: any) => {

        setMenu(!menu)

        router.push(item.path)

    }

    const [bool, setBool] = useState([]);


    const Open = (index: any) => {

        let newArray: any = [...bool]

        newArray[index] = !newArray[index];

        setBool(newArray)

    }



    return (

        <Grid container sx={{
            display: { xs: "block", md: "none" },
            bgcolor: "white",
            position: "fixed", top: 0, left: 0,
            zIndex: 100
        }}>

            <Grid container justifyContent="space-between"
                sx={{ bgcolor: "white", p: 1 }}>

                {menu ? <CloseIcon sx={{ fontSize: "2rem" }} onClick={() => setMenu(!menu)} /> :
                    <MenuIcon sx={{ fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}


                <Typography variant="h5" fontWeight="bold">Fitpeps</Typography>


                <Typography variant="h5" fontWeight="bold"></Typography>

            </Grid>


            <Grid sx={{
                transition: "0.5s",
                width: "100%",
                //  height: "100vh",
                position: "fixed", zIndex: "100", left: "0%", top: menu ?
                    "50px" : "-70%", bgcolor: 'white'
            }}>

                {subRoutes.map((data: any, index: any) =>

                    <Grid key={index}>

                        <Grid onClick={() => Open(index)} container key={index} sx={{ cursor: 'pointer' }}>

                            <Typography width="100%" variant='h6'
                                sx={{ fontWeight: 'normal', p: 1, bgcolor: "white" }} >{data.name}</Typography>

                        </Grid>

                        {bool[index] === true && data.children?.map((item: any, index: any) =>

                            <Grid alignItems="center" onClick={() => MenuBar(item)} container key={index} sx={{ cursor: 'pointer', p: 1 }}>

                                <FiberManualRecordIcon sx={{
                                    color: "black",
                                    fontSize: "0.8rem",
                                    ml: 2
                                }} />

                                <Typography variant='h6'

                                    sx={{ ml: 1, fontWeight: 'normal', bgcolor: "white" }} >{item.text}</Typography>

                            </Grid>

                        )}

                    </Grid>

                )}


            </Grid>

        </Grid >

    )
}
