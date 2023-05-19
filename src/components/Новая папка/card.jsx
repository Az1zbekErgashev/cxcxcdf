// import React from 'react';
// import UserData from '../utils/UserData';
// import { useState, useEffect } from 'react';
// const Card = () => {
//     const [arr, setArr] = useState([])
//     const [val, setVal] = useState('')
//     const [val1, setVal1] = useState('')
//     useEffect(()=>{ 
//         run()
//     },[])
//     function run(){
//         UserData.getusers()
//         .then(res =>{
//             console.log(res);
//             setArr(res)
//         })
//     }
//     function del(i){
//         UserData.delusers(i)
//         .then(res =>{
//             run()
//         })
//     }
//     function runAdd(id){
//         let data = {
//             'name': val,
//             'avatar': val1
//         }
//         UserData.postusers(id , data)
//         .then(res =>{
//             run()
//         })
//     }
//     function edit(id){
//         var data = {
//             'name': val,
//             'avatar': val1
//         }
//         UserData.putusers(id , data)
//         .then(res =>{
//             run()
//         })
//     }
//     const car = (
//         arr.map((iteam, index)=>{
//             return(
               
//                     <div className='card col-3 m-3'>
//                         <div><img src={iteam.avatar} alt="" /></div>
//                         <div>{iteam.name}</div>
//                         <div><button className='btn btn-danger' onClick={()=>del(iteam.id)}>del</button></div>
//                         <div><button>show</button></div>
//                         <div><button className='btn btn-dark' onClick={()=>edit(iteam.id)}>Edit</button></div>
//                     </div>
              
//             )
//         })
//     )
//     return (
//         <div>
//             <div>
//                 <input type="text" onInput={(i)=>setVal(i.target.value)} />
//                 <input type="text"  onInput={(i)=>setVal1(i.target.value)} />
//                 <button onClick={runAdd} className='btn btn-success'>Add</button>
//             </div>
//             {car}
//         </div>
//     );
// }

// export default Card;
