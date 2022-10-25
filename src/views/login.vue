<template>
  <main class="  min-h-screen  bg-gradient-to-r from-purple-100 via-purple-100 to-purple-100 relative overflow-hidden">
    <img src="@/assets/bg.jpg" alt="" class=" min-h-screen w-full object-cover">
   
  
      <form @submit.prevent="onSubmit" > 
	<div class=" py-3  sm:max-w-md sm:mx-auto absolute z-10 top-20 inset-x-0 ">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-8 bg-white  shadow-lg sm:rounded-3xl sm:p-4">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login Form </h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            
						<div class="relative">
							<input   v-model="Email" autocomplete="on" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input    v-model="password" autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
							<span name="password"  class="text-red-600" v-show="passErrorActivate">{{passwordError}}</span> 
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>
 
 </main>
</template>
  

<script>   
export default{
  data(){
    return{
      
     Email:"",
     password:"",
     confirmPassword:"",
     passwordError:"password must be atleast 8 characters",
     passErrorActivate:false

    }
  },
  methods:{
    
    async onSubmit(){
     
    if(this.password.length<8 && this.confirmPassword.length<8){
      this.passErrorActivate=true
    }
    else{
      let url="http://localhost:3000/login" 
     /*  let url="api/v1/login/" */
       let data=JSON.stringify({
       
                    Email: this.Email,
                    password: this.password,
                   
       })
       let res= await fetch(url,{
         headers:{
           "Content-type":"application/json"
         },
         method:"POST",
         body:data
       })
       if(res.ok){
         let data=await res.json()
         console.log(data);
         alert(data.message)
         this.$router.push("/dashboard")
       }
       else{
         let data=await res.json()
         console.log(data)
         alert(data.message)
       }
    }
      
   }
  }
}


 


</script>

<style>

</style>
