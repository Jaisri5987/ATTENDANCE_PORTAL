<template>
    <div>
    <b-tabs content-class="mt-3">
    <span v-for="(tab,index) in tabs" :key="index">
    <b-tab  :title="tab?.title" v-if="tab?.show">
    <template >
  <component :is="tab.component" ></component>
</template>
    </b-tab>
    </span>
        </b-tabs>
    </div>
</template>

<script>


export default {
   props:{
        tabs:{
            type:[],
            required:true
        }
   }
}
</script>
