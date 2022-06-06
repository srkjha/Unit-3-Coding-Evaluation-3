document.querySelector("#form").addEventListener("submit",myFunction);


function myFunction(){

    event.preventDefault();

    function Userdata(){

        this.name = name;
        this.email = email;
        this.address = address
        this.amount = amount;
    }


   let name = form.name.value;
  let  email= form.email.value;
   let address= form.address.value;
  let  amount = form.amount.value;

  let u = new Userdata(name, email, address,amount);

   
  
  localStorage.setItem("user",JSON.stringify(u));


event.target.reset();


}