
document.addEventListener("alpine:init", () => {

      Alpine.data("order", () => {

            return {
                  featured: [],
                  featuredPizzas: [],
                  pizzas: [],
                  cartPizzas:[],
                  cartTotal:0,
                  username: "KayDrew",
                  cartId: "",
              showCart:false,
                  pizzaId:"",
                  showMenu:true,
                  showHistory:false,
showCheckout:false,
showInput:false,                  
                  

            



            getCart(){

            

                  return axios.get("https://pizza-api.projectcodex.net/api/pizza-cart/skFkDG1DC1/get");
            },



            //increment cart
            buy(pizzaId){

                  axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/add', { 'cart_code': 'skFkDG1DC1', 
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

            pay(pizzaId){
            	
axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/pay',{'cart_code':'skFkDG1DC1',
'pizza_id': pizzaId}).then(()=>{


                  this.error = false;
                  this.orderItems = false;
                  this.showInput = false;
                  this.showCheckout = false;
                  

this.getCart().then(result=> {

                        this.cartPizzas=result.data.pizzas;
                        this.cartTotal=result.data.total.toFixed(2);
                        
                      
                        }
                  


                  );

 
});
            },


            //show cart items
            displayCart(){

             if(this.showCart==false){
this.showCart=true;
this.showMenu=false;
this.showHistory=false;
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

axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/add', { 'cart_code': 'skFkDG1DC1', 
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

axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/remove', { 'cart_code': 'skFkDG1DC1', 
                  'pizza_id': pizzaId}).then(

                        () => {
                       
                  
                  this.getCart().then(result=> {

                        this.cartPizzas=result.data.pizzas;
                        this.cartTotal=result.data.total.toFixed(2);
                        
                        if(this.cartTotal==0){
this.showCheckout=false;

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
                              console.log(this.pizzas);
                              this.smallPizza = this.pizzas[16];


                              this.getCart().then(result => {

                                    this.cartPizzas = result.data.pizzas;
                                    this.cartTotal=this.cartPizzas.total;
                                    console.log(this.cartPizzas);


                              });

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
