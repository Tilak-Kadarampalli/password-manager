import './index.css'
import {Component} from 'react'
import PasswordItem from '../PasswordItem'

class PasswordForm extends Component {
  state = {
    passwordsList: [],
    showPasswords: false,
    url: '',
    username: '',
    password: '',
    searchQuery: '',
  }

  updateUrl = event => {
    const urlText = event.target.value
    this.setState({url: urlText})
  }

  updateUsername = event => {
    const usernameText = event.target.value
    this.setState({username: usernameText})
  }

  updatePassword = event => {
    const passwordText = event.target.value
    this.setState({password: passwordText})
  }

  updateSearch = event => {
    const searchText = event.target.value
    this.setState({searchQuery: searchText})
  }

  submitPassword = event => {
    event.preventDefault()
    const {url, username, password, passwordsList} = this.state
    const newPasswordList = {url, username, password}
    this.setState({passwordsList: [newPasswordList]})
    this.setState({url: '', password: '', username: ''})
  }

  togglePassword = event => {
    const status = event.target.checked
    this.setState({showPasswords: status})
  }

  deletePassword = url => {
    const {passwordsList} = this.state
    const freshList = passwordsList.filter(
      eachPassword => eachPassword.url !== url,
    )
    this.setState({passwordsList: freshList})
  }

  render() {
    const {
      passwordsList,
      showPasswords,
      url,
      username,
      password,
      searchQuery,
    } = this.state

    const updatedList = passwordsList.filter(eachPassword =>
      eachPassword.url.includes(searchQuery),
    )

    return (
      <div className="main-cont">
        <div className="password-form-cont">
          <form className="form-div" onSubmit={this.submitPassword}>
            <h1>Add new password</h1>
            <input type="text" onChange={this.updateUrl} value={url} />
            <input
              type="text"
              onChange={this.updateUsername}
              value={username}
            />
            <input
              type="password"
              onChange={this.updatePassword}
              value={password}
            />
            <button type="submit" className="form-submit-btn">
              Add
            </button>
          </form>
          <div>
            <img
              className="form-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
            />
          </div>
        </div>

        <div className="password-list-cont">
          <div>
            <p>Your Passwords</p>
            <input type="search" onChange={this.updateSearch} />
          </div>
          <hr />
          <input type="checkbox" onChange={this.togglePassword} />
          <ul>
            {updatedList.map(eachPassword => (
              <PasswordItem
                key={eachPassword.url}
                details={eachPassword}
                status={showPasswords}
                deletePassword={this.deletePassword}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordForm
