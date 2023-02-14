const { createApp } = Vue
   createApp({
    methods:"",
     data() {
       return {
        count:0,
         message: 'Hello Vue!',
         aws:true
       }
     }
   }).mount('.app')