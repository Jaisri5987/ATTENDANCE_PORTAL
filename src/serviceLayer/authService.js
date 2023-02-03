import axios from 'axios'


const authUser=({success,fail,data})=>{
    const {email,password}=data;
    var x={email:email,password:password}
    console.log(data)
    axios.post(`one/emp/authUser`,x)
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
        else if(res.status >=400 && res.status<=499)
        {
            fail(res.message)
        }
    })
    .catch((err)=>{
        fail(err);
    })
}

const getEmployees=({success,fail})=>{
    axios.get(`two/emp/showEmployee`)
    .then((res)=>{
        if(res.status===200){
        success(res);
        }
    })
    .catch((err)=>{
        fail(err);
    })
}

export default {authUser,getEmployees}

