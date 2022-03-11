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
		const arrComments = res.data.data
		console.log(arrComments)

		dispatch({
			type: "GET_COMMENTS",
			payload: arrComments
		})


	}

	const createComment = async (dataForm) => {
		await axiosClient.post("/api/comentarios/create", dataForm)
		getComments()
	}


    const deleteComment = async (id) => {

        const res = await axiosClient.post(`/api/comentarios/delete/${id}`)

        getComments()
    }

    const editComments = async (comment) => {

        const res = await axiosClient.post(`/api/comentarios/comment/edit/${comment._id}`, comment)
        dispatch({
            type: "EDIT_COMMENT",
            payload: comment
        })

    }





	
	return (
		<CommentsContext.Provider
			value={{
				comments: globalState.comments,
				getComments,
				createComment,
				deleteComment,
				editComments
				
			}}
		>
			{props.children}
		</CommentsContext.Provider>
	)




}


export default CommentsState
















