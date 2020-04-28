import React, { useState } from 'react'
import scss from './BookEdit.module.scss'

function BookEdit(props)  {
  const [titleBook, setTitleBook] = useState(props.data.titleBook);
  const [tagsSelectedinEdit, setTagsSelectedinEdit] = useState(props.tagsData.map( item => item = {...item}));
  const [bookTags, setBookTags] = useState(props.data.tags)

 const handleSubmitFormEdit = () => {
  const tagsCheked = tagsSelectedinEdit.filter( item => item.isChecked == true).map( item => item.tagId )
  const onBookEdit = props.onBookEdit
  onBookEdit(titleBook, tagsCheked)
  }

  const handleEditClose= () => {
    const {onBookEditClose} = props
    onBookEditClose()
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
      <label key={tag.tagId}  className={scss.checkbox}>
        <input type="checkbox" 
        name="tags"
        value={tag.tagId}
        onChange={handleChangeTagsSelect}
        checked={tag.isChecked}
        />
        <div className={scss.checkbox__text_green}>{tag.tagText}</div>
      </label>)
  }

 return(
      <form className={scss.form}>
        <input
          className={scss.formInputTitle}
          type='text' 
          value={titleBook}
          onChange={(e) => setTitleBook(e.target.value)}
          placeholder='Введите название книги'
        />
        <div className={scss.formTags}>
          {renderTagItemsInEdit()}
        </div>
        <div className={scss.formBlock}>
        <button className={scss.formSubmit} type='button' onClick={handleSubmitFormEdit}>Сохранить</button>
        <button className={scss.formSubmit} type='button' onClick={handleEditClose}>X</button>
        </div>
      </form>
  )
 }
 
 export default BookEdit