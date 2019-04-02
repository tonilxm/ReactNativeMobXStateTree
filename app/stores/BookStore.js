import { types, destroy } from "mobx-state-tree";

const Book = types.model("Book", {
    title: types.string,
    author: types.string,
    read: false
})
.actions(self => ({
        toggleRead() { self.read = !self.read }
    }
));

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
.create({
    books: [{
        title: "Rumah Hantu",
        author: "Jams",
        read: false
    }]
})

export default BookStore;