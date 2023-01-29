var InputUsername=document.getElementById("username");
var PasswordInput=document.getElementById("pass");
var BtnSingin=document.getElementById("btnsubmit");
function Validate(){
  var even=false;
  if((InputUsername.value!= 0)&&(PasswordInput.value!= 0)){
    console.log(InputUsername.value);
      even=true;
  }
  return even;
}
BtnSingin.addEventListener("click",()=>{
  if(Validate()){
    InputUsername.classList.add("is-valid");
    PasswordInput.classList.add("is-valid");
  }
  else{
    InputUsername.classList.add("is-invalid");
    PasswordInput.classList.add("is-invalid");
  }
});