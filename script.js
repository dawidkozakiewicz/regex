{
  let myString = "Hello, World!"; // Using the Test Method
  let myRegex = /Hello/;
  let result = /Hello/.test(myString);
  console.log(result);
}

{
  let waldoIsHiding = "Somewhere Waldo is hiding in this text."; // Match Literal Strings
  let waldoRegex = /Waldo/;
  let result = waldoRegex.test(waldoIsHiding);
  console.log(result);
}

{
  let petString = "James has a pet cat."; // Match a Literal String with Different Possibilities
  let petRegex = /John|dog|bird|Liz|cat|Alice|fish/;
  let result = petRegex.test(petString);
  console.log(result);
}

{
  let myString = "freeCodeCamp"; // Ignore Case While MatchingPassed
  let fccRegex = /freecodecamp/i;
  let result = fccRegex.test(myString);
  console.log(result);
}

{
  let extractStr = "Extract the word 'coding' from this string."; // Extract Matches
  let codingRegex = /coding/;
  let result = extractStr.match(codingRegex);
  console.log(result);
}

{
  let twinkleStar = "Twinkle, twinkle, little star"; // Find More Than the First Match
  let starRegex = /Twinkle/gi;
  let result = twinkleStar.match(starRegex);
  console.log(result);
}

{
  let exampleStr = "Let's have fun with regular expressions!"; // Match Anything With Wildcard Period
  let unRegex = /un./;
  let result = unRegex.test(exampleStr);
  console.log(result);
}

{
  let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it."; // Match Single Character with Multiple Possibilities
  let vowelRegex = /[aeiou]/gi;
  let result = quoteSample.match(vowelRegex);
  console.log(result);
}

{
  let quoteSample = "The quick brown fox jumps over the lazy dog."; // Match Letters of the Alphabet
  let alphabetRegex = /[a-z]/gi;
  let result = quoteSample.match(alphabetRegex);
  console.log(result);
}
{
  let quoteSample = "Blueberry 3.141592653s are delicious."; // Match Numbers and Letters of the Alphabet. Really nothing?
  let myRegex = /[h-s2-6]/gi;
  let result = quoteSample.match(myRegex);
  console.log(result);
}

{
  let quoteSample = "3 blind mice."; // Match Single Characters Not Specified
  let myRegex = /[^0-9aeiou]/gi;
  let result = quoteSample.match(myRegex);
  console.log(result);
}

{
  let difficultSpelling = "Mississippi sss ss piss ssiss SS"; // Match Characters that Occur One or More Times
  let myRegex = /ss+/gi;
  let result = difficultSpelling.match(myRegex);
  console.log(result);
}

{
  let chewieQuote = "ZmorlbmltrkjmelrtkhjZmor"; // Match Characters that Occur Zero or More Times
  let chewieRegex = /Zmoro*/;
  let result = chewieQuote.match(chewieRegex);
  console.log(result);
}

{
  let text = "<h1>Winter is coming</h1>"; // Find Characters with Lazy Matching
  let myRegex = /<.*?>/;
  let result = text.match(myRegex);
  console.log(result);
}

{
  let text = "Abc abhyut aqqqqqt aqtyuiopbnmt mnop rst"; // my exc.
  let myRegex = /A.*?t/i;
  let result = text.match(myRegex);
  console.log(result);
}

{
  let crowd = "P1P2P3P4P5P6CCCP7P8P9"; // Find One or More Criminals in a Hunt
  let reCriminals = /C+/;
  let matchedCriminals = crowd.match(reCriminals);
  console.log(matchedCriminals);
}

{
  let rickyAndCal = "Cal and Ricky both like racing."; // Match Beginning String Patterns
  let calRegex = /^Cal/;
  let result = calRegex.test(rickyAndCal);
  console.log(result);
}

{
  let caboose = "The last car on a train is the caboose"; // Match Ending String Patterns
  let lastRegex = /caboose$/;
  let result = lastRegex.test(caboose);
  console.log(result);
}

{
  let quoteSample = "The five boxing wizards jump quickly."; // Match All Letters and Numbers
  let alphabetRegexV2 = /\w/g;
  let result = quoteSample.match(alphabetRegexV2).length;
  console.log(result);
}
{
  let quoteSample = "The five boxing wizards jump quickly."; //  Match Everything But Letters and Numbers
  let nonAlphabetRegex = /\W/g;
  let result = quoteSample.match(nonAlphabetRegex).length;
  console.log(result);
}

{
  let movieName = "2001: A Space Odyssey"; // Regular Expressions: Match All Numbers
  let numRegex = /\d/g;
  let result = movieName.match(numRegex).length;
  console.log(result);
}

{
  let movieName = "2001: A Space Odyssey"; // Match All Non-Numbers
  let noNumRegex = /\D/g;
  let result = movieName.match(noNumRegex).length;
  console.log(result);
}

{
  let username = "JackOfAllTrades"; // Restrict Possible Usernames
  let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
  let result = userCheck.test(username);
}

{
  let sample = "Whitespace is important in separating words"; // Match Whitespace
  let countWhiteSpace = /\s/g;
  let result = sample.match(countWhiteSpace);
  console.log(result);
}

{
  let sample = "Whitespace is important in separating words"; // Match Non-Whitespace CharactersPassed

  let countNonWhiteSpace = /\S/g;
  let result = sample.match(countNonWhiteSpace);
  console.log(result);
}

{
  let ohStr = "Ohhh no"; // Specify Upper and Lower Number of Matches
  let ohRegex = /Oh{3,6}\sno/;
  let result = ohRegex.test(ohStr);
  console.log(result);
}

{
  let haStr = "Hazzzzah"; // Specify Only the Lower Number of Matches
  let haRegex = /Haz{4,}ah/;
  let result = haRegex.test(haStr);
  console.log(result);
}

{
  let timStr = "Timmmmber"; // Specify Exact Number of Matches
  let timRegex = /Tim{4}ber/;
  let result = timRegex.test(timStr);
  console.log(result);
}

{
  let favWord = "favorite"; // Check for All or None
  let favRegex = /favou?rite/;
  let result = favRegex.test(favWord);
  console.log(result);
}

{
  let quit = "qu"; // Positive and Negative Lookahead
  let noquit = "qt";
  let quRegex = /q(?=u)/;
  let qRegex = /q(?!u)/;
  quit.match(quRegex); // Returns ["q"]
  noquit.match(qRegex); // Returns ["q"]
}
