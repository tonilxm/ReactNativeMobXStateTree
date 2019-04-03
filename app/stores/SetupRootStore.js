import Api from '../services/Api'
import RootStore from './RootStore'

export async function setupRootStore(){

  // prepare the environment that will be associated with the RootStore.
  const env = createEnvironment()
  let rootStore = RootStore.create({}, env)

  return rootStore
}

export async function createEnvironment() {
  return {
    // inject Api Service
    api: Api
  }
}