import React, { Component } from 'react';
import './App.css';

const HARRYPOTTERAPI = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charactersStore: []
    }

    this.fetchWizardsCharacters = this.fetchWizardsCharacters.bind(this);
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

    return (

      <ul>{
        charactersStore.map(function(character, index){
          return (
            <div key={index}>
                <img src={character.image} alt={character.name} width='200px' height= '300px'/>
                <li><h3>{character.name}</h3></li>
                <li>House: {character.house}</li>
                <li>{character.alive}</li>
            </div>

          )
        })
      }
      </ul>

    );
  }
  componentDidMount() {
    this.fetchWizardsCharacters();
  }



}

export default App;
