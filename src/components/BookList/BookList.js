import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem/BookItem'
import scss from './BookList.module.scss'

function BookList(props)  {

  const renderBookItems = () => {
    const {data, onRemoveItem, tagsData, changeApp} = props
    return data.map(item => <BookItem key={item.id} 
                                      data={item} 
                                      onRemoveItem={onRemoveItem} 
                                      tagsData={tagsData} 
                                      changeApp={changeApp}/>)
  }

  return (
      <div className={scss.bookList}>
        <ul className={scss.items}>
        {renderBookItems()}
        </ul>
      </div>
   );
}

BookList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onRemoveItem:  PropTypes.func,
  change: PropTypes.bool
};

export default BookList