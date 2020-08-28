document.addEventListener("DOMContentLoaded", function(event) { 
  showAll()
});

var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

var form = document.getElementById("formItem")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    var keyword = document.getElementById("keyword").value
    
    if (keyword && keyword.trim().length > 0) {
        search(keyword)
    }else{
        showAll()
    }
})

function showAll(){

    var template = ``
    for (var i = 0; i < items.length; i++) {
        template += `<div class="col-lg-4 col-md-6 col-sm-12 mt-4">
            <div class="card" >
                <img src="images/${items[i][4]}" class="card-img-top" alt="${items[i][1]}" >
                <div class="card-body">
                    <h5 class="card-title" id="itemName">${items[i][1]}</h5>
                    <p class="card-text" id="itemDesc">${items[i][3]}</p>
                    <p class="card-text">Rp ${items[i][2]}</p>
                    <a href="#" class="btn btn-primary" id="addCart" onClick="addToCart()">Tambahkan ke keranjang</a>
                </div>
            </div>
        </div>`
    }

    document.getElementById("listBarang").innerHTML = template
}


// function searchData(items,keyword){
//     var result = ""
//     key = keyword.toLowerCase()

//     for (var i = 0; i < items.length; i++) {
//         if (key == items[i][1].toLowerCase()) {

//             result += `<div class="col-lg-4 col-md-6 col-sm-12 mt-4">
//                 <div class="card" >
//                     <img src="images/${items[i][4]}" class="card-img-top" alt="${items[i][1]}" >
//                     <div class="card-body">
//                         <h5 class="card-title" id="itemName">${items[i][1]}</h5>
//                         <p class="card-text" id="itemDesc">${items[i][3]}</p>
//                         <p class="card-text">Rp ${items[i][2]}</p>
//                         <a href="#" class="btn btn-primary" id="addCart" onClick="addToCart()">Tambahkan ke keranjang</a>
//                     </div>
//                 </div>
//             </div>`

//             document.getElementById("listBarang").innerHTML = result 

//             break;
//         }
//     }
// }

function search(keyword){
    var filteredItems = []
    var key = keyword.toLowerCase()

    for (var j = 0; j < items.length; j++) {
        var item = items[j]
        if (item[1].toLowerCase().includes(key)) {
            filteredItems.push(item)
        }
    }

    var filterResult = ""

    if (filteredItems.length > 0) {
        for (var i = 0; i < filteredItems.length; i++) {
            filterResult += `<div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                    <div class="card" >
                        <img src="images/${filteredItems[i][4]}" class="card-img-top" alt="${filteredItems[i][1]}" >
                        <div class="card-body">
                            <h5 class="card-title" id="itemName">${filteredItems[i][1]}</h5>
                            <p class="card-text" id="itemDesc">${filteredItems[i][3]}</p>
                            <p class="card-text">Rp ${filteredItems[i][2]}</p>
                            <a href="#" class="btn btn-primary" id="addCart" onClick="addToCart()">Tambahkan ke keranjang</a>
                        </div>
                    </div>
                </div>`

        }
    }else{
        filterResult += `<h5 class="text-center">Data '${keyword}' tidak ditemukan </h5>`
    }  

    document.getElementById("listBarang").innerHTML = filterResult 
}

function addToCart(){
    var cart = document.getElementById("numcart").textContent

    var add = parseInt(cart)+1;

    document.getElementById("numcart").innerHTML = add
}