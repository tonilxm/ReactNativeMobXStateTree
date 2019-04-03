import Api from '../services/Api'
import BookStore from './BookStore'

export async function setupStores() {
  const env = await createEnvironment()
  return {
    bookStore: BookStore.create({ books: []}, env )
  }
}

async function createEnvironment() {
  return {
    api: Api.create()
  }
}