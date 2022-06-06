


let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

async function takedata(){
    try{

        let res = await fetch (url);
        let data = await res.json();
        console.log(data[0].vouchers)
        append(data[0].vouchers)
    }catch(err){
        console.log(err)
    }
}

 


takedata();





function append(data){
var container = document.querySelector("#voucher_list");

 let voucherdata = JSON.parse(localStorage.getItem("purchase")) || [];
   let userdata=JSON.parse(localStorage.getItem("user"));
   console.log(userdata)
  let wallet= document.querySelector("#wallet_balance");
//   console.log(wallet)
    wallet.innerText = userdata.amount;




    data.forEach(function(elem){
        let div = document.createElement("div");
        div.setAttribute("class", 'voucher')

        let img = document.createElement("img");
        img.setAttribute("src",elem.image);

        let name = document.createElement("p");
        name.innerText = elem.name;

        let price = document.createElement("h3");
        price.innerText=elem.price;

        let btn = document.createElement("button");
        btn.innerText ="BUY";
        btn.setAttribute("class",'buy_voucher')
        btn.addEventListener("click",function(){
           addv(elem)

        })
        div.append(img,name,price,btn);
        container.append(div);
    })

    let addv = (elem) => {
        if(elem.price>userdata.amount){
            alert("sorry! Insefficient balance")
        }
        else{
            alert("Hurry! purchase succesfull")

            let remain = userdata.amount - elem.price;
            userdata.amount=remain;
            localStorage.setItem("user",JSON.stringify(userdata));
            wallet.innerText=userdata.amount;
            console.log(remain)
            voucherdata.push(elem);
            localStorage.setItem("purchase",JSON.stringify(voucherdata));
        }
    }

}