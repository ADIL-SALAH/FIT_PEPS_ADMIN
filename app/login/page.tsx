"use client"

import { Box, Grid, TextField, Typography } from '@mui/material'
import { message } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { PrimaryButton } from '../../Components/UI/Button/Button';
import { BASE_URL } from '../../urls/urls';
import Image from 'next/image';
import { PRIMARY_COLOUR } from '../../urls/colours';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

function page() {

  const router = useRouter()

  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {

    setLoading(true)
    if (values.username && values.password) {
      axios.post(`${BASE_URL}auth/login`,

        {

          UserName: values?.username,
          Password: values?.password,

        },

      ).then((response: any) => {


        if (response.data.success) {

          Cookies.set('auth_token', response.data.accessTocken)

          router.push('/users')

          message.success(response.data.message);
          setLoading(false)
        }
        else {

          message.error(response.data.message);

        }
      }).catch(error => {
        setLoading(false)
        message.error(`Failed! ${error}`);
      })
    } else {
      setLoading(false)
      message.error(`Please Enter Username and Password`);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      // alignItems="center"
      sx={{
        alignItems: { xs: 'flex-start', md: 'center', lg: 'center' },
        flexDirection: { xs: "row", md: "row", lg: "column" },
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        overflowX: "scroll",
        bgcolor: "white",
        minHeight: "100vh"
      }}
    >
      <Grid container item xs={12} md={6} alignItems="center" justifyContent="center">
        <Image
          src={'/assets/login/login.webp'}
          alt="ourteam-oyvaa"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>

      <Grid container item xs={11.5} lg={6} justifyContent="center">
        <Grid item xs={12} lg={11} justifyContent="center">
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: PRIMARY_COLOUR,
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "2.3rem", lg: "2.5rem" }
              }}
            >
              Welcome back !!!
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", md: "1rem", lg: "1.2rem" }
              }}
            >
              Login to the Dashboard
            </Typography>
          </Box>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            style={{ maxWidth: 400 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                block
                htmlType="submit"
                loading={loading}
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default page

