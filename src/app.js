import "bootstrap";
import "./style.css";

const pronouns = ["the", "our", "my", "your"];
const adjectives = ["great", "awesome", "crazy", "cool"];
const nouns = ["developer", "guru", "ninja", "geek"];
const extensions = [".com", ".net", ".io", ".dev"];


window.onload = function() {

function generateDomaine (){
  for(let pronounsIndex =0; pronounsIndex<pronouns.length; pronounsIndex++){
   console.log(pronouns[pronounsIndex]);
   for(let adjectiveIndex =0; adjectiveIndex<adjectives.length; adjectiveIndex++){
    console.log(adjectives[adjectiveIndex]);
    for(let nounIndex =0; nounIndex<nouns.length; nounIndex++){
      console.log(nouns[nounIndex]);
    
  }
}
}

generateDomaine();
}
