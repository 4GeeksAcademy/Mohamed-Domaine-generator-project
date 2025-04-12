import "bootstrap";
import "./style.css";

const pronouns = ["the", "our", "my", "your"];
const adjectives = ["great", "awesome", "crazy", "cool"];
const nouns = ["developer", "guru", "ninja", "geeks"];
const extensions = [".com", ".net", ".io", ".dev"];


window.onload = function () {
  let domains = [];

  function generateDomaine() {

    for (let pronounsIndex = 0; pronounsIndex < pronouns.length; pronounsIndex++) {
      for (let adjectiveIndex = 0; adjectiveIndex < adjectives.length; adjectiveIndex++) {
        for (let nounIndex = 0; nounIndex < nouns.length; nounIndex++) {
          for (let extensionIndex = 0; extensionIndex < extensions.length; extensionIndex++) {
            domains.push(`${pronouns[pronounsIndex]} ${adjectives[adjectiveIndex]} ${nouns[nounIndex]} ${extensions[extensionIndex]}`)


          }
        }
      }
    }
    return domains
  }
  generateDomaine()

  
  const cardContainer = document.getElementById("card-container");

  domains.forEach(domain => {
    // card element
    const card = document.createElement("div");


    //  card content
    card.innerHTML = `
    <div class="card-body">
      <h6 class="card-title">${domain}</h6>
      
    </div>
  `;

    cardContainer.appendChild(card);

  });

}
















