import {types} from "mobx-state-tree";

export const Book = types.model("Book", {
  title: types.string,
  author: types.string,
  read: false
})
.actions(self => ({
    toggleRead() { self.read = !self.read }
  }
));