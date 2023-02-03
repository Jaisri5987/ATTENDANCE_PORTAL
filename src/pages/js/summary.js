import PaginationComponent from '../../components/PaginationComponent.vue'
import {summaryFields} from '../../Data/SummaryFields.js';
// import Summary from '../../Data/summary.js';
import summaryService from '@/serviceLayer/summaryService';
import { mapGetters } from 'vuex';

export default{
    name:'Summary',
    components:{
      PaginationComponent,
    },
    methods:{
      pageNo(value)
      {
        console.log(value)
      },
      fetchSummary(){
        
      },
      generateSummary(){

        console.log("generate summary")
          //console.log(this.$data)
          let {selectedEmpName,selectedFromDate,selectedToDate}=this.$data;
          let empCode=selectedEmpName.split('-');
          console.log(empCode[0]+" "+selectedFromDate+" "+selectedToDate);
          const data={
            empCode:empCode[0],
            fromDate:selectedFromDate,
            toDate:selectedToDate
          }
          console.log(data);
          this.loader=true;
          //api call to generate summary
          summaryService.generateSummary({
            data:data,
            success:(res)=>{
              console.log(res);
              this.loader=false;
              this.listItems=res.data;
            },
            fail:(err)=>{
              // alert("Please try again later!")
              console.log(err)
              this.loader=false;
            }
          })
      }
    },
    computed:{
      ...mapGetters('authStore',['getUser'])
    },
    data() {
        return {
          rows: 5,
          perPage: 5,
          currentPage: 1,
          fields:summaryFields,
          listItems:[],
          selectedEmpName:'',
          selectedFromDate:'',
          selectedToDate:'',
          empName:[],
          loader:false
        }
     },
    mounted(){
      const user=this.getUser;
      const {empCode}=user;
      console.log(empCode)
      summaryService.getSummaryEmp({
        data:{empCode},
        success:(res)=>{
          console.log(res.data)
          this.empName=res.data;
        },
        fail:(err)=>{
          console.log(err)
        }
      })
    }
}

