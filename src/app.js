import "bootstrap";
import "./style.css";

const pronouns = ["the", "our", "my", "your"];
const adjectives = ["great", "awesome", "crazy", "cool"];
const nouns = ["developer", "guru", "ninja", "geek"];
const extensions = [".com", ".net", ".io", ".dev"];


window.onload = function() {

function generateDomaine (){
  const domains =[];
  for(let pronounsIndex =0; pronounsIndex<pronouns.length; pronounsIndex++){
   console.log(pronouns[pronounsIndex]);
   for(let adjectiveIndex =0; adjectiveIndex<adjectives.length; adjectiveIndex++){
    console.log(adjectives[adjectiveIndex]);
    for(let nounIndex =0; nounIndex<nouns.length; nounIndex++){
      console.log(nouns[nounIndex]);
      for(let extensionIndex =0; extensionIndex<extensions.length; extensionIndex++){
        domains.push(`${pronounsIndex},${adjectiveIndex},${nounIndex},${extensionIndex}`)
      }
    
  }
}
}
return domains
}

generateDomaine();
}


