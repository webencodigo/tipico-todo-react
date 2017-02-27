import React from 'react';
import ReactDOM from'react-dom';
import { createStore } from 'redux'

// Función reducer
const itemsReducer = (state = {},action) => {

	console.log('itemsReducer was called with state', state, 'and action', action);

	switch(action.type){
		case 'DI_ALGO':
		return {
        	...state,
           	comentario: action.comentario
            }
        default:
            return state;
	}

}

const actionCreator = () => {
	return {
		type: 'DI_ALGO',
		comentario: 'Hola k ase'
	}
}

let store = createStore(itemsReducer);

store.dispatch(actionCreator());

console.log(store.getState());

class Button extends React.Component {



	render(){

		return (
			<button onClick={this.props.onClick}>Pulsa este botón</button>
		);
	}

};

class App extends React.Component {
  
	handlerClick(){
		console.log('Que pasaaaa!')
	}

  render() {
  	console.log(this);
    return (
    	<div>
      	<h1>Hola desde React App</h1>
      	<Button myProp="fads" onClick={() => this.handlerClick()} />
      	</div>
    );
  }
};

export default App
