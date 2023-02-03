<template>
<div>
  <b-form-datepicker
  v-model="date"
  @input="selectedDate" 
  :date-disabled-fn="dateDisabled"
  :aria-required="required"
  :highlight-dates="highlightDates"
  />
  <!-- :max="max" -->
  </div>
</template>
<script src="./js/DatePicker.js"/>
<style scoped>

</style>