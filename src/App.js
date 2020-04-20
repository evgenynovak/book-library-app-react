import React, { useState } from 'react'
import AddBook from './components/AddBook/AddBook'
import AddTags from './components/AddTags/AddTags'
import BooksList from './components/BookList/BookList'
import scss from './App.module.scss'
import stateBook from './bookbase.js'

function App() {
  const [books, setBooks] = useState(stateBook.booksData);
  const [isChange, setIsChange] = useState(false);
  const [tags, setTags] = useState(stateBook.tagsData);

  const handleAddBook = (data) => {
    data.id = Date.now();
    const nextBook = [data, ...books]
    setBooks(nextBook)
    setIsChange(!isChange)
  }

  const handleAddTag = (data) => {
    const nextTag = [data, ...tags]
    setTags(nextTag)
    setIsChange(!isChange)
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
    <AddBook onAddBook={handleAddBook} tagsData={tags}/>
    <AddTags onAddTag={handleAddTag}/>
    <BooksList data={books} onRemoveItem={handleRemoveItem} changeApp={isChange} tagsData={tags}/>
    </div>
 )
}

export default App