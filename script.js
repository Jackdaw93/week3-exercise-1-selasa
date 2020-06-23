let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", addFilm);

async function addFilm() {
  try {
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;
    let release = document.getElementById("release").value;
    let imgUrl = document.getElementById("imgUrl").value;
    let descript = document.getElementById("descrip").value;

    let Film = {
      title,
      genre,
      release,
      imgUrl,
      descript,
    };

    let url = `https://5ef168da1faf160016b4d5c4.mockapi.io/api/film`;
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Film),
    };

    let response = await fetch(url, options);
    let results = await response.json();
    // console.log(results);
    document.querySelector("form").reset();
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
  document.getElementsByClassName("form-goup").value = "";
}

//Show All
let position = document.querySelector(".show");
let url1 = `https://5ef168da1faf160016b4d5c4.mockapi.io/api/film`;
let options1 = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
};

fetch(url1, options1)
  .then((response) => response.json())
  .then((results) => {
    for (let data in results) {
      //   console.log(results);

      let card = document.createElement("div");
      card.innerHTML = `
      <div class="card rounded" style="width: 18rem;">
      <img src="${results[data].imgUrl}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title text-center">${results[data].title}</h5>
      </div>
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Genre: ${results[data].genre}</li>
    <li class="list-group-item">Release Year: ${results[data].release}</li>
    <li class="list-group-item">Synopsis: ${results[data].descript}</li>
    <li class="list-group-item">
    <button class="btn btn-primary" id='btn-edit'>Edit</button>
    <button class="btn btn-danger" id='bnt-del'>Delete</button>
    </li>
      </ul>
    </div>
    `;
      position.appendChild(card);
    }
  });
