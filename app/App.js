import React, {Component} from 'react';
import { Provider } from "mobx-react"
import AppNavigation from './navigation/AppNavigation'
import { setupRootStore } from './stores/SetupRootStore'
import BookStore from "./stores/BookStore";


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rootStore: {}
    }
  }

  /**
   * When the component is mounted. This happens asynchronously and simply
   * re-renders when we're good to go.
   */
  async componentDidMount() {
    this.setState({
      rootStore: await setupRootStore(),
    })
  }

  render() {
    const { rootStore } = this.state

    if (!rootStore) {
      return null
    }

    const otherStores = {
      BookStore,
    }

    return (
      <Provider rootStore={rootStore} {...otherStores}>
        <AppNavigation />
      </Provider>
    );
  }
}
