import React from 'react'
import scss from './BookEdit.module.scss'

class BookEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        titleBook : this.props.data.titleBook
      };
  }

  handleSubmitFormEdit = (e) => {
    e.preventDefault()
    this.props.onBookEdit(this.state.titleBook)

  }

  handleChangeInputTitle = (e) => {
    this.setState({titleBook: e.target.value});
  }

 render() {
  const data = this.props.data
    return (
        <form className={scss.form} onSubmit={this.handleSubmitFormEdit}>
            <label className={scss.formLabel}>Название книги</label>
            <input 
              className={scss.formInputTitle}
              id='titleBook'
              type='text' 
              value={this.state.titleBook}
              onChange={this.handleChangeInputTitle}
              placeholder='Введите название книги'
            />
        <input className={scss.formSubmit} type='submit' name='submit' value="Сохранить"/>
      </form>
    )
  }
 }
 
 export default BookEdit