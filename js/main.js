// I am going to use this code only once so it is better to use a self-invoked function in this case.
document.getElementById('add').addEventListener('click', function(){ // We get the element with ID="add", which is the button "ADD",
                                                                     // and then we add an Event Listener for the event "click", which means
                                                                     // that every time a click occures, the self-invoked function 
                                                                     // after it gets triggered.

  var value = document.getElementById('item').value;   // We create a variable which stores the value of the input field.

  	if(value) addItemTodo(value); // If we have typed anything in the field and the string is not empty then we trigger the 
                                  // function "addItemTodo" with the text from the input field as a parameter.
});
//-------------------------------------------------------------------------------------------------------------------------------------------
function addItemTodo(text){ 
  var list = document.getElementById('todo'); // We create a variable called "list", that is the same as
                                               // the element with an id equal to "todo".

  
  var checkbox = document.createElement('input'); // "Checkbox" is an input element that we create. 
   
   checkbox.type = "checkbox";                     // The type of "checkbox" is a checkbox input element.
   checkbox.style = "margin-right: 15px";
   checkbox.value = text;                          // The value of the element "checkbox" is equal to the text
                                                   // that we call the function with, which is the text that
                                                   // we have typed in the input field.
  console.log(checkbox);
  checkbox.onchange = function() {    // We disable the given checkbox when we change its state a.k.a. click on it.
  checkbox.disabled  = true;
};

   var label = document.createElement('label')     // We create a label for out checkbox.

        label.htmlFor = text;  // We bound the label with "htmlFor" to the text that we type in the input field.
        label.appendChild(document.createTextNode(text)); // We append the text in a new node of the label element.

        list.appendChild(document.createElement('br'));   // With a new node we create a <br> (new line) element in the "list" element.        

   list.appendChild(checkbox);       // We add (append) a new node with the checkbox element to the list.

   list.appendChild(label);          // We add (append) a new node with the label (bound to the checkbox) to the list.

   document.getElementById('item').value=""; // We clear the content of the input field when we add the current item to the list.
}
//-------------------------------------------------------------------------------------------------------------------------------------------
function clearListFunction(){                      // The function for the button "Clear all" that clears the whole list.
  document.getElementById('todo').innerHTML = '';  
}