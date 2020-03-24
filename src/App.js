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
  const [ message, setMessage ] = useState('')
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
          .catch(error => {
              setMessage(`Json server doesn't resonse. Start json server "npm run server".`)})
          setTimeout( () => {
              setMessage('')}, 8000)
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

      // Name and number is added to db.json
      personServices
        .createPerson(newNameNumberObject)

      // Get all names and numbers from db.json
          .then(() => {
            personServices.getAllPersons()
        .then(response => {
            setPersons(response.data)
          })
        })

      // Notification message
      setMessage(`${newName} was added to the phonebook.`)
      setTimeout( () => {
          setMessage('')}, 4000)

    } else {

      // Name already exist in phonebook -> update number
      if (window.confirm(`${newName} is already in a phonebook. Do you want to update the number?`)) {
        const personToUpdate = persons.filter(person => person.name === newNameNumberObject.name )
        const personUpdateObject = {
            name: personToUpdate[0].name,
            number: newNumber,
            id: personToUpdate[0].id,
            }

        // Update db.json and get all names and numbers
        personServices
            .updatePerson(personUpdateObject, personToUpdate[0].id)
            .then( () => {
                personServices.getAllPersons()
            .then(response => {
                setPersons(response.data)
            })
          })

      // Notification message
      setMessage(`${newName} was updated with new number ${newNumber}`)
      setTimeout(() => {
          setMessage('')}, 4000)
    }
    setNewName('')
    setNewNumber('')
    
  }}// end of eventhandler handleAddName


// Eventhandler for Remove button. Selected name is removed from db.json.
const handleRemoveName = (props) => {
  //console.log('handleRemoveName', props)
  if (window.confirm(`Delete ${props.name} ?`)) {
    personServices
        .deletePerson(props.id)
        .then(() => {
            personServices.getAllPersons()
        .then(response => {
            setPersons(response.data)
          })
        })
    // Notification message
    setMessage(`${props.name} was removed.`)
      setTimeout( () => {
        setMessage('')}, 4000)
  }
}

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

      <Notifications message={message}/>

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
        filterString={filterString}
        handleRemoveName={handleRemoveName} />

    </div>
  )
} // END OF App()


export default App
