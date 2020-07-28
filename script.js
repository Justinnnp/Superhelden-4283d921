const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {

    let table = document.getElementById("overview-table");
    let memberTable = document.getElementById("member-table");
    let members = response["members"];
    let row = "<tr>";

    for (let key in response) {
        if (key !== "members") {
            row += "<td>";
            row += response[key];
            row += "</td>";
        }
    }

    row += "</tr>";
    table.innerHTML += row;

    for (let i = 0; i < members.length; i++) {
        let memberRow = "<tr>";
        for (let key in members[i]) {
            memberRow += "<td>";
            memberRow += members[i][key];
            memberRow += "</td>";
        }
        memberRow += "</tr>";
        memberTable.innerHTML += memberRow;
    }
}

sendRequest();