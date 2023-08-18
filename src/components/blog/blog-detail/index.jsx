import { useEffect, useState } from "react";
import "./blog-detail-styled.scss";
import { useParams } from "react-router-dom";
import { Loading } from "../../loading";
import { NotFound } from "../../not-found";

const BlogDetail = () => {

    const [data, setData] = useState(null);

    const {id} = useParams();

    useEffect(() => {

        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.log(error));

    }, [id]);

    if(!data) {
        return(
            <Loading/>
        )
    }

    if(!data.id){
        return(
            <NotFound/>
        )
    }

    return (
        
        <div className="blog-detail">   
            <div className="blog-detail__image">
                <img src={`https://picsum.photos/960/400?random=${id}`} alt={`${data ? data.title : <p>Loading...</p>}`} />
            </div>

            <h2 className="blog-detail__title">{data.title}</h2>
            <p className="blog-detail__text">{data.body}</p>
        </div>
    )

}

export {BlogDetail};