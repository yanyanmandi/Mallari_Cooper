function validateEmail(){

    let user = document.getElementById('users').value;
    let regEx = /[A-Za-z0-9.-]+@[a-z.-]+\.[a-z]{3,30}/;

    //[A-Z] to able to use upper letter
    //[a-z] to able to use lower letter
    //[0-9] to able to declare a number
    //[.-] to able to use dash 
    //[@] to able use a gmail symbol
    //[+] to able occurs 1 or more times the pattern
    //[\] to able use again the pattern or symbol
    //{3,30} to declare the mininum and maxinum length of the value

    if(regEx.test(user)){
        document.getElementById('u').innerHTML = " username was correct"
        document.getElementById('u').style.color =  "lightgreen";

}else{
    document.getElementById('u').innerHTML = "user was incorrect" //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    document.getElementById('u').style.color =  "red";
}
}

document.getElementById("bntcompute").addEventListener("click" , validateEmail);  //addEventListener is abuilt in function in javascript that allows you to attach an event handler to specified element such as a button or link.


function validatePassword(){

    let password = document.getElementById('pass').value;
    let regEx = /(?=.*[0-9)(?=.*[a-z)(?=.*[A-Z]){6,30}/;
        
        //[A-Z] to able to use upper letter
        //[a-z] to able to use lower letter
        //[0-9] to able to declare a number
         //[\] to able use again the pattern or symbol
         //{6,30} to declare the mininum and maxinum length of the value

        if(regEx.test(password)){
            document.getElementById('p').innerHTML = "pass was correct"
            document.getElementById('p').style.color =  "lightgreen";

        }else{
            document.getElementById('p').innerHTML = "Please input correct password, Password must be contained 1 Upper case <br> 1 Lower case, 1 Character and 1 Number."
            document.getElementById('p').style.color =  "red";
            

        }

            
        }
document.getElementById("bntcompute").addEventListener("click", validatePassword);