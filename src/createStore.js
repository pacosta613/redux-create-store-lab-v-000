export default function createStore(reducer) {

  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState( { type: "22INIT" } ) {
    return state
  }

  return { dispatch, getState };

}

function render() {
  const container = document.getElementById('container');
}
