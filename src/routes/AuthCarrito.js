

import { useContext, useState, useEffect } from 'react'

import { Navigate } from 'react-router-dom'
import UsersContext from './../context/Users/UsersContext'


export default function AuthCarrito({ component: Component }) {

	const userCtx = useContext(UsersContext)

	const { 
		authStatus, 
		verifyingToken } = userCtx


	useEffect(() => {
		verifyingToken()
	}, [authStatus])


  return (
	<div>

		{
			authStatus ?
			// SI EL USUARIO YA ESTÁ LOGGEADO, ENTONCES, ENVÍAME AL HOME
			(<Component />)
			:
			// SI EL USUARIO NO ESTÁ LOGGEADO, ENTONCES, DÉJAME ACCEDER AL COMPONENTE PROP QUE TRAE LA RUTA
			
            (<Navigate replace to ="/" />)
		}

		
	</div>
  )
}