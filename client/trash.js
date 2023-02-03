//datatablesource

export const userRows = [
    { id: 1, userName: 'Elkotel', email: 'Jon@gmail.com', img: "https://www.kazoart.com/blog/wp-content/uploads/2017/05/jeune-fille-perle-vermeer-1024x675.jpg" },
    { id: 2, userName: 'Bohli', email: 'Cersei@gmail.com', img:"https://www.kazoart.com/blog/wp-content/uploads/2017/05/jeune-fille-perle-vermeer-1024x675.jpg" },
    { id: 3, userName: 'Ben amor', email: 'Jaime@gmail.com', img: "https://www.kazoart.com/blog/wp-content/uploads/2017/05/jeune-fille-perle-vermeer-1024x675.jpg" },
    { id: 4, userName: 'Stark', email: 'Arya@gmail.com', img: "https://www.kazoart.com/blog/wp-content/uploads/2017/05/jeune-fille-perle-vermeer-1024x675.jpg" },
    { id: 5, userName: 'Targaryen', email: 'Daenerys@gmail.com', img: "https://www.kazoart.com/blog/wp-content/uploads/2017/05/jeune-fille-perle-vermeer-1024x675.jpg" },
]

///////////////*
switch (type) {
    case "users":
       content = [
            `FullName`,
            "Email",
            "Birthday",
            "Gender",
            "Phone",
            "Adress",
            "Country",
            "City",
          ];
      break;
    case "products":
        content = [
            "Product_Name",
            "imgUrl",
            "Price",
            "Stock",
            " CreatedAt",
            " CreatedBy",
          ];
      break;

    default:
      break;
  }
//single page params
let userParams = [
    `FullName`,
    "Email",
    "Birthday",
    "Gender",
    "Phone",
    "Adress",
    "Country",
    "City",
  ];
  let productParams = [
    "Product_Name",
    "imgUrl",
    "Price",
    "Stock",
    " CreatedAt",
    " CreatedBy",
  ];

  let pp = {
    users: userParams,
    products: productParams,
  };

  let params = pp.users;
  console.log({ params });


  import './App.css';
import {useEffect, useState} from 'react'
import { getContacts, add, deleteContact } from './Actions/contactsAction';
import {useDispatch, useSelector} from 'react-redux'
function App() {
  const contacts = useSelector(state=>state.contactsReducer.contacts)
  const save = useSelector(state=>state.contactsReducer.save)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch( getContacts())
  },[])

  const [inputs, setInputs] = useState(
    {
      username:"",
      email:"",
      bio:""
    }
  )
  const handleChange = (e) =>{
    setInputs ({...inputs,[e.target.name]:e.target.value})
    
  }
  return (
    <div className="App">
       {contacts.map(el=>(<div>
        <h1>{el.username}</h1>
        <h6>{el.email}</h6>
        <h6>{el.bio}</h6>
        <button onClick={()=>dispatch(deleteContact(el._id))}>delete</button>
        <button>update</button>
        </div>))}
        <label>username</label>
        <input type="text" name="username" onChange={handleChange}/>
        <label>email</label>
        <input type="text" name="email" onChange={handleChange}/>
        <label>bio</label>
        <input type="text" name="bio" onChange={handleChange}/>
        <button onClick={()=>dispatch(add(inputs))}>{save? "Update":"Add User"}</button>
    </div>
  );
}

export default App;




