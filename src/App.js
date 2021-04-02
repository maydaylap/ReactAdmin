/*
 * @Author: your name
 * @Date: 2021-03-05 11:20:53
 * @LastEditTime: 2021-03-31 21:17:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/src/App.js
 */
import React,{useContext,useEffect,useMemo, useState, useCallback} from 'react';
import { Button } from 'antd';
import './App.css';

const usePerson = (name) => {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState({})
  
    useEffect(() => {
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
        setPerson({name})
      },2000)
    },[name])
    return [loading,person]
  }
  
  const AsyncPage = ({name}) => {
    const [loading, person] = usePerson(name)
      return (
        <>
          {loading?<p>Loading...</p>:<p>{person.name}</p>}
        </>
      )
    }
  
  const App = () =>{
    const [target, setTarget] = useState(0);
    const [other, setOther] = useState(0)
  
    const sum = useMemo(() => {
      console.log('重新计算一次');
      let _sum = 0;
      for (let i = 1; i <= target; i++) {
        _sum += i;
      }
      return _sum;
    }, [target]);
  
    const inputChange = useCallback((e) => {
      console.log(e.target.value);
    }, []);
  
    return (
      <div style={{ width: '200px', margin: 'auto' }}>
        <input type="text" onChange={inputChange} />
        <div style={{ width: '80px', margin: '100px auto', fontSize: '40px' }}>{target} {sum}</div>
        <Button onClick={() => setTarget(target + 1)}>递增</Button>
        <Button onClick={() => setTarget(target - 1)}>递减</Button>
  
        <div style={{ width: '80px', margin: '100px auto', fontSize: '20px' }}>干扰项 {other}</div>
        <Button onClick={() => setOther(other + 1)}>递增</Button>
        <Button onClick={() => setOther(other - 1)}>递减</Button>
      </div>
    )
  }

export default App;
