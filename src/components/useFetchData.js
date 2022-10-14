import { useState, useEffect } from 'react';

const useFetchData =(url)=>{

    const[myBlogs, setMyblogs]= useState(null);
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then(res=>{
                    //checking for the server error
                    if(!res.ok){
                        throw Error("Error Connecting to the server");
                    }
                   // console.log(res)
                    return res.json();
                })
                .then(data =>{
                    setMyblogs(data);
                    setLoading(false);
                    setError(null);
                })
                //checking for network error..
                .catch(err =>{
                    setError(err.message);
                    setLoading(false);
                })
        }, 1000);
        
    },[url]);

    return{myBlogs, loading, error};
}

export default useFetchData;