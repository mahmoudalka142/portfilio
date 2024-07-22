/*
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
 
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");//ALL P
let myClassElement = document.getElementsByClassName("my-span");//ALL CLASS
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);
/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RegExp JS </title>
</head>

<body>
    <!-- 
    1 - A regular expression is a pattern of characters.
    2 - The pattern is used for searching and replacing characters in strings.
    3 - The RegExp Object is a regular expression with added Properties and Methods.
    -->
    <!-- --------------------------------------------------------------------------------- -->
    <!-- Modifiers -->
    <!--
        1- i : Perform case-insensitive matching.
        2- g : Perform a global match (find all).
        3- d : specifies the start and end of match ,(is case-sensitive.).
        4- m : Perform multiline matching.
    -->
    <p id="demo5"></p>
    <script>
        let text0 = "Is this all there?"; // Is this all there is is is is is is i sis is is is ?
        let pattern0 = /is/g;
        let result0 = text0.match(pattern0);
        document.getElementById("demo5").innerHTML = result0;
    </script>
    <!-- ------------------------------------------------------- -->
    <p id="demo6"></p>
    <script>
        let text6 = `Is this
    all there
    is`
        let pattern6 = /^is/m;
        let result6 = text.match(pattern6);
        document.getElementById("demo6").innerHTML = result6;
    </script>
    <!-- ------------------------------------------------------------------------------ -->
    <!-- Group -->
    <!--
        1- [abc]  : specifies matches for the characters inside the brackets.
        2- [A-Z]  : Any character from uppercase A to uppercase Z
        3- [a-z]  : Any character from lowercase a to lowercase z
        4- [A-z]  : Any character from uppercase A to lowercase z
        5- [^abc] : Not any of the characters a, b, or c
        6- [^A-Z] : Not any character from uppercase A to uppercase Z
        7- [^a-z] : Not any character from lowercase a to lowercase z
        8- [^A-z] : Not any character from uppercase A to lowercase z
        9- [0-9]  : expression is used to find any character between the brackets.
        10- [^0-9] : expression is used to find any character between the brackets.
    -->
    <p id="demo4"></p>
    <script>
        let text4 = "Visit W3Schools!";
        let n = text4.search("W3Schools");
        document.getElementById("demo4").innerHTML = n;
    </script>
    <!-- ------------------------------------------------------------------------------------------- -->
    <p id="demo"></p>
    <script>
        let text = "Do you know if this is all there is?";
        let pattern = /[is]/gi;
        let result = text.match(pattern);
        document.getElementById("demo").innerHTML = result;
    </script>
    <!-- ---------------------------------------------------------------------------------------------- -->
    <p id="demo1"></p>
    <script>
        let text1 = "re, green, red, green, gren, gr, blue, yellow";
        let pattern1 = /(red|green)/g;
        let result1 = text1.match(pattern1);
        document.getElementById("demo1").innerHTML = result1;
    </script>
    <!-- ----------------------------------------------------------------------------------------------------- -->
    <!-- methods: -->
    <!-- 
    1) replace()  : method searches a string for a specified value and returns the position of the match
    2) search()   : method returns a modified string where the pattern is replaced.
    3) match()    : method matches a string against a regular expression ,  method returns an array with the matches , method returns null if no match is found.
    4) exec()     : method tests for a match in a string. (If it finds a match, it returns a result array, otherwise it returns null)
    5) toString() : method returns the string value of the regular expression.
    -->
  …*/