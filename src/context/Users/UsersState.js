

import { useReducer } from 'react'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'


import UsersReducer from './UsersReducer'
import UsersContext from './UsersContext'

import axiosClient from './../../config/axios'

const UsersState = (props) => {

	const initialState = {
		currentUser: {
			name: "",
			lastname: "",
			email: ""
		},
		authStatus: false
	}


	const [globalState, dispatch] = useReducer(UsersReducer, initialState)


	const registerUser = async (form) => {

		const res = await axiosClient.post("/api/users/create", form)

		const token = res.data.data

		dispatch({
			type: "REGISTRO_EXITOSO",
			payload: token
		})

	}

	const verifyingToken = async () => {

		// 1. VERIFICACIÓN DE TOKEN

		const token = localStorage.getItem("token")

		if (!token){
			return delete axiosClient.defaults.headers.common["x-auth-token"]
		}

		// ADJUNTO EL TOKEN A LA SIGUIENTE PETICIÓN DE AXIOS
		axiosClient.defaults.headers.common["x-auth-token"] = token

		// 2. REALIZAR PETICIÓN AXIOS
		const res = await axiosClient.get("/api/users/verifytoken")
		
		const userData = res.data.data

		dispatch({
			type: "VERIFICAR_TOKEN",
			payload: userData
		})

	}
	
	const loginUser = async (form) => {

		const res = await axiosClient.post("/api/users/login", form)

		const token = res.data.data

		dispatch({
			type: "LOGIN_EXITOSO",
			payload: token
		})

		



	
	}

	const logoutUser = async () => {

		dispatch({
			type: "CERRAR_SESION"
		})

		 
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Se ha cerrado sesión con éxito',
			showConfirmButton: false,
			timer: 1500
		  })

		//window.alert("Se ha cerrado sesión con éxito");

	}


	return (
		<UsersContext.Provider
			value={{
				currentUser: globalState.currentUser,
				authStatus: globalState.authStatus,
				registerUser,
				verifyingToken,
				loginUser,
				logoutUser
			}}
		>
			{props.children}
		</UsersContext.Provider>
	)

}
 


export default UsersState