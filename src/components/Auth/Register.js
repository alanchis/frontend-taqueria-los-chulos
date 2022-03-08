

import { useState, useContext } from 'react'

import UsersContext from './../../context/Users/UsersContext'

export default function Register() {

  const ctxUser = useContext(UsersContext)

  const {
    registerUser
  } = ctxUser


  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: ""
  })


  const handleChange = (event) => {
    
    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()

    registerUser(data)

  }

  return (
    <>
      <form onSubmit={(evt) => { handleSubmit(evt) }}>
          <div className="form-group">
            <label for="exampleInputEmail1">Nombre </label>
            <input 
                name="name"
                value={data.name}
                onChange={(evt) => { handleChange(evt) }}
                type="text" className="form-control" id="exampleInputEmail1"  placeholder="Nombre"/>
            
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Apellido </label>
            <input 
                name="lastname"
                value={data.lastname}
                onChange={(evt) => { handleChange(evt) }}
                type="text" className="form-control" id="exampleInputEmail1"  placeholder="Apellido"/>
            
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email </label>
            <input 
                name="email"
                value={data.email}
                onChange={(evt) => { handleChange(evt) }}
                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa email"/>
            
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
                name="password"
                value={data.password}
                onChange={(evt) => { handleChange(evt) }}
              type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>

  <button type="submit" className="btn btn-primary">Crear Usuario</button>
</form>









    </>


  )
}