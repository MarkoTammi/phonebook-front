// HY MOOC 2.6: puhelinluettelo step1


import React, { useState } from 'react'

// Component imports
import Notifications from './components/Notification'




// Start of App()
const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto', number: '012' },
    { name: 'Marko', number: '123'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState ('')
  const [ errorMessage, setErrorMessage ] = useState('')


// Eventhandler for Add button. Set a new name and number to "persons" object.
const handleAddName = (event) => {
    event.preventDefault()
    //console.log('addName clicked', event.target)
    const nameNameNumberObject = {
      name: newName,
      number: newNumber
    }

    // Add name to person object if not already exist
    if ((persons.map(person => person.name).includes(newName)) === false ) {
      setPersons(persons.concat(nameNameNumberObject))
    } else {
      setErrorMessage(`${newName} is not added because its already added to phonebook!`)
      
      // 'Name already exist' message is displayed 4 sek
      setTimeout(() => {
        setErrorMessage('')}, 4000)
    }

    setNewName('')
    setNewNumber('')
} // end of eventhandler


// Eventhandler to record a new name input typing 
const handleNameChange =(event) => {
  setNewName(event.target.value)
}

// Eventhandler to record a new number input typing 
const handleNumberChange =(event) => {
  setNewNumber(event.target.value)
}

  return (
    <div>
      <h3>Phonebook</h3>

      <Notifications message={errorMessage}/>

      {/* Name and number imput */}
      <form className='mt-4' onSubmit={handleAddName}>
        <div>
          Name: <input autoFocus className='form-control' value={newName} onChange={handleNameChange}/>
        </div>

        <div>
          Number: <input className='form-control' value={newNumber} onChange={handleNumberChange}/>
        </div>

        <div>
          <button className="mt-3 btn btn-outline-primary" type="submit">Add</button>
        </div>
      </form>
      
      {/* Table to display names and numbers */}
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)}
        </tbody>
      </table>

    </div>
  )
} // END OF App()


export default App
