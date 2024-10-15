

import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { categories } from '../utils/fakeData';
import { FaTh, FaBars } from 'react-icons/fa';
import { BiExpand } from 'react-icons/bi';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [view, setView] = useState('grid');
    const [val, setVal] = useState([100,10000]);
    const [products, setProducts] = useState([]);
    
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const handleSubcategoryChange = (subcategory) => {
        let newSelectedSubcategories = [...selectedSubcategories];
        if (newSelectedSubcategories.includes(subcategory)) {
            newSelectedSubcategories = newSelectedSubcategories.filter(sub => sub !== subcategory);
        } else {
            newSelectedSubcategories.push(subcategory);
        }
        setSelectedSubcategories(newSelectedSubcategories);
    };

    const handleViewChange = (newView) => {
        setView(newView);
    };

    const handleChange = (_, newValue) => {
        setVal(newValue);
    };

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <div className='flex gap-10 min-h-screen px-12 py-24'>
                <div className='w-1/4 bg-slate-100 rounded-t-lg px-5'>
                    <input
                        type="text"
                        placeholder='Search your product'
                        className='w-full h-14 p-5 mt-10 border-2 border-secondary rounded-md outline-none border-opacity-50'
                    />
                    <div className='py-10'>
                        <h1 className='text-left lato-regular text-xl border-b-2 pb-2 border-secondary border-opacity-50'>Filter by Category</h1>
                        <div className='mt-5'>
                            {categories.map((category, index) => (
                                <Accordion key={index}>
                                    <AccordionSummary
                                        expandIcon={<BiExpand />}
                                        aria-controls='panel-content'
                                        id={`panel-header-${index}`}
                                    >
                                        <Typography className='text-left'>{category.name}</Typography>
                                    </AccordionSummary>
                                    {category.subcategories.map((subcat, subIndex) => (
                                        <AccordionDetails key={subIndex}>
                                            <input
                                                type="checkbox"
                                                value={subcat}
                                                onChange={() => handleSubcategoryChange(subcat)}
                                            />
                                            <label className='ml-3'>{subcat}</label>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                            ))}
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-left lato-regular text-xl border-b-2 pb-2 border-secondary border-opacity-50'>Filter by Price</h1>
                            <div className='mt-5'>
                                <Slider
                                    min={100}
                                    max={10000}
                                    step={100}
                                   
                                    value={val}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-100 rounded-t-lg w-3/4'>
                    <div className='flex justify-end p-4 border-b-4'>
                        {view === 'list' ? (
                            <button
                                className='p-2 text-gray-500'
                                onClick={() => handleViewChange('grid')}
                            >
                                <FaTh size={20} />
                            </button>
                        ) : (
                            <button
                                className='p-2 text-gray-500'
                                onClick={() => handleViewChange('list')}
                            >
                                <FaBars size={20} />
                            </button>
                        )}
                    </div>
                    <div className={`${view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10' : 'flex flex-col'} px-10 pt-2`}>
                        {products &&
                            products.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                    view={view}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;