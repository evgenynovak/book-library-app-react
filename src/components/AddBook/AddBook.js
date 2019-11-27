import React from 'react'

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       value : '' 
      };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onAddBook(this.state.value)
    this.setState({value: ''})
  }

 render() {
    return (
        <div className='add-book'>
          <form className='form' onSubmit={ (e) => this.handleSubmit(e) }>
            <input 
              className='form__input'
              id='name'
              type='text' 
              value={this.state.value} 
              onChange={ (e) => this.handleChange(e) }
              placeholder='Введите название книги'
              />
            <input className='form__submit' type='submit' name='submit'/>
          </form>
        </div>
    )
  }
 }
 
 export default AddBook