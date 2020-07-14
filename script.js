{
  let myString = "Hello, World!";
  let myRegex = /Hello/;
  let result = /Hello/.test(myString);
  console.log(result);
}

{
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
  let waldoRegex = /wALDO/;
  let result = waldoRegex.test(waldoIsHiding);
  console.log(result);
}

{
  let petString = "James has a pet cat.";
  let petRegex = /John|dog|bird|Liz|cat|Alice|fish/;
  let result = petRegex.test(petString);
  console.log(result);
}

{
  let myString = "freeCodeCamp";
  let fccRegex = /freecodecamp/i;
  let result = fccRegex.test(myString);
  console.log(result);
}

{
  let extractStr = "Extract the word 'coding' from this string.";
  let codingRegex = /coding/;
  let result = extractStr.match(codingRegex);
  console.log(result);
}

{
  let twinkleStar = "Twinkle, twinkle, little star";
  let starRegex = /Twinkle/gi;
  let result = twinkleStar.match(starRegex);
  console.log(result);
}

{
  let exampleStr = "Let's have fun with regular expressions!";
  let unRegex = /un./;
  let result = unRegex.test(exampleStr);
  console.log(result);
}
