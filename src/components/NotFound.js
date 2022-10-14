import React from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NotFound =() =>{
    return(
        <div className='not-found'>
            <hi>Add</hi>
            <h5>The page you are looking for is not found..</h5>

            <Link to= "/">
                <Button variant ="outline-primary">Go back to the home page</Button>
            </Link>

        </div>
    )
}

export default NotFound;