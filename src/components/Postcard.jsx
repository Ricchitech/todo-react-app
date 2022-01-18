import React from 'react';
import { useHistory } from 'react-router-dom';

const Postcard = (props) => {
    const { post } = props;
    const { id, userId, title, body } = post;
    const history = useHistory();
    return (

        <div  
        style={{
            backgroundColor: 'grey',
            margin:'10px', 
            padding:'5px',
            borderRadius:'50px',
            width:'60rem',
            display: 'flex',
            flexDirection: 'row'}}
            onClick={()=>history.push(`/post/${id}`)}
            >
            <div style={{
                display: 'flex',
                flexDirection: 'column'}}>
                <p>{userId}</p>
                <p>{id}</p>
                </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
            
        </div>
    );
};

export default Postcard;