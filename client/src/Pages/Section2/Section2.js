import React, { useState, useEffect, useContext } from 'react'
import './Section2.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/system';
import axios from 'axios'

import { SearchContext } from '../Context/Products';

function Section2() {
    const { products, setProducts, filteredProducts } = useContext(SearchContext)

    useEffect(() => {
        const getProducts = () => {
            axios.get("http://localhost:5556/products")
                .then(res => setProducts(res.data));
        }
        getProducts()
    }, [])

    const productsToRender = filteredProducts.length ? filteredProducts : products;

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5556/products/${id}`)
        let deleteItem = products.filter(product => product._id !== id)
        setProducts(deleteItem)
    }
    return (
        <>
            <section className='section2'>
                <div className='centeredDiv'>
                    <h2 className='header'><strong>Practice</strong> Areas</h2>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <Container>
                    <div className='productContainer'>
                        {
                            productsToRender.map((item, index) => (
                                <Card sx={{ maxWidth: 345 }} className="card" key={index}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={item.img}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Product name:{item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Price:  {item.price}$
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Count:  {item.count}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined" color="error" onClick={() => handleDelete(item._id)}>
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Section2