const $addtodo = document.getElementById('tododisplay'); //Here single quotes kullaa than id kuduthurukom
const $todoListcontainer = document.getElementById('todoListcontainer');
$addtodo.addEventListener('keypress', (apple) => {  //console.log(apple);   // === is for strict evaluation.
    if(apple.code === "Enter" && apple.target.value != ''){  //apple.target.value != '' inga doublequotes kudutha varathu        
     // apple.target.value != '' athe maathiri single quotes ku nadula space vitalum varathu   
        let todo = apple.target.value;   //console.log(apple.target.value);  //console.log(apple);
        
        let todoid = new Date().getTime();  //This line iss for assigning Dynamic id. 
        
        let $todoaddnewitem = document.createElement('li'); //creating a new element dynamically by using DOM.
        //Element.innerText = " "; itha use panni antha element ulla iruka text ta access,edit pannikulam.
                                         //dynamic_ka_create_pannura_element _object.innerHTML = `  `;                                                                         
        $todoaddnewitem.innerHTML = `           
        <input id="${todoid}" type="checkbox" > 
        <label for="${todoid}">${todo}</label>          
        `; 
        
        /* ithu singlequotes illa 1 nu ku left la iruka button la iruka symbol. single quotes use panna error varum.*/
        // Element.innerHtml ithu vanthu oru element ulla iruka HTML elements saa complete ta tharum.
        
        $todoListcontainer.appendChild($todoaddnewitem);   //console.log($todoaddnewitem);
        $addtodo.value = " "; //empty string
        /* ------------------------------------ This is for strickout-----------------------------*/
        $todoListcontainer.addEventListener('click', (e)=>{
            
            //console.log(e.target);  //it will access the "input element" within the "li element"
            
            //console.log(e.target.parentElement); //it will access the "li element" within the "ul element".
            if(e.target.checked){ /* 1) e.target => will indicate the "checkbox"   2) checked is a inbuild function. 
                        3) checked function will return true if the "checkbox" is already checked & return
                           false if the "checkbox" is unchecked. 
                        4) e.target.checked => will check whether "checkbox" is checked or not checked*/ 
                e.target.parentElement.style.textDecoration = "line-through";
            }                                     //e.target.parentElement will mention the "li element"
            else{
                e.target.parentElement.style.textDecoration = "none";
            }
        });
    }  

});