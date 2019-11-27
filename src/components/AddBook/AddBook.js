import React from 'react'
import scss from './AddBook.module.scss'

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       id : '',
       titleBook : ''
      };
  }

  handleChange(e) {
    this.setState({titleBook: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onAddBook(this.state)
    this.setState({titleBook: ''})
  }

 render() {
    return (
        <div className={scss.addBook}>
          <form className={scss.form} onSubmit={ (e) => this.handleSubmit(e) }>
            <input 
              className={scss.form__input}
              id='name'
              type='text' 
              value={this.state.titleBook} 
              onChange={ (e) => this.handleChange(e) }
              placeholder='Введите название книги'
              />
            <input className={scss.form__submit} type='submit' name='submit'/>
          </form>
        </div>
    )
  }
 }
 
 export default AddBook