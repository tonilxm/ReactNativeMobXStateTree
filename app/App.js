import React, {Component} from 'react';
import { Provider } from "mobx-react"
import AppNavigation from './navigation/AppNavigation'
import { setupStores } from "./stores/SetupStores";

export default class App extends Component {
  state = { stores: {} }
  
  async componentDidMount() {
    this.setState({
      stores: await setupStores(),
    })
  }
  
  isEmpty = (store) =>  Object.keys(store).length === 0 && store.constructor === Object
  
  render() {
    const { stores } = this.state;
    
    if(this.isEmpty(stores)) return null;
    
    return (
      <Provider {...stores}>
        <AppNavigation />
      </Provider>
    );
  }
}
