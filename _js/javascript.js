
$(document).ready(function(e) {
	
/* This code activates when the user clicks the menu button. The slideToggle function makes the list dropdown and scrollup in effect toggling the list. The last line hides the nested projects menu */

    $("#show-menu").click(function(e) {
        $("#header ul").slideToggle();
		$("#header ul ul").hide();
    });
	
/* This code activates when the user clicks the projects button. The preverntDefault function disables the button from linking to the project1, project2 and project3 web pages (Note these pages have not been written). */
	
	$("#projects").click(function(e) {
		//e.preventDefault()
        $(this).find("ul").slideToggle();
    });
	
	$("#projects1").click(function(e) {
		//e.preventDefault()
        $(this).find("ul").slideToggle();
		window.location.href = projects1.html;
    });
	
	$("#projects2").click(function(e) {
		//e.preventDefault()
        $(this).find("ul").slideToggle();
		window.location.href = projects2.html;
    });
		$("#projects3").click(function(e) {
		//e.preventDefault()
        $(this).find("ul").slideToggle();
		window.location.href = projects3.html;
    });
	
	
/* This code activates when the user clicks the show-hide-content text. SlideToggle is used to show or hide the paragraph */
	
	$("#show-hide").click(function(e) {
        $("#show-paragraph").slideToggle();
    });
	
});


/* This code activates when the user chooses a dropbox option. A textbox appears 

function ShowHideDiv() {
    var contact = document.getElementById("contact");
    var comment = document.getElementById("comment");
    comment.style.display = contact.value === "thoughts" ? "block" : "none";
}
BUT textbox only appears when thoughts is selected */