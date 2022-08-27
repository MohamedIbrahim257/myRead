import React from "react";






const Search = ({ handleSearch, search, booksFormSearch }) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                href="./Home"
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
                                            `url(${book.imageLinks.thumbnail})`,
                                    }}
                                ></div>
                                <div className="book-shelf-changer">
                                    <select value={book.Shelf} onChange={e => this.props.changeShelf(book, e.target.value)} >
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
                            <div className="book-authors">{book.author}</div>
                        </div>
                    </div>
                ))
                }

            </div>
        </div>
    )
}
export default Search


// class Search extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             query: "",
//             books: []
//         }
//     }

//     handlechange = async e => {
//         try {
//             const query = e.target.value
//             this.setState({ query })
//             if (query.trim()) {

//                 const result = await search(query)
//                 if (result.error) {
//                     this.setState({ books: [] })
//                 } else {
//                     this.setState({ books: result })
//                 }
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     render() {
//         return (
//             <div className="search-books">
//                 <div className="search-books-bar">
//                     <a
//                         className="close-search"
//                         onClick={() => this.props.showSearchPage(false)}
//                     >
//                         Close
//                     </a>
//                     <div className="search-books-input-wrapper">
//                         <input
//                             type="text"
//                             placeholder="Search by title, author, or ISBN"
//                             onChange={this.handlechange} value={this.state.query}
//                         />
//                     </div>
//                 </div>
//                 <div className="search-books-results">
//                     <ol className="books-grid"></ol>
//                     {this.state.books.length > 0 && this.state.books.map(book => <Shelf key={book.id} {...book} movebook={this.props.movebook} />)}
//                 </div>
//             </div>

//         )
//     }

// }

// export default Search