
// Component to display tabel with names and numbers

import React, {} from 'react'
import DisplayTableHeader from './DisplayTableHeader'


const DisplayNamesNumbers = (props) => {

    // Variable to include only name which match with props.filterString. If props.filterString is empty all names are displayed.

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


export default DisplayNamesNumbers