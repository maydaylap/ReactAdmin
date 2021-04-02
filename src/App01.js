/*
 * @Author: your name
 * @Date: 2021-03-05 11:20:53
 * @LastEditTime: 2021-03-26 16:32:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/src/App.js
 */
import React,{useState,useContext} from 'react';
import './App.css';

function App() {
  const AppContext = React.createContext();
  const Achild = ()=>{
    const {name} = useContext(AppContext)
    return (
      <div>
        这是组件A，使用的name{name}
      </div>
    )
  }
  return (
    <AppContext.Provider value={{name:"zhao"}}>
      <Achild></Achild>

      <Bchild></Bchild>
    </AppContext.Provider>
  );
}

export default App;
