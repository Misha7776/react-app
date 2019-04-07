import React, { Component } from 'react';

class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.state = props.selectedContact
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.selectedContact);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  newContact(e) {
    e.preventDefault();
    this.props.newContact();
  }

  deleteContact(e) {
    e.preventDefault();
    this.props.deleteContact(this.props.selectedContact._id);
  }

  updateContact(e) {
    e.preventDefault();
    this.props.updateContact(this.state);
  }

  render() {
    return <div className="detail">
      <div className="header">
        <div className="body">{this.props.selectedContact._id ? 'Contact Details' : 'New Contact'}</div>
        { this.props.selectedContact._id &&
        <div className="right">
          <a href="#"
            className="btn"
            onClick={(e) => this.deleteContact(e)}
          >Delete</a>
          <a href="#"
            className="btn"
            onClick={(e) => this.newContact(e)}
          >New</a>
        </div>
        }
      </div>
      <form onSubmit={(e) => this.updateContact(e)}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={this.state.Name}
            onChange={(e) => this.handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Phone">Phone</label>
          <input
            type="telephone"
            id="Phone"
            name="Phone"
            value={this.state.Phone}
            onChange={(e) => this.handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={this.state.Email}
            onChange={(e) => this.handleInputChange(e)}
          />
        </div>
        <div className="action">
          <input type="submit" className="btn" value={this.props.selectedContact._id ? 'Update' : 'Save'} />
        </div>
      </form>
    </div>
  }
}

export default ContactDetail;
