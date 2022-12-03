import './App.css';
import { Component } from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import CardList from './Component/CardList';
import SearchField from './Component/SearchField';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((user) => this.setState({
      monsters: user
    }))
  }
  
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }
  
  render() {
    
    const { monsters, searchField } = this.state
    const { onSearchChange } = this;
    
    const filteredCharacters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
      
    })

    return (
      <ChakraProvider>
        <div className="App" >
          <center><h1 className='app-title'>Monster Rolodex</h1></center>
          <SearchField className='Search' onChangeHandler={onSearchChange}/>
          <CardList monsters={filteredCharacters} />
        </div>
      </ChakraProvider>
    );
  }

}

export default App;
