import axios from 'axios';
import { ADD_TODO, GET_TODOS, SET_TITLE, SET_DES, DELETE_TODO, SET_ID_UPDATE, UPDATE_TODO, MARK_COMPLETED} from './constants';
import { toast } from 'react-toastify';
export const getTodos = async () => {
    try {
        const res = await axios.get('https://express-mongodb-todos.herokuapp.com/api/v1/todos');
        const payload = res.data
        return {
            type: GET_TODOS,
            payload
        };
    } catch (error) {
        console.log(error)
        return toast.error(error.response.data);
    }
}
export const setTitle = (payload) => {
    return {
        type: SET_TITLE,
        payload
    }
}
export const setDes = (payload) => {
    return {
        type: SET_DES,
        payload
    }
}
export const addTodo = async(data) => {
    try {
        const res = await axios.post('https://express-mongodb-todos.herokuapp.com/api/v1/todos', data);
        const payload = res.data;
        if (payload) {
            toast.success(res.statusText)
        }
        return {
            type: ADD_TODO,
            payload,
        };
    } catch (error) {
        console.log(error.response.data);
        return toast.error(error.response.data);
    }
}
export const deleteTodo = async (id) => {
    try {
        const res = await axios.delete(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`);
        let payload = id
        if (res) {
            toast.success(res.data)
        }
        return {
            type: DELETE_TODO,
            payload

        }
    } catch (error) {
        console.log(error.response.data);
        return toast.error(error.response.data);
    }
}

export const setIdUpdate = payload => {
    return {
        type: SET_ID_UPDATE,
        payload
    }
}

export const updateTodo = async (id, data) => {
    try {
        const res = await axios.put(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`, data);
        let payload = res.data;
        toast.success("Updated successfully!")
        return {
            type: UPDATE_TODO,
            payload
        }
    } catch (error) {
        console.log(error.response.data);
        return toast.error(error.response.data);
    }
}

export const markCompleted = async(id) => {
    try {
        const res = await axios.get(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`);
        const payload = res.data;
        payload.completed = !payload.completed;
        // console.log(payload)
        await axios.put(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`, payload);
        toast.success("Mark update completed successfully!")
        return {
            type: MARK_COMPLETED,
            payload
        }
    } catch (error) {
        console.log(error.response.data);
        return toast.error(error.response.data);
    }
}
