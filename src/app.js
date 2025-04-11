import "bootstrap";
import "./style.css";

const pronouns = ["the", "our", "my", "your"];
const adjectives = ["great", "awesome", "crazy", "cool"];
const nouns = ["developer", "guru", "ninja", "geek"];
const extensions = [".com", ".net", ".io", ".dev"];


window.onload = function() {
  let domains =[];
function generateDomaine (){
  
  for(let pronounsIndex =0; pronounsIndex<pronouns.length; pronounsIndex++){

   for(let adjectiveIndex =0; adjectiveIndex<adjectives.length; adjectiveIndex++){
    // console.log(adjectives[adjectiveIndex]);
    for(let nounIndex =0; nounIndex<nouns.length; nounIndex++){
      // console.log(nouns[nounIndex]);
      for(let extensionIndex =0; extensionIndex<extensions.length; extensionIndex++){
       const template = `${pronouns[pronounsIndex]} ${adjectives[adjectiveIndex]} ${nouns[nounIndex]} ${extensions[extensionIndex]}`
       domains.push(template);
       console.log(template)
      }
    
  }
}
 
}
return domains
}



const cardContainer = document.getElementById("card-container");

domains.forEach(domain => {
  // Create a card element
  const card = document.createElement("div");
  card.className = "card m-2";
  card.style.width = "18rem";

  // Add card content
  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${domain}</h5>
      <p class="card-text">This is a generated domain name.</p>
    </div>
  `;

  // Append the card to the container
  cardContainer.appendChild(card);
});





}


