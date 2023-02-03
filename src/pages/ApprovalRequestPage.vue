<template>
    <div>
        <form class="container" @submit.prevent="getApprovals()">
              <b-row class="my-1">
        <b-col sm="12" md="4" lg="3" class="mb-3">
        <select id="inputState" class="form-control" required v-model="selectedEmpName">
             <option value="" selected disabled hidden>Employee Name</option>
            <option v-for="(emp, key) in EmpName" :key="key">{{ emp?.empCode}}-{{emp?.empName}}</option>
            <option></option>
        </select>
        </b-col>
         <b-col sm="12" md="4" lg="3" class="mb-3">
        <b-form-input id="input-default" type="date" v-model="selectedFromDate"></b-form-input>
        </b-col>
        <b-col sm="12" md="4" lg="3" class="mb-3">
        <b-form-input id="input-default" type="date" v-model="selectedToDate"></b-form-input>
        </b-col>
        <b-col sm="12" md="4" lg="3" class="mb-3">
        <select v-model="selectedStatus" class="form-control">
        <option value="" selected disabled hidden>Status</option>
      <option v-for="(option, key) in status" :key="key" :value="key">{{ option }}</option>
    </select>
        </b-col>
         
        </b-row>

        <center>
         <b-col sm="12">
        <b-button class="button" style="width:100%" type="submit" :disabled="loader">
             <span v-if="!loader">Generate Approvals</span>
            <b-spinner small type="grow" v-if="loader"></b-spinner>
            <span v-if="loader">Generate Aprrovals...</span>
        </b-button>
        </b-col>
        <br/>
        </center>
      
        <PaginationComponent v-if="listItems.length" :fields="fields" :totalPages="10" :listItems="listItems" @pageNo="pageNo"/>
        <p v-else><center>No data Found</center></p>

        </form>
    </div>
</template>

<script src="./js/approvalrequest.js"/>

<style scoped>
.button{
    background:#1DA8DA;
    color:white;
}
</style>