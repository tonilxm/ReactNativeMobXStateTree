import { types, destroy } from "mobx-state-tree";
import { Book } from './models/Book'


const BookStore = types.model('Books', {
    books: types.array(Book)
})
.actions(self => ({
    addBook(book) {
        self.books.push(book)
    },
    deleteBook(book) {
        destroy(book)
    }
}))
.views(self => ({
    get readBooks() {
        return self.books.filter(book => book.read)
    },
    authorBy(authorName) {
        return self.books.filter((book) => book.author === authorName)
    }
}))

export default BookStore;