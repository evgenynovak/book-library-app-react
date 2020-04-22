import React, { useState } from 'react'
import AddBook from './components/AddBook/AddBook'
import AddTags from './components/AddTags/AddTags'
import BooksList from './components/BookList/BookList'
import DeleteTags from './components/DeleteTags/DeleteTags'
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

  const handleDeleteTag = (data) => {
    const newTags = [...tags]
    data.map(dataTagId => 
      newTags.map(tag => {
        if (tag.tagId == dataTagId) {
          newTags.splice(newTags.indexOf(tag), 1)
        }
      }
      )
    ) 
    setTags(newTags)
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
    <div className={scss.tags}>
      <AddTags onAddTag={handleAddTag}/>
      <DeleteTags tagsData={tags} onDeleteTag={handleDeleteTag}/>
    </div>
    <BooksList data={books} onRemoveItem={handleRemoveItem} changeApp={isChange} tagsData={tags}/>
    </div>
 )
}

export default App