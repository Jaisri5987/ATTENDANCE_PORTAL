import { mapGetters } from "vuex";

export default{
    computed:{
        ...mapGetters('authStore',['getUser'])
    },
    methods:{
        isManager(){
            console.log(this.getUser);
           return this.getUser?.role==="Manager"?true:false;
        },
        fetchEmployee(employee){
            const {empCode}=employee;
            this.SET_EMPLOYEE({success:this.onSuccessFetchEmp,fail:this.onFailFetchEmp,empCode})
        },
        onSuccessFetchEmp(res){
            console.log(res);
        },
        onFailFetchEmp(err){
            console.log(err)
        },
        getEmp(){
            return this.getEmployee;
        }
    }
}