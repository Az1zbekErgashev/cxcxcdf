import axios from "axios";
export const Baseurl = 'https://643a7e4cbd3623f1b9b4989e.mockapi.io/card2';
export const Baseurl2 = 'https://api.npoint.io/98792f12dbae96b6a9ff';
export const Baseurl3 = 'https://643a7e4cbd3623f1b9b4989e.mockapi.io/card'
const clon = axios.create({
    Baseurl,
    Baseurl2,
    Baseurl3c


})
export default clon
