import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { subRoutes } from './helper';
import Popup from 'reactjs-popup';
import { useQueryFetch } from '../../../hooks/useFetch';


export const SideBar = () => {


    const { fetchedData, refetch } = useQueryFetch('category')
    const [isExpand, setIsExpand] = useState(true)

    const router = useRouter()

    const currentPath = usePathname()

    const [bool, setBool] = useState([]);

    const Expand = () => {

        setIsExpand(!isExpand)
    }

    // const [expand,setExpand] = useState(fals)

    const Open = (index: any) => {

        let newArray: any = [...bool]

        newArray[index] = !newArray[index];

        setBool(newArray)

    }

    // const Primary_Color = "#182834"

    // const Primary_Color = ""

    // const Primary_Color = 'red'

    return (

        <Grid sx={{
            width: 'fit-content',
            backgroundColor: "white", borderRight: "1px solid #EAEDED",
            display: { xs: "none", md: "block" },
            height: "80vh",
        }}>


            <Grid container justifyContent="center" onClick={Expand} sx={{ cursor: "pointer", p: 1.5 }}>

                <KeyboardDoubleArrowLeftIcon
                    sx={{ color: "black", fontSize: "medium", transform: isExpand ? "rotate(0deg)" : "rotate(180deg)", transition: ".5s" }} />

            </Grid>

            <Divider />


            {subRoutes.map((data: any, index: any) =>

                <Box key={index} sx={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "start",
                }}>

                    <Box onClick={() => {
                        Open(index)
                    }}

                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            backgroundColor: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "  " : "transparent",
                            px: 2, py: 1.2,
                            mx: 2, my: 0.5,
                            borderRadius: "10px",
                            '&:hover': {
                                backgroundColor: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "none" : "#DDDBCB",
                                transition: "0.3s",
                            },
                        }}>

                        <Popup trigger={<Box> <data.icon sx={{
                            fontSize: "medium",
                            color: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "dodgerblue" : "black",

                        }} /> </Box>} position="right center">

                            {data?.children?.map((data: {
                                path: any; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> |
                                React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode
                                | null | undefined;
                            }, index: any) => {

                                return (
                                    <Box key={index} bgcolor="white">

                                        <Box sx={{
                                            borderRadius: 1,
                                            cursor: 'pointer',
                                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"

                                        }}>

                                            <Typography
                                                onClick={() => router.push(`${data.path}`)}
                                                sx={{ py: 0.5, px: 0.8, fontWeight: 700 }}
                                            >{data.text}</Typography>

                                        </Box>

                                    </Box>

                                )
                            })
                            }
                        </Popup>


                        {isExpand &&
                            <>
                                <Typography variant='subtitle2'
                                    sx={{
                                        ml: 2,
                                        width: "150px",
                                        color: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "dodgerblue" : "black",
                                        fontWeight: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "bold" : "normal",
                                        fontSize: "0.9rem",
                                    }}>{data.name}</Typography>

                                {bool[index] === true ? <KeyboardArrowDownIcon sx={{
                                    color: data?.children?.filter((fil: any) =>
                                        currentPath === fil.path).length > 0 ? 'dodgerblue' : "gray", fontSize: "1.2rem"
                                }} /> :
                                    <KeyboardArrowRightIcon sx={{
                                        color: data?.children?.filter((fil: any) =>
                                            currentPath === fil.path).length > 0 ? 'dodgerblue' : "gray", fontSize: "1.2rem",

                                    }} />}

                            </>}

                    </Box>

                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        {bool[index] === true && data?.children?.map((drop: any, index: any) =>

                            <Box key={index} onClick={() => router.push(drop.path)} sx={{
                                width: "100%",
                                display: "flex",
                                py: 1.5,
                                m: 0.5,
                                alignItems: "center",
                                justifyContent: "start",
                                cursor: "pointer",
                                borderRadius: "10px",
                                '&:hover': {
                                    backgroundColor: "#EFEEEE",
                                    transition: "0.3s",
                                },
                            }}>

                                <FiberManualRecordIcon sx={{
                                    color: currentPath === drop.path ? "dodgerblue" : "black",
                                    fontSize: currentPath === drop.path ? "0.7rem" : "0.5rem",
                                    ml: 2
                                }} />

                                <Typography variant='subtitle2' sx={{
                                    color: "#36383E",
                                    fontSize: currentPath === drop.path ? "0.9rem" : "0.8rem",
                                    fontWeight: currentPath === drop.path ? "bold" : "normal",
                                    //color: currentPath === drop.path ? "dodgerblue" : "grey",
                                    ml: 3
                                }}>{drop.text}</Typography>

                            </Box>

                        )}

                    </Box>

                </Box >

            )
            }

        </Grid >

    )
}