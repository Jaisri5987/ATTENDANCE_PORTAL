<template>
<div class="container">
    <div class="header"><button class="btn button" type="button" @click="savePDF()">Save PDF</button></div>
    <div class="table-responsive">
      <b-table
        striped
        hover
        :items="listItems"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        style="font-weight:200"
        responsive="sm"
         @page-change="onPageChange"
       ref="table"
      >
      <template v-slot:cell(status)="status">
      <b-button variant="warning" :disabled="$route.path!=='/approval'">{{status.item.status}}</b-button>
    </template>
    <!-- <b-table-column label="Status">
        <b-button variant="danger">{{listItems.item.status}}</b-button>
    </b-table-column> -->
      </b-table>

      </div>
      <b-pagination
        v-model="currentPage"
        :total-rows="listItems.length"
        :per-page="recordsPerPage"
      >
      </b-pagination>
    </div>
</template>

<script src="./js/pagination.js"/>
<style scoped>
.button{
    background:#1DA8DA;
    /* #11AFB6; */
    color:white;
}
.header{
  display: flex;
  justify-content: flex-end;
}
</style>