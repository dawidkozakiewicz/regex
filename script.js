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

{
  let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it.";
  let vowelRegex = /[aeiou]/gi;
  let result = quoteSample.match(vowelRegex);
  console.log(result);
}

{
  let quoteSample = "The quick brown fox jumps over the lazy dog.";
  let alphabetRegex = /[a-z]/gi;
  let result = quoteSample.match(alphabetRegex);
  console.log(result);
}
{
  let quoteSample = "Blueberry 3.141592653s are delicious.";
  let myRegex = /[h-s2-6]/gi;
  let result = quoteSample.match(myRegex);
  console.log(result);
}

{
  let quoteSample = "3 blind mice.";
  let myRegex = /[^0-9aeiou]/gi;
  let result = quoteSample.match(myRegex);
  console.log(result);
}

{
  let difficultSpelling = "Mississippi sss ss piss ssiss SS";
  let myRegex = /ss+/gi;
  let result = difficultSpelling.match(myRegex);
  console.log(result);
}

{
  let chewieQuote = "ZmorlbmltrkjmelrtkhjZmor";
  let chewieRegex = /Zmoro*/;
  let result = chewieQuote.match(chewieRegex);
  console.log(result);
}

{
  let text = "<h1>Winter is coming</h1>";
  let myRegex = /<.*?>/;
  let result = text.match(myRegex);
  console.log(result);
}

{
  let text = "Abc abhyut aqqqqqt aqtyuiopbnmt mnop rst";
  let myRegex = /A.*?t/i;
  let result = text.match(myRegex);
  console.log(result);
}

{
  let crowd = "P1P2P3P4P5P6CCCP7P8P9";
  let reCriminals = /C+/;
  let matchedCriminals = crowd.match(reCriminals);
  console.log(matchedCriminals);
}

{
  let rickyAndCal = "Cal and Ricky both like racing.";
  let calRegex = /^Cal/;
  let result = calRegex.test(rickyAndCal);
  console.log(result);
}

{
  let caboose = "The last car on a train is the caboose";
  let lastRegex = /caboose$/;
  let result = lastRegex.test(caboose);
}

{
  let quoteSample = "The five boxing wizards jump quickly.";
  let alphabetRegexV2 = /\w/g;
  let result = quoteSample.match(alphabetRegexV2).length;
  console.log(result);
}
