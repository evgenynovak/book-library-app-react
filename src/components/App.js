import React from 'react'
import AddBook from './AddBook'
import BooksList from './BooksList'
import bookBase from '../bookbase.js'

class App extends React.Component {
  state = {
    books: bookBase
  }

  handleAddBook = (data) => {
    const nextBook = [...this.state.books, data]
    //присвоить id, проверить при этом есть ли такой id
    this.setState({ books: nextBook })
  }

 render() {
  console.log(this.state.books)
   return (
    <div className="page">
      <div className="page__containter">
    <AddBook onAddBook={this.handleAddBook}/>
    <BooksList data={this.state.books}/>
      </div>
    </div>
   )
 }
}

export default App