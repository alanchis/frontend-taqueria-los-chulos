
import {useState, useContext} from 'react'


import UsersContext from './../../context/Users/UsersContext'


export default function Login() {

  const ctxUser = useContext(UsersContext)

  const {
    loginUser
  } = ctxUser


  const [data, setData] = useState({
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

    loginUser(data)

  }


  return (
	  <>
<br/>
<br/>
<br/>
<br/>
<br/>




<div className="container">
<form onSubmit={(evt) => { handleSubmit(evt) }}>
<div class="form-floating mb-3">
  <input 
    name="email"
    value={data.email}
    onChange={(evt) => { handleChange(evt) }}
    type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email </label>
</div>
<div class="form-floating">
  <input
    name="password"
    value={data.password}
    onChange={(evt) => { handleChange(evt) }}
    type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
 <br/>

<button type="submit" className="btn btn-primary">Iniciar sesión</button>
</form>
</div>

      
















    
    </>
  )
}