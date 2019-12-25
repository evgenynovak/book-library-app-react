import React, { useState } from 'react'
import BookItem from './BookItem/BookItem'
import scss from './BookList.module.scss'

function BookList(props)  { 
  
  const renderBookItems = () => {
    const {data, onRemoveItem} = props
    return data.map(item => <BookItem key={item.id} data={item} tags={item.tags} onRemoveItem={onRemoveItem}/>)
  }

  return (
      <div className={scss.bookList}>
        <ul className={scss.items}>
        {renderBookItems()}
        </ul>
      </div>
   );
}

export default BookList