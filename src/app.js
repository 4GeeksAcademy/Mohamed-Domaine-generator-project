import "bootstrap";
import "./style.css";

const pronouns = ["the", "our", "my", "your"];
const adjectives = ["great", "awesome", "crazy", "cool"];
const nouns = ["developer", "guru", "ninja", "geeks"];
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
       domains.push(`${pronouns[pronounsIndex]} ${adjectives[adjectiveIndex]} ${nouns[nounIndex]} ${extensions[extensionIndex]}`)
       
       
      }
  }
}
 
}
return domains
}

generateDomaine()

// const cardContainer = document.getElementById("card-container");

// domains.forEach(domain => {
//   // Create a card element
//   const card = document.createElement("div");
//   card.className = "card m-2";
//   card.style.width = "18rem";

//   // Add card content
//   card.innerHTML = `
//     <div class="card-body">
//       <h5 class="card-title">${domain}</h5>
//       <p class="card-text">This is a generated domain name.</p>
//     </div>
//   `;

//   // Append the card to the container
//   cardContainer.appendChild(card);
  
// });









// console.log(domains)
// }


  // Get the card container
  const cardContainer = document.getElementById("card-container");

  // Iterate over the domains array and group them into rows of 4
  for (let i = 0; i < domains.length; i += 4) {
    // Create a row
    const row = document.createElement("div");
    row.className = "row";

    // Add up to 4 cards in the row
    for (let j = i; j < i + 4 && j < domains.length; j++) {
      // Create a card element
      const card = document.createElement("div");
      card.className = "card m-2 col-md-3"; // Use Bootstrap classes for layout
      card.style.width = "18rem";

      // Add card content
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${domains[j]}</h5>
        </div>
      `;

      // Append the card to the row
      row.appendChild(card);
    }

    // Append the row to the card container
    cardContainer.appendChild(row);
  }

  console.log(domains); // Check the generated domains in the console
};






