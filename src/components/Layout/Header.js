import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'



export default function Header() {


	const ctxUser = useContext(UsersContext)

	const {
		currentUser,
		authStatus,
		logoutUser
	} = ctxUser



  return (
    <>
		<header>
			
			

      <nav className="navbar navbar-expand-sm navbar-light bg-light">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
            <img src="assets/logo100.png" alt="logo de los chulos" width="100px"/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
                        to="/menu"
                    >
                        Menú
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
                        to="/recomendaciones"
                    >
                        Recomendaciones
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">{currentUser.name} {currentUser.lastname} </span>



                    {
						authStatus ?
						(
							<>
								
									<NavLink
                    className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
										to="/"
										onClick={() => {logoutUser()}}
									>
										Cerrar sesión		
									</NavLink>
								
								
							</>
						) :
						(
							<>
								
                  <NavLink 
                        className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
                        to="/registro"
                    >
                        Crear Cuenta
                  </NavLink>
								
								
                  <NavLink 
                        className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
                        to="/login"
                    >
                        Iniciar Sesión
                  </NavLink>
								
							</>
						)

					}






                </ul>
            </div>
        </nav>








		</header>
	
	</>
  )
}
