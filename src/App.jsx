import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import logo from './logo.svg';

function App() {
  const dispatch = useDispatch()
  const out = useSelector(state => state.out)
  const pages = useSelector(state => state.pages)
  const page = useSelector(state => state.page)
  const limit = useSelector(state => state.limit)



  useEffect(() => {
    dispatch({
      type: "NEW_PAGE"
    })
    console.log("render...")
  }, [page, limit])







  return (
    <div className="App">
      Limit: {limit}
      <button onClick={() => {
        let lim = +prompt("Скок?")
        dispatch({
          type: "LIMIT",
          payload: +lim
        })
      }}>Change Limit</button>


      <ul>
        {out.map(el => {
          return <li>{el.id}</li>
        })}
      </ul>
      

      <div className="pages">
        {pages.map(el => {
          return<div className="page" onClick={() => {
            dispatch({
              type: "SET_PAGE",
              payload: +el
            })
          }}>{el+1}</div>
        })}
        
      </div>
    </div>
  );
}

export default App;
