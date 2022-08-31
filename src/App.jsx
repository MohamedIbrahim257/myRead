import "./App.css";
import Shelves from "./components/shelves";
import Search from "./components/search";
import *as bookAPI from "./bookAPI"
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";



class App extends React.Component {

  state = {
    showSearchPage: false,
    books: [],
    search: '',
    booksFormSearch: [],
  };

  updateSearchPageState = (state) => {
    this.setState({ showSearchPage: state })
  }

  componentDidMount() {
   bookAPI.getAll().then((resp) => this.setState({ books: resp }))
  }

  changeBookShelf = async (book, shelf) => {
    // this.setState({
    //   books : this.state.books.map( b => {
    //     b.id === book.id ? (b.shelf = shelf) : b;
    //     return b
    //   })
    // })
    await bookAPI.update(book, shelf)
    await bookAPI.getAll().then((resp) => {
      this.setState({
        books: resp
        
      })
    })

  }

  handleSearch = async (event) => {
    await this.setState({
      search: event.target.value
    })
    console.log(this.state.search)
    this.handleBooksSearch(this.state.search)  
  }

  handleBooksSearch = async (search) => {
    await bookAPI.search(search).then((resp) => {

      if(resp && !resp.error){
        this.setState({
          booksFormSearch: resp  
        })
      }else{

          this.setState({
            books: resp
          })
     
      }
      console.log(this.state.booksFormSearch)
    })
  }

  render() {
    return (

      <BrowserRouter>
        <Routes>

          <Route path="/search" element={<Search handleSearch={this.handleSearch} changeShelf={this.changeBookShelf} search={this.state.search} booksFormSearch={this.state.booksFormSearch} ></Search>} ></Route>

          <Route exact path="/" element={<Shelves allbooks={this.state.books} changeShelf={this.changeBookShelf} ></Shelves>} >
          </Route>

        </Routes>
      </BrowserRouter>


    );
  }

}

export default App;
