import React, { useState } from 'react'
import AddBook from './components/AddBook/AddBook'
import BooksList from './components/BookList/BookList'
import scss from './App.module.scss'
import stateBook from './bookbase.js'

function App() {
  const [books, setBooks] = useState(stateBook.booksData);
  const [tags, setTags] = useState(stateBook.tagsData);

  const handleAddBook = (data) => {
    data.id = Date.now();
    const nextBook = [data, ...books]
    setBooks(nextBook)
  }

 return (
    <div className={scss.app}>
    <AddBook onAddBook={handleAddBook}/>
    <BooksList data={books}/>
    </div>
 )
}

export default App