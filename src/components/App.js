import React from 'react'
import AddBook from './AddBook'
import BooksList from './BooksList'
import bookBase from '../bookbase.js'

class App extends React.Component {
  state = {
    books: bookBase
  }

  handleAddBook = (data) => {
    const nextBook = [data, ...this.state.books]
    this.setState({ news: nextBook })
  }

 render() {
   return (
    <React.Fragment>
    <AddBook onAddBook={this.handleAddBook}/>
    <BooksList data={this.state.books}/>
    </React.Fragment>
   )
 }
}

export default App