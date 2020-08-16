async function home(){


    var response = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=X8qN7UAzOVXAoHhoYc5DvGG68Gc5nhgl")

    var result = await response.json()
    var r = document.createElement("div");
    //r.className("row")
    r.className = "row"
    document.body.appendChild(r)

    for (let index = 0; index < result.results.length; index++) {
        var c = document.createElement("div");
        c.className = "col-md-4 col-sm-12";
        c.id = "col${index}";
        c.innerHTML =`<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${(result.results[index].multimedia[4].url)}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${(result.results[index].section).toUpperCase()}</h5>
              <p class="card-text">${result.results[index].byline}</p>s
              <p class="card-text">${result.results[index].item_type}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              <p class="card-text">${result.results[index].created_date}</p>
              <p class="card-text"><a class="btn btn-info" data-toggle="collapse" href="#multiCollapseExample${index}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Check Abstract</a>
                                <div class="row">
                                    <div class="col">
                                        <div class="collapse multi-collapse" id="multiCollapseExample${index}">
                                            <div class="card card-body">
                                                ${result.results[index].abstract}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </p>
            </div>
            <a class="btn btn-dark" target ="_blank" href="${result.results[index].short_url}" role="button">Read The Full Article</a>
          </div>
        </div>
      </div>`
    r.appendChild(c)
        
    }

    return result.results

}
 let k = home()
 console.log(k)







