import {holidays} from "@/Data/holidays";

export default {
    name:'DatePicker',
  data() {
    return {
        date:'',
      disabledDates: holidays,
    }
  },
  props:{
    required:false,
    max:{
      type:String,
      default:new Date().toISOString().split('T')[0]
    }
  },
  computed: {
    highlightDates(date) {
      console.log(date.disabledDate)
      console.log(holidays.length)
      for (let i = 0; i < holidays.length; i++) {
        const holiday = new Date(holidays[i]);
        const dates=new Date(date.disabledDates[i])
        console.log(date.disabledDates)
       
        if (holiday.toDateString() === dates.toDateString()) {
          console.log(date.disabledDates[i])
          return "bg-danger text-white";
        }
      }
      return "";
    }
  },  
  methods: {

    dateDisabled(ymd, date) {
      console.log(date  )
     return  holidays.some(holiday => {
        const match = holiday.toDateString() === date.toDateString();
        return match;
      });
    
    },
    selectedDate(value)
  {
    this.$emit('date-selected',value)
  }
  },
  
};