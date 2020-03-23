// HY MOOC 2.6: puhelinluettelo step1


import React, { useState } from 'react'

// Component imports
import Notifications from './components/Notification'




// Start of App()
const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto' },
    { name: 'Marko'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')


// Eventhandler for Add button. Set a new name to "persons" object.
const handleAddName = (event) => {
    event.preventDefault()
    //console.log('addName clicked', event.target)
    const nameObject = {
      name: newName
    }

    // Add name to person object if not already exist
    if ((persons.map(person => person.name).includes(newName)) === false ) {
      setPersons(persons.concat(nameObject))
    } else {
      setErrorMessage(`${newName} is not added because its already added to phonebook!`)
      
      // 'Name already exist' message is displayed 4 sek
      setTimeout(() => {
        setErrorMessage('')}, 4000)
    }

    //setPersons(persons.concat(nameObject))
    setNewName('')
} // end of eventhandler

// Eventhandler to record a new name input typing 
const handleNameChange =(event) => {
  setNewName(event.target.value)
}


  return (
    <div>
      <h3>Phonebook</h3>

      <Notifications message={errorMessage}/>

      <form className='mt-4' onSubmit={handleAddName}>
        <div>
          Name: <input className='form-control' value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button className="mt-3 btn btn-outline-primary" type="submit">Add</button>
        </div>
      </form>
      
      <h3 className="mt-5">Numbers</h3>
        {persons.map(person => <p key={person.name}>{person.name}</p>)}  

    </div>
  )
} // END OF App()


export default App
