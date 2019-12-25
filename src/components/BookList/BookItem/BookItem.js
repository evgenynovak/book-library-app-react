import React, { useState } from 'react'
import BookEdit from '../BookEdit/BookEdit'
import scss from './BookItem.module.scss'

function BookItem(props) {
  const [buttonOptionsIsPressed, setButtonOptionsIsPressed] = useState(false);
  const [buttonEditIsPressed, setButtonEditIsPressed] = useState(false);
  const [titleBook, setTitleBook] = useState(props.data.titleBook);

  const handleButtonOptionsDelete = (e) => {
    e.preventDefault()
    const {data} = props
    props.onRemoveItem(data.id)
 }

 const handleButtonOptionsChange = (e) => { 
   e.preventDefault()
   setButtonOptionsIsPressed(!buttonOptionsIsPressed)
 }

 const handleButtonEditChange = (e) => {
  e.preventDefault()
  setButtonEditIsPressed(!buttonEditIsPressed)
 }

 const handleBookEdit = (title) => {
  setTitleBook(title);
 }

 const scssButtonDelete = buttonOptionsIsPressed ? scss.buttonDelete : scss.buttonDelete_hidden
 const scssbuttonEdit = buttonOptionsIsPressed ? scss.buttonEdit : scss.buttonEdit_hidden
 return (
      <li className={scss.item}>
        <div className={scss.itemBookName}>
          <div className={scss.bookName}>{titleBook}</div>
          <button 
            className={scssbuttonEdit}
            onClick={handleButtonEditChange}>Редактировать</button>
          <button 
            onClick={handleButtonOptionsDelete}
            className={scssButtonDelete}>Удалить</button>
          <button
            onClick={handleButtonOptionsChange}
            className={scss.buttonOptions}>
            ...
          </button>
        </div>
           {buttonEditIsPressed && <BookEdit data={props.data} onBookEdit={handleBookEdit}/>}
      </li>
    )
 
}
 
 export default BookItem