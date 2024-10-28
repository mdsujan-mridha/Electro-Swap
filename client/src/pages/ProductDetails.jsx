
import { Rating } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const ProductDetails = () => {

    const { productId } = useParams();
    const [product, setProduct] = React.useState({});
    // console.log(productId);

    useEffect(() => {
        const fetchProduct = async () => {
            try {

                const response = await fetch("/public/fakeData.json")
                const data = await response.json()
                // console.log(data);
                const product = data.find(product => product._id === productId)
                setProduct(product)

            } catch (error) {
                console.log(error);
            }

        }

        fetchProduct()

    }, [productId])

    // useEffect(() => {
    //     fetch(`fakeData.json/${productId}`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [productId])

    console.log(product);

    return (
        <div className='min-h-screen px-12 w-full pt-36 mb-14'>
            <div className='flex h-96 justify-between items-center gap-5'>
                <div className='w-2/5 border-2 flex justify-center items-center py-5'>
                    <img src={product.image} alt={product.productName} />
                </div>
                <div className=' w-1/2 flex justify-center flex-col gap-5'>
                    <p className='text-2xl font-semibold'>id: # {product._id}</p>
                    <h1 className='text-3xl font-bold'>{product.productName}</h1>
                    <div className=' flex justify-start items-center gap-5'>
                        <Rating
                            name='text-feedback'
                            readOnly
                            precision={0.5}
                            value="4"
                            size='large'
                            sx={{
                                color: "#ffc107",
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                            }}

                        /> <span className='font-bold'> {product.numOfReviews ? product.numOfReviews : 20} Reviews </span>
                    </div>

                    <h2 className='text-3xl font-regular lato-regular'> BDT: <span className='text-accent'>{product?.price}</span> Tk </h2>
                    <p className='text-justify text-xl lato-regular font-semibold'>{product?.description}</p>

                    <div className='mt-5 flex justify-start items-center'>
                        <button className='w-16 h-10 bg-black text-white font-bold text-4xl flex justify-center items-center'>-</button>
                        <input className='w-20 h-10 border outline-none flex justify-center items-center pl-5' type='text' placeholder='1' />
                        <button className='w-16 h-10 bg-black text-white font-bold text-4xl flex justify-center items-center'>+</button>
                    </div>
                </div >


            </div >
            {/* bottom tab  */}
            <div className='mt-72'>
                <Tabs>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab> Reviews ({product?.numOfReviews}) </Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-justify font-semibold lato-regular text-xl py-5 px-2'>  {product.description} </h2>
                    </TabPanel>
                    <TabPanel>
                        {
                            product?.reviews?.map((review, index) => (
                                <div key={index} className='flex justify-start items-center gap-5 px-12'>
                                    <div className='flex justify-start items-center gap-5'>
                                        <p className='font-bold'> {review.name} </p>
                                    </div>
                                    <p className='font-regular text-md lato-light'> {review.comment} </p>
                                </div>
                            ))
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div >
    );
};

export default ProductDetails;