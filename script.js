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

{
    let petString = "James has a pet cat.";
    let petRegex = /John|dog|bird|Liz|cat|Alice|fish/;
    let result = petRegex.test(petString);
    console.log(result);
}