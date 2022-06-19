'use strict'

const catApiSearchUrl = "https://api.thecatapi.com/v1/images/search";
var urlPhoto = '';

jQuery(document).ready(function(){

    var picture_random_cat = jQuery("#randomCatPicture");

    // FUNCTIONS

    // getRandomCat()
    /*
        WHAT:   Gets the URI to a picture of a cat
        HOW:    It retrieves a JSON object from The Cat Api, then access index O of the array and access 
                the value of "url" to add it as the value of "src" on the img tag on the html document.
    */

    function getRandomCat() {
        jQuery.get(catApiSearchUrl, function(response) {
            var jsonObject = response[0];
            urlPhoto= jsonObject.url;
            console.log(urlPhoto); // Checking the url for the picture
            picture_random_cat.attr('src', urlPhoto);
        });
        
    };

    getRandomCat(); // It retrieves the first picture when the html document is loaded.

    // BUTTONS 
    
    // "Meow" 
    /*
        WHAT:   The user sees a new cat picture everytime they click the button.
        HOW:    It makes a call to the Cat Api to request a JSON Object, 
                it extracts the URL to the image and replaces the value to scr ont the html document. 
    */

    $("#btn_meow").click(function(){
        getRandomCat();
        console.log("Click on Meow"); // To get a log of user iteraction.
    });

});