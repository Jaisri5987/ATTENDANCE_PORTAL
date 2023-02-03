const mockapi=false;
import employees from './mockauth';
import simulatorService from '../serviceLayer/simulatorService';

const simulatorStore={
    state:{
       employees
    },
    actions:{
        SIMULATOR_LOGIN(context,{success,fail,data}){
           // const {empName,phoneNo,checkIn,checkOut}=data;
           console.log(context)
            if(mockapi){
                console.log(data)
                success(data);    
            }
            else{
                simulatorService.simulatorLogin({data,
                    success:(res)=>{
                        success(res.data)
                    },
                    fail:(err)=>{
                        fail(err)
                    }})
            }
          }
    },
    getters:{
        getEmployees(state){
            return state.employees;
          },
    },
    namespaced:true
}

export default simulatorStore;