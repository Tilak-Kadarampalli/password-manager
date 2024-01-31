import './index.css'

const PasswordItem = props => {
  const {details, status, deletePassword} = props
  const {url, username, password} = details

  const onDelete = () => {
    deletePassword(url)
  }

  return (
    <div>
      <h5>{url}</h5>
      <p>{username}</p>
      {status ? <p>{password}</p> : <div>Hidden</div>}
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default PasswordItem
