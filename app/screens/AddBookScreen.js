import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import { observer, inject } from 'mobx-react';

const INITIAL_VALUE = {
  title: "",
  author: ""
}

@inject("bookStore")
@observer
export default class AddBookScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = INITIAL_VALUE
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  addBook = (title, author) => {
    const { bookStore } = this.props
    bookStore.addBook({ title, author, read: false })
    this.setState(INITIAL_VALUE)
  }

  render() {
    const { bookStore } = this.props
    const { books } = bookStore

    if(books && books.length > 0) {
      bookStore.authorBy('Toni').forEach(book => console.log(book.title))
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TextInput value={this.state.title} style={{ borderColor: 'black', borderWidth: 5, height: 40, minWidth: 300, marginTop: 20}} onChangeText={(value)=>this.onChangeText("title", value)}/>
        <TextInput value={this.state.author} style={{ borderColor: 'black',  borderWidth: 5, height: 40, minWidth: 300, marginTop: 20}} onChangeText={(value)=>this.onChangeText("author", value)}/>
        <Button title='Add Book' onPress={()=>this.addBook(this.state.title, this.state.author)}/>

        {books &&
          books.map((book, idx) =>  {
            return(
              <React.Fragment key={idx}>
                <Text>Title: {book.title}</Text>
                <Text>Author: {book.author}</Text>
                <Text onPress={() => book.toggleRead()}>Read: {book.read?'true': 'false'}</Text>
                <Button title='remove' onPress={() => bookStore.deleteBook(book)}/>
              </React.Fragment>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
