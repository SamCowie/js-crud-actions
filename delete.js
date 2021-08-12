document.getElementById("delete").onclick = function () {
  const value = document.getElementById("product-id").value;
  if(value === "") {
    axios.get("/api/products").then(addList);
  } else {
    axios
    .delete(`/api/products/${value}`)
    .then(processResult)
    .catch((err) => {
      if(err.response.status === 404){
        notFound();
      }
    });
  }
}
  
function processResult() {
  window.alert("Product deleted!");
}
function notFound() {
  window.alert("Item Not Found");
}