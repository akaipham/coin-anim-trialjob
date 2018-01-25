import React, {Component} from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Captcha from './components/Captcha';
import Signup from './components/Signup';
import BusinessModal from './components/BusinessModal/BusinessModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBusinessModal: false,
    }
  }

  showModal = () => {
    this.setState({
      showBusinessModal: true,
    });
  }

  hideModal = () => {
    this.setState({
      showBusinessModal: false,
    });
  }

  render() {

    const { showBusinessModal } = this.state;

    return (
      <div>
        <div className="flash"></div>
        <div className="page-container">
          <Header />
          <div className="container" id="page">
            <Signup showModal={this.showModal}/>
            { showBusinessModal &&
              <BusinessModal hideModal={this.hideModal} />
            }
          </div>
          <Footer />
        </div>
        <Captcha />
      </div>
    );
  }
}

export default App;
