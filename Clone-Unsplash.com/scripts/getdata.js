async function nav(input) {
    var api = "THQmZAArw8DpyGkVnb8bK1CY7zkAbHDwx8yOO0vILFw"


    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=${api}`);
    let data = await response.json();
    var out = [];
    for (var i = 0; i < data.results.length; i++) {
        out.push(data.results[i].urls)
    }
    //    console.log(out)
    localStorage.setItem("name", JSON.stringify(input))
    localStorage.setItem("images_data", JSON.stringify(out))

    window.location.href = "page.html"
}

export default nav;



  