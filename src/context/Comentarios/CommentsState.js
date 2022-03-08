import { useReducer } from 'react'

import axiosClient from '../../config/axios'

import CommentsContext from './CommentsContext'
import CommentsReducer from './CommentsReducer'

const CommentsState = (props) => {

	const initialState = {

		comments: []

	}


	const [globalState, dispatch] = useReducer(CommentsReducer, initialState)

	const getComments = async () => {

		const res = await axiosClient.get("/api/comentarios")

		const arrCats = res.data.data

		dispatch({
			type: "GET_Comments",
			payload: arrCats
		})

	}

	const createComment = async (dataForm) => {

		await axiosClient.post("/api/comentarios/create", dataForm)

		getComments()

	}


	return (
		<CommentsContext.Provider
			value={{
				comments: globalState.comments,
				getComments,
				createComment
			}}
		>
			{props.children}
		</CommentsContext.Provider>
	)


}


export default CommentsState
















