import React, { Component } from 'react';

class Signup extends Component {
  render() {
    const { showModal } = this.props;
    return (
      <div className="signup-session">
        <h2 className="header">Create your account</h2>
        <div className="account-form signup">
          <div className="signup-tabs">
            <div className="signup-tab active-tab">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16">
                <path fill="#0667D0" fillRule="nonzero" d="M7.85 9C5.654 9 3.858 7.2 3.858 5V4c0-2.2 1.796-4 3.992-4 2.196 0 3.992 1.8 3.992 4v1c0 2.2-1.796 4-3.992 4zm1.996 2c2.795 0 4.99 2.2 4.99 5H.864c0-2.8 2.195-5 4.99-5h3.992z"></path>
              </svg>
              Individual</div>
            <div className="signup-tab business-tab" onClick={() => { showModal() }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18">
                <path fill="#B0BFD1" fillRule="nonzero" d="M10.098 4V0H.104v18h19.988V4h-9.994zM4.1 16H2.102v-2h2v2zm0-4H2.102v-2h2v2zm0-4H2.102V6h2v2zm0-4H2.102V2h2v2zM8.1 16H6.1v-2h1.999v2zm0-4H6.1v-2h1.999v2zm0-4H6.1V6h1.999v2zm0-4H6.1V2h1.999v2zm9.994 12h-7.995v-2h1.998v-2h-1.998v-2h1.998V8h-1.998V6h7.995v10zm-1.999-8h-1.999v2h1.999V8zm0 4h-1.999v2h1.999v-2z"></path>
              </svg>
              Business
            </div>
          </div>
          <div className="form">
            <form className="form-vertical" id="new_user" acceptCharset="UTF-8">
              <input name="utf8" type="hidden" value="✓"/>
              <input type="hidden" name="authenticity_token" value="dPVHuUYek43/z2FbOEu2ll7LlbDakjcN7kc7vnToJ22skU1yvtptURFn/EwSZALAj7KpQm+8hb+ftGcru9jxOw=="/>
              <div className="control-group clearfix">
                <div className="first-name">
                  <input className="focus" placeholder="First Name" autoComplete="off" type="text" name="user[first_name]" id="user_first_name"/></div>
                <div className="last-name">
                  <input placeholder="Last Name" autoComplete="off" type="text" name="user[last_name]" id="user_last_name"/></div>
              </div>
              <div className="control-group">
                <div className="controls">
                  <input type="email" placeholder="Email" autoComplete="off" name="user[email]" id="user_email"/></div>
              </div>
              <div className="control-group">
                <div className="controls">
                  <input placeholder="Choose A Password" className="signup-password" autoComplete="off" type="password" name="user[password]" id="user_password"/>
                  <div className="password-level hide" style={{
                      display: 'none'
                    }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="level"></span>
                  </div>
                </div>
              </div>
              <div className="control-group">
                <div className="controls signup--recaptcha__plugin">
                  <script src="https://www.google.com/recaptcha/api.js" async="" defer=""></script>
                  <div className="g-recaptcha " data-sitekey="6LcWsCUTAAAAAGLDiA07ZXepjn-EdSh4xd1I7PKH">
                    <div style={{
                        width: '304px',
                        height: '78px'
                      }}>
                      <div>
                        <iframe src="https://www.google.com/recaptcha/api2/anchor?k=6LcWsCUTAAAAAGLDiA07ZXepjn-EdSh4xd1I7PKH&amp;co=aHR0cHM6Ly93d3cuY29pbmJhc2UuY29tOjQ0Mw..&amp;hl=en&amp;v=v1515997865826&amp;size=normal&amp;cb=8s0fv8pyibun" width="304" height="78" role="presentation" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                      </div>
                      <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{
                          width: '250px',
                          height: '40px',
                          border: '1px solid #c1c1c1',
                          margin: '10px 25px',
                          padding: '0px',
                          resize: 'none',
                          display: 'none'
                        }}></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="control-group terms">
                <label className="checkbox">
                  <input name="user[accepted_user_agreement]" type="hidden" value="0"/>
                  <input type="checkbox" value="1" name="user[accepted_user_agreement]" id="user_accepted_user_agreement"/>
                  I certify that I am 18 years of age or older, and I agree to the&nbsp;
                  <a href="/legal/user_agreement" target="_blank" tabIndex="-1">User Agreement</a>&nbsp;
                  and&nbsp;
                  <a href="/legal/privacy" target="_blank" tabIndex="-1">Privacy Policy</a>.
                </label>
              </div>
              <div className="alert alert-danger unsupported-state" style={{
                  display: 'none'
                }}></div>
              <div className="actions">
                <input type="submit" name="commit" value="Create account" className="btn btn-primary signup-button" data-disable-with="Creating Account..."/></div>
            </form>
          </div>
        </div>
        <div className="account-extras">
          <p>
            <a href="/signin">Already have an account?</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
