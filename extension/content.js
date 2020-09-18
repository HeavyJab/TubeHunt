let channels;

fetch("https://us-central1-tube-hunt.cloudfunctions.net/app/api/channels")
  .then((r) => r.json())
  .then((result) => {
    console.log(result);
    $("#contents").prepend(`

    <div style="padding: 10px">
        <h1>Tube Hunt</h1>

        <div class="container">

        <div style="display:flex">
            <div class="card" style="width: 18rem; padding:10px">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${result[0].title}</h5>
            <p class="card-text">${result[0].desc}</p>
            <a href=${
              "channel/" + result[0].channelId
            } class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div class="card" style="width: 18rem; padding:10px">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
          

        </div>
        
    </div>

    <hr style="width:100%;text-align:left;margin-left:0">
`);
  });

console.log("loaded the script!");
