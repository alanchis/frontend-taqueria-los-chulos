

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
      <h3>Accede a mayores beneficios y promociones, creando una cuenta. </h3>
      
<br/>
<br/>
<br/>
<br/>

<div className="container">
<form onSubmit={(evt) => { handleSubmit(evt) }}>
<div class="form-floating mb-3">
  <input 
    name="name"
    value={data.name}
    onChange={(evt) => { handleChange(evt) }}
    type="text" class="form-control" id="floatingInput" />
  <label for="floatingInput">Nombre</label>
</div>

<div class="form-floating mb-3">
  <input
    name="lastname"
    value={data.lastname}
    onChange={(evt) => { handleChange(evt) }}
    type="text" class="form-control" id="floatingInput" />
  <label for="floatingInput">Apellido</label>
</div>

<div class="form-floating mb-3">
  <input
    name="email"
    value={data.email}
    onChange={(evt) => { handleChange(evt) }}
    type="email" class="form-control" id="floatingInput" />
  <label for="floatingInput">Email</label>
</div>

<div class="form-floating mb-3">
  <input
    name="password"
    value={data.password}
    onChange={(evt) => { handleChange(evt) }}
    type="password" class="form-control" id="floatingInput"/>
  <label for="floatingInput">Password</label>
</div>


<button type="submit" className="btn btn-primary">Iniciar sesión</button>
</form>
</div>

      









    </>


  )
}