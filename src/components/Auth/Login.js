
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

<form onSubmit={(evt) => { handleSubmit(evt) }}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email </label>
    <input 
        name="email"
        value={data.email}
        onChange={(evt) => { handleChange(evt) }}
        type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input
        name="password"
        value={data.password}
        onChange={(evt) => { handleChange(evt) }}
       type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="submit" className="btn btn-primary">Iniciar sesión</button>
</form>

      
















      {/* <form onSubmit={(evt) => { handleSubmit(evt) }}>
        <label><h2>Email</h2></label>
        <input 
          name="email"
          value={data.email}
          onChange={(evt) => { handleChange(evt) }}
        />

        <br />

        <label><h2>Password</h2></label>
        <input 
        name="password"
        value={data.password}
        onChange={(evt) => { handleChange(evt) }}
        type="password"
        />

        <br />

        <button type="submit" ><h1>Iniciar sesión</h1></button>

      </form> */}


    </>
  )
}