import React, { useState } from 'react'
import scss from './BookEdit.module.scss'

function BookEdit(props)  {
  const [titleBook, setTitleBook] = useState(props.data.titleBook);
  const [tagsSelectedinEdit, setTagsSelectedinEdit] = useState(props.tagsData.map( item => item = {...item}));
  const [bookTags, setBookTags] = useState(props.data.tags)

  const handleSubmitFormEdit = () => {
    //добавить сохранение тегов
    const onBookEdit = props.onBookEdit
    onBookEdit(titleBook)
  }

  const handleChangeTagsSelect = (e) => {
    const target = e.target;
    const data = [...tagsSelectedinEdit]
    const item = data.find( tag => tag.tagId == target.value)
    item.isChecked = !item.isChecked
    setTagsSelectedinEdit(data)
  }

  const renderTagItemsInEdit = () => {
    if ( bookTags != null ) {
      tagsSelectedinEdit.map( tag => 
        bookTags.map( 
          tagNumber => {
            if (tag.tagId == tagNumber) {
              tag.isChecked = true
              return
            }
            return
          }
        )
      )
    setBookTags(null)
    }
    return tagsSelectedinEdit.map(tag =>
      <label key={tag.tagId}>
        <input type="checkbox"
        name="tags"
        value={tag.tagId}
        onChange={handleChangeTagsSelect}
        checked={tag.isChecked}
        />
        {tag.tagText}
      </label>)
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
            <div></div>
            <label className={scss.formLabel}>Теги</label>
            <div>
             {renderTagItemsInEdit()}
            </div>
        <button className={scss.formSubmit} type='button' onClick={handleSubmitFormEdit}>Сохранить</button>
      </form>
  )
 }
 
 export default BookEdit