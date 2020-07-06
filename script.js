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
    console.log(result)
}