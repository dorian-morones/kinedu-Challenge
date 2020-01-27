import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
 
class ModalComponent extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    let disabled = this.props.max === this.props.current ? false : true

    return (
      <div>
        <button className='btn stateButton' disabled={disabled} onClick={this.openModal}>Finish assessment</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
           <button className='Modal_close' onClick={this.closeModal}>x</button>
          <h2 className="Modal_Title">Congratulations!!!</h2>
          <p>You and your baby already complete the assessment, its a huge progress!</p>
          <button className='btn stateButton' onClick={e => location.reload()}>Next assessment</button>
        </Modal>
      </div>
    );
  }
}
 
export default ModalComponent;