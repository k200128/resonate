import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
    
    .then((res) => res.json())
    
    .then((data) => setContacts(data));
    
    }, []);
  return (
    <div className="app">
      <h1 className="heading">Contacts</h1>
    {contacts.map((contact) => (

<h2 className="user__name" > <img className="avatar" src="https://static.thenounproject.com/png/363640-200.png" alt="" /> {contact.name}</h2> 

))}

    </div>
  );
}

export default App;
