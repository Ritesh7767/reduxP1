export const ADD = 'addition'
export const SUB = 'subtraction'

const initialState = {
    value : 0
}

const CoutnerSlice = (state = initialState, action) => {
    switch(action.type){
        case ADD : return {value : state.value += 1}
        case SUB : return {value : state.value -= 1}
        default : return state
    }
}

export default CoutnerSlice