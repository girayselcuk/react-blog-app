import React, { useState, useEffect } from 'react';
import { BlogCard } from '../blog-card';
import { Link } from 'react-router-dom';
import { Loading } from '../../loading';

const BlogList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=10')
            .then(res => res.json())
            .then(data => {
                setData(data.posts); 
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    

    if(loading) {
        return (
            <Loading/>
        )
    }


    return (
        data.map((post) => (
            <Link to={`/detail/${post.id}`}>
                <BlogCard key={post.id} id={post.id} title={post.title} text={post.body} category={post.tags[0]}/>
            </Link>

        ))
    )
}

export { BlogList };
