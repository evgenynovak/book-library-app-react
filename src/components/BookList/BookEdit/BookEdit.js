import React, { useState } from 'react'
import scss from './BookEdit.module.scss'

function BookEdit(props)  {
  const [titleBook, setTitleBook] = useState(props.data.titleBook);


  const handleSubmitFormEdit = (e) => {
    e.preventDefault()
    props.onBookEdit(titleBook)

  }

  const handleChangeInputTitle = (e) => {
    setTitleBook(e.target.value);
  }

 return(
        <form className={scss.form} onSubmit={handleSubmitFormEdit}>
            <label className={scss.formLabel}>Название книги</label>
            <input 
              className={scss.formInputTitle}
              id='titleBook'
              type='text' 
              value={titleBook}
              onChange={handleChangeInputTitle}
              placeholder='Введите название книги'
            />
        <input className={scss.formSubmit} type='submit' name='submit' value="Сохранить"/>
      </form>
  )
 }
 
 export default BookEdit