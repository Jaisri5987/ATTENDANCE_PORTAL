import TabComponent from '../../components/TabComponent.vue'
import tabconfig from '../../Data/tabConfig'

export default{
    name:'HomePage',
    components:{
      TabComponent
    },
    data()
    {
      return{
        tabconfig
      }
    }
}

