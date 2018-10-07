// First we select the filter field
var filterField = document.querySelector("#filter-table");

// Now we add an input event listener to the variable filterField
filterField.addEventListener("input", function(){
    // You can uncomment the console.log below to see what you are typing
    //console.log(this.value);

    // Get the typed value
    var typedValue = this.value;

    // Here we select all tr tag with person class
    var trNames = document.querySelectorAll(".person");

    // Now let's go through the trNames array
    trNames.forEach(function(trName){
        // Get only tr tag with name class
        var tdName = trName.querySelector(".name");

        var name = tdName.textContent;

        // The RegExp creates a regular expression object for matching text with a pattern
        // We pass the typing value and 'i' flag to ignore case
        var expression = new RegExp(typedValue, "i");

        // Now we can use the RegExp test method that will search for a match
        if(!expression.test(name)) {
            trName.style.display = "none";
        } else {
            trName.style.display = "";
        }
    });
});
