
// Component to display tabel with names and numbers

import React, {} from 'react'
import DisplayTableHeader from './DisplayTableHeader'


const DisplayNamesNumbers = (props) => {

    // Variable to include only name which match with props.filterString. If props.filterString is empty all names are displayed.

    const filteredPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.filterString.toLowerCase()))
    const alphabeticOrderPersons = filteredPersons.sort((a, b) => a.name.localeCompare(b.name, 'fi'))

    return (
        <table className='table mt-5'>
            {<DisplayTableHeader />}
            <tbody>
                {alphabeticOrderPersons.map(person => 
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.number}</td>
                        <td>{person.id}</td>
                        <td><button 
                            type="button"
                            className="btn btn-outline-secondary btn-sm" 
                            onClick={ () => props.handleRemoveName(person)}
                            >Remove</button></td>
                    </tr>)}
            </tbody>
        </table>
    )

}


export default DisplayNamesNumbers