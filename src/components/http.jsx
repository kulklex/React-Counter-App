import axios from "axios";
import React, { useState } from 'react';

export default function Axio() {

 const [post, setpost] = useState([])

const titles= post.map((posts)=>{
    return (
        <h1>{posts.id}. {posts.title}</h1>
    )
})

function getdata(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
        setpost(res.data)
    })
    .catch((error)=>{console.error(error);})
}

async function getdata2(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    await response.json();
}

    return (
        <div>
            <button onClick={getdata}>axios</button>
            <button onClick={getdata2}>Fetch</button>

            <p>{titles}</p>
        </div>
    )
}
