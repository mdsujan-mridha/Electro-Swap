
import React, { Fragment, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import HomeCategory from '../components/HomeCategory';
import { categoriesData } from '../utils/fakeData';
import HomeProducts from '../components/HomeProducts';



const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // console.log("Home Products", products);
    const homeProduct = products.splice(0, 4);
    // const popularProduct = products.splice(5, 8);
    // console.log(popularProduct)


    return (
        <Fragment>
            <div>
                <Hero />
            </div>
            <div className='px-12'>
                <HomeCategory title="Top Categories" categoriesData={categoriesData} />
                <HomeProducts title="Recent Add" products={homeProduct} />
                <HomeProducts title="Popular Products" products={products} />
                <div className='pb-72'>
                    <HomeProducts title="Top search Products" products={homeProduct} />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;