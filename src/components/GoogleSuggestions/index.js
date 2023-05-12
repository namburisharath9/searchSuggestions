// Write your code here
import {Component} from 'react'

import SuggestionItem from './components/SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateText = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.includes(searchInput),
    )
    return (
      <div className="main-container">
        <div className="logo-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <ul className="list-container">
          <li className="input-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-img"
            />
            <input
              className="input-ele"
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </li>
          {filteredList.map(eachItem => (
            <SuggestionItem
              updateText={this.updateText}
              suggestionItem={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
