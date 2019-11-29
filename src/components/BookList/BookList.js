import React from 'react'
import scss from './BookList.module.scss'

class BookList extends React.Component {
 render() {
   return (
      <div className={scss.BookList}>
        <ui className={scss.BookList__items}>
          <li className={scss.BookList__item}>Название книги 1</li>
          <li className={scss.BookList__item}>Название книги 2</li>
          <li className={scss.BookList__item}>Название книги 3</li>
          <li className={scss.BookList__item}>Название книги 4</li>
          <li className={scss.BookList__item}>Название книги 5</li>
          <li className={scss.BookList__item}>Название книги 6</li>
          <li className={scss.BookList__item}>Название книги 7</li>
        </ui>
      </div>
   )
 }
}

export default BookList