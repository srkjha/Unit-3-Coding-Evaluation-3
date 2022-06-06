var purchasedata = JSON.parse(localStorage.getItem("purchase"));
let userdata = JSON.parse(localStorage.getItem("user"))
let wallet = document.querySelector("#wallet_balance");
displaydata(purchasedata);


function displaydata(data){
    let container = document.querySelector("#purchased_vouchers")
    wallet.innerText = userdata.amount;
    data.forEach((elem) =>{
        let div = document.createElement("div");
        div.setAttribute("click", "voucher")

        let img = document.createElement("img");
        img.setAttribute("src",elem.image);

        let name = document.createElement("p");
        name.innerText = elem.name;

        let price = document.createElement("h3");
        price.innerText=elem.price;

        div.append(img, name, price);

        container.append(div);
 

    })
}