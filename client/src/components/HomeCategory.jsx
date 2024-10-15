
import { Box, Typography } from '@mui/material';
import React from 'react';

const HomeCategory = ({ title, categoriesData }) => {
    return (
        <Box variant="container" className="py-12">
            <Typography
                variant="h4"
                style={{ textAlign: "center", paddingTop: "50px" }}
            > {title} </Typography>
            <Box
             
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pt-10 w-4/5 mx-auto"
            >


                {
                    categoriesData &&
                    categoriesData?.map((item) => (
                        <Box key={item.id}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "2px",
                                gap: "10px",
                                boxShadow:"0.2px 0.2px 0.2px 0.1px black"
                            }} className="w-64">
                            <img src={item.image} alt={item.title} className='w-16 h-16' />
                            <Typography variant="h6">
                                {item.title}
                            </Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
};

export default HomeCategory;