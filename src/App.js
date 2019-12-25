import React, { useState } from 'react'
import AddBook from './components/AddBook/AddBook'
import BooksList from './components/BookList/BookList'
import scss from './App.module.scss'
import stateBook from './bookbase.js'

function App() {
  const [books, setBooks] = useState(stateBook.booksData);
  const [tags, setTags] = useState(stateBook.tagsData);
  const [isChange, setIsChange] = useState(false);

  const handleAddBook = (data) => {
    data.id = Date.now();
    const nextBook = [data, ...books]
    setBooks(nextBook)
  }

  const handleRemoveItem = (id) => {
    const data = books
    const index = data.findIndex(item => item.id === id);
      if (index > -1) {
        data.splice(index, 1)
      }
    setBooks(data)
    setIsChange(!isChange)
  }

 return (
    <div className={scss.app}>
    <AddBook onAddBook={handleAddBook}/>
    <BooksList data={books} onRemoveItem={handleRemoveItem} change={isChange}/>
    </div>
 )
}

export default App