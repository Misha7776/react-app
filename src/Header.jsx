import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component{
   constructor(props) {
    super(props);
  }


  reloadData(e) {
    e.preventDefault();
    this.setState({
      contacts: this.props.contacts,
      selectedContact: this.emptyContact
    })
  }

  render() {
    return (
      <header>
      <div className="body">Contacts</div>
      <div className="right">
        <a
          href="#"
          className="btn"
          onClick={(e) => this.reloadData(e)}
        >Reload</a>
      </div>
    </header>
    );
  }
}

export default Header;
