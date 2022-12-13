import React from 'react';
import { useQuery,gql } from "@apollo/client"
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const GET_CHARACTERS = gql`
query {
  posts {
    created
    createdAt
    id
    publishedAt
    title
    updatedAt
    like
    pic{
        url
    }
  }
}
`

export default function CharactersList() {

    const { error, data, loading }= useQuery(GET_CHARACTERS);

    console.log({ error, loading, data});

    if(loading) return (
        <div>
        <h1 className="text-center mb-4">Loading...</h1>
        </div>
    );


  return <div className="CharacterList">
    <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand">FSCD-Project</a>
   <button class="nav-link" type="button">
   <Link to="/Image">Upload Image</Link>
   </button>
   </nav>
    {data.posts.map(posts => {
        return <div>
            <h2 h2 className="text-center mb-4">Post is Made by: {posts.title}</h2>
            <img class="img-fluid img-rounded rounded mx-auto d-block" src ={posts.pic.url} alt=""/>
            <br/>
            <button type="button" class="btn btn-primary btn-lg">Likes: {posts.like}</button>
            <br/>
            <br/>
            <hr/>
        </div>
    })}
    </div>
  
}