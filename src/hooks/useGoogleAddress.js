import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});

    console.log('address', address);

    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCn0-fW4KGv9TV9iLFCjl7gJOoTD30nWSI`;

    useEffect(async () => {
        const response = await axios(API);
        
        console.log('res', response.data.results[0]);
        
        setMap(response.data.results[0].geometry.location)
    }, []);
    
    return map;
}



export default useGoogleAddress;