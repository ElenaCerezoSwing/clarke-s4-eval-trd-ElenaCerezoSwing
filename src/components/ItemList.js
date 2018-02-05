import React, {Component} from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <li >
        <img src={this.props.image} alt={this.props.name} className="image-size"/>
        <h5>{this.props.name}</h5>
        <img src={'/Images/'+ this.props.house + '.jpg'} alt='this.props.house' width='60px' height ='60px'object-fit= 'contain'/>
        <p>Alive? {this.props.alive ? '❤' : 'R.I.P.' }</p>
      </li>  );
  }
}
export default ItemList;
