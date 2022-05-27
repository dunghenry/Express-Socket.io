function logger(reducer) {
    return (prevState, action) => {
        console.log(action.type)
        console.log("PrevState: ", prevState);
        console.log(action)
        const newState = reducer(prevState, action);
        console.log("NextState: " , newState);
        console.groupEnd()
        return newState;
    }
}
export default logger;