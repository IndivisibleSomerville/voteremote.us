function useData(data) {
  let html = '<option value="">Start typing to choose your school...</option>' + data.reduce( (accum, curVal) => {
    accum += `<option value="${curVal.INSTNM}">${curVal.INSTNM}</option>`;
    return accum;
  }, "")
  document.getElementById('schools').innerHTML = html;
  // document.getElementById('schools').classList.remove('loading');
  $('.ui.dropdown').dropdown();
}

function getJSON() {
  var request = new XMLHttpRequest();
  request.open('GET', './nces-sorted-schools.json', true);
  request.onload = function() {
    if (this.status >=200 && this.status < 400) {
      var data = JSON.parse(this.response);
      useData(data);
    } else {
      // Error
    }
  };

  request.onerror = function() {
    // Connection error
  };

  request.send();
}

getJSON();
