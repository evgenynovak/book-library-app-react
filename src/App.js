import React from 'react'
import AddBook from './components/AddBook/AddBook'
import BooksList from './components/BookList/BookList'
import bookBase from './bookbase.js'

class App extends React.Component {
  state = {
    books: bookBase
  }

  handleAddBook = (data) => {
    data.id = Date.now();
    const nextBook = [...this.state.books, data]
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