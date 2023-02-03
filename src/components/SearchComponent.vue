<template>
  <form class="input-group ps-2" >
          <div id="navbar-search-autocomplete" class="form-outline">
            <input type="search" placeholder="Search..." id="form1" class="form-control" v-model="searchQuery"/>
          </div>
          <button type="submit" class="btn btn-dark">
            <i class="fa fa-search"></i>
          </button>
    </form>
</template>

<script src="./js/search.js"/>