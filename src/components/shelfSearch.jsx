import React, { Component } from "react";
import Shelf from "./shelf";

export default class shelfSearch extends Component {
    render(){
        return(
            <div>
                 <div className="search-books-results">
                {
                this.props.booksFormSearch.map((book) => ( <Shelf key={b.id} book={book}></Shelf> ))
                }

            </div>
            </div>
        )
    }
}