import React, { useState } from 'react'
import AddBook from './components/AddBook/AddBook'
import BooksList from './components/BookList/BookList'
import scss from './App.module.scss'
import stateBook from './bookbase.js'

function App() {
  const [books, setBooks] = useState(stateBook.booksData);
  const [isChange, setIsChange] = useState(false);
  const tags = stateBook.tagsData;

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
    <AddBook onAddBook={handleAddBook} tags={tags}/>
    <BooksList data={books} onRemoveItem={handleRemoveItem} change={isChange} tagsData={tags}/>
    </div>
 )
}

export default App