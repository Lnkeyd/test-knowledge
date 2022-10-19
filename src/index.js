import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reducer from './reducer';
import { createStore, bindActionCreators } from 'redux'

import * as actions from './actions'
//мы импортируем actions в качестве объекта
//TODO: git push --set-upstream origin redux

console.log(actions)

const store = createStore(reducer)

const {dispatch, subscribe, getState } = store

const update = () => {
  document.getElementById('counter').textContent = getState().value
}

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// bindActionCreators(actions, reducer)

//Turns an object whose values are action creators, 
//into an object with the same keys, 
//but with every action creator wrapped into a 
//dispatch call so they may be invoked directly.

//The only use case for bindActionCreators is when
//you want to pass some action creators down to a component
//that isn't aware of Redux, and you don't want to pass 
//dispatch or the Redux store to it.

const res = bindActionCreators(actions, dispatch)
console.log(res)
console.log(res.dec)
// |^|^|^|^|^|^|^|^|^|^|^|
//итог работы bindActionCreators => объект:
//  {
//  actionCreator1: () => {},
//  actionCreator2: () => {},
//  actionCreator3: () => {},
// },
//где каждый actionCreator обёрнут dispatch'ем

const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

//inc, dec, rnd здесь - это функции, которые
//возвращают dispatch(creator(...args))
//return dispatch(actionCreator.apply(this, arguments));

//мы можем называть эти функции как угодно,
//просто в этом часто нет особой необходимости
//и их называют так же, как и ключи в actions

//это позволяет нам сделать вместо этого:
// const {actionDispatch1, ad2, ad3} = bindActionCreators({
//  actionDispatch1: actionCreator1,
//  actionDispatch2: actionCreator2,
//  actionDispatch3: actionCreator3,
// }, dispatch)

const disp = bindActionCreators({
  actionDispatch1: actions.inc,
  actionDispatch2: actions.dec,
  actionDispatch3: actions.rnd,
 }, dispatch)
console.log(disp)

//вот это:
// const { inc, dec, rnd } = bindActionCreators({
//  inc: inc,
//  dec: dec,
//  rnd: rnd,
// }, dispatch)

//при одинаковых парах ключ-значение это сокращается в:
// const { inc, dec, rnd } = bindActionCreators({inc, dec, rnd}, dispatch)
//и так как у нас точно такие же ключи в объекте actions
//(это объект с нашими actionCreator'ами),
//то мы можем передавать в функцию сразу его, при этом
//функция сама вернёт объект с теми же ключами, что были в
//объекте actions, но обернёт значения этих ключей в dispatch()


//в общем, туда ты передаёшь объект и обозначаешь ключи, которые
//ты хочешь потом выцепить оттуда. Если тебе не важно, как именно
//записывать имена этих ключей, то можно просто оставить их
//такими же, как и в actions

//это всё делается, чтобы не вызывать самодельную ф-цию по сто раз
//всем добра ^^

subscribe(update)

document.getElementById('inc').addEventListener('click', inc)
document.getElementById('dec').addEventListener('click', dec)
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  rnd(value)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
