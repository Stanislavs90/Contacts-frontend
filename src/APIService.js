export default class APIService {

    static UpdateContact(contact_id, body){
        return fetch(`http://localhost:8000/api/contacts/${contact_id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
             }, 
             body:JSON.stringify(body)

        })
        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

    static InsertContact(body){

        return fetch('http://localhost:8000/api/contacts/',{
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
             }, 
             body:JSON.stringify(body)

        })
        .then(resp => resp.json())
        .catch(error => console.log(error))

    }

    static DeleteContact(contact_id){
        return fetch(`http://localhost:8000/api/contacts/${contact_id}/`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json',
             }
        })
      
    }






}