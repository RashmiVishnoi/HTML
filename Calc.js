let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let displayValue = "";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;

        
           
        if(buttonText == "CLR"){
            displayValue = "";
            display.value = displayValue;
           
        }

        else if(buttonText == '='){
            if(display.value!="")
            display.value = eval(displayValue);
            displayValue = display.value;
        }

        else if(buttonText == "DEL"){
            if(displayValue){
            display.value = displayValue.substr(0,displayValue.length - 1);
            displayValue = display.value;
        }} 
        
        else if(buttonText == "TAN"){
            display.value =Math.tan(eval(displayValue));
            displayValue = display.value;}

        else if (buttonText == "√"){
            displayValue = Math.sqrt(eval(displayValue))
        }
          
        
        else{
             displayValue = displayValue + buttonText;
             display.value = displayValue;
        }
  
    
  })
}