import React, { useState } from 'react'
import PropTypes from 'prop-types'
import scss from './AddTags.module.scss'

function AddTags(props) {

  const [buttonEditTagsIsPressed, setButtonEditTagsIsPressed] = useState(false);
  const [tagName, setTagName] = useState('');

  let {onAddTag} = props

  let handleOpenClose = () => {
    setTagName('')
    setButtonEditTagsIsPressed(!buttonEditTagsIsPressed)
  }

  let handleSubmitFormAddTags = () => {
    const data = {
            tagId: Date.now(),
            tagText: tagName,
            isChecked: false
          }
    onAddTag(data)
    setTagName('')
  }

  return (
    <div className={scss.addTags}>
    <button
      type='button'
      onClick={handleOpenClose}>
      Теги...
    </button>

    {buttonEditTagsIsPressed && 
      <div>
        <form className={scss.form}>
          <input 
            className={scss.formInputTitle}
            type='text'
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            placeholder='Введите название тега'
          />
        <button className={scss.formSubmit} type='button' onClick={handleSubmitFormAddTags}>Сохранить</button> 
        <button className={scss.formSubmit} type='button' onClick={handleOpenClose}> X </button>
        </form>
      </div>
    }
    </div>
  )

}

AddTags.propTypes = {
  onAddTag: PropTypes.func
};

export default AddTags


