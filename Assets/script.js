function getApi() {
    var requestUrl = 'https://www.mediawiki.org/w/api.php';
    fetch(requestUrl)
    .then(function (response) {
      console.log("response", response);
      return response.json();
    });
}

// then(function (data)) {
//       console.log(data);
// }
