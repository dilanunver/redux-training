import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addVegetable } from './redux/actions/newProduct'
import './App.css';

function App({
  vegetables, addVegetableAction
}) {


  const [inputValue, setInputValue] = useState('')


  return (
    <div >
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
      <input type='submit' onClick={() => addVegetableAction(inputValue)}></input>
      <ul>
        {Object.values(vegetables).map((vegetable) => vegetable.map((product, idx) => <li key={idx}>{product} </li>

        )

        )}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => (
  {
    vegetables: state.vegetablesReducer
  })


const mapDispatchToProps = {
  addVegetableAction: addVegetable
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
