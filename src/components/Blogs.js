import React from 'react';
import BlogList from './BlogList';
import useFetchData from './useFetchData';

const Blogs = () => {
    const{ myBlogs, loading,error }= useFetchData('http://localhost:8000/blogs');           
        
    return (
        <div className="Blog">
            {error && <div>{error} </div>}
            {loading && <div>Loading...</div>}
            {myBlogs && <BlogList blogs={myBlogs} title="All blogs" />}
        </div>
    );
}
 
export default Blogs;