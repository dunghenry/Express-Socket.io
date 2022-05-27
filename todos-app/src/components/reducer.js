import { ADD_TODO, REMOVE_TODO, SET_TODO, SET_ID_UPDATE, UPDATE_TODO} from "./constants";
export const initialState = {
    title: '',
    todos: [],
    idUpdate: undefined
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                title: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case SET_ID_UPDATE: {
            const todo = state.todos.find(todo => todo.id === action.payload)
            return {
                ...state,
                idUpdate: action.payload,
                title: todo && todo.title
            }
        }
        case UPDATE_TODO: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === state.idUpdate) {
                        todo.title = action.payload.title
                    }
                    return todo;
                }),
            }
        }
        default:
            return state;
    }
}
export default reducer;