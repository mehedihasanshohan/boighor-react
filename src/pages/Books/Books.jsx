import React, { Suspense } from 'react'
import Book from '../Book/Book'

const Books = () => {

  const bookPromise = fetch('./booksData.json').then(res => res.json())


  return (
    <div>
      All Books
      <Suspense fallback={<h2>Loading...</h2>}>
        <Book bookPromise={bookPromise}></Book>
      </Suspense>
    </div>
  )
}

export default Books