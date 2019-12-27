import React, { useState } from 'react'
import scss from './AddBook.module.scss'

function AddBook(props)  {
  const [id, setId] = useState('');
  const [titleBook, setTitleBook] = useState('');
  const [tags, setTags] = useState([]);


  const handleChange = (e) => {
    const target = e.target;

    if ((target.type === 'text')) {
      setTitleBook(target.value)
    };

    if (target.type === 'checkbox')  {
      const index = tags.indexOf(target.value)
      if (index == -1) {
        if (target.checked === true) {
          const newTagsSelected = target.value
          setTags([...tags, newTagsSelected])
        }
      }
    }
  }

  const handleSubmit = (e) => {
    const data = {
             id: id,
             titleBook: titleBook,
             tags: tags
          }
    props.onAddBook(data)
    setTitleBook('')
    setTags([])
  }

  const renderTagItems = () => {
    const tags = props.tags
    return tags.map(tag => 
      <label key={tag.tagId}> 
        <input type="checkbox" name="tags" value={tag.tagId} onChange={handleChange}/>
        {tag.tagText}
      </label>)
  }

  return (
        <div className={scss.addBook}>
          <form className={scss.form}>

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
 
 export default AddBook