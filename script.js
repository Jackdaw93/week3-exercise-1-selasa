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
    console.log(results);
  } catch (error) {
    console.error(error);
  }
}
