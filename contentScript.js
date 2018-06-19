function fillVinInput(vinHistoryResult) {
	if (vinHistoryResult.data.vinHistory.length == 0) {
		return;
	}
	var vinQuery = vinHistoryResult.data.vinHistory[0].VinQuery;
	var vinInput = document.getElementsByName("vin");
	if (vinInput.length != 2) {
		return;
	}
	vinInput = vinInput[1];
	vinInput.value = vinQuery;
}

function reqListener() {
	vinHistoryResult = JSON.parse(this.responseText);
	fillVinInput(vinHistoryResult);
}

var oReq =	new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/Catalogs/Catalogs/GetVinHistory");
oReq.send();

