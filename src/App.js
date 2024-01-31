import './App.css'
import PasswordForm from './components/PasswordForm'
// import YourPasswords from './components/YourPasswords'

//    <YourPasswords />

const App = () => (
  <div className="main-bg">
    <div className="main-logo">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
        alt="app logo"
      />
    </div>
    <PasswordForm />
  </div>
)

export default App
