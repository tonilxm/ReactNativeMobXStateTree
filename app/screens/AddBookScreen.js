import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import BookStore from '../stores/BookStore';
import { observer } from 'mobx-react';

type Props = {};
const INITIAL_VALUE = {
  title: "",
  author: ""
}

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
    BookStore.addBook({ title, author, read: false })
    this.setState(INITIAL_VALUE)
  }

  render() {
    const { books } = BookStore

    if(books.length > 0) {
      BookStore.authorBy('Toni').forEach(book => console.log(book.title))
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TextInput value={this.state.title} style={{ borderColor: 'black', borderWidth: 5, height: 40, minWidth: 300, marginTop: 20}} onChangeText={(value)=>this.onChangeText("title", value)}/>
        <TextInput value={this.state.author} style={{ borderColor: 'black',  borderWidth: 5, height: 40, minWidth: 300, marginTop: 20}} onChangeText={(value)=>this.onChangeText("author", value)}/>
        <Button title='Add Book' onPress={()=>this.addBook(this.state.title, this.state.author)}/>

        {
          books.map((book, idx) =>  {
            return(
              <React.Fragment key={idx}>
                <Text>Title: {book.title}</Text>
                <Text>Author: {book.author}</Text>
                <Text onPress={() => book.toggleRead()}>Read: {book.read?'true': 'false'}</Text>
                <Button title='remove' onPress={() => BookStore.deleteBook(book)}/>
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
