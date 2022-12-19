const redux = require('redux');

//----------REDUCER
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return { counter: state.counter + 1 }
    }
    if (action.type === 'DECREMENT') {
        return { counter: state.counter - 1 }

    }
}


const store = redux.createStore(counterReducer)

//suscription, THIS HAPPENDS EVERYTIME we send a dispatch
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState);
}

store.subscribe(counterSubscriber)

// console.log(store.getState())

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })