import React from 'react'
import scss from './BookItem.module.scss'

class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      };
  }
 render() {
    return (
      <li className={scss.BookItem}>
            Название книги 1
            <button>Редактировать</button>
            <button>Удалить</button>
            <button>...</button>
      </li>
    )
  }
 }
 
 export default BookItem