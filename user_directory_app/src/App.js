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
    //const url = "https://jsonplaceholder.typicode.com/posts";
    //const url = "https://gist.githubusercontent.com/rominirani/8235702/raw/a50f7c449c41b6dc8eb87d8d393eeff62121b392/employees.json"
    const url = "https://raw.githubusercontent.com/ianedwards-jpg/Homework-19/master/user_directory_app/public/employees.json"
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({ posts: posts.Employees })
      console.log("posts", posts.Employees)
    })

  }


  render() {
    //Employee Table Headers/Accessors
const columns = [
  {
    Header: "User ID",
    accessor: "userId"
  },
  {
    Header: "Job Title",
    accessor: "jobTitleName"
  },
  {
    Header: "First Name",
    accessor: "firstName"
  },
  {
    Header: "Last Name",
    accessor: "lastName"
  },
  {
    Header: "Preferred Name",
    accessor: "preferredFullName"
  },
  {
    Header: "Employee Code",
    accessor: "employeeCode"
  },
  {
    Header: "Employee Region",
    accessor: "region"
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber"
  },
  {
    Header: "Email",
    accessor: "emailAddress"
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




// //Example Headers/Accessors 
// const columns = [
//   {
//     Header: "User ID",
//     accessor: "userId"
//   },
//   {
//     Header: "ID",
//     accessor: "id"
//   },
//   {
//     Header: "Title",
//     accessor: "title"
//   },
//   {
//     Header: "Content",
//     accessor: "body"
//   }
// ]