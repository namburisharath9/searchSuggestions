// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateText} = props
  const {suggestion, id} = suggestionItem
  const updateText = () => updateText(id)
  return (
    <li className="list-item">
      <p className="list-description">{suggestion}</p>
      <img
        className="arrow-img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
