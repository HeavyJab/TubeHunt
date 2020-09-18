document.addEventListener(
  "DOMContentLoaded",
  function () {
    let btn = document.getElementById("newDetails");
    let getChannels = document.getElementById("getChannels");
    let url = document.getElementById("url");
    let messageTag = document.getElementById("message");
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (url.value) {
        console.log(url.value);
        const myHeaders = new Headers({
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        });
        const baseURL =
          "https://us-central1-tube-hunt.cloudfunctions.net/app/api/channel/submit";

        fetch(baseURL, {
          method: "post",
          headers: myHeaders,
          body: `url=${url.value}`,
        })
          .then(JSON)
          .then(function (data) {
            console.log("Request succeeded with JSON response", data);
            if (data.status === 200) {
              messageTag.style.color = "green";
              messageTag.textContent = "Submission Received";
            } else {
              messageTag.style.color = "red";
              messageTag.textContent = "Submission Failed";
            }
          })
          .catch(function (error) {
            console.log("Request Failed", error);
            messageTag.style.color = "red";
            messageTag.textContent = "Submission Failed";
          });
      }
    });

    getChannels.addEventListener("click", function (e) {
      e.preventDefault();
      const baseURL =
        "https://us-central1-tube-hunt.cloudfunctions.net/app/api/channels";
      fetch(baseURL, {
        method: "GET",
      })
        .then((res) => {
          return res.text();
        })
        .then((text) => {
          let jsonData = JSON.parse(text);
          for (let i = 0; i < jsonData.length; i++) {
            let item = jsonData[i];
            console.log(item);
          }
        });
    });
  },
  false
);
