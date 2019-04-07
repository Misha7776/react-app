import React, { Component } from 'react';
import ContactDetail from './ContactDetail';
import Header from './Header'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.emptyContact = {
      _id: '',
      Name: '',
      Phone: '',
      Email: ''
    };
    this.state = {
      contacts: props.contacts,
      selectedContact: this.emptyContact
    }
  }

  reloadData(e) {
    e.preventDefault();
    this.setState({
      contacts: this.props.contacts,
      selectedContact: this.emptyContact
    })
  }

  selectContact(_id) {
    this.setState({
      selectedContact: this.state.contacts.find(contact => contact._id == _id)
    });
  }

  newContact() {
    this.setState({
      selectedContact: this.emptyContact
    });
  }

  updateContact(updatedContact) {
    let newContacts;
    // new contact
    if (updatedContact._id === '') {
      updatedContact._id = Date.now();
      newContacts = this.state.contacts;
      newContacts.push(updatedContact);
    // updating existing contact
    } else {
      newContacts = this.state.contacts.map(contact => {
        if (updatedContact._id === contact._id) {
          return updatedContact;
        } else {
          return contact;
        }
      });
    }
    this.setState({
      contacts: newContacts,
      selectedContact: updatedContact
    });
  }

  deleteContact(_id) {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact._id !== _id),
      selectedContact: this.emptyContact
    })
  }

  render() {
    return <div>
      <Header />
      <div className="container">
        <main>
          <div className="list">
            <ul>
              { this.state.contacts.map(contact =>
                 <li key={contact._id}>
                    <a
                      href="#"
                      onClick={() => this.selectContact(contact._id)}
                      className={this.state.selectedContact._id == contact._id ? 'selected' : ''}>
                      <span>{contact.Name}</span>
                      <i className="fa fa-arrow-right"></i>
                    </a>
                 </li>
               )}
            </ul>
          </div>
          <ContactDetail
            selectedContact={this.state.selectedContact}
            newContact={() => this.newContact()}
            updateContact={(contact) => this.updateContact(contact)}
            deleteContact={(_id) => this.deleteContact(_id)} />
        </main>
      </div>
    </div>
  }
}

export default App;

