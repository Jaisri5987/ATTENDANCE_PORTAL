<template>
    <div>
    <form @submit.prevent="getInfo">
    <DatePicker @date-selected="getSelectedDate" required="true"/><br/>
    <div >
      

    <div>
    <b-button v-b-modal.modal-1  @click="check">View Checkin & Checkout</b-button>
    <b-modal id="modal-1" title="CheckIn & CheckOut" >
        <div class="data" v-for="(data,index) in ChechInCheckOut" :key="index">
        <p><b> InTime </b>:{{ data.inTime}}</p>
        <p><b>OutTime :</b>{{ data.outTime}}</p>
        <hr/>
        </div>
    <p class="my-4"></p>
    </b-modal>
    </div>
    </div>
    <br/>
   
   

    <div>
    <input type="checkbox" class="ms-2" value="Work from home" v-model="WFH" ><label class="ms-2">Work from home</label>
    </div>
    <div>
    <b-row class="my-1" v-if="isWFH() "> 
    <b-col sm="12" md="12">
    <label for="inputState" class="mb-2 mt-2"></label>
    <b-form-input id="txt1" type="number" placeholder="Work From Home"  v-model="Work_from_home" min="0" :max="20" @input="sum()"></b-form-input>
    </b-col>
    </b-row>
    </div>

       
    <div>
    <b-row class="my-1" > 
    <b-col sm="12" md="12">
    <label for="inputState" class="mb-2 mt-2" >Office</label>
    <b-form-input id="txt2" type="number" placeholder="Office Hours"  min="0" :max="calculatedHours" v-model="office" @input="sum()"></b-form-input>
    </b-col>
    </b-row>
</div>
  


    <b-row class="my-1" > 
    <b-col sm="12" md="12">
    <label for="inputState" class="mb-2 mt-2">Productive Hours</label>
    <b-form-input id="txt3" type="number" placeholder="Productive Hours"  v-model="productiveHours"  name="Productive Hours" min="0" :max="20" ></b-form-input>
    </b-col>
    </b-row>


    <!-- <p class="text-warning" v-if="3 >= productiveHours <=6">Your Working Hour is less than 6hours</p>
    <p class="text-danger" v-else-if="productiveHours <=3 ">Your Working Hour is less than 3hours and Considered to be leave</p> -->



    <b-row class="my-1" v-if="productiveHours <=6  ">
    <b-col sm="12" md="6" >
    <label for="inputState" class="mb-2 mt-2">Period</label>
    <select id="inputState" class="form-control" v-model="period" required>
    <option selected>first-half</option>
    <option>second-half</option>
    </select>
    </b-col>


         <!-- <b-col sm="12" md="6" v-if=" leaveType==='Halfday' && isHalfDay()">
            <label for="inputState" class="mb-2 mt-2">Period</label>
        <select id="inputState" class="form-control" required v-model="period">
            <option selected>first-half</option>
            <option>second-half</option>
        </select>
        </b-col> -->


    </b-row>
    <button type="submit" class="btn button" @clcik="submit">Submit</button>
    </form></div>
</template>

<script src="./js/timesheet.js"/>
<style scoped>
.button{
    background:#1DA8DA;
    /* #11AFB6; */
    color:white;
}
.close{
     background:#1DA8DA;
     /* #11AFB6; */
    color:white;
}

</style>