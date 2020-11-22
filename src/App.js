import React from 'react'
import * as BooksAPI from './API/BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/Home/ListBooks'
import ListBooksContent from './components/ListBooksContent'
class BooksApp extends React.Component {
    state = {
        books: [],
        searchedBooks: []
    }

    componentDidMount() {
        BooksAPI
            .getAll()
            .then(books => {
              this.setState({ books });
              console.log(this.state.books);

            })
      
    }

  onShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      this.setState(oldState => ({
        books: oldState.books.filter(oldBook => oldBook.id !== book.id).concat(book)
      }));
    });
  }


    render() {
        return (
            <div className="app">

                <Route
                    exact
                    path='/'
                    render={() => (<ListBooks books={this.state.books} title={`My Reads`} onShelfChange={this.onShelfChange}/>)}></Route>
                <Route path='/list-books' render={() => ((<SearchBooks/>))}></Route>

            </div>
        )
    }
}

export default BooksApp
