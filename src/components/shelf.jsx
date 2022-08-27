import React from "react";

class Shelf extends React.Component {
    render() {
        const shelfBooks = this.props.books
        return (
            
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    
                    <ol className="books-grid">
                        {shelfBooks.map(books => (
                            <li key={books.id}>
                             
                                <div className="book">
                                    <div className="book-top">
                                        <div
                                            className="book-cover"
                                            style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage:
                                                    `url(${books.imageLinks.thumbnail})`,
                                            }}
                                        ></div>
                                        <div className="book-shelf-changer">
                                            <select value={books.Shelf} onChange={e => this.props.changeShelf(books, e.target.value)} >
                                                <option value="none" disabled>
                                                    Move to...
                                                </option>
                                                <option value="currentlyReading">
                                                    Currently Reading
                                                </option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{books.title}</div>
                                    <div className="book-authors">{books.author}</div>
                                </div>
                            </li>
                        ))}


                    </ol>
                </div>
            </div>
        )
    }

}


export default Shelf