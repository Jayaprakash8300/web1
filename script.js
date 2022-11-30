//function for search
async function makeUp(){
    var productname = document.getElementById('txt').value;
    let make = await fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productname}`)
    let pro = await make.json()
    console.log(pro);
    pro.forEach(ele => {
      console.log(ele)
//card function
 
  var card=document.createElement('div')
  card.innerHTML=`<div class="card bg-info text-white" style="width: 18rem;">
    <img src="${ele.image_link}"class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Product name : ${ele.name}</h5>
      <p class="card-text">Brand : ${ele.brand}</p>
      <p class="card-text">Price : ${ele.price}$</p>
      <a href="${ele.product_link}" class="btn btn-primary">Click for buy</a>
    </div>
  </div>`
  card.setAttribute("class","container-fluid col-2")
  document.body.append(card)
})
}