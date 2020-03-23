// HY MOOC 2.6: puhelinluettelo step1


import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Marko Tammi'}
  ]) 
  const [ newName, setNewName ] = useState('')


// Eventhandler for Add button. Set a new name to "persons" object.
const handleAddName = (event) => {
    event.preventDefault()
    //console.log('addName clicked', event.target)
    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
}

// Eventhandler to record a new name input typing 
const handleNameChange =(event) => {
  // console.log(event.target.value)
  setNewName(event.target.value)
}


  return (
    <div>
      <h3>Phonebook</h3>

      <form onSubmit={handleAddName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
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
