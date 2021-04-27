import React from 'react'
import APIService from '../APIService';

function ContactsList(props) {

    const editBtn = contact => {
        props.editBtn(contact)
    }

    const deleteBtn = contact => {
      APIService.DeleteContact(contact.id)
      .then(
        () => props.deleteBtn(contact)
        )
      
    }



    return (
        <div>
        {
          props.contacts && props.contacts.map(contact => {
            return (
            <div key= {contact.id}> 
              <h2>Name: {contact.name}</h2>
              <p>Phone: {contact.phone}</p>
              <p>Company: {contact.company}</p>
              <p>Email: {contact.email}</p>
              <p>Related Name: {contact.related_name}</p>
              <p>Birthday: {contact.birthday}</p>
            
              <div className = "row">
              <div className = "col-md-1">
              <button className = "btn btn-primary" onClick ={() => editBtn(contact)  } >Update</button>
              </div> 

              <div className = "col">
              <button onClick = {() => deleteBtn(contact)} className = "btn btn-danger">Delete</button>
              </div> 

              </div>  
            

            <hr className = "hrclass"/>
            </div>
            )
          })
        }
        </div>
    )
}

export default ContactsList
