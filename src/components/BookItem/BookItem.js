import React from 'react'
import scss from './BookItem.module.scss'

class BookItem extends React.Component {
 render() {
  const data = this.props.data
    return (
      <li className={scss.BookItem}>
            {data.titleBook}
            <button className="">Редактировать</button>
            <button className="">Удалить</button>
            <button className="">...</button>
      </li>
    )
  }
 }
 
 export default BookItem