import React from "react";
import Shelf from "./shelf";

class Shelves extends React.Component {

    render() {
        const allBooks = this.props.allbooks;
        const currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
        const wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
        const read = allBooks.filter(book => book.shelf === "read");
        return (
            <div className="list-books-content">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div>
                    <Shelf books={currentlyReading} title={"currently Reading"} changeShelf={this.props.changeShelf} ></Shelf>
                    <Shelf books={wantToRead} title={"Want to Read"} changeShelf={this.props.changeShelf} ></Shelf>
                    <Shelf books={read} title={"Read"} changeShelf={this.props.changeShelf} ></Shelf>
                    <div className="open-search">
                        <a href="./search">Add a book</a>
                    </div>
                </div>

            </div>
        )

    }

}


export default Shelves