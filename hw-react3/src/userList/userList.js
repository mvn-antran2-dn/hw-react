import React, { useEffect, useState } from 'react'

export default function UserList() {
    const [number,setNumber] = useState(1)
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://reqres.in/api/users?page=${number}`)
  .then(response => response.json())
  .then(data => setData(data.data));
    },[number])
    console.log(...data);
  return (
   <>
   <div className='userList'>
       {data.map(item => {
           return(
        <div key={item.id} className='list'>
            <div className='list-content'> 
                <h2>{item.first_name}</h2>
                <h2>{item.email}</h2>
                <img src={item.avatar} alt='avatar' />
            </div>
        </div>
       )})}
      <div className='list-btn'> 
          <button  className='btn btn-list' onClick={()=> setNumber(number === 1 ? 1 : number - 1)}>Prev</button>
          <button  className='btn btn-list' style={number=== 1 ?{backgroundColor: "#9921c4",color:"#fff"}: {color:"red"}} onClick={()=> setNumber(1)}>1</button>
          <button  className='btn btn-list' style={number=== 2 ?{backgroundColor: "#9921c4",color:"#fff"}: {color:"red"}} onClick={()=> setNumber(2)}>2</button>
          <button  className='btn btn-list' onClick={()=> setNumber(number === 2 ? 2 : number + 1)}>Next</button>
      </div>
    </div>
   </>
  )
}

