import React, { Component } from 'react';
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
        <h2>My Harry Potter characters</h2>
        <input className= "input-height" type="text" onChange={this.UpdateText} value={this.state.filterText}/>
        <ul className="display-characters">{
          charactersStore.filter((character) =>{
          return character.name.toLowerCase().includes(this.state.filterText.toLowerCase());
          })
          .map((character, index)=>{
            return (
              <li key={index}>
                <img src={character.image} alt={character.name} className="image-size"/>
                <h5>{character.name}</h5>
                <p>House: {character.house}</p>
                <p>Alive? {character.alive ? '❤' : 'X' }</p>
              </li>
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
