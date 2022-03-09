import React from 'react'
import { useState, useContext } from 'react'
import { nanoid } from "nanoid"
import CommentsContext from '../../context/Comentarios/CommentsContext'


export default function Comentarios() {


    const ctxComments = useContext(CommentsContext)

	const {
		comments,
		getComments,
		createComment
	} = ctxComments



	const [newComment, setNewComment] = useState({
		name: "",
		description: ""
	})

	const [list, setList] = useState([])

	const handleChange = (event) => {

		setNewComment({
			...newComment,
			id: nanoid(),
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

	}


  return (
	<>

		<h1>Crear comentario</h1>
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

		</form>

		<h1>Listado de comentarios</h1>

		<button onClick={() => { getComments() }}>
			Obtener comentarios
		</button>
		<div>
		{
			comments.map((elt) => {
				return (
					<div key={elt.description}>
						<h1>{elt.name}</h1>
						<p>{elt.description}</p>
					</div>
				)
			})
		}
		</div>


		<hr />

	
	</>
  )
}
