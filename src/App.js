import React from 'react';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

import './App.css'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase()) 
      );
    return(
      <div className='App'>
      <h1 className='Title'>Useful Components</h1>
         <SearchBox
           placeholder='search monsters' 
           handleChange={this.handleChange}
         />
      <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
