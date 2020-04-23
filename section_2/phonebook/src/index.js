import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

const Filter = ({filter, onChange}) => {
  return (
    <>
    <h2>Find</h2>
    <div>
      filter shown with <input value={filter} onChange={onChange} />
    </div> 
    </>
  )
}

const Persons = ({persons}) => {
  return(
    <div>{persons}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 

  // controlling the form input element.
  const [ newName, setNewName ] = useState('');
  const [newPhoneNum, setPhoneNum] = useState('');
  const [filter, setFilter] = useState("")

  const doesUserExist = (event) => {
    event.preventDefault();

    persons.map(person => {
      person.name === newName ? window.alert(`${newName} is already added to phonebook`) : setPersons([...persons, { name: newName, number: newPhoneNum }])
    })
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setPhoneNum(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()))


  const result = () => personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p> )
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log(response)
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <form>
        <div>
          name: <input id="name" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone <input id="phone" value={newPhoneNum} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={(e) => doesUserExist(e)}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {/* <Persons persons={result()} /> */}
      </ul>
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

