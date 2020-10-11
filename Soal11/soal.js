function filterBooksPromise(colorful, amountofPage) { 
  return new Promise(function(resolve, reject) { 
    var books = [ 
      {name: "shinchan", totalPage: 50, isColorful: true}, 
      {name: "Kalkulus", totalPage: 250, isColorful: false}, 
      {name: "doraemon", totalPage: 40, isColorful: true}, 
      {name: "algoritma", totalPage: 300, isColorful: false}, 
    ];
    if (amountofPage > 0) { 
      resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
    }
    else { 
      var reason = new Error("maaf parameter salah");
      reject(reason);
    }
  });
}

var color = true;
var amount = 10;
const execute = (color, amount) => {
  filterBooksPromise(color, amount).then(
    books=>{
      console.log(books);
    }
  )
}

execute(color, amount);