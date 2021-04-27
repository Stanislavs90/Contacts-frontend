import './App.css';
import {useState, useEffect} from 'react'
import ContactsList from './components/ContactsList'
import Form from './components/Form';

function App() {

  const [contacts, setContacts] = useState([])
  const [editContact, setEditContact] = useState(null)


  useEffect(() => {
    fetch('http://localhost:8000/api/contacts/',{
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setContacts(resp))
    .catch(error => console.log(error))
  },[])

  const editBtn = contact => {
    setEditContact(contact)

  }

  const deleteBtn = contact => {
    const new_contacts = contacts.filter(mycontact => {
      if (mycontact.id === contact.id){
        return false
      } 
        return true
      
    })
 
}

  const updatedInformation = contact => {
    const new_contact = contacts.map(mycontact => {
      if (mycontact.id === contact.id) {
        return contact;
      } else{
        return mycontact;
      }
    })

    setContacts(new_contact)
  }

  const contactForm = () => {
    setEditContact({
      name:'',
      phone:'',
      company:'',
      email: '',
      related_name:'', 
      birthday:'',

    })
  }

  const insertedInformation = (contact) => {
    const new_contacts = [...contacts, contact ]
    setContacts(new_contacts)
  }

  return (
    <div className="App" >
      <div className = "row">
      <div className = "col">

        <h1 className="center">My Contacts</h1>
        <br/>

      </div>
        <div className = "col">
          <button onClick = {contactForm} className = "btn btn-primary">Insert Contact</button>
        </div>
      </div>

      
      <br/>

      <ContactsList contacts = {contacts} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
      {editContact ? <Form contact = {editContact} updatedInformation = {updatedInformation}  insertedInformation={insertedInformation}  /> : null}
       
    </div>
  );
}

export default App;
