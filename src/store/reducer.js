const initState = {
    list:[],
    inputValue:''
}
export default (state=initState,action)=>{
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'input-change':
            newState.inputValue=action.value
            break;
        case 'input-delete':
            newState.list.splice(action.index,1)
            break;
        case 'input-add':
            newState.list.push(newState.inputValue)
            newState.inputValue=''
            break;
        default:

    }
    return newState
}