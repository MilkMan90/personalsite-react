import React, { Component } from 'react'
import Scroll from 'react-scroll'
import firebase from '../firebase';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database: '',
      submitSuccess: false,
      showForm: this.props.showForm || true,
    };
  }
  componentDidMount() {
    this.setState({
      database: firebase.database().ref('messages'),
    });
  }
  submitContactForm(e) {
    e.preventDefault();
    const { name, email, message } = this.refs;
    const newMessage = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    this.state.database.push(newMessage);
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.message.value = '';
    this.setState({
      submitSuccess: true,
    });
    this.toggleShowForm()
  }

  toggleShowForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }
  clearSuccessMessage() {
    this.setState({
      submitSuccess: false,
    });
  }

  render() {
    let successMessage;
    let contactDisplay;
    if (this.state.submitSuccess) {
      successMessage = <div className="success-message">Message Sent - Thanks!</div>;
    }
    if (this.state.showForm) {
      contactDisplay = (
        <form className='contactForm' key='1'>
          <h5>Send me a message! Feedback about my page is always appreciated. 😍</h5>
          <div className='input-group'>
            <input type="text" ref='name' className='contact-name' onChange={() => this.clearSuccessMessage()}required/>
            <label>Name</label>
          </div>
          <div className='input-group'>
            <input type="text" ref='email' className='contact-email' onChange={() => this.clearSuccessMessage()} required/>
            <label>Email</label>
          </div>
          <div className='input-group2'>
            <textarea type="text" ref='message' className='contact-message' onChange={() => this.clearSuccessMessage()} required></textarea>
            <label>Message</label>
          </div>
          <button type='submit' className='contact-submit' onClick={ (e) => { this.submitContactForm(e); }}>Send</button>
        </form>
      );
    } else {
      contactDisplay = <button className='show-form-button' key='show-form-button' onClick={(e) => {
        this.toggleShowForm(e);
      }} >Say Hi!</button>;
    }
    return (
      <div className='contact-me-container'>

      <ReactCSSTransitionGroup
        transitionName="contactTransition"
        transitionAppear={true}
        transitionLeave={false}
        transitionAppearTimeout={1500}
        transitionEnterTimeout={1000}
      >
        {successMessage}
        {contactDisplay}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}
