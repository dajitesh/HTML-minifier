'use client';
import React from 'react';
import './loginmodule.css'
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';

const Login = () => {

  const router = useRouter();

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is Invalid'),
    password: Yup.string().required('Password is required')
  });

  // initialize formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
      // send data to backend

      fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(res => {
        if (res.status === 200) {
          enqueueSnackbar('Login Successful', { variant: 'success' });
          res.json().then(data => {
            console.log(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            router.push('/');
          })
        } else {
          enqueueSnackbar('Invalid Email or Password', { variant: 'error' });
        }
      }).catch(err => {
        console.log(err);
        enqueueSnackbar('Server Error', { variant: 'error' });
      })
    },
    validationSchema: loginValidationSchema
  })


  return (

    <>
      <div className="background">
        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
      </div>
      <div
        //  className = "container mx-auto px-1"
        className="w-screen h-screen flex justify-center items-center
     ff container mx-auto shadow-xl shadow shadow-blue-500/40 hover:shadow-indigo-500/40"
      >
        <form className="p-10 rounded-xl drop-shadow-lg space-y-5" onSubmit={loginForm.handleSubmit}>
          <h1 className="text-center text-3xl">Welcome back</h1>
          <div className="flex flex-col space-y-2">
            <label className="font-light" htmlFor="email">
              Email
            </label>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="email"
              placeholder="Your Email"
              id="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className=" font-light" htmlFor="password">
              Password
            </label>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="password"
              placeholder="Your Password"
              id="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
            />
          </div>
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label className=" font-light" htmlFor="remember">
              Remember me
            </label>
          </div>
          <button
            className="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
          >
            Sign In
          </button>
          <p className="text-right sig">Not registered yet?
            <a
              className="text-blue-600 text-sm font-light hover:underline "
              href="/signup"
            >&nbsp;&nbsp;&nbsp;Create an Account
            </a>
          </p>
        </form>
      </div>


    </>






  )
}

export default Login;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               