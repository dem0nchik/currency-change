import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Converter from './components/Converter/Converter';
import Currentcurrency from './components/Currentcurrency/Currentcurrency';
import Loader from './components/Loader/Loader';

class App extends React.Component {
  state = {
    currency: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })
      fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(response => {
          return response.json()
        })
        .then(data => { 
          this.setState({ isLoading: false, currency: data })
        })
  }

  render(){
    const {currency} = this.state
    return (
      <Router>
      <div className="App">
        <Navigation />
        {this.state.isLoading && <Loader/>}

        <Route path='/currentcurrency' component={() => <Currentcurrency currency={currency}/>} />
        <Route exact  path='/' component={() => <Converter currency={currency}/>}/>
      
      </div>
      </Router>
    );
  }
}

export default App;
