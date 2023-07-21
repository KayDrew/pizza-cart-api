
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
              
                  pizzaId:'',
                  
                  

            



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
                        this.cartTotal=result.data.total;
                        
 console.log(pizzaId+' added');
                      console.log(this.cartTotal);
                         console.log(this.cartPizzas);
                        }
                  


                  );

                 
                  
                        }
                  );
                  
                  

                 

            },


   

            //Determine if payment amount is enough

            pay(pizzaId){
            	
axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/pay',{'cart_code':'skFkDG1DC1',
'pizza_id': pizzaId}).then(

                  this.error = false;
                  this.orderItems = false;
                  this.showInput = false;
                  this.showCheckout = false;
                  this.empty = true;


);
            },


            //show cart items
            displayCart(){

             
            },



                  displayHistory(){

                    
                  },

add(pizzaId){

axios.post('https://pizza-api.projectcodex.net/api/pizza-cart/add', { 'cart_code': 'skFkDG1DC1', 
                  'pizza_id': pizzaId}).then(

                        () => {
                       
                  
                  this.getCart().then(result=> {

                        this.cartPizzas=result.data.pizzas;
                        this.cartTotal=result.data.total;
                        
 console.log(pizzaId+' added');
                      console.log(this.cartTotal);
                         console.log(this.cartPizzas);
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
                        this.cartTotal=result.data.total;
                        
 console.log(pizzaId+' added');
                      console.log(this.cartTotal);
                         console.log(this.cartPizzas);
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
