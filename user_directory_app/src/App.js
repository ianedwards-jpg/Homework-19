import React, { Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props)  {

    super(props); 

    this.state = {
      posts:  []
    }

  }

  componentDidMount(){
    const url = "https://jsonplaceholder.typicode.com/posts"; 
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({posts: posts})
    })
      
  }


  render () {
    return (
      <p>Hello Dingus</p>
    );
  }

  
}

export default App;
