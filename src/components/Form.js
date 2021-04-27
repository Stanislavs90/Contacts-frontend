import React, {useState, useEffect } from 'react';
import APIService from '../APIService';

function Form(props) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [related_name, setRelated_name] = useState('')
    const [birthday, setBirthday] = useState('')


    useEffect(()=>{
        setName(props.contact.name)
        setPhone(props.contact.phone)
        setCompany(props.contact.company)
        setEmail(props.contact.email)
        setRelated_name(props.contact.related_name)
        setBirthday(props.contact.birthday)
        

    }, [props.contact])

    const updateContact = () => {
        APIService.UpdateContact(props.contact.id, {
            name,
            phone,
            company,
            email,
            related_name,
            birthday
        })
        .then(resp => props.updatedInformation(resp))
    }

    const insertContact = () => {
        APIService.InsertContact({
            name,
            phone,
            company,
            email,
            related_name,
            birthday
        })
        .then(resp => props.insertedInformation(resp))
    }
    

    return (
        <div>
            {props.contact ? (
                <div className = "mb-3">
                <label htmlFor = "Name" className = "form-label">Name </label>
                <input type="text" className= "form-control" id="Name" placeholder = "Please Enter Name" value = {name} onChange= {e => setName(e.target.value)} />
                <br/>
                <label htmlFor = "Phone" className = "form-label">Phone </label>
                <input type="text" className= "form-control" id="Phone" placeholder = "Please Enter Phone" value = {phone} onChange= {e => setPhone(e.target.value)}/>
                <br/>
                <label htmlFor = "Company" className = "form-label">Company </label>
                <input type="text" className= "form-control" id="Company" placeholder = "Please Enter Company" value = {company} onChange= {e => setCompany(e.target.value)}/>
                <br/>
                <label htmlFor = "Email" className = "form-label">Email </label>
                <input type="text" className= "form-control" id="Email" placeholder = "Please Enter Email" value = {email} onChange= {e => setEmail(e.target.value)}/>
                <br/>
                <label htmlFor = "Related Name" className = "form-label">Related Name </label>
                <input type="text" className= "form-control" id="Related" placeholder = "Please Enter Related Name" value = {related_name} onChange= {e => setRelated_name(e.target.value)}/>
                <br/>
                <label htmlFor = "Birthday " className = "form-label">Birthday </label>
                <input type="text" className= "form-control" id="Birthday" placeholder = "Please Enter Birthday" value = {birthday} onChange= {e => setBirthday(e.target.value)}/>

                <br/>

                {
                    props.contact.id ? <button className = "btn btn-success" onClick={updateContact} >Update Contact</button>
                    : <button className = "btn btn-success" onClick={insertContact} >Insert Contact</button>


                }

                

                </div>

            ) : null } 
        </div>
    )
}

export default Form;