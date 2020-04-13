import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Filter = ({persons}) => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = persons.filter(person => {
      person.name.toLowerCase().includes(searchTerm)
    })
  })

  return (
    <>
    <h2>Find</h2>
    <div>
      filter shown with <input id="name" onChange={handleNameChange} />
    </div> 
    {results}
    </>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '1' },
    {name : 'Rob Sucks',  phone: '2'}
  ]) 

  // controlling the form input element.
  const [ newName, setNewName ] = useState('')
  const [newPhoneNum, setPhoneNum] = useState('')

  const doesUserExist = (event) => {
    event.preventDefault();

    persons.map(person => {
      person.name === newName ? window.alert(`${newName} is already added to phonebook`) : setPersons([...persons, { name: newName, number: newPhoneNum }])
    })
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setPhoneNum(event.target.value);
  };
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
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
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

