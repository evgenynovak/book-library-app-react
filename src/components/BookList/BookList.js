import React from 'react'
import BookItem from '../BookItem/BookItem'
import scss from './BookList.module.scss'

class BookList extends React.Component {
 render() {
   return (
      <div className={scss.BookList}>
        <ui className={scss.BookList__items}>
          <BookItem/>
        </ui>
      </div>
   )
 }
}

export default BookList