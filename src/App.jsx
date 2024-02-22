"use client"
import { useState } from 'react'


function App() {

  const color1 =  {
    backgroundColor: '#272829'
  }
  const color2 =  {
    backgroundColor: '#61677A'
  }
  const color3 =  {
    backgroundColor: '#D8D9DA'
  }
  const color4 =  {
    backgroundColor: '#FFF6E0'
  }
  

  const [ title , setTitle] = useState();
  const [dsc, setDsc] = useState();
  const [maintask , setmaintask ] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([ ...maintask , {title, dsc} ])
    setTitle("");
    setDsc("");
  };

  const deleteHandler = (i) => {
    let lastTask = [...maintask];
    lastTask.splice(i,1);
    setmaintask(lastTask);
  }

let noTask = <div className=' w-full flex justify-center'> <h2 className=' text-yellow-50'  > NO TASK AVAILABLE </h2></div>;

if(maintask.length > 0 ){
  noTask = maintask.map((t , i) => {
    return(
      <div className=''>
        <div className=' relative w-48 h-60 m-5' >  

          <button onClick={ () => deleteHandler(i)} style={{ backgroundColor:"#FFF6E0" , color:"#61677A"}}
            className=' absolute bottom-0 w-full h-10  rounded-b-xl font-medium'> Delete </button>

          <div style={{ backgroundColor:"#61677A" }} className=' w-48 h-60 p-3 rounded-xl  bg-gray-800 '>

            <h3 className=' text-xl font-semibold'>{t.title}</h3>
            <h5>{t.dsc}</h5>

          </div>
          
        </div>
      </div>   
  );
  });
}

  return (
    <div className=' h-screen w-full' style={color1}>

      <div className=' w-full flex justify-center items-center '>
      <div style={{  color:"#FFF6E0"}} className=' border-4 border-yellow-50 flex justify-center items-center h-12  text-2xl  font-medium rounded-full px-10 mt-5'>Warfare To-Do List</div>
      </div>
 
      <form onSubmit={submitHandler} action="" className=' w-full flex flex-wrap justify-center items-center my-3'>

        <input type="text" value={title} onChange={ (e) => {setTitle(e.target.value)}}
        placeholder='Enter Title' style={{ backgroundColor:"#61677A" , color:"#FFF6E0"}}
        className=' bg-blue-950 m-4 h-8 rounded-md placeholder p-2 ' />

        <input type="text" value={dsc} onChange={ (e) => {setDsc(e.target.value)}}
        placeholder='Enter Description' style={{ backgroundColor:"#61677A" , color:"#FFFFFF"}}
        className=' bg-blue-950 m-4 h-8 rounded-md p-2'/>

        <button style={{ backgroundColor:"#FFF6E0" , color:"#61677A"}}
        className=' rounded-md bg-blue-800 text-white font-semibold h-8 px-3'> Add + 
        </button>

      </form>

      <hr className='  border-gray-700 mb-5 ' />

        <div className=' flex justify-centre w-full  text-white '>
          {noTask}
        </div>

    </div>
  )
}

export default App
