


export default ({ app, store }) => {
   app.router.beforeEach((to, from, next) => {
     
   	store.dispatch('doPreload')

     setTimeout(function(){
        next()    
        store.dispatch('doPreload')      
  		}, 1000);
    
   }
)}