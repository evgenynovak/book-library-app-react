import React from 'react'
import BookEdit from './BookEdit/BookEdit'
import scss from './BookItem.module.scss'

class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        buttonOptionsIsPressed: false ,  // начальное значение для кнопки
        buttonEditIsPressed: false,
        titleBook: this.props.data.titleBook
      };
  }

 handleButtonOptionsDelete = (e) => {
  e.preventDefault()
  this.props.onRemoveItem(this.props.data.id)
 }

 handleButtonOptionsChange = (e) => { 
   e.preventDefault()
   this.setState({buttonOptionsIsPressed: !this.state.buttonOptionsIsPressed})
 }

 handleButtonEditChange = (e) => {
  e.preventDefault()
  this.setState({buttonEditIsPressed: !this.state.buttonEditIsPressed})
 }

 handleBookEdit = (title) => {
  this.setState({titleBook: title});
 }



 render() {
  const buttonEditIsPressed = this.state.buttonEditIsPressed
  //в зависимости от значения buttonOptionsIsPressed 
  //отображаем или нет кнопки Редактировать и Удалить
  //!!!напрямую прописать условие в className не получилось, ругается то на {} то на scss.!!!ВОПРОС!!!
  //пишу через использование переменных scssButtonDelete и scssbuttonEdit
  //const scssButtonOption = this.state.buttonOptionsIsPressed ? scss.buttonOptions_hidden : scss.buttonOptions
  const scssButtonDelete = this.state.buttonOptionsIsPressed ? scss.buttonDelete : scss.buttonDelete_hidden
  const scssbuttonEdit = this.state.buttonOptionsIsPressed ? scss.buttonEdit : scss.buttonEdit_hidden
    return (
      <li className={scss.item}>
        <div className={scss.itemBookName}>
          <div className={scss.bookName}>{this.state.titleBook}</div>
          <button 
            className={scssbuttonEdit}
            onClick={this.handleButtonEditChange}>Редактировать</button>
          <button 
            onClick={this.handleButtonOptionsDelete}
            className={scssButtonDelete}>Удалить</button>
          <button
            onClick={this.handleButtonOptionsChange}
            className={scss.buttonOptions}>
            ...
          </button>
        </div>
           {buttonEditIsPressed && <BookEdit data={this.props.data} onBookEdit={this.handleBookEdit}/>}
      </li>
    )
 }
}
 
 export default BookItem