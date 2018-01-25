import React, {Component} from 'react';

class Captcha extends Component {
  render() {
    return (
      <div style={{
          backgrounColor: '#fff',
          border: '1px solid #ccc',
          boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          left: '0px',
          top: '-10000px',
          transition: 'visibility 0s linear 0.3s, opacity 0.3s linear',
          opacity: '0',
          visibility: 'hidden',
          zIndex: '2000000000'
        }}>
        <div style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: '0px',
            left: '0px',
            zIndex: '2000000000',
            backgrounColor: '#fff',
            opacity: '0.05',
            filter: 'alpha(opacity=5)'
          }}></div>
        <div className="g-recaptcha-bubble-arrow" style={{
            border: '11px solid transparent',
            width: '0',
            height: '0',
            position: 'absolute',
            pointerEvents: 'none',
            'marginTop' : '-11px',
            zIndex: '2000000000'
          }}></div>
        <div className="g-recaptcha-bubble-arrow" style={{
            border: '10px solid transparent',
            width: '0',
            height: '0',
            position: 'absolute',
            pointerEvents: 'none',
            'marginTop' : '-10px',
            zIndex: '2000000000'
          }}></div>
        <div style={{
            zIndex: '2000000000',
            position: 'relative'
          }}></div>
      </div>
    );
  }
}

export default Captcha;
