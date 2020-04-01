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
// Only startup phase
  const hookToGetNamesNumbers = () => {
      personServices
          .getAllPersons()
          .then(response => {
              //console.log('getAllPerson: ', response)
              setPersons(response.data)
              //setPersons(response.data.filter(n => n.name !== undefined))
          })
          .catch(error => {
              setMessage(`Backend server doesn't response. Start server and refresh browser.`)})
    }
  useEffect(hookToGetNamesNumbers,[])


// Eventhandler for Add/update button. Set a new/update name and number to "persons" object.
const handleAddName = (event) => {
    event.preventDefault()
    const newNameNumberObject = {
      name: newName,
      number: newNumber
    }

    // Add name to db if not already exist
    if ((persons.map(person => person.name).includes(newName)) === false ) {

        // Name and number is added to db
        personServices
            .createPerson(newNameNumberObject)
            // Get all names and numbers from db
            .then(() => {
                personServices.getAllPersons()
                .then(response => {
                    setPersons(response.data)
                    // Notification message
                    setMessage(`${newName} added to the phonebook.`)
                    setTimeout( () => {
                        setMessage('')}, 4000)
                })
            })
            .catch(error => {
                //console.log(error.response.data)
                // Notification message
                const startIndex=error.response.data.indexOf("Person validation failed:")
                const stopIndex=error.response.data.indexOf("<br>")

                const msg= error.response.data.slice(startIndex,stopIndex)
                setMessage(`${msg}`)

                setTimeout( () => {
                    setMessage('')}, 6000)
            })



    } else {

      // Name already exist in phonebook -> update number
      if (window.confirm(`${newName} is already in a phonebook. Do you want to update the number?`)) {
        const personToUpdate = persons.filter(person => person.name === newNameNumberObject.name )
        const personUpdateObject = {
            name: personToUpdate[0].name,
            number: newNumber,
            id: personToUpdate[0].id,
            }

        // Update db and get all names and numbers
        personServices
            .updatePerson(personUpdateObject, personToUpdate[0].id)
            .then(() => {
                personServices.getAllPersons()
                .then(response => {
                    setPersons(response.data)
                    // Notification message
                    setMessage(`${newName} updated with new number ${newNumber}`)
                    setTimeout(() => {
                        setMessage('')}, 4000)  
                })
            })
            .catch(error => {
                //console.log(error.response.data)

                const startIndex=error.response.data.indexOf("Validation failed:")
                const stopIndex=error.response.data.indexOf("<br>")

                const msg= error.response.data.slice(startIndex,stopIndex)
                setMessage(`${msg}`)

                setTimeout(() => {
                  setMessage('')}, 6000)
                personServices
                  .getAllPersons()
                  .then(response => {
                      setPersons(response.data)
                })
            })
    }}
    setNewName('')
    setNewNumber('')
    
  }// end of eventhandler handleAddName


// Eventhandler for Remove button. Selected name is removed from db.
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
          Number<input className='form-control' value={newNumber} onChange={handleNumberChange}/>
        </div>

        <div>
          <button className="mt-3 btn btn-outline-primary" type="submit">Add / update</button>
        </div>
      </form>
      
      {/* Component to display names and numbers */}
      <DisplayNamesNumbers 
        persons={persons} 
        filterString={filterString}
        handleRemoveName={handleRemoveName} />

      <p className="mt-5 font-weight-light">HY / Fullstack MOOC / Phonebook v2 by MarkoTammi</p>

    </div>
  )
} // END OF App()


export default App
