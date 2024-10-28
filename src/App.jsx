

import { useState ,useEffect} from 'react'
import './App.css'
import Header from './header';
import Post from './Post';


function App() {
  const [getData,setData]=useState([]);
  
  useEffect(()=>{
   fetch("../public/Data.json")
   .then(res=>res.json())
   .then(data=>setData(data))
  },[])
 
  
 
  return (
    <>
     <div className='max-w-6xl'>
      <Header></Header>
       <div className='w-[90%] border-2 mx-auto'>
         <div className='w-[70%] border-2'>
            {
              getData.map((dataItem)=><Post item={dataItem} ></Post>)
            }
         </div>
       </div>
     </div>
  
    </>
  )
}

export default App
