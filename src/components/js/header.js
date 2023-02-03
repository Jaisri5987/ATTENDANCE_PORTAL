import SearchComponent from './search';
import TimesheetComponent from '../TimesheetComponent.vue'
import { mapActions, mapGetters} from "vuex";
import Empmixins from '@/mixins/Empmixins';

export default{
    name:'HeaderComponent',
    components:{
        SearchComponent,
        TimesheetComponent
    },
    computed:{
        ...mapGetters('authStore',['getUser'])
    },
    mixins:[Empmixins],
    data(){
            return{}
    },
    methods:{
        ...mapActions('authStore',['AUTH_LOGOUT']),
    logout(){
        // alert("Logged Out!!")
        this.AUTH_LOGOUT();
        this.$router.push('/')
    }
    }
}