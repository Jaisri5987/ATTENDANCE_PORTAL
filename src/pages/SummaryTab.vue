<template>
     <div>
        <form class="container" @submit.prevent="generateSummary()">
              <b-row class="my-1">
        <b-col sm="12" md="4" lg="3" class="mb-3">
        <select id="inputState" class="form-control" required v-model="selectedEmpName" >
        <option value="" selected disabled hidden>Employee Name</option>
            <option v-for="(emp,index) in empName" :key="index">
            {{emp?.empCode}}-{{emp?.empName}}
            </option>
            <option></option>
        </select>
        </b-col>
         <b-col sm="12" md="4" lg="3" class="mb-3">
        <b-form-input id="input-default" type="date" :max="new Date().toISOString().split('T')[0]" v-model="selectedFromDate"></b-form-input>
        </b-col>
        <b-col sm="12" md="4" lg="3" class="mb-3">
        <b-form-input id="input-default" type="date" :max="new Date().toISOString().split('T')[0]" v-model="selectedToDate"></b-form-input>
        </b-col>

          <b-col sm="12" md="4" lg="3">
        <b-button class="btn button" style="width:100%" v-if="!loader" type="submit">Generate Summary</b-button>
        <b-button class="button btn-block" v-else disabled>
            <b-spinner small type="grow"></b-spinner>
                Generate Summary...
        </b-button>
        </b-col>
        </b-row>
        <PaginationComponent v-if="listItems.length!=0" :fields="fields" :totalPages="10" :listItems="listItems" :recordsPerPage="rows" @pageNo="pageNo" />
        <center v-else-if="listItems.length==0 && loader==false"><p >No Data found</p></center>
        </form>
    </div>
</template>

<script src="./js/summary.js"/>
<style scoped>
.button{
    background:#1DA8DA;
    color:white;
}
</style>