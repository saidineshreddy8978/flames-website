function compareNames() {
  const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s+/g, "");
  const name2 = document.getElementById("name2").value.toLowerCase() .replace(/\s+/g, "");

  if (name1 == name2) {
    let flamesresult = document.getElementById("flamesresult");
    flamesresult.innerText = `undefined`;
  } else {
    let name1Array = name1.split("");
    let name2Array = name2.split("");
    let donename1Array = name1Array.filter(
      (letter) => letter.trim() && !name2Array.includes(letter.trim())
    );
    let donename2Array = name2Array.filter(
      (letter) => letter.trim() && !name1Array.includes(letter.trim())
    );
    let result1 = donename1Array.join("");
    let result2 = donename2Array.join("");
    let finalarray = result1 + result2;
    let len_of_comparision = finalarray.length;

    let result = document.getElementById("result");
    result.innerText = `The Reamining Letters count is :- ${len_of_comparision}`;

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
