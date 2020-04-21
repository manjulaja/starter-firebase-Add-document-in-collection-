var db = firebase.firestore();

function storedata(){
var Input = document.getElementById("txtUserID").value;

console.log(Input);

// Add a new document in collection "cities"
db.collection("cities").doc(Input).set({
  name: "Los Angeles",
  state: "CA",
  country: "USA"
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});

}