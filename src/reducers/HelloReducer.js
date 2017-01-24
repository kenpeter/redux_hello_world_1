// reducer to handle state change.
// const, why const, never change
// hello reducer
// (state, action) => {}
const HelloReducer = (state, action) => {
  // switch
  // check action.type,
  // create new state
  switch (action.type) {
    // case change_text
    case 'CHANGE_TEXT':
      // log
      console.log('CHANGE_TEXT from HelloReducer');
      // return
      // obj
      // assign
      // {}, init
      // old state
      // merge with 
      // keep merge to left
      // state is {text: text}
      return Object.assign({}, state, {text: action.text});
    default:
      // action unknown, so no state changes.
      console.log('Default value from HelloReducer');
      return state;
  }
}

// export default
// reducer
export default HelloReducer;
