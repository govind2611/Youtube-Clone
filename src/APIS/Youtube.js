import axios from 'axios'; 

const key = "AIzaSyCKFn5d2FKpDLuFXzI-fAFx9zKz-CpGfqg"; 




export default  axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params:{
        key: key, 
        maxResults: 20,
        part: "snippet"
    }
}) 


