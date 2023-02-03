<template>
    <div>
    <div class="login_container">
    <div class="login_box">
           <center><h2>Simulator</h2></center>
           <div class="container text-center d-flex align-items-center justify-content-center">
           <form @submit.prevent="logger" class="">
            <b-row class="my-1">
            <b-col sm="12">

            <p class="text-secondary mb-2 mt-2">EmpCode</p>
            <input type="text" list="employee" v-model="empCode" placeholder="EmpCode" required/>
        <datalist id="employee">
        <option v-for="(employee,index) in setEmpcode.data" :key="index"> {{employee}}</option>
</datalist>
            </b-col>
            </b-row>

            <br/>
             <input id="input-default"  :min="new Date().toISOString().split('T')[0]" class="" type="datetime-local" v-model="checkIn" placeholder="CheckIn" required="true"/>
             <br/>
             <br/>
            <input id="input-default" type="datetime-local" :min="checkIn" placeholder="CheckOut"  v-model="checkOut" required="true">
            <br/><br/>
            <button class="btn button btn-block" type="submit">Log</button>
    </form>
           </div>
    </div>
    </div>
    </div>
</template>
<script src="./js/simulator.js"/>


<style scoped>
.login_container{
 position:absolute;
 top:30%;
 left:50%;
  min-width:350px;
 transform: translate(-50%,-50%);
 border:1px solid black;
}
.login_box{
    background:white;
    padding:1rem;
    border-radius: 4px;
    box-shadow: -1px 2px 17px 0 #e3e3e3;
}
.button{
    background:#1DA8DA;
    color:white;
}
.btn-block{
    width:100%;
    display: block;
}
</style>