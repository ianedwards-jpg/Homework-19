import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
//Import Components
import Wrapper from "./components/Wrapper";

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      posts: []
    }

  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({ posts: posts })
    })

  }


  render() {

    const columns = [
      {
        Header: "User ID",
        accessor: "userId"
      },
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Content",
        accessor: "body"
      }
    ]
    return (
      <Wrapper>
        <ReactTable
          columns={columns}
          data={this.state.posts}
        >
        </ReactTable>

      </Wrapper>

    );
  }


}

export default App;
