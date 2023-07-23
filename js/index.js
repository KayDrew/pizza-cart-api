
document.addEventListener("alpine:init", () => {

      Alpine.data("order", () => {

            return {
                  featured: [],
                  featuredPizzas: [],
                  pizzas: [],
                  cartPizzas:[],
                  cartTotal:0,
                  username: "KayDrew",
                  pizzaId: "",
              showCart:false,
                  cartId:"",
                  showMenu:true,
                  showHistory:false,
                  pastOrders:[],
showCheckout:false,
showInput:false, 
message:"",
amount:0,                 
                  

            
createCart(){

 axios.get('https://pizza-api.projectcodex.net/api/pizza-cart/create?username=${this.username}').then(result=>{

this.cartId=result.data.cart_code;


});



},


            getCart(){
                  return axios.get('https://pizza-api.projectcodex.net/api/pizza-cart/'+this.cartId+'/get');
            },



            //increment cart
            buy(pizzaId){
            	
            

                  axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/add', { 'cart_code': this.cartId, 
                  'pizza_id': pizzaId}).then(

                        () => {
                       
                  
                  this.getCart().then(result=> {

                        this.cartPizzas=result.data.pizzas;
                        this.cartTotal=result.data.total.toFixed(2);
                         this.showCheckout=true;
                         
                                       
                         
                        }
                  


                  );

                 
                  
                        }
                  );
                  
                  

                 

            },


   

            checkoutClicked(){

this.showInput=true;
},

            pay(){
      
      
var paymentAmount=Number(this.amount);  	
axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/pay',{'cart_code':this.cartId,
'amount': paymentAmount}).then((result)=>{

                  if(result. data.status=="failure"){
this.message=result.data.message;
}

else{
                  this.showInput = false;
                  this.showCheckout = false;
                  
                 this.message="Payment successful!";

 
                        this.pastOrders=this.cartPizzas;

console.log(this.pastOrders);
 
              

this.cartPizzas=[];
this.cartTotal=0;

this.createCart();
                  
                  
                  }

 
});
            },


            //show cart items
            displayCart(){

             if(this.showCart==false){
this.showCart=true;
this.showMenu=false;
this.showHistory=false;
this.showCheckout=true;


}


else{

this.showCart=false;
this.showMenu=true;
this.showHistory=false;
}
            },



                  displayHistory(){
                  	
       if(this.showHistory==false){
this.showCart=false;
this.showMenu=false;
this.showHistory=true;
}


else{

this.showCart=false;
this.showMenu=true;
this.showHistory=false;
}
                    
                  },
                  
                  

add(pizzaId){

axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/add', { 'cart_code': this.cartId, 
                  'pizza_id': pizzaId}).then(

                        () => {
                       
                  
                  this.getCart().then(result=> {

                        this.cartPizzas=result.data.pizzas;
                        this.cartTotal=result.data.total.toFixed(2);
                        this.showCheckout=true;
 
                      
                         
                        }
                  


                  );

                 
                  
                        }
                  );
                  
                  

                 

},

remove(pizzaId){

axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/remove', { 'cart_code': this.cartId, 
                  'pizza_id': pizzaId}).then(

                        () => {
                       
                  
                  this.getCart().then(result=> {

                        this.cartPizzas=result.data.pizzas;
                        this.cartTotal=result.data.total.toFixed(2);
                        
                        if(this.cartTotal==0){
this.showCheckout=false;
this.showInput=false;

}       


else{
this.showCheckout=true;

}                 
 
                               }
                  


                  );

                 
                  
                        }
                  );
                  
                  

                 


},

                  init(){

                        axios.get('https://pizza-api.projectcodex.net/api/pizzas').then(result => {

                              this.pizzas = result.data.pizzas;
                              
                              this.smallPizza = this.pizzas[16];
                              
                           this.createCart();  

this.getCart().then(result=>{

this.cartPizzas =result.data.pizzas;
this.cartTotal=result.data.total;

}
);
                    
                        }
                        );




                        axios.get('https://pizza-api.projectcodex.net/api/pizzas/featured?username=KayDrew').then(result => {

                              this.featured = result.data.pizzas;

                              this.featuredPizzas.push(this.featured[0]);
                              this.featuredPizzas.push(this.featured[6]);
                              this.featuredPizzas.push(this.featured[16]);


                        });




                  },

            }

      });





});
