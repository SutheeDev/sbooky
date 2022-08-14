import React from 'react'
import {books} from './books'

const BookList = () => {
    const newBooks = books.map((book) => {
        return (
            <Book name={book.name} author={book.author} img={book.img} price={book.price}/>
        )
    })
    return (
        <article className='booklist'>
            {newBooks}
        </article>
    )
}
const Book = (props) => {
    const {name, author, img, price} = props;
    console.log(img);
    return (
        <div className="frame">
            <div>
                <h4>{name}</h4>
                <p>{author}</p>
                <img src={img} className='displayCover' alt="" />
            </div>
            <p className='price'>{`$${price}`}</p>
        </div>
    )
}

export default BookList