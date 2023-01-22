import React, { useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import axios from 'axios'

import './Create.scss'
function Create() {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [count, setCount] = useState('')
  const [price, setPrice] = useState('')
  const handleSubmit = async (e) => {
    const myObj = {
      title: title,
      img: img,
      price: price,
      count: count
    }
    e.preventDefault()
    if (title == '' && img == '' && count == '' && price == '') {
      alert("Fill the inputs,then submit")
    } else {
     await axios.post("http://localhost:5556/products", myObj)
        .then(res => console.log(res))
      setCount("")
      setImg("")
      setPrice("")
      setTitle("")
    }

  }
  return (
    <>
      <Formik
        initialValues={{ img: '', title: '', count: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >

        <div className='formContainer'>
          <div className='textCenter'>Add new product</div>
          <Form className='Form'>

            <label htmlFor="img" className='Label'>Img Address</label>
            <Field name="img" type="email" className='Input' value={img} onChange={(e) => setImg(e.target.value)} />
            <ErrorMessage name="img" className='error' />

            <label htmlFor="title" className='Label'>Title</label>
            <Field name="title" type="text" className='Input' value={title} onChange={(e) => setTitle(e.target.value)} />
            <ErrorMessage name="title" className='error' />

            <label htmlFor="price" className='Label'>Price</label>
            <Field name="price" type="text" className='Input' value={price} onChange={(e) => setPrice(e.target.value)} />
            <ErrorMessage name="price" className='error' />

            <label htmlFor="count" className='Label'>Count</label>
            <Field name="count" type="number" className='Input' value={count} onChange={(e) => setCount(e.target.value)} />
            <ErrorMessage name="count" className='error' />

            <Button variant="contained" color="success" className='btn' onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </Formik>
    </>
  )
}

export default Create