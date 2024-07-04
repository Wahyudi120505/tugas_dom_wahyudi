//HOME
let start = 0;
show()

function show() {
  let slide = document.getElementsByClassName("slide");
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  if (start >= slide.length) {
    start = 0;
  }

  slide[start].style.display = "block";
  start++;

  setTimeout(show, 3000);
  // return show();
}
//HOME-END



//CARS//MERK
let merk = [
  {
    id: 1,
    nama: "XFORCE",
    gambar: "../image/slide_card/scroll1.webp",
    harga: "Rp.381.900.000",
  },
  {
    id: 2,
    nama: "PAJERO SPORT ELITE",
    gambar: "../image/slide_card/scroll2.webp",
    harga: "Rp.362.650.000",
  },
  {
    id: 3,
    nama: "XPANDER CROSS",
    gambar: "../image/slide_card/scroll3.webp",
    harga: "Rp.661.500.000",
  },
  {
    id: 4,
    nama: "L100 EV",
    gambar: "../image/slide_card/scroll4.webp",
    harga: "Rp.320.900.000",
  },
  {
    id: 5,
    nama: "TRITON",
    gambar: "../image/slide_card/scroll5.webp",
    harga: "Rp.295.500.000",
  },
  {
    id: 6,
    nama: "L300",
    gambar: "../image/slide_card/scroll6.webp",
    harga: "Rp.325.250.000",
  },
  {
    id: 7,
    nama: "XPANDER",
    gambar: "../image/slide_card/scroll7.webp",
    harga: "Rp.365.000.000",
  }
];

let content = document.getElementById('card');

merk.forEach((i) => {

  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = i.gambar;
  img.alt = i.nama;

  let figcaption = document.createElement("figcaption");
  let h1 = document.createElement("h1");
  h1.textContent = i.nama;
  let p = document.createElement("p");
  p.textContent = i.harga;

  let beli = document.createElement("button");
  beli.textContent = "BUY NOW";
  let like = document.createElement("button");
  like.textContent = "LIKE";
  let comment = document.createElement("button");
  comment.textContent = "COMMENT";

  figure.appendChild(img);
  figure.appendChild(figcaption);
  figure.appendChild(beli);
  figure.appendChild(like);
  figure.appendChild(comment);

  figcaption.appendChild(h1);
  figcaption.appendChild(p);

  content.appendChild(figure);

  beli.addEventListener('click', function () {
    alert("Selamat, Anda telah membeli " + i.nama);
  });
  like.addEventListener('click', function () {
    alert("Anda telah memberi like ke " + i.nama);
  });
  comment.addEventListener('click', function () {
    alert("Tolong berikan komentar anda tentang mobil " + i.nama);
  });

});
//CARS-END



//NEWS
var navLinks = document.querySelectorAll('.news-content .list ul li a');

function removeActiveClasses() {
  navLinks.forEach((a) => {
    a.classList.remove('active');
  });
}

navLinks.forEach((i) => {
  i.addEventListener('click', function () {
    removeActiveClasses();
    this.classList.add('active');
  });
});

//NEWS-END


