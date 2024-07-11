import React from 'react'
import { useState } from 'react'
const todolist = () => {
    const [activity, setactivity] = useState("")
    const [listdata, setlistdata] = useState([])
    function addactivity(){
        setlistdata([...listdata,activity])
        setactivity('');
        // console.log(listdata)  
        // setlistdata((listdata)=>{
        //    const updatedlist= setlistdata([...listdata,activity])
        //    setactivity('');
        //    return updatedlist
        // })
    }
    function removeactivity(i){
   const newlist =  listdata.filter((element,id)=>{
        return i!=id
      })
      setlistdata(newlist)
    }
    function remove(){
        setlistdata([])
    }
    
    
    
  return (
    <div className='container'>
      <div className="heading">Todo List</div>
      <input  type="text" placeholder='Add Activities' value={activity} onChange={(e)=>{setactivity(e.target.value)}} />
      <button id="btn" onClick={addactivity}>Add(+)</button>

      <p id='headd' >Here is your list data {"(:"}</p>
      {listdata!=[] && listdata.map((data,i)=>{
        return(
            <>
               <div key={i} className="cont">
                <div  className='newitems'>{data} </div>
                <button id="btn1" onClick={()=>{removeactivity(i)}}>remove(-)</button>
                </div>
            </>
        )
      })}
 {listdata.length>=1 && <button id="btn2" onClick={remove}>Remove all</button>}

    </div>
  )
}

export default todolist
