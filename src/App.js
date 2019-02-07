import React, { Component } from 'react';
import './App.scss';
import {
  Header,
  Footer,
} from '@acpaas-ui/react-components';
import ReactDOM from 'react-dom';

/**
 * More ACPaaS UI documentation can be found here:
 * https://digipolisantwerp.github.io/acpaas-ui_react/
 */

const LocationWidget = window['auiEmbeddableWidgets'].reactComponent(
  // url to the definition
  "https://widgets-o.antwerpen.be/definitions/location-picker.json",
  { React, ReactDOM }
)

class App extends Component {

  onLocationChange(newLocation) { alert(newLocation.id); }

  render() {
    return (
      <div className="App">
      <header>
        <Header />
      </header>
      <LocationWidget
          onLocationChange={ result => this.onLocationChange(result) }
          dimensions={{width: '600px', height: '300px'}}
          className="location-widget"
          />

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
