

const ifResponseCanBeUndefined = (response, actionCreator, dispatch, navigate) => {
    if (!response) {
        dispatch(actionCreator(response))
        navigate('/login')
    } else {
        dispatch(actionCreator(response.data))
    }
}

export default ifResponseCanBeUndefined;