function calculator(){
    let num1=parseFloat(prompt("Enter First Number:"));
    let operator=prompt("Enter operator(+,-,*./):");
    let num2=parseFloat(prompt("Enter Second Number:"));
    if(isNaN(num1)||isNaN(num2)){
     alert("Invalid input!Please enter a valid input");
     return;
 }
   let result;
   switch(operator){
      case"+":
           result=num1+num2;
           break;
      case"-":
          result=num1-num2;
          break;
      case"*":
          result=num1*num2;
          break;
      case"/":
          result=num2!== 0 ?num1/num2:"Error:divison by zero!"
          break;
      default:
          result:"Invalid Operator";
   }
   alert("Result:"+result)
} 
calculator();