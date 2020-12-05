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
        genre: '',
        error: null,
      }
    }
    handleSubmit(e) {
      e.preventDefault();
      let baseUrl = "http://localhost:8000/apps";
      let search = `?search=${this.state.search}&sort=${this.state.sort}&genre=${this.state.genre}`;
      const url = baseUrl+search;
      fetch(url)
        .then(res => {
          if(!res.ok) {
            throw new Error(res.statusText)
          }
          return res.json()
        })
        .then(data => {
          this.setState({
            apps: data,
            error: null
          })
        })
        .catch(error => {
          this.setState({
            error: 'There was a problem getting your data!'
          });
        });

      this.setState({
        search: '',
        sort: '',
      });
    };

    render(props) {
      const genreArr=["",'Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'];
      console.log(this.state)
      const apps = this.state.apps.map((app, idx) => {
        return <ReturnedApps {...app} key={idx}/>
      })
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
              <label htmlFor="genre">Genre:</label>
              <select id="genre" name="genre" onChange={e => this.setState({genre: e.target.value})}>
                { 
                  genreArr.map((genre, idx) => {
                    return(
                      <option key={idx} value={genre}>{genre}</option>
                    )
                  })
                }
              </select>
            </fieldset>
            <button type="submit" onClick={e => this.handleSubmit(e)}>Submit</button>
          </form>
          <section className="app-error">{this.state.error}</section>
          <section>
            {apps}
          </section>
        </div>
      );
    }
}

export default App;
