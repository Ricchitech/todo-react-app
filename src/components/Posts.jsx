import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import Postcard from "./Postcard";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(` https://jsonplaceholder.typicode.com/posts`).then((res) => {
            const responsePosts = res.data;
            setPosts(responsePosts);
        });
    }, []);
    return (
        <>
            {posts ?
                (
                    <div>
                        {posts.slice(0, 20).map((post) => <Postcard key={post.id} post={post} />)}
                    </div>)
                : <CircularProgress />}
                </>
    );
}

export default Posts;
