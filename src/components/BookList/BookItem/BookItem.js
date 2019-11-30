import React from 'react'
import scss from './BookItem.module.scss'

class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        buttonOptionsIsPressed: false  // начальное значение для кнопки
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

 render() {
  const data = this.props.data
  //в зависимости от значения buttonOptionsIsPressed 
  //отображаем или нет кнопки Редактировать и Удалить
  //!!!напрямую прописать условие в className не получилось, ругается то на {} то на scss.!!!ВОПРОС!!!
  //пишу через использование переменных scssButtonDelete и scssbuttonEdit
  //const scssButtonOption = this.state.buttonOptionsIsPressed ? scss.buttonOptions_hidden : scss.buttonOptions
  const scssButtonDelete = this.state.buttonOptionsIsPressed ? scss.buttonDelete : scss.buttonDelete_hidden
  const scssbuttonEdit = this.state.buttonOptionsIsPressed ? scss.buttonEdit : scss.buttonEdit_hidden
    return (
      <li className={scss.item}>
            {data.titleBook}
            <button className={scssbuttonEdit}>Редактировать</button>
            <button 
              onClick={this.handleButtonOptionsDelete}
              className={scssButtonDelete}>Удалить</button>
            <button
              onClick={this.handleButtonOptionsChange}
              className={scss.buttonOptions}>
              ...
            </button>
      </li>
    )
 }
}
 
 export default BookItem