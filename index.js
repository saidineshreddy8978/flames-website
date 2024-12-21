function calculateFLAMES() {
  const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s+/g, "");
  const name2 = document.getElementById("name2").value.toLowerCase().replace(/\s+/g, "");

  if (name1 === name2) {
    let flamesresult = document.getElementById("flamesresult");
    flamesresult.innerText = `undefined`; 
  } else {
    
    let name1Array = name1.split("");
    let name2Array = name2.split("");

    for (let i = 0; i < name1Array.length; i++) {
      const letter = name1Array[i];
      if (name2Array.includes(letter)) {
        
        name1Array.splice(i, 1);
        name2Array.splice(name2Array.indexOf(letter), 1); 
        i--; 
      }
    }

    let remainingLetters = name1Array.concat(name2Array);
    let len_of_comparision = remainingLetters.length; 
    let result = document.getElementById("result");
    result.innerText = `The Remaining Letters count is: ${len_of_comparision}`;

    flames(len_of_comparision); 
  }
}

function flames(len_of_comparision) {
  let flames = ["f", "l", "a", "m", "e", "s"];
  let index = 0;
  while (flames.length > 1) {
    index = (index + len_of_comparision - 1) % flames.length;
    flames.splice(index, 1);
  }

  let resultMap = {
    f: "Friends",
    l: "Love",
    a: "Affection",
    m: "Marriage",
    e: "Enemies",
    s: "Siblings",
  };

  let r = resultMap[flames[0]];
  let flamesresult = document.getElementById("flamesresult");
  flamesresult.innerText = `${r}`; 
}
