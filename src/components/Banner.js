import React, {useState, useEffect} from 'react';
import axios from 'axios';
import arrow from '../images/arrow.jpg';
import ring from '../images/ring.jpg';
import spinner from '../images/spinner.gif';

const Banner = () => {
    const[banner, setBanner] = useState([]);
    const[loading, setLoading] = useState(false);

    const displayBanner = async () => {
        try {
            const data = await axios
            .get('https://fakestoreapi.com/products/7')
            .then((response) => {
                setBanner(response.data);
            });  
            setLoading(true);
        }   
        catch(error) {
            console.log(error)
        };
    }
      
    useEffect (()=> {
        // axios.get('https://fakestoreapi.com/products/7')
        // .then((response)=> {
        // setBanner(response.data)
        // })
        // .catch((error)=> {
        //     console.log(error);
        // })
        displayBanner();
    },[]);

    return (
        <div>
            <div className='mx-auto mt-6 w-1/6'>
                {loading? <img src={banner.image} alt='banner' /> : 
                <img className='w-2/4 mx-auto' src={spinner} alt='loading' />}    
            </div>
            <div className='md:flex md:justify-center md:w-2/4 mx-auto relative '>
                <input className='w-screen bg-lightblue pb-4 pt-3 rounded-md placeholder-style' placeholder='what are you looking for?' />
                <div className='absolute left-10 top-2'>
                    <p className='font-bold text-xl'>Search:</p>
                </div>
            </div>  
            <div className='w-2/4 mx-auto relative'>
                    <img  src={ring} alt='ring' />
                    <div className='absolute top-0 left-310px md:flex md:justify-center mt-6'>
                        <img className='w-3/4' src={arrow} alt='arrow' />
                    </div>  
            </div>
            
        </div>
    );
};

export default Banner;