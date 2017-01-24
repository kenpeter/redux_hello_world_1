// const reducer
// const action
// one reducer, multiple actions
// basically, put some payload into action
// (new_text) => {}
const HelloAction = (newText) => {
  // console
  console.log('from HelloAction.js');
  
  // return {}, action obj
  return {
    // type for reducer to change states.
    type: 'CHANGE_TEXT',
    // payload
    text: newText
  }
}

// export default
// action
export default HelloAction;
