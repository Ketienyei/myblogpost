import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = (props) => {
    const myBlogs = props.blogs;
    const title = props.title;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {myBlogs.map((blog)=>(
                <div className="preview" key={blog.id}>
                    
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>Done by {blog.author}</p>
                    </Link>   
                    
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;