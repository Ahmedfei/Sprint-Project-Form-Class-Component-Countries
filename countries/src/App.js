import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import CountriesList from './components/CountriesList';
import Form from "./components/Form"


class App extends Component {

  constructor() {
    super()
    this.state = {
    countries: []

    }

  }
 
              componentDidMount(){
             
                this.fetchData()
            }
              
            fetchData = () =>  {
                
              axios.get("http://localhost:3333/countries")
              .then(res => {
                this.setState ({
                  countries: res.data



                })
                  // console.log(res.data)

              })
            }

            

  render() {
    return (
      <div className="App">
        <h1>List Of Countries</h1>
        
        < Form  fetchData={this.fetchData}/>
        <CountriesList countries={this.state.countries} />
        
        
      </div>
    );
  }
}

export default App;
