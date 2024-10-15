

import { Box, Typography } from '@mui/material';
import React from 'react';

const HomeProducts = ({ title, products }) => {
    
    return (
        <Box>
            <Typography variant="h4" sx={{ textAlign: "center", paddingBottom: "20px" }}>
                {title}
            </Typography>
            <Box className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-5'>
                {
                    products &&
                    products.map((product) => (
                        <Box key={product._id} className='w-screen md:w-80 lg:w-80 h-96 flex flex-col justify-between items-start pb-2 px-2 hover:shadow-md'>
                            <img src={product.image} alt={product.productName} style={{ width: "100%", height: "90%" }} />
                            <p> {product.productName} </p>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
};

export default HomeProducts;