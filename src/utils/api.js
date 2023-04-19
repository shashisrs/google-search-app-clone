import axios from 'axios';
const BASE_URL="https://customsearch.googleapis.com/customsearch/v1";

const params={
    key:"AIzaSyCF-K_Gjri8JLhe4wJON7Vv_5WGvC3AqDQ",
    cx:"7506989caefde4d2a"
}


export const fetchDataFromApi=async (payload)=>{
const {data}=await axios.get(BASE_URL,{
    params:{...params,...payload}
})
return data;
}