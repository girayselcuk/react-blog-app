import "./blog-card-styled.scss";
import React from 'react'

const BlogCard = ({title, text, category, id}) => {
  return (
    <div className='blog-card'>
        <div className='blog-card__image'>
            <img src={`https://picsum.photos/250/500?random=${id}`} alt=""/>
        </div>

        <div className="blog-card__content">
            <div className="blog-card__content-top">
                <div className="blog-card__category">{category}</div>
            </div>
            <h3 className='blog-card__title'>{title}</h3>
            <p className="blog-card__description">{text}</p>
        </div>
    </div>
  )
}

export {BlogCard}; 