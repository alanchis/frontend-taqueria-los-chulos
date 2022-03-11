import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Swal from 'sweetalert2'

import CommentsContext from '../../context/Comentarios/CommentsContext'


export default function Comentarios() {


    const ctxComments = useContext(CommentsContext)

	const {
		comments,
		getComments,
		createComment,
		editComments,
		deleteComment

	} = ctxComments

	const foundComment = comments.find((oneComment) => {

      
    })



	const [newComment, setNewComment] = useState({
		name: "",
		description: ""
	})



	const handleChange = (event) => {

		setNewComment({
			...newComment,
			[event.target.name]: event.target.value
		})
	}


	const handleSubmit = (event) => {	
		event.preventDefault()

		createComment(newComment)

		setNewComment({
			name: "",
			description: "",
		})

	 
		Swal.fire('Comentario realizado con éxito')



	}

	useEffect(() => {(getComments())},[])



  return (
	<>

	<h1>Crear comentario</h1>

		<div className="container">
		<form onSubmit={(evt) => { handleSubmit(evt) }}>
		<div class="form-floating mb-3">
		<input 
			name="name"
			value={newComment.name}
			onChange={(evt) => { handleChange(evt) }}
			type="text" class="form-control" id="floatingInput" placeholder="aa"/>
		<label for="floatingInput">Nombre </label>
		</div>
		<div class="form-floating">
		<input
			name="description"
			value={newComment.description}
			onChange={(evt) => { handleChange(evt) }}
			type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
		<label for="floatingInput"> Comentario</label>
		</div>
		<br/>

		<button type="submit" className="btn btn-primary">Crear</button>
		</form>
		</div>




		{/* <h1>Crear comentario</h1>
		<form onSubmit={(evt) => { handleSubmit(evt) }}>
			<label>Nombre</label>
			<input 
				name="name"
				value={newComment.name}
				onChange={(evt) => { handleChange(evt) }}
			/>

			<label>Descripción</label>
			<input 
				name="description"
				value={newComment.description}
				onChange={(evt) => { handleChange(evt) }}
			/>

			<button type="submit">Crear comentario</button>

		</form> */}

		<br/>
		<br/>
		<br/>
		<br/>
		<h1>Listado de comentarios</h1>

		<hr/>
		<br/>



		<div>
		{/* {
			comments.map((elt) => {
				return (
					<div key={elt._id}>
						<h1>{elt.name}</h1>
						<p>{elt.description}</p>
					</div>
				)
			})
		} */}
		</div> 

		<Container>
      <Row xs={1} className="g-4">
        {comments.map((elt) => (
          <Col xs={6}>
            <Card>
              <Card.Img variant="top" fluid="true"  />
              <Card.Body>
                <Card.Title>
				<div key={elt._id}>
						<h3>{elt.name}</h3>
						<p>"{elt.description}"</p>
						<button type="button" className="btn btn-primary">Editar</button>
						<button		
							type="submit" className="btn btn-danger">Borrar</button>
						

					</div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

		


		<hr />

	
	</>
  )
}
