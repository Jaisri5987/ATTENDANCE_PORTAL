const mockapi=false;
import employees from './mockauth';
import AuthService from '../serviceLayer/authService';


function checkUserInLocalStorage(){
    return localStorage.getItem('user')?localStorage.getItem('user'):{};
}

const authStore={
    state:{
        user:checkUserInLocalStorage(),
       employees
    },

    mutations:{
    setLogin(state,employee)
    {
        localStorage.setItem('user',JSON.stringify(employee));
        state.user=JSON.stringify(employee);
    },
    setLogout(state)
    {
      localStorage.removeItem('user');
      state.user={}
    }
    },
    actions:{
        AUTH_LOGIN({commit},{success,fail,data}){
            const {email,password}=data;
            let authemp;
            if(mockapi){
                authemp=employees.findIndex((emp)=>{
                    return emp.email=== email && emp.password==password
                });
               // const {empCode,role}=employees[authemp];

                commit("setLogin",employees[authemp]);
                success(employees[authemp]);    
            }
            else{
                AuthService.authUser({data,
                    success:(res)=>{
                        commit("setLogin",res.data);
                        success(res.data)
                        
                    },
                    fail:(err)=>{
                        fail(err)
                    }})
            }
          },
         AUTH_LOGOUT({commit}){
              commit("setLogout");
          }
    },
    getters:{
        getUser(state){
            console.log(state.user)
            return JSON.parse(state.user);
          },
    },
    namespaced:true
}

export default authStore;