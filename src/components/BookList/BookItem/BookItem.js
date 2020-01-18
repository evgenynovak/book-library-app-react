import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BookEdit from '../BookEdit/BookEdit'
import scss from './BookItem.module.scss'

function BookItem(props) {
  const [buttonOptionsIsPressed, setButtonOptionsIsPressed] = useState(false);
  const [buttonEditIsPressed, setButtonEditIsPressed] = useState(false);
  const [titleBook, setTitleBook] = useState(props.data.titleBook);

  const {data} = props
  const {tagsData} = props

  const handleButtonOptionsDelete = () => {
    const {data} = props
    props.onRemoveItem(data.id)
 }

 const handleBookEdit = (title) => {
  const {data} = props
  data.titleBook = title
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
            type='button'
            onClick={ () => setButtonEditIsPressed(!buttonEditIsPressed) }>
              Редактировать
          </button>
          <button
            onClick={handleButtonOptionsDelete}
            type='button'
            className={scssButtonDelete}>Удалить
          </button>
          <button
            onClick={ () => setButtonOptionsIsPressed(!buttonOptionsIsPressed)}
            type='button'
            className={scss.buttonOptions}>
            ...
          </button>
        </div>
           {buttonEditIsPressed && <BookEdit titleBook={titleBook}
                                             data={data} 
                                             onBookEdit={handleBookEdit} 
                                             tagsData={tagsData} />}
      </li>
    )
 
}

BookItem.propTypes = {
  data: PropTypes.object
};
 
 export default BookItem