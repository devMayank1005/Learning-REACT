import React, { useState } from 'react'
import Cards from './components/Cards.jsx'

const App = () => {
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userDesc, setUserDesc] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setAllUsers(prev => [
      ...prev,
      { userName, userRole, userDesc, imageURL }
    ])

    setUserName('')
    setUserRole('')
    setUserDesc('')
    setImageURL('')
  }

  const deleteHandler = (idx) => {
    setAllUsers(prev => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className="h-screen bg-black text-white">
      <form onSubmit={submitHandler} className="px-2 py-2 flex flex-wrap">
        <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="Enter your name" />
        <input value={imageURL} onChange={e => setImageURL(e.target.value)} placeholder="Image URL" />
        <input value={userRole} onChange={e => setUserRole(e.target.value)} placeholder="Enter Role" />
        <input value={userDesc} onChange={e => setUserDesc(e.target.value)} placeholder="Enter Description" />
        <button>Create User</button>
      </form>

      <div className="px-4 py-10 gap-4 flex flex-wrap">
        {allUsers.map((elem, idx) => (
          <Cards
            key={idx}
            idx={idx}
            elem={elem}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default App
