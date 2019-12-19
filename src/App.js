import React from 'react'
import AddBook from './components/AddBook/AddBook'
import BooksList from './components/BookList/BookList'
import scss from './App.module.scss'
import stateBook from './bookbase.js'

class App extends React.Component {
  state = {
    books: stateBook.booksData,
    tags: stateBook.tagsData
  }
  debuger;

  handleAddBook = (data) => {
    data.id = Date.now();
    const nextBook = [data, ...this.state.books]
    this.setState({ books: nextBook })
  }

 render() {
  console.log(this.state.books)
   return (
    <div className={scss.app}>
    <AddBook onAddBook={this.handleAddBook}/>
    <BooksList data={this.state.books}/>
    </div>
   )
 }
}

export default App