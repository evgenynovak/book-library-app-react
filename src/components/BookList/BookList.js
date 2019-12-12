import React from 'react'
import BookItem from './BookItem/BookItem'
import scss from './BookList.module.scss'

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRemoveItem: false  
    }
  }

  handleRemoveItem = (id) => {
    const index = this.props.data.findIndex(item => item.id == id);
      if (index > -1) {
        this.props.data.splice(index, 1);
        this.setState( { isRemoveItem: true} )
      }
  } 

  renderBookItems = () => {
    const data = this.props.data
    let bookItemsTemplate = null
    bookItemsTemplate =  data.map(function(item) {
      return <BookItem key={item.id} data={item} tags={item.tags} onRemoveItem={this.handleRemoveItem}/>
    }, this)
    //!Внимание! в map использовал this вторым аргументом чтобы при следующем проходе сохранить контекст
    //Альтернативный способ использовать СТРЕЛОЧНУЮ ФУНКЦИЮ для сохранения текущего контекста
    //Добавил в zhenek12_faq_react 
    //p.s. не переделываю здесь на стрелочную что бы как пример осталось.
    return bookItemsTemplate
  }

 render() {
   return (
      <div className={scss.BookList}>
        <ul className={scss.items}>
        {this.renderBookItems()}
        </ul>
      </div>
   )
 }
}

export default BookList