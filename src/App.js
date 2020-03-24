// HY MOOC puhelinluettelo versio 2


import React, { useState, useEffect } from 'react'

// Component imports
import Notifications from './components/Notification'
import DisplayNamesNumbers from './components/DisplayNamesNumbers'

// Services
import personServices from './services/persons' // Communication with local db.json file


// Start of App()

const App = () => {

  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState ('')
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ filterString, setFilterString] = useState('')



  // useEffect/Hook too get names and numbers for phonebook from local db.json file
  const hookToGetNamesNumbers = () => {
      personServices
          .getAllPersons()
          .then(response => {
              //console.log('getAllPerson: ', response)
              setPersons(response.data)
              //setPersons(response.data.filter(n => n.name !== undefined))
          })
    }
  useEffect(hookToGetNamesNumbers,[])


// Eventhandler for Add button. Set a new name and number to "persons" object.
const handleAddName = (event) => {
    event.preventDefault()
    const newNameNumberObject = {
      name: newName,
      number: newNumber
    }

    // Add name to db.json if not already exist
    if ((persons.map(person => person.name).includes(newName)) === false ) {
      //setPersons(persons.concat(newNameNumberObject)) - Local persons object in front code.

      // Name and number is added to db.json
      personServices
      .createPerson(newNameNumberObject)
      .then(response => {
          setPersons(persons.concat(response.data))
      })

    } else {
      // Name is not added because its already exist
      setErrorMessage(`${newName} is not added because its already in the phonebook!`)
      
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
