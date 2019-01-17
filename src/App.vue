

<template>
  <div class="header">
    <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
      <div class="container">
		  <div class="navbar-brand">CRUD Operations Vue Task</div>
		  <div class="collapse navbar-collapse" id="navbarNav">
		  </div>
		</div>
	</nav>

<div class="center" >
    <h3>Create Customers</h3>
    
    <div class="card">
      <div class="card-header">
        Create a new Customer
      </div>
      <div class="card-body">
       
  
 <form class="form-inline" style="
    padding-left: 60px;">
  <div class="form-row">

    <div class="form-group mx-sm-3 mb-2">
            <label>Name</label>
            <input v-model="name" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
             <label>Age</label>
            <input v-model="age" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
              <button v-on:click="createCustomer()" class="btn btn-primary">Create</button>

  </div>
  </div>
        </form>
      </div>
    </div>




</div>

    <div class="card text-center">
  <div class="card-header">
    Customers
  </div>
  
</div>
<div class="card-body">
      <div v-for="customerData of customers" v-bind:key="customerData.key">
        <div v-if="customerData.edit == false">
    <h6 class="card-title">{{customerData.name}}</h6>
    <h6 class="card-text">{{customerData.age}}</h6>
    <a href="#" v-on:click="deleteCustomer(customerData['.key'])" class="btn btn-danger">Delete</a>
    <a href="#" style=" margin-left: 10px;" v-on:click="updateEdit(customerData['.key'])" class="btn btn-warning">Update</a>
        </div>
        <div v-else>
          
          <td><input v-model="customerData.name" type="text" class="form-control ml-sm-2 mr-sm-4 my-2"></td>
          <td><input v-model="customerData.age" type="text" class="form-control ml-sm-2 mr-sm-4 my-2"></td>
          <a href="#" class="btn btn-success" @click="updateCustomer(customerData)">Save</a>
        </div>
          </div>
  </div>
  </div>

</template>

<script>
import { customerRef } from './config/db'


export default {
  data(){
    return {
      customer: ''
    }
    
  },
  firebase:{
    customers : customerRef,
  },
  methods:{
    createCustomer(){
      customerRef.push({name: this.name, age: this.age, edit: false})
      this.name = ""
      this.age = ""
    },
    deleteCustomer(key){
      customerRef.child(key).remove()
    },
    updateCustomer(customer){
    const key = customer['.key']
      customerRef.child(key).update({ name: customer.name, age: customer.age, edit: false})

    },
    updateEdit(key){
      customerRef.child(key).update({edit: true})

    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
<style lang="css">

  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
<style>
.center {
  margin: auto;
  width: 60%;
  padding: 10px;
}
.navbar-brand {
  text-align: center;
}
</style>
<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon{
  margin-right: 10px;
}
.icon i{
  cursor: pointer;
}
</style>
