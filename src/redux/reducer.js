const initState = {
    a: 0,
    b: 0,
}

export const reducer = (state=initState,action) => {
    const {type,data} = action
    switch(type){
        case 'A1':
            return {
                ...state,
                a: data,
            }
        case 'A2':
            return {
                ...state,
                b: data,
            }
        default:
             return initState;
    }
}