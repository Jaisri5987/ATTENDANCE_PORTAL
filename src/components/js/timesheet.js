
import DatePicker from "../DatePicker.vue";
import TimesheetService from '../../serviceLayer/timeSheetService';
import { mapGetters } from "vuex";

export default{
    data(){
        return { 
            WFH:' ',
            Office:' ',
            checkIn:'',
            checkOut:'',
            productiveHours:' ',
            ChechInCheckOut:'',
            Work_from_home:' ',
            office:' ',
            workingDate:'',
            calculatedHours:'',
            leaveType:'',
            period:'',
            inType:{
                "Halfday":0.5,
                "Fullday":1
              },
             
        }
    }, 

    components:{
        DatePicker
    },

    methods:{
  
      sum() {
        var txtFirstNumberValue ="0";
         txtFirstNumberValue = document.getElementById('txt1').value;
        var txtSecondNumberValue = document.getElementById('txt2').value;
        
        var result = parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue);
       
        if(!isNaN(result)){
           this.productiveHours= result;
          
        }
},
    
        submit()
        {
          // alert(this.WFH)
          this.$router.push('/home')

        },
      
       
          getSelectedDate(date)
          {
            const user=this.getUser
            console.log("date: "+date)
            this.workingDate=date;
            this.checkIn=new Date(date);

            TimesheetService.calculatedHours({
              success:(res)=>{
                this.calculatedHours=res.data
                  console.log(res);
              },
              fail:(err)=>{
                console.log(err)
              },
              data:{
                empCode:user?.empCode,
                workingDate:this.workingDate
              }
            })
          },

          check()
          {
            const user=this.getUser
            TimesheetService.ChechInCheckOut({
              success:(res)=>{
                this.ChechInCheckOut=res.data
                  console.log(res);
                 
              },
              fail:(err)=>{
                console.log(err)
              },
              data:{
                empCode:user?.empCode,
                workingDate:this.workingDate
              }
            })

          },


        getInfo(){
            let dayCount=1; 
           if( this.$data.productiveHours <= 6 &&  this.$data.productiveHours > 3)
           {
            console.log(this.$data.productiveHours)
                dayCount=0.5;
           }
           else if(this.$data.productiveHours  < 3){
            dayCount=0;
           }
          




          const data={
            empCode: this.getUser?.empCode,
           
            managerId: this.getUser?.managerId,
            workingDate: this.$data.workingDate,
            wfhHours : this.$data.Work_from_home,
            officeHours : this.$data.office,
            productiveHours: this.$data.productiveHours,
            inType: this.$data.WFH && this.$data.Office ?"BOTH":this.$data.WFH?"WORK_FROM_HOME":"OFFICE",
            dayCount: dayCount,
            period: this.period !== ''?this.$data.period==="first-half"?"FIRST_HALF":"SECOND_HALF":null,
          }
         
            if(confirm("Are you sure want to submit the sheet?")){
                this.addToTimesheet(data);
            }
        },


        addToTimesheet(data)
        {
          TimesheetService.timeSheetSubmission({
            success:(res)=>{
                // alert("Submitted Successfully..")
                console.log(res);
            },
            fail:(err)=>{
              alert("Already in the timesheet")
              console.log(err)
            },
            data
          })
        },

      //   isFullfDay(){
      //       return this.productiveHours!='' && this.productiveHours<=3;
      //   },
      //   isHalfDay(){
      //     return this.productiveHours!='' && this.productiveHours>3 && this.productiveHours<=6;
      // },
        // isLeave(){
        //   return this.productiveHours!='' && this.productiveHours>=0 && this.productiveHours<6;
        // },
        isWFH(){
          return this.WFH;
        },
        isCalculatedHours(){
          return this.calculatedHours!='';
        }
    },


    computed:{
      ...mapGetters('authStore',['getUser']),
      ...mapGetters('empStore',['getchecks']),
  
        getCheckIn()
        {
          console.log( this.checkIn)
            return this.checkIn;
    },
        calculateTimeDifference(){
            console.log("timedifference")
            let start = new Date(this.checkIn);
            let end = new Date(this.checkOut);
            let diff = end.getTime() - start.getTime();
            let diffInDecimal = (diff / 3600000).toFixed(2);
            console.log(diffInDecimal)
            this.calculatedHours=diffInDecimal;
            return diffInDecimal;
          },
          
    },
        watch: {
            checkIn: function() {
              this.calculateTimeDifference;
            },
            checkOut: function() {
              this.calculateTimeDifference;
            }
          }
   
}