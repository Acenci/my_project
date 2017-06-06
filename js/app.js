


//Create lightbox for image galleries "Places" & "Faces"


// Create a lightbox for about me with me.jpg and about me text.


// Create a drop down menu for "Photos", with "Places" & "Faces" as menu items.


//Create a contact box (Reference from Class Challenge 4)
// ### Challenge 4
//
// Using **jQuery**, let's validate the Mail List form to ensure that the user has entered a valid email address.
//
// #### Include jQuery
//
// Start by including jQuery in your index.html file.  You should add the following script tag _before_ your javascript file, since we want jQuery to be loaded before our JavaScript runs.
//
// ```
// <script
//   src="https://code.jquery.com/jquery-3.2.1.min.js"
//   integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
//   crossorigin="anonymous"></script>
// ```
//
// #### Validate the Email
//
// Use jQuery's `keyup` method to check if an email is valid after each key stroke.  Show a validation message below the input field and disable the submit button if the email is not valid.  Below is a function you can use to check if an email is valid.  You can feed this function a string containing an email address to validate, and it will return `true` if it's valid, and `false` if it's not.
//
// ```
// function isValidEmailAddress(emailAddress) {
//     var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
//     return pattern.test(emailAddress);
// };
// ```
//
// #### Button Click
//
// Using jQuery, show an alert when the newsletter button is clicked that says "Server unavaliable, try again later!".
