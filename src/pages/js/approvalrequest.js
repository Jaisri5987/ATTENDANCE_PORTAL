import PaginationComponent from '../../components/PaginationComponent.vue'
import {summaryFields} from '../../Data/SummaryFields.js';
// import approval from '../../Data/approval.js'
import ApprovalRequestService from '@/serviceLayer/ApprovalRequestService';
import { mapGetters } from 'vuex';
export default{
    name:'ApprovalRequestPage',
    components:{
        PaginationComponent
      },
      data() {
        return {
          rows: 100,
          perPage: 1,
          currentPage: 5,
          fields:summaryFields,
          listItems:[],
          EmpName:[],
          selectedEmpName:'',
          selectedToDate:'',
          selectedFromDate:'',
          selectedStatus:'',
          status:Object.freeze({
            APPROVED: 'Approved',
            WAITING_FOR_APPROVAL: 'Pending',
          }),
          loader:false
        }
      },
      computed:{
          ...mapGetters('authStore',['getUser'])
      },
      mounted(){
          let user=this.getUser;
          console.log(user)
          ApprovalRequestService.fetchSubordinates({
            data:{empCode:user?.empCode},
            success:(res)=>{
                console.log(res);
                this.EmpName=res.data;
            },
            fail:(err)=>{
              console.log(err)
            }
          })
      },
      methods:{

        // changeStatus(status) {
        //   this.selectedStatus = status;
        // },

        pageNo(page)
        {
          console.log(page)
        },
        
        getApprovals(){
          this.loader=true;
          let status=Object.keys(this.status).find(
            key => key === this.selectedStatus
          );
          console.log(status)
          let empCode=this.selectedEmpName.split('-');
          const data={
            empCode:empCode[0],
            fromDate:this.selectedFromDate,
            toDate:this.selectedToDate,
            statusString:status
          }
          console.log(data);
          ApprovalRequestService.fetchApprovals({
            data:data,
            success:(res)=>{
              this.loader=false;
              console.log(res.data)
              this.listItems=res.data
            },
            fail:(err)=>{
              // alert("Please try again later")
              this.loader=false;
              console.log(err)
            }
          })
        }
      }
}