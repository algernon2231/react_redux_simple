const initialState = {
  age: 21
}

const reducer = (state = initialState, action) => {
   const newState = {...state}
   switch(action.type){
     case 'UP':
       newState.age ++;
       break;
     case 'DOWN':
       newState.age --
      break;
     default:
       return newState    
   }
   return newState
}

export default reducer