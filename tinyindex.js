var form = document.querySelector("#form")
var links = document.querySelector("#links")
var submitButton = document.querySelector("#submit")

submitButton.addEventListener('click', createIndex, false);

function createIndex(event){
  console.log("this is the value of links:", links.value);
  var json = getJson(links.value);
  console.log("this is the JSON of links:", json);
}

function getJson(yaml){
  var yamlHelper = window.YAML
  var data = yamlHelper.parse(yaml);
  var json = JSON.stringify(data);
  return json
}



