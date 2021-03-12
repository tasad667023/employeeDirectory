import './App.css';
import React, { Component } from "react";
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import axios from "axios";


class App extends Component {

  state = {
    results: [],
    search: "",
    filteredResults: []
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
      .then(data => this.setState({
        results: data.data.results,
        filteredResults: data.data.results
      }))
    console.log(this.state)
  }

  //  sortFirst= () => {
  //       console.log('sort first', this.state.results)
  //   } 

  sortFirst = () => {
    let results = this.state.results
    console.log('SORTING!!!!')
    const sorted = results.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0

    })
    console.log('Sorted List: ', results)
    this.setState({
      filteredResults: sorted
    })
  }


  handleInputChange = (e) => {
    this.setState({
      search: e.target.value.trim()
    })
  }

  handleSubmit = (e) => {
    const filterEmployee = this.state.results.filter((employee) => {
      return employee.name.first.includes(this.state.search) || employee.name.last.includes(this.state.search)
    })
    this.setState({
      filteredResults: filterEmployee
    })
  }

  render() {
    return (
      <div className="App">
        < Search handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        < Header sortFirst={this.sortFirst} />
        < List results={this.state.filteredResults} />
      </div>
    );
  }
}



export default App;
