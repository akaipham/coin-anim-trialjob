import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import $ from 'jquery';
import './BusinessModal.css';

class BusinessModal extends Component {

  render() {
    const { hideModal } = this.props;

    return (
      <Modal
        className="modal fade business-modal"
        show={true}
        onHide={this.hideModal}>
          <Modal.Body>
            <button type="button" className="close" onClick={() => hideModal()}>×</button>
            <div className="section">
              <div className="oval">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62">
                  <g fill="none" fillRule="evenodd" stroke="#0667D0" strokeWidth="2" transform="translate(1 1)">
                    <path d="M40 25H30V15"></path>
                    <circle cx="30" cy="25" r="10" strokeLinecap="square"></circle>
                    <path strokeLinecap="square" d="M30 46v12"></path>
                    <path d="M24 46L12 60M36 46l12 14"></path>
                    <path strokeLinecap="square" d="M54 40V5H6v35M60 46H0M30 5V0"></path>
                  </g>
                </svg>
              </div>
              <h3>Institutional investing</h3>
              <p>Investing through a business or other legal entity? Please sign up using GDAX.</p>
              <a href="https://gdax.com" className="btn btn-primary gdax-link">Sign up to GDAX</a>
            </div>
            <div className="section">
              <div className="oval">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="60" viewBox="0 0 62 60">
                  <g fill="none" fillRule="evenodd" stroke="#0667D0" strokeLinecap="square" strokeWidth="2">
                    <path d="M53 11H9M16 36h10v10H16z"></path>
                    <path d="M7 34v25h28V41h12v18h8V34M53 11V1H9v10L1 21a7 7 0 0 0 7 7 6.982 6.982 0 0 0 5.5-2.679A6.982 6.982 0 0 0 19 28a6.989 6.989 0 0 0 6-3.408A6.989 6.989 0 0 0 31 28a6.989 6.989 0 0 0 6-3.408A6.989 6.989 0 0 0 43 28a6.982 6.982 0 0 0 5.5-2.679A6.982 6.982 0 0 0 54 28a7 7 0 0 0 7-7l-8-10z"></path>
                  </g>
                </svg>
              </div>
              <h3>Merchant services</h3>
              <p>We're no longer accepting new merchant services businesses. Stay tuned for new offerings that are coming soon.</p>
            </div>
          </Modal.Body>
        </Modal>
    );
  }
}

export default BusinessModal;
