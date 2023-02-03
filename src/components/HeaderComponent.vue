<template>
 <div class="sticky-top" >
  <b-navbar toggleable="lg" type="light" variant="light" style="border:1px solid black">
  <b-navbar-nav  >
    <b-navbar-brand href="/home" style="display:flex;align-items:center" class="text-secondary">
     <img :src="require('@/assets/images.jpeg')" class="d-inline-block align-top ml-4" alt="Kitten" width="60" height="60">
      <b-nav-item href="#" style="color:black"><b>Attendance portal</b></b-nav-item>
    </b-navbar-brand>
  </b-navbar-nav>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto">
      
          <button class="mt-2 mb-2 btn button" @click="$bvModal.show('modal-center')">Timesheet</button>
        <b-nav-item-dropdown dropleft id="dropdown-dropleft">

          <!-- Using 'button-content' slot -->
          <template #button-content>
    <b-icon icon="person-circle" font-scale="1.5" class="ms-2"></b-icon>
          </template>
        <b-dropdown-item v-if="$route.path!='/home'"><router-link to="/home" style="textDecoration:none;color:black">Summary</router-link></b-dropdown-item> 
        <b-dropdown-item v-if="isManager() && $route.path!='/approval'"><router-link to="/approval" style="textDecoration:none;color:black">Approval Request</router-link></b-dropdown-item> 
             <b-dropdown-divider></b-dropdown-divider>
                   <b-dropdown-item class="mt-2 mb-2" @click="$bvModal.show('modal-center')">Timesheet</b-dropdown-item>
          <b-dropdown-item class="button btn-block mt-2 mb-2" @click="logout()">LogOut</b-dropdown-item>
        </b-nav-item-dropdown>
        <p>{{getUser.email}} </p>
        <b-nav-item>
      </b-nav-item>
      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-modal id="modal-center" hide-footer no-close-on-backdrop title="Timesheet Submission">
    <TimesheetComponent/>
  </b-modal>
  <br/>
</div>

</template>
<script src="./js/header.js"/>

<style scoped>
.button{
    background:#1DA8DA;
    /* #11AFB6 */
    color:white;
    border:1px solid black;
}
.btn-block{
  display: block;
  width:100%;

}
.navbar-expand-lg .navbar-nav{
  align-items: baseline;
}
</style>

