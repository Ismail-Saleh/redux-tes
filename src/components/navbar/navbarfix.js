import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Link} from 'react-router-dom'
import '../../App.css';
import Axios from 'axios'
import category from '../../redux/actions/category'

const MenuItem = ({ text, selected, url }) => {
  return (
    <div
      className="menu-item"
    >
      <Link to={url}>
        {text}
      </Link>
      
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list,selected) => list.map(el => {
  const { name ,url} = el;

  return (
    <MenuItem
      text={name}
      key={name}
      url={url}
      selected ={selected}
    />
  );
});


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export default class Top extends Component {
  
  
    state = {
    list:[],
    selected: 0
  };
  
componentDidMount(){

    Axios.get('http://localhost:5000/api/v1/category').then(res=>{
        
        this.setState({list:res.data})
    })
}

  onSelect = key => {
    this.setState({ selected: key });
  }

  
  render() {
    const { list,selected } = this.state;
    // Create menu from items
    const menu = Menu(list, selected);

    return (
      
      <div className="App">
        <p>{this.props.data}</p>
        <ScrollMenu
          data={Menu(list)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}