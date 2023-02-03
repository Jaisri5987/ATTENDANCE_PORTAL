import authService from "@/serviceLayer/authService";
import { mapActions, mapGetters } from "vuex"



export default{
    name:'Simulator',
    data(){
        return {
            empCode:"",
            checkIn:new Date(),
            checkOut:new Date(),
            setEmpcode:[]
        }
    },
    mounted(){
        authService.getEmployees({success:(data)=>{
                console.log(data);
                this.setEmpcode=data;
        },
        fail:(err)=>{
            console.log(err)
        }})
    },
    computed:{
        ...mapGetters('simulatorStore',['getEmployees'])
    },
    methods:{
        ...mapActions('simulatorStore',['SIMULATOR_LOGIN']),
            logger()
            {
                const empCode=this.empCode;
                const checkIn=this.checkIn;
                const checkOut=this.checkOut;
                const data={empCode,inTime:checkIn,outTime:checkOut}
                console.log(data)
                // this.$bvToast.toast("data is added", {
                //     title: 'Error',
                //     variant: 'danger',
                //     solid: true,
                //     delay:2000
                //   })
                this.clearFields();
                this.SIMULATOR_LOGIN({
                    success:this.handlesuccessLogin,
                    fail:this.handlefailLogin,
                    data:data
                })   
            },
            clearFields(){
                this.empCode="";
                this.checkIn=new Date();
                this.checkOut=new Date();
            },
            handlesuccessLogin(data){
                this.clearFields();
                alert(data)
            },
            handlefailLogin(err)
            {
                this.clearFields();
                console.log(err.response.data);
                // alert(err.response.data);
            }
    }
}