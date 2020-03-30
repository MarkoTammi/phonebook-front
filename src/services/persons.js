
// Services to communicate with phonebook backend
// personServices

import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getAllPersons = () => {
  return axios.get(baseUrl)
}

const createPerson = newObject => {
  return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = (updateObject,id) => {
    return axios.put(`${baseUrl}/${id}`, updateObject)
  }

export default { 
  getAllPersons: getAllPersons, 
  createPerson: createPerson, 
  deletePerson: deletePerson,
  updatePerson: updatePerson 
}