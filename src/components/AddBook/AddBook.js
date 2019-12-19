import React from 'react'
import scss from './AddBook.module.scss'

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       id : '',
       titleBook : '',
       tags : []
      };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    let value = null;

    if ((target.type === 'text')) {
      value = target.value;
    };

    if ((target.type === 'checkbox')) {// проверить нажат или нет и возможно повторяется
      const newTagsSelected = target.value
      value = [...this.state.tags, newTagsSelected]
    };

    this.setState({
      [name]: value
    });

  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onAddBook(this.state)
    this.setState({titleBook: ''})
    this.setState({tags: []})
  }

 render() {
    return (
        <div className={scss.addBook}>
          <form className={scss.form} onSubmit={ (e) => this.handleSubmit(e) }>

            <div className={scss.form__block}>
              <input 
                className={scss.form__input}
                name='titleBook'
                type='text' 
                value={this.state.titleBook} 
                onChange={ (e) => this.handleChange(e) }
                placeholder='Введите название книги'
                />
              <input className={scss.form__submit} type='submit' name='submit'/>
            </div>

            <div className={scss.form__tags}>
              <label> <input type="checkbox" name="tags" value="1" onChange={ (e) => this.handleChange(e) }/> tag_1 </label>
              <label> <input type="checkbox" name="tags" value="2" onChange={ (e) => this.handleChange(e) }/> tag_2 </label>
              <label> <input type="checkbox" name="tags" value="3" onChange={ (e) => this.handleChange(e) }/> tag_3 </label>
              <label> <input type="checkbox" name="tags" value="4" onChange={ (e) => this.handleChange(e) }/> tag_4 </label>
              <label> <input type="checkbox" name="tags" value="5" onChange={ (e) => this.handleChange(e) }/> tag_5 </label>
              <label> <input type="checkbox" name="tags" value="6" onChange={ (e) => this.handleChange(e) }/> tag_6 </label>
            </div>

          </form>
        </div>
    )
  }
 }
 
 export default AddBook