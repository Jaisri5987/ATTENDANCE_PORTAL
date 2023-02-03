import axios from 'axios'



const fetchApprovals=({data,success,fail})=>{
    const {empCode,fromDate,toDate,statusString}=data;
    axios.get(`/one/approval/showApprovals?empCode=${empCode}&fromDate=${fromDate}&toDate=${toDate}&statusString=${statusString}`)
    .then(res => {
        if(res.status===200){
            success(res);
            }
    })
    .catch((err)=>{
        fail(err)
    })
}

const fetchSubordinates=({data,success,fail})=>{
    const {empCode}=data;
    axios.get(`/one/approval/fetchSubordinates/${empCode}`)
    .then(res => {
        if(res.status===200){
            success(res);
        }
    })
    .catch((err)=>{
        fail(err)
    })
}



export default {fetchApprovals,fetchSubordinates}

