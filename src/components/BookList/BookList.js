import React, { useState } from 'react'
import BookItem from './BookItem/BookItem'
import scss from './BookList.module.scss'

function BookList(props)  {
  const [isRemoveItem, setIsRemoveItem] = useState(false);
  

  const handleRemoveItem = (id) => {
    const {data} = props
    const index = data.findIndex(item => item.id === id);
      if (index > -1) {
        data.splice(index, 1);
        setIsRemoveItem(!isRemoveItem);
      }
  }

  const renderBookItems = () => {
    const {data} = props
    return data.map(item => <BookItem key={item.id} data={item} tags={item.tags} onRemoveItem={handleRemoveItem}/>)
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