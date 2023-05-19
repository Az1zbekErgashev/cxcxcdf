

import { Baseurl3 } from "./Fletch";
import clone from "./Fletch";

class UserTable {
    async postusers(id, data){
                let user = clone.post(`${Baseurl3}`, data)
                .then((res)=>{
                    return res.data
                })
                .catch((e)=> {})
                return user
            }
}

export default new UserTable


// import { Baseurl } from "./Fletch";
// // import { Baseur2 } from "./Fletch";
// import clone from "./Fletch";

// class userData {
//     async getusers(){
//         var user = clone.get(`${Baseurl}`)
//         .then((res)=>{
//             return res.data
//         })
//         .catch((e)=> {console.log(e);})
//         return user
//     }
//     async delusers(id){
//         let user = clone.delete(`https://643a7e4cbd3623f1b9b4989e.mockapi.io/card2/${id}`)
//         .then((res)=>{
//             return res.data
//         })
//         .catch((e)=> {})
//         return user
//     }
//     async postusers(id, data){
//         let user = clone.post(`https://643a7e4cbd3623f1b9b4989e.mockapi.io/card2`, data)
//         .then((res)=>{
//             return res.data
//         })
//         .catch((e)=> {})
//         return user
//     }
//     async putusers(id, data){
//         let user = clone.put(`https://643a7e4cbd3623f1b9b4989e.mockapi.io/card2/${id}`, data)
//         .then((res)=>{
//             return res.data
//         })
//         .catch((e)=> {})
//         return user
//     }

// }
// export default new userData