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
                        <h1>Menú</h1>
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
                        to="/ubicacion"
                    >
                        <h1>Ubicación</h1>
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
                        to="/comentarios"
                    >
                        <h1>Comentarios</h1>
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    {/* <span className="nav-item nav-link text-info">{currentUser.name} {currentUser.lastname} </span> */}



                    {
						authStatus ?
						(
							<>

              `<span className="nav-item nav-link text-info"><h2>{currentUser.name} {currentUser.lastname}</h2> </span>



              

              

								
									<NavLink
                    className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
										to="/carrito"
										
									>
                                    
              <span className="nav-item nav-link text-info"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg> </span>
											

                                        
									</NavLink>
									<NavLink
                    className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
										to="/"
										onClick={() => {logoutUser()}}
									>
										<h2>Cerrar sesión</h2>	

                                        	
									</NavLink>
								
								
							</>
						) :
						(
							<>
								
                  <NavLink 
                        className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
                        to="/registro"
                    >
                        <h2>Crear Cuenta</h2>
                  </NavLink>
								
								
                  <NavLink 
                        className={ ({ isActive}) => "nav-item nav-link" + (isActive ? " active" : '') }
                        to="/login"
                    >
                        <h2>Iniciar Sesión</h2>
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
