import React, { useState } from 'react'
import scss from './BookEdit.module.scss'

function BookEdit(props)  {
  const [titleBook, setTitleBook] = useState(props.data);

  const handleSubmitFormEdit = () => {
    const onBookEdit = props.onBookEdit
    onBookEdit(titleBook)
  }

 return(
        <form className={scss.form}>
            <label className={scss.formLabel}>Название книги</label>
            <input 
              className={scss.formInputTitle}
              type='text' 
              value={titleBook}
              onChange={(e) => setTitleBook(e.target.value)}
              placeholder='Введите название книги'
            />
        <button className={scss.formSubmit} type='button' onClick={handleSubmitFormEdit}>Сохранить</button>
      </form>
  )
 }
 
 export default BookEdit