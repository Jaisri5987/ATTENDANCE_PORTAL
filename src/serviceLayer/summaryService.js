import axios from 'axios'

const getSummaryEmp=({data,success,fail})=>{
    const {empCode}=data;
    axios.get(`/one/time/fetchEmpSummary/${empCode}`)
    .then(res => {
        if(res.status===200){
            success(res);
            }
    })
    .catch((err)=>{
        fail(err)
    })
}


const generateSummary=({data,success,fail})=>{
    const {empCode,fromDate,toDate}=data;
    axios.get(`/one/time/generateSummary?empCode=${empCode}&fromDate=${fromDate}&toDate=${toDate}`)
    .then(res => {
        if(res.status===200){
            success(res);
            }
    })
    .catch((err)=>{
        fail(err)
    })
}

const fetchSummary=({success,fail,data})=>{
    const {offset}=data;
    axios.get(`https://api.example.com/items?offset=${offset}`)
    .then(res => {
        if(res.status===200){
            success(res);
            }
    })
    .catch((err)=>{
        fail(err)
    })
}


export default {fetchSummary,getSummaryEmp,generateSummary}

