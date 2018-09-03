var list = document.querySelector('ul'); // odnosi sie do sekcji <ul>
var input = document.querySelector('input'); // odnosi sie do sekcji <input type="text" name="item" id="item">
var button = document.querySelector('button'); // <button>


function check () {
var listCount = document.getElementById('list').childElementCount;
var empt = document.getElementById('empt');    
if (listCount > 0){	
empt.style.display = 'none';  
}
}

button.onclick = function() {
var myItem = input.value;
        input.value = '';
       
var listItem = document.createElement('li');
var listText = document.createElement('span');
var listBtn = document.createElement('button'); //DELETE
var listBtn2 = document.createElement('button'); //DONE
var listBtn3 = document.createElement('button'); //EDIT
var listBtn4 = document.createElement('button'); //ACCEPT
var listBtn5 = document.createElement('button'); // DECLINE         

          
listItem.appendChild(listText);  // appendChild dodaje dotakowy węzeł do struktury na końcu 
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = 'Delete';
listItem.appendChild(listBtn2);
listBtn2.textContent = 'Done';
listItem.appendChild(listBtn3);
listBtn3.textContent = 'Edit';          
       
list.appendChild(listItem);
check();          
listBtn.onclick = function() {
    list.removeChild(listItem);
    check();
} //DELETE
listBtn2.onclick = function() {
    var done = ' Done ';
    listItem.removeChild(listBtn2);
    listText.textContent = myItem + done;
    listItem.removeChild(listBtn3);  
    
} //DONE
listBtn3.onclick = function() {   
    
    var input2 = document.createElement ('input'); 
    input2.setAttribute('type', 'text');
    listItem.appendChild(input2);
    input2.focus();
        
    
    listItem.appendChild(listBtn4);
    listBtn4.textContent = 'Accept';    
    listItem.appendChild(listBtn5);
    listBtn5.textContent = 'Decline';   
    
    listText.style.display = 'none';
    listBtn.style.display = 'none';
    listBtn2.style.display = 'none';  
    listBtn3.style.display = 'none';  
        
listBtn4.onclick = function() { //ACCEPT
    
    var myItem = document.querySelector('input');
    
    var myItem = input2.value;
    input2.value = '';
    listText.textContent = myItem;       
    listItem.removeChild(listBtn4);
    listItem.removeChild(listBtn5);
    listItem.removeChild(input2);                
    listText.style.display = 'inline-block';
    listBtn.style.display = 'inline-block';
    listBtn2.style.display = 'inline-block'; 
    listBtn3.style.display = 'inline-block'; 
    }  //ACCEPT    

listBtn5.onclick = function() {  // DECLINE
        
    listItem.removeChild(listBtn4);
    listItem.removeChild(listBtn5);
    listItem.removeChild(input2);
    listText.style.display = 'inline-block';
    listBtn.style.display = 'inline-block';
    listBtn2.style.display = 'inline-block'; 
    listBtn3.style.display = 'inline-block';             
    } // DECLINE 
   
} // EDIT
input.focus(); // przekierowanie na okno dodawania zadań
}
      
      
      
      
