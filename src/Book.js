import React from 'react'
import {books} from './books'

const BookList = () => {
    return (
        <article className='booklist'>
            <Book/>
        </article>
    )
}

const Book = () => {
    return (
        <div className="frame">
            <h4>Atomic Habits</h4>
            <p>James Clear</p>
            <img src="" alt="" />
            <p>$25.99</p>
        </div>
    )
}

export default BookList