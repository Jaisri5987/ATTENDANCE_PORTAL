import axios from 'axios'


const simulatorLogin=({success,fail,data})=>{
   // const {empCode,inTime,outTime}=data;

    axios.post(`two/simulate/addSimulator`,data)
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
        else if(res.status===409)
        {
            success(res.response.data)
        }
    })
    .catch((err)=>{
        fail(err);
    })
}


export default {simulatorLogin}

