// Note to Gabe: DON'T BREAK SHIT!


// This is just a scroll to top button.

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        document.getElementById("topButt").style.display = "block";
    }else{
      document.getElementById("topButt").style.display = "none";
    }
}

function topButt(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Yes I stole the code for that scroll to top button from w3schools, but that's kinda the point of w3schools. Also I suck ass at js.