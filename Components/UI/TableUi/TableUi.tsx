"use client"

import { Grid, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Typography, Box, TextField, Pagination, paginationItemClasses } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQueryFetch, useQueryFetch2 } from "../../../hooks/useFetch";
import { Delete, Edit } from "../ActionIcons/ActionIcons";
import { PrimaryButton } from "../Button/Button";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { BOX_SHADOWS, PRIMARY_COLOUR, SECONDARY_COLOUR, TABLE_FONT_COLOUR } from "../../../urls/colours";
import CustomDropDown from "../../CustomDropDown/CustomDropDown";
import axios from "axios";
import useBearerToken from "../../../hooks/useBearerToken";


export default function TableUi(props: any) {

    const { TABLE_HEAD, TABLE_CELL, API_NAME, heading, isSearch } = props



    const router = useRouter();

    const path = usePathname()
    let limit = 2



    const [search, setSearch] = React.useState('')

    const [pageSize, setPageSize] = React.useState(5);
    const [page, setPage] = React.useState(1);

    // const handlePage = (page: React.SetStateAction<number>) => setPage(page);
    const [category, setCategory] = useState(4)
    const [reload, setReload] = useState(true)
    const [fetchedData, setFetchData] = useState([])
    const token = useBearerToken()
    // const { fetchedData, refetch } = useQueryFetch(API_NAME)
    // setFetchData(fetchedData)


    useEffect(() => {
        if (path == '/videos') {
            axios.get(`https://api.fitpeps.com/${API_NAME}/list?categoryId=${category}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token
                    }
                }).then((res) => {
                    // console.log(res, '44444444')
                    setFetchData(res.data.result)
                }).catch((err) => {
                    console.log(err, '5555555')
                })


        } else {

            axios.get(`https://api.fitpeps.com/${API_NAME}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token
                    }
                }).then((res) => {
                    console.log(res, '44444444')
                    setFetchData(res.data.result)
                }).catch((err) => {
                    console.log(err, '5555555')
                })
        }
    }, [category, reload])

    const categoryList = useQueryFetch('category').fetchedData
    // console.log(category, '2222222222', path, languageList)


    // const onSearch = (e: any) => {

    //     setSearch(e.target.value)

    //     refetch();

    // }

    // React.useEffect(() => {

    //     if (search === '') {

    //         refetch();

    //     }

    // }, [search])


    // React.useEffect(() => {

    //     refetch();

    // }, [page])


    return (

        <Grid container justifyContent="center" sx={{ mt: { xs: 10, md: 0 } }}>



            <Grid container md={11} justifyContent="center"
                alignItems="start" height="fit-content" m={1}>
                {path !== '/payments' ?
                    <Grid container sx={{
                        display: API_NAME == 'client' ? 'none' : 'flex', justifyContent: 'space-between'
                    }}>
                        <Grid >

                            <PrimaryButton bgcolor={PRIMARY_COLOUR} my={1} onClick={() => router.push(`${path}/create`,)}>Create {API_NAME}</PrimaryButton>
                        </Grid>
                        {/* <PrimaryButton bgcolor={PRIMARY_COLOUR} my={1} onClick={() => router.push(`${path}/create`,)}>Filter By Categories</PrimaryButton> */}
                        {path === '/videos' ?
                            <Grid >

                                <CustomDropDown fieldName="Filter By Category" dropDownData={categoryList} data={category} setData={setCategory} />
                            </Grid>
                            : null
                        }
                    </Grid>

                    : null}


                {/* {isSearch && <TextField sx={{ mr: 'auto' }}
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    name="search"
                    // value={search}
                    onChange={onSearch}
                />

                } */}


                <TableContainer sx={{ mt: 3, boxShadow: BOX_SHADOWS, borderRadius: "10px", mb: 8 }} >


                    <Table aria-label="simple table">

                        <TableHead sx={{ bgcolor: SECONDARY_COLOUR }}>

                            <TableRow sx={{
                                bgcolor: '#DDDBCB'
                            }}>

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600, color: "black" }} >Sl No </Typography>

                                </TableCell>

                                {/* <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600, color: "black" }} >Image </Typography>

                                </TableCell> */}


                                {TABLE_HEAD && TABLE_HEAD.map((table_head: any, index: any) =>

                                    <TableCell align="center" key={index} >

                                        <Typography sx={{ fontWeight: 600, color: "black" }} >{table_head}</Typography>

                                    </TableCell>
                                )
                                }
                                {path != '/users' && path != '/payments' ?

                                    <TableCell align="center">

                                        <Typography sx={{ fontWeight: 600, color: "black" }} >Actions</Typography>

                                    </TableCell>
                                    : null}

                            </TableRow>

                        </TableHead>

                        <TableBody >
                            {fetchedData && fetchedData?.map((data: any, index: any) =>

                                <TableRow onClick={() => { path !== '/users' && path !== '/payments' ? router.push(`${path}/${data.id}`) : null }}>

                                    <TableCell align="center">

                                        <Typography sx={{ color: TABLE_FONT_COLOUR }}>
                                            {page > 1 ? (page * limit) - 1 + index : page + index}
                                        </Typography>

                                    </TableCell>

                                    {/* <TableCell align="center">

                                        <Typography sx={{ color: TABLE_FONT_COLOUR }}>
                                            sldkkfmo
                                        </Typography>

                                    </TableCell> */}

                                    {
                                        TABLE_CELL.map((items: any, index: any) =>

                                            <TableCell
                                                key={index} sx={{ cursor: 'pointer' }} align="center">

                                                <Typography sx={{ color: TABLE_FONT_COLOUR }}> {items === 'client.firstName' ? data.client.firstName : items === 'language.name' ? data.language.name : data[items]} </Typography>

                                            </TableCell>

                                        )}

                                    {path != '/users' && path != '/payments' ?
                                        < TableCell align="center" >

                                            <Popup trigger={<MoreVertIcon sx={{ cursor: 'pointer', color: "grey" }} />} position="left center">

                                                <Grid container bgcolor="#ffff" sx={{
                                                    borderRadius: 1.5,
                                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", p: 1,
                                                }}>

                                                    <Edit path={path} id={data.id} />

                                                    {/* <Delete url={API_NAME} id={data.id} /> */}

                                                    <Delete url={API_NAME} id={data.id} setReload={setReload} reload={reload} />

                                                </Grid>

                                            </Popup>

                                        </TableCell>
                                        : null}

                                </TableRow>

                            )}

                        </TableBody>

                    </Table>


                    {/* <Pagination sx={{ ml: "auto ", width: 'fit-content', p: 2 }}
                        color="primary"
                        count={5}
                        onChange={(event, value) => handlePage(value)}
                        page={page}
                        size="large"
                    /> */}

                </TableContainer>


            </Grid>

        </Grid >


    )

}
