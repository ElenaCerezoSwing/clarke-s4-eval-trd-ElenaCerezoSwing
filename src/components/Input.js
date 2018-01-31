import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <input type="text" onChange={this.props.onChange} value={this.props.value}/>
    );
  }
}
export default Input;
