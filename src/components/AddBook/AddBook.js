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

    if ((target.type === 'checkbox')) {// проверить нажат или нет и возможно повторяется
      const newTagsSelected = target.value
      setTags([...tags, newTagsSelected])
    };


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
              <label> <input type="checkbox" name="tags" value="1" onChange={ (e) => handleChange(e) }/> tag_1 </label>
              <label> <input type="checkbox" name="tags" value="2" onChange={ (e) => handleChange(e) }/> tag_2 </label>
              <label> <input type="checkbox" name="tags" value="3" onChange={ (e) => handleChange(e) }/> tag_3 </label>
              <label> <input type="checkbox" name="tags" value="4" onChange={ (e) => handleChange(e) }/> tag_4 </label>
              <label> <input type="checkbox" name="tags" value="5" onChange={ (e) => handleChange(e) }/> tag_5 </label>
              <label> <input type="checkbox" name="tags" value="6" onChange={ (e) => handleChange(e) }/> tag_6 </label>
            </div>

          </form>
        </div>
    )
 }
 
 export default AddBook