import React, { useState } from 'react'
import PropTypes from 'prop-types'
import scss from './AddBook.module.scss'

function AddBook(props)  {
  const [id, setId] = useState('');
  const [titleBook, setTitleBook] = useState('');
  const [tagsSelected, setTagsSelected] = useState(props.tagsData.map( item => item = {...item}));
  
  if (tagsSelected.length != props.tagsData.length) {
    setTagsSelected(props.tagsData.map( item => item = {...item}))
  }


  const handleChange = (e) => {
    const target = e.target;

    if (target.type === 'text') {
      setTitleBook(target.value)
    }

    if (target.type === 'checkbox')  {
      const data = [...tagsSelected]
      const item = data.find( tag => tag.tagId == target.value)
      item.isChecked = !item.isChecked
      setTagsSelected(data)
    }
  }

  const handleSubmit = (e) => {
    const tags = tagsSelected.filter( item => item.isChecked == true).map( item => item.tagId )
    const data = {
             id: id,
             titleBook: titleBook,
             tags: tags
          }
    props.onAddBook(data)
    setTitleBook('')
    tagsSelected.map( item => item.isChecked = false)
  }

  const renderTagItems = () => {
    return tagsSelected.map(tag =>
      <label key={tag.tagId} className={scss.checkbox}>
        <input type="checkbox"
        name="tags"
        value={tag.tagId}
        onChange={handleChange}
        checked={tag.isChecked}
        />
        <div className={scss.checkbox__text}>{tag.tagText}</div>
      </label>)
  }

  return (
        <div className={scss.addBook}>
          <form className={scss.form} name='addForm'>

            <div className={scss.form__block}>
              <input 
                className={scss.form__input}
                name='titleBook'
                type='text' 
                value={titleBook} 
                onChange={handleChange}
                placeholder='Введите название книги'
                />
              <button className={scss.form__submit} type='button' onClick={handleSubmit}>Добавить</button>
            </div>

            <div className={scss.form__tags}>
              {renderTagItems()}
            </div>

          </form>
        </div>
    )
 }


 AddBook.propTypes = {
  onAddBook: PropTypes.func,
  tagsData: PropTypes.arrayOf(PropTypes.object)
};
 
 export default AddBook