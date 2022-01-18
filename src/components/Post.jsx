import React,{ useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from "@material-ui/core";


function Post() {

    const {id}=useParams();

    const [postData, setPostData] = useState();
    useEffect(() => {
        axios.get(` https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
            const responsePosts = res.data;
            setPostData(responsePosts);
        });
    }, []);

    console.log(postData);
    const { userId, id: PostId, title, body } = postData || {};

    return (
        <div>
            {postData ? (
                <div>
                    <h5>{`post id: ${PostId}`}</h5>
                    <h5>{`userId: ${userId}`}</h5>
                    <h5>{`title: ${title}`}</h5>
                    <h5>{`body: ${body}`}</h5>
                    </div>
            
            )
            :
            (
                    <CircularProgress />
            )}
            
        </div>
    )
}

export default Post;