import { Grid, Typography, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useQueryFetch, useQueryFetchByCode } from '../../hooks/useFetch';
import CustomDropDown from '../CustomDropDown/CustomDropDown';
import { string } from 'yup';
import { log } from 'console';

function ItemFormTable(props: any) {

    let { newdata, items, setItems } = props

    let grandTotal = 0;

    // items.length && localStorage.setItem("key", JSON.stringify(items))

    // let A = localStorage.getItem("key") || '';

    // console.log("AAAAAAA", A);

    // const Ar = A != '' ? JSON.parse(A) : null

    // console.table("Arrrrrrrrr", Ar);

    // items = Ar;

    // console.log("items!!!!!!!!!!!!!!", items);

    // setItems(Ar)

    // Ar && setItems(items.push())

    // try {
    //     // items.push(10);
    //     Ar && setItems(items.push())
    //   } catch (error) {
    //     console.log(error); // TypeError: items.push is not a function
    //   }

    const [productCode, setProductCode] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [discountAmount, setDiscountAmount] = React.useState('');

    // console.log("items.....", items);

    let toatalDiscountAmount = items.reduce((accumulator: number, object: { [x: string]: string | number; }) => {
        return accumulator + + object['discountAmount'];
    }, 0);

    const data = useQueryFetch('products').fetchedData

    const dropDownData: { name: any; id: any; }[] = [];

    data?.map((data: any, index: any) => {

        dropDownData.push({
            name: data.name,
            id: data.code,
        })

    })

    const unitPriceByCode = useQueryFetchByCode('products', productCode).fetchedData

    const amount = unitPriceByCode?.unit_price

    const add = (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        if (productCode && quantity && discountAmount && unitPriceByCode && amount) {

            const data = { productCode, quantity, discountAmount, amount }

            const checkIndex = items.findIndex((item: any) => productCode === item.productCode)

            if (checkIndex > -1) {

                items[checkIndex].quantity = +quantity + +items[checkIndex].quantity
                items[checkIndex].discountAmount = +discountAmount + +items[checkIndex].discountAmount

            } else {
                setItems((itemList: any) => [...itemList, data])
            }

            setProductCode('')
            setQuantity('')
            setDiscountAmount('')



            // console.log("items<><><><><|||||||||||||||||", items);
        }

    }

    const handleRemoveClick = (item: any) => {
        setItems(items.filter((todo: any) => todo !== item));
    };

    return (
        <Grid container>

            <Typography variant='h4' sx={{ fontWeight: 550, mt: 3 }}>Items</Typography>

            <Grid container sx={{ mt: 3, justifyContent: "space-around" }} >

                <CustomDropDown type="sale&purchase" dropDownData={dropDownData} data={productCode} setData={setProductCode} />

                <TextField name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} label="Quanity" variant="outlined" type="number" />

                <TextField name="discountAmount" value={discountAmount} onChange={(e) => setDiscountAmount(e.target.value)} label="Discount Amount" variant="outlined" type="number" />

                <TextField name="unitPrize" value={unitPriceByCode?.unit_price} />

                <button onClick={add}>Add</button>

            </Grid>


            {
                items.length == 0 ? ''
                    :
                    <Grid container mt={8}>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="caption table">

                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">product Code</TableCell>
                                        <TableCell align="center">Quantity</TableCell>
                                        <TableCell align="center">Discount Amount</TableCell>
                                        <TableCell align="center">Unit Prize</TableCell>
                                        <TableCell align="center">Total</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        items.map((data: any, index: any) => {

                                            grandTotal = ((data.quantity * data.amount) - data.discountAmount)

                                            return (
                                                <TableRow key={index}>

                                                    <TableCell align="center">{data.productCode}</TableCell>
                                                    <TableCell align="center">{data.quantity}</TableCell>
                                                    <TableCell align="center">{data.discountAmount}</TableCell>
                                                    <TableCell align="center">{data.amount}</TableCell>
                                                    <TableCell align="center">{(data.quantity * data.amount) - data.discountAmount}</TableCell>

                                                    <TableCell align="center" sx={{ display: 'flex', justifyContent: 'space-around' }}>

                                                        <DeleteOutlineIcon sx={{ cursor: 'pointer' }} onClick={() => handleRemoveClick(data)} />

                                                        <EditIcon sx={{ cursor: 'pointer' }} />

                                                    </TableCell>

                                                </TableRow>
                                            )
                                        }

                                        )
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Grid lg={3} sx={{ bgcolor: 'red', mt: 4, ml: 'auto', mr: 5 }}>

                            <Typography variant='h5' sx={{ fontWeight: '550' }} >Total Discount = {toatalDiscountAmount}</Typography>
                            <Typography variant='h5' sx={{ fontWeight: '550' }} >Total Amount = {grandTotal}</Typography>

                        </Grid>


                        {/* <Typography>You Saved it is = {toatalDiscountAmount}</Typography>

                        <Typography>Total Amount = {toatalDiscountAmount}</Typography> */}

                    </Grid>

            }

        </Grid >
    )
}

export default ItemFormTable