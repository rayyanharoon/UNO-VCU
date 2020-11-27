import React, {useState, useEffect} from 'react'
import {getContacts} from '../../Services/waitlistServices'

function WaitlistView() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getContacts()
        .then(
            json => {
                setContacts(json);
                setLoading(false);
            })
        .catch(err => {
            console.error(err);
            setError(err);
        });
    }, []);

    if(loading) return (<div className="alert alert-success" role="alert">Loading...</div>);
    if(error) return (<div className="alert alert-danger">Page Error...</div>)

    return(
        <div className="container">
            <h1>Waitlist View</h1>
            <table className="table table-striped">
                <thread>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                    </tr>
                </thread>
                <tbody>
                    {contacts.map((contact, key) => (
                     <tr key={key}>
                         <td>{contact.name}</td>
                         <td>{contact.email}</td>
                         <td>{contact.phone}</td>
                         <td>{contact.address}</td>
                     </tr>   
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default WaitlistView;