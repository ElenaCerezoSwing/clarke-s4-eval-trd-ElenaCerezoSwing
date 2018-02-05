import React, { Component } from 'react';
import ItemList from './components/ItemList';
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
  
    return (
      <div>
        <h2>My Harry Potter characters</h2>
        <Input className= "input-height" type="text" onChange={this.UpdateText} value={this.state.filterText}/>
        <ul className="display-characters">{
          charactersStore.filter((character) =>{
          return character.name.toLowerCase().includes(this.state.filterText.toLowerCase());
          })
          .map((character, index)=>{
            return (

              <ItemList key={index} name={character.name} alive = {character.alive} house={character.house} image={character.image}/>
              // <li key={index}>
              //   <img src={character.image} alt={character.name} className="image-size"/>
              //   <h5>{character.name}</h5>
              //   <img src={'/Images/'+ character.house + '.jpg'} alt='this.props.house' width='60px' height ='60px'object-fit= 'contain'/>
              //   <p>Alive? {character.alive ? '❤' : 'R.I.P.' }</p>
              // </li>
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
