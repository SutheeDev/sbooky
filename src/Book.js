import React from 'react'
import {books} from './books'

const BookList = () => {
    return (
        <article className='booklist'>
            {books.map((book) => {
                const {name, author, img, price} = book;
                return <Book key={book.id} {...book}/>;
            })}
        </article>
    )
}
const Book = (props) => {
    const {name, author, img, price} = props;
    console.log(img);
    return (
        <div className="frame">
            <div>
                <h4 className='book-name'>{name}</h4>
                <p className='author-name'>{author}</p>
                <img src={img} className='displayCover' alt="" />
            </div>
            <p className='price'>{`$${price}`}</p>
        </div>
    )
}
export default BookList