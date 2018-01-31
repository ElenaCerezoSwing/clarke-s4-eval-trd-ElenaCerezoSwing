import React, { Component } from 'react';
import Input from './components/Input';
import './App.css';

const HARRYPOTTERAPI = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText :'',
      charactersStore: []
    }

    this.fetchWizardsCharacters = this.fetchWizardsCharacters.bind(this);
    this.UpdateText = this.UpdateText.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  UpdateText(event){
    this.setState({
      filterText: event.target.value
    });
  }

  fetchWizardsCharacters() {
    fetch(HARRYPOTTERAPI)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        charactersStore: data
      });
    });
  }

  render() {
    const { charactersStore } = this.state;
    const { filterText } = this.state;

    return (
      <div>
      <h1>My Harry Potter Charachters</h1>
      <Input type="text" onChange={this.UpdateText} value={this.state.filterText}/>
      <ul>{
        charactersStore.filter((character) =>{
          const NameToLowerCase = character.name.toLowerCase();
          const UpdateToLowerCase = this.state.filterText.toLowerCase();
          return NameToLowerCase.includes(UpdateToLowerCase);
        })
        .map((character, index)=>{
          return (
            <div key={index}>
            <img src={character.image} alt={character.name} width='200px' height= '300px'/>
            <li><h3>{character.name}</h3></li>
            <li>House: {character.house}</li>
            <li>{character.alive ? '❤' : 'X' }</li>
            </div>
          );
        })

      }</ul>
      </div>
    );
  }

  componentDidMount(){
    this.fetchWizardsCharacters();
  }
}

export default App;
