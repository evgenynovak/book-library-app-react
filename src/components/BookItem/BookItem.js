import React from 'react'
import scss from './BookItem.module.scss'

class BookItem extends React.Component {
  
 render() {
    return (
      <li className={scss.BookItem}>
            Название книги 1
            <button className="">Редактировать</button>
            <button className="">Удалить</button>
            <button className="">...</button>
      </li>
    )
  }
 }
 
 export default BookItem