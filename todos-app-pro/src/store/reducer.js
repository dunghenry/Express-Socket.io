import {GET_TODOS, ADD_TODO, SET_TITLE, SET_DES, DELETE_TODO, SET_ID_UPDATE, UPDATE_TODO, MARK_COMPLETED} from './constants'
export const initialState = {
    todos: [],
    title: '',
    des: '',
    idUpdate: undefined,
    isUpdate: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: [...action.payload]
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case SET_DES:
            return {
                ...state,
                des: action.payload
            }
        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload)
            }
        }
        case SET_ID_UPDATE: {
            return {
                ...state,
                isUpdate: action.payload ? true : false,
                idUpdate: action.payload && action.payload,
                title: action.payload ? (state.todos.find(todo => todo._id === action.payload)).title : '',
                des: action.payload ? state.todos.find(todo => todo._id === action.payload).description : ''
            }
        }
        case UPDATE_TODO: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.payload._id) {
                        todo.title = action.payload.title;
                        todo.description = action.payload.description
                    }
                    return todo;
                })
            }
        }
        case MARK_COMPLETED: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.payload._id) {
                        todo.completed = action.payload.completed;
                    }
                    return todo
                })
            }
        }
        default:
            return state;
    }
}

export default reducer;