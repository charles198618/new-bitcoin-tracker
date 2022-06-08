
const url ="https://blockchain.info/ticker";

async function retrievePrice() {

  const datarequest = await fetch(url, {
    method: "GET"
  });
  
  if(!datarequest.ok) {
    alert("A problem occured.");
  } else {
    let dataRequested = await datarequest.json();
    // console.log(donnees);
    document.querySelector("span").textContent = dataRequested.EUR.last;
  }
}

setInterval(retrievePrice, 1000);