function Order(){

return{
	
showCheckout: false,
showInput:false,
showPay:false,
showCart:false,
toPayText:false,
orderItems:false,
empty:true,
showLarge:false,
showMedium:false,
showSmall:false,
showMenu:true,
cartTotal:0,
large:0,
roundedLarge:0,
paymentAmount:0,
total:0,
total2:0,
error:"",
medium:0,
roundedMedium:0,
small:0,
roundedSmall:0,


//increment large pizzas
incrementLarge(){
	
this.large+=98.99;
this.cartTotal+=98.99;
this.total++;
this.total2=this.cartTotal.toFixed(2);
this.roundedLarge=this.large.toFixed(2);
this.empty=false;
this.orderItems=true;
this.showCheckout=true;

},


//decrement large pizzas 
decrementLarge(){
	
	if(this.large>0){
		
        this.large-=98.99;
       this.cartTotal-=98.99;
       this.total--;
       this.total2=this.cartTotal.toFixed(2);
       this.roundedLarge=this.large.toFixed(2);

     }


   if(this.total2>0){

       this.showCheckout=true;

    }

     else{

          this.showCheckout=false;
          this.empty=true;
              this.showInput=false;
       }
       

},

	

//increment  medium pizzas
incrementMedium(){
	
this.medium+=78.99;
this.cartTotal+=78.99;
this.total++;
this.total2=this.cartTotal.toFixed(2);
this.roundedMedium=this.medium.toFixed(2);
this.empty=false;
this.orderItems=true;
this.showCheckout=true;

},


//decrement medium pizzas
decrementMedium(){
	
	if(this.medium>0){
		
        this.medium-=78.99;
        this.cartTotal-=78.99;
        this.total--;
        this.total2=this.cartTotal.toFixed(2);
        this.roundedMedium=this.medium.toFixed(2);
    }



     if(this.total2>0){

        this.showCheckout=true;

      }

    else{

        this.showCheckout=false;
        this.empty=true;
            this.showInput=false;
    }
   
   
},


//increment  small pizzas
incrementSmall(){
	
this.small+=68.99;
this.cartTotal+=68.99;
this.total++;
this.total2=this.cartTotal.toFixed(2);
this.roundedSmall=this.small.toFixed(2);
this.empty=false;
this.orderItems=true;
this.showCheckout=true;

},


//decrement small pizza 
decrementSmall(){

	if(this.small>0){
		
         this.small-=68.99;
         this.cartTotal-=68.99;
        this.total--;
        this.total2=this.cartTotal.toFixed(2);
        this.roundedSmall=this.small.toFixed(2);

       }
       
       
       
    if(this.total2>0){

       this.showCheckout=true;

     }

   else{

         this.showCheckout=false;
          this.empty=true;
          this.showInput=false;
     }

},


//Determine if payment amount is enough

pay(){

        if(Number(this.paymentAmount)<this.total2){
        	
              this.error="The amount is insufficient";
          }

     else{
	
            this.cartTotal=0;
           this.large=0;
           this.paymentAmount=0;
           this.total=0;
           this.total2=0;
          this.medium=0;
          this.small=0;
          this.roundedLarge=0;
          this.roundedSmall=0;
          this.roundedMedium=0;
          this.error="";
          this.showLarge=false;
         this.showMedium=false;
        this.showSmall=false;
        this.orderItems=false;
        this.showInput=false;
        this.showCheckout=false;
         this.empty=true;

       }

},


//show cart items
displayCart(){

      if (this.showCart==true){
      	
               this.showCart=false;
               this.showMenu=true;
           }

    else{

             this.showCart=true;
              this.showMenu=false;
      }




     if(this.total2>0){
	
           this.empty=false;
           this.orderItems=true;
            this.showCheckout=true;

      }

    else{

             this.showCheckout=false;
             this.empty=true;
             this.orderItems=false;

          }




     if(this.roundedLarge>0){
     	
         this.showLarge=true;

       }

   else{

            this.showLarge=false;
       }
       
       
       

      if(this.roundedMedium>0){
	
            this.showMedium=true;
        }

       else{

               this.showMedium=false;
        }
        
        
        

        if(this.roundedSmall>0){
	
                this.showSmall=true;
            }

       else{

                this.showSmall=false;
            }

    },
      
      

   };
   
   
}


document.addEventListener("alpine:init",()=>{

Alpine.data("order",Order);

}

);
