
// Component to display tabel with names and numbers

import React, {} from 'react'
import DisplayTableHeader from './DisplayTableHeader'


const DisplayNamesNumbers = (props) => {
    
    if (props.filterString === '') {
        // Display all names and numbers because "props.filterName" is empty
        return (
            <table className='table mt-5'>
                {<DisplayTableHeader />}
                <tbody>
                    {props.persons.map(person => 
                        <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)}
                 </tbody>
            </table>
        )
    } else {
        // Display only names which match with "props.filterString"
        const filteredPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.filterString.toLowerCase()))

        return (
            <table className='table mt-5'>
                {<DisplayTableHeader />}
                <tbody>
                    {filteredPersons.map(person => 
                        <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)}
                </tbody>
            </table>
        )
    }
}


export default DisplayNamesNumbers