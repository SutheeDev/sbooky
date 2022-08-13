import React from 'react'
import {books} from './books'

const BookList = () => {
    return (
        <article className='booklist'>
            <Book/>
            <Book/>
            <Book/>
        </article>
    )
}

const Book = () => {
    return (
        <div className="frame">
            <div>
                <h4>Atomic Habits</h4>
                <p>James Clear</p>
                <img src="" alt="" />
            </div>
            <p className='price'>$25.99</p>
        </div>
    )
}

export default BookList