import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import ReturnedApps from './ReturnedApps'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        apps: [],
        search: '',
        sort: '',
        error: null,
      }
    }

    handleSubmit(e) {
      e.preventDefault()
      console.log("handle submit clicked!")
    }

    render(props) {
      console.log(this.state)
      return (
        <div className="App">
          <form>
            <fieldset>
              <legend>Enter Search Query</legend>
              <label htmlFor="search">Search: </label>
              <input
                type="text"
                id="search"
                name="search"
                value={this.state.search}
                onChange={e => this.setState({search: e.target.value})}
              />
              <label htmlFor="sort">Sort: </label>
              <select id="sort" name="sort" onChange={e => this.setState({sort: e.target.value})}>
                <option value="">--</option>
                <option value="Rating">Rating</option>
                <option value="App">App</option>
              </select>
            </fieldset>
            <button type="submit" onClick={e => this.handleSubmit(e)}>Submit</button>
          </form>
          <section>
            <ReturnedApps {...props}/>
          </section>
        </div>
      );
    }
}

export default App;
