import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default{
    name:'PaginationComponent',
    data(){
        return {
            currentPage:{
                type:Number,
                default:1
            },
            currentPageData: []
        }
    },
    methods:{
        onPageChange(page) {
            console.log("page changed")
            this.currentPage = page
            this.currentPageData = this.listItems.slice((page - 1) * this.perPage, page * this.perPage)
          },
          savePDF() {
            const pdf = new jsPDF()
            pdf.autoTable({
              head: [this.fields.map(field => field.label)],
              body: this.currentPageData.map(item => this.fields.map(field => item[field.key]))
            })

            pdf.save(`page-${this.currentPage}.pdf`)

          }
        },
    props:{
        recordsPerPage:{
            type:Number,
            default:10
        },
        totalPages:{
            type:Number,
            default:0
        },
        isLoading:{
            type:Boolean,
            default:false
        },
        fields:{
            type:[],
            required:true
        },
        perPage:{
            type:Number,
            default:10
        },
        listItems:{
            type:[],
            required:true,
            default:[]
        }
    },
    watch: {
        currentPage: {
          handler: function (value) {
            this.currentPage = value
            this.currentPageData = this.listItems.slice((value - 1) * this.perPage, value * this.perPage)
        
            this.$emit("pageNo",value)
          },
        },
    }
}