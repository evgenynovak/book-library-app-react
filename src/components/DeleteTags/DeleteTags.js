import React, { useState } from 'react'
import PropTypes from 'prop-types'
import scss from './DeleteTags.module.scss'

function DeleteTags(props) {

  const [buttonEditTagsIsPressed, setButtonEditTagsIsPressed] = useState(false);
  const [tagsSelected, setTagsSelected] = useState(props.tagsData.map( item => item = {...item}));

  if (tagsSelected.length != props.tagsData.length) {
    setTagsSelected(props.tagsData.map( item => item = {...item}))
  }

  let {onDeleteTag} = props

  let handleOpenClose = () => {
    setButtonEditTagsIsPressed(!buttonEditTagsIsPressed)
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

  const handleChange = (e) => {
    const target = e.target;
    console.log(target)
    const data = [...tagsSelected]
    const item = data.find( tag => tag.tagId == target.value)
    item.isChecked = !item.isChecked
    setTagsSelected(data)
  }

  const handleSubmitDeleteTags = () => {
    const tagsCheked = tagsSelected.filter( item => item.isChecked == true).map( item => item.tagId )
    onDeleteTag(tagsCheked)
    console.log(tagsCheked)
  }

  return (
    <div className={buttonEditTagsIsPressed && scss.deleteTags}>
      <button className={buttonEditTagsIsPressed && scss.hidden}
        type='button'
        onClick={handleOpenClose}>
        Удалить тег
      </button>
      {buttonEditTagsIsPressed && 
        <div className={scss.listTags}>
          <span className={scss.title}>Выберите тег(и) для удаления</span>
          <div className={scss.tagsBlock}>
            {renderTagItems()}
          </div>
          <button className={scss.formSubmit} type='button' onClick={handleSubmitDeleteTags}> Удалить </button>
          <button className={scss.formSubmit} type='button' onClick={handleOpenClose}> X </button>
        </div>
      }
    </div>
  )
}

/*
DeleteTags.propTypes = {
  onAddTag: PropTypes.func
};
*/

export default DeleteTags