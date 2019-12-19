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
    const {data} = this.props
    const index = data.findIndex(item => item.id === id);
      if (index > -1) {
        data.splice(index, 1);
        this.setState( { isRemoveItem: true} )
      }
  }

  renderBookItems = () => {
    const {data} = this.props
    return data.map(item => <BookItem key={item.id} data={item} tags={item.tags} onRemoveItem={this.handleRemoveItem}/>)
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