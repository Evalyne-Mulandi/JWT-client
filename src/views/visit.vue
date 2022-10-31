<template>
  <main>
    <img src="@/assets/bg.jpg" alt="" class=" min-h-screen w-full object-cover relative">
    <main class="   absolute  inset-x-0 z-10 top-4" v-if="auth">
      <div class=" bg-green-300 border border-x-emerald-50 max-w-sm rounded-lg flex justify-center items-center mx-auto p-1">{{msg}}</div>
     <button class=" px-5 py-3 rounded-lg bg-red-600 text-white" @click="logout">Logout</button>
      <div class="  p-32 text-3xl text-white font-extrabold ">welcome to dashboard</div>
<div class=" text-3xl text-white font-extrabold ">Happy learning!!</div>
  </main>
  <main class="  absolute   inset-x-0 z-10 top-16" v-else>
    <div class=" bg-red-400 border border-red-700 max-w-sm rounded-lg flex justify-center items-center mx-auto p-1">{{msg}}</div>
<div class="  p-32 text-3xl text-white font-extrabold ">lost?? looking for your way in</div>
<div class=" text-3xl text-white font-extrabold  underline"> <router-link to="/register">register Today</router-link></div>
</main>

  </main>
</template>

<script>
 
export default {
data(){
  return{
    auth:false,
    msg:''
  }
},
async mounted(){
 try {
  let url='http://localhost:3000/user';
  let res=await fetch(url,{
    method:"GET",
    credentials:"include",
    headers:{
      "Content-type":"application/json"
    }
  })
  if(res.ok){
    this.auth=true
    let content=await res.json();
    this.msg=`Hi ${content.fullName} you logged in! `;
    console.log(content);
  }else{
    this.auth=false
    let content=await res.json();
    this.msg=content.message
    console.log(content);
  }
 } catch (error) {
  this.auth=false
  let content=await res.json();
  console.log(error);
  this.msg=content.message
 }

},
methods:{
  async logout(){
    let url="http://localhost:3000/logout" 
     /*  let url="api/v1/login/" */ 
       let res= await fetch(url,{
        method:"POST",
        credentials:"include",
         headers:{
           "Content-type":"application/json"
          
         },
         
       })
      
       if(res.ok){
         let data=await res.json()
         console.log(data);
         alert(data.message)
         this.$router.push("/register")
         
       }
       else{
         let data=await res.json()
         console.log(data)
         alert(data.message)
       }
    
  }
}
}
</script>

<style>

</style>