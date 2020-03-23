// HY MOOC puhelinluettelo versio 2


import React, { useState } from 'react'

// Component imports
import Notifications from './components/Notification'
import DisplayNamesNumbers from './components/DisplayNamesNumbers'




// Start of App()

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto', number: '012' },
    { name: 'Marko', number: '123'},
    { name: 'Jaska Jokunen', number: '0400 124 567'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState ('')
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ filterString, setFilterString] = useState('')


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

// Event handler to record inputing filter for names  
const handleFilterStringInput = (event) => {
  setFilterString(event.target.value)
}


  return (
    <div>
      <h3>Phonebook</h3>

      <Notifications message={errorMessage}/>

      {/* Name search imput */}
      <div className='mt-5'>
        Search name <input className='form-control' value={filterString} onChange={handleFilterStringInput}/>
      </div>


      {/* Name and number input */}
      <form className='mt-4' onSubmit={handleAddName}>
        <div>
          Add new name<input autoFocus className='form-control' value={newName} onChange={handleNameChange}/>
        </div>

        <div>
          Add number for a new name<input className='form-control' value={newNumber} onChange={handleNumberChange}/>
        </div>

        <div>
          <button className="mt-3 btn btn-outline-primary" type="submit">Add to phonebook</button>
        </div>
      </form>
      
      {/* Component to display names and numbers */}
      <DisplayNamesNumbers 
        persons={persons} 
        filterString={filterString} />

    </div>
  )
} // END OF App()


export default App
