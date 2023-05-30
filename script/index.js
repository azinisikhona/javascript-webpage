let products = [
    {
      id: 1,
      price: "R2020",
      Image: "https://i.postimg.cc/NMPz5tf6/property-1.jpg",
      desc: "Latest certifacte",
      place: "A1677 Steve Smith St, Hanasmoestraal",
    },
    {
      id: 2,
      price: "R2019",
      Image: 'https://i.postimg.cc/pTMCmdDM/property-2.pn',
      desc: "Latest certifacte",
      place: "666 Brent Smith St, Midstream",
    },
    {
      id: 3,
      price: "R2018",
      Image: 'https://i.postimg.cc/VkckHQBL/propert-3.jpg',
      desc: "Latest certifacte",
      place: "232 Landsborough St, Ballant North, Vic 3350",
    },
    {
      id: 4,
      price: "R2017",
      Image: 'https://i.postimg.cc/K8gsjwdL/propert-4.jpg',
      desc: "Latest certifacte",
      place: "42 Wellington St, Coorparoo, Qld 4151",
    },
    // {
    //   id: 5,
    //   price: "R2016",
    //   desc: "Latest certifacte",
    //   place: "This place",
    // },
  ];
  
  let dispProducts = document.querySelector(".products");
  products.forEach((data) => {
    dispProducts.innerHTML += `
      <div class= "card">
      <h3 class="display-3">${data.price}</h3>

      <div class="card-body">
      <img src="${data.Image}" alt="">
      <p class="text-black">${data.desc} <br> <span>${data.place}</span></p>
      </div>
      </div>`;
  });