import React from 'react'
import BookItem from './BookItem/BookItem'
import scss from './BookList.module.scss'

class BookList extends React.Component {

  renderBookItems = () => {
    const data = this.props.data
    let bookItemsTemplate = null
    bookItemsTemplate =  data.map( function(item) {
      return <BookItem key={item.id} data={item}/>
    })

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