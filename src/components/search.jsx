import React from "react";

const Search = ({ handleSearch, search, booksFormSearch , changeShelf}) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                href="/"
                    className="close-search"
                    // onClick={() => this.props.showSearchPage(false)}
                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="search-books-results">
           
                {booksFormSearch.map((book) => ( 

                    <div key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div
                                    className="book-cover"
                                    style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage:
                                            `url(${book.imageLinks})`=== undefined ? "" :`url(${book.imageLinks.thumbnail})` ,
                                    }}
                                ></div>
                                <div className="book-shelf-changer">
                                    <select value={book.Shelf} onChange={e => changeShelf(book, e.target.value)} >
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
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </div>
                ))
                }

            </div>
        </div>
    )
}
export default Search


