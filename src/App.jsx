

import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from './components/Header'
import * as BooksAPI from './bookAPI'
import './App.css'
import Shelves from './components/shelves'
import Book from './components/Book'
import useQuery from './components/query'

const BooksApp = () => {
  const [books, setBooks] = useState([])
  const [mapOfIdToBooks, setMapOfIdToBooks] = useState(new Map());

  const [query, setQuery] = useState("");
  const [searchBooks] = useQuery(query);
  const [mergedBooks, setMergedBooks] = useState([]);


  useEffect(() => {

    BooksAPI.getAll()
      .then(data => {
        setBooks(data)
        setMapOfIdToBooks(createMapOfBooks(data))
      }
      );
  }, [])


  useEffect(() => {

    const combined = searchBooks.map(book => {
      if (mapOfIdToBooks.has(book.id)) {
        return mapOfIdToBooks.get(book.id);
      } else {
        return book;
      }
    })
    setMergedBooks(combined);
  }, [searchBooks])


  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map(book => map.set(book.id, book));
    return map;
  }

  const updateBookShelf = (book, whereTo) => {
    const updatedBooks = books.map(b => {
      if (b.id === book.id) {
        book.shelf = whereTo;
        return book;
      }
      return b;
    })
    if (!mapOfIdToBooks.has(book.id)) {
      book.shelf = whereTo;
      updatedBooks.push(book)
    }
    setBooks(updatedBooks);
    BooksAPI.update(book, whereTo);
  }

  return (
    <div className="app">
      <BrowserRouter>

        <Routes>

   
          <Route path="/search" element={ <div className="search-books">
              <div className="search-books-bar">
              
                  <a href='/' className="close-search">Close</a>
               
                <div className="search-books-input-wrapper">

                  <input type="text" placeholder="Search by title or author" value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {mergedBooks.map(b => (
                    <li key={b.id}>
                      <Book book={b} changeBookShelf={updateBookShelf} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>} >

          </Route>


          <Route path="/" element={ <div className="list-books">
            {console.log("SEARCH", searchBooks)}

              <Header />
              <div className="list-books-content">
                <Shelves books={books} updateBookShelf={updateBookShelf} />
              </div>
              <div className="open-search">
               
                  <a href='/search' >Add a book</a>
             
              </div>
            </div>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default BooksApp
