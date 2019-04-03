import { types } from "mobx-state-tree";
import BookStore from './BookStore'

const rootStore = types.model('RootStore', {
  // bookStore: types.optional(BookStore, () => BookStore.create({ books: []}))
})

export default rootStore