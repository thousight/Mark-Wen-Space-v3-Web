import { Component } from "@angular/core";
declare let $: any;

@Component({
  selector: "navBar",
  template: `
            <div id="navBar" class="NavBar">
              <nav class="NavBarNav blue darken-1">
                <div class="nav-wrapper">
                  <a href="#Home" class="brand-logo"><img class="MWLogo" src="./img/NavbarIcon.png" alt="HTML5 Icon"></a>
                  <ul class="right hide-on-med-and-down">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Exp">Experience</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Gallery">Gallery</a></li>
                    <li><a href="#Contact">Contact</a></li>
                  </ul>
                  <ul class="side-nav" id="mobile-demo">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Exp">Experience</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Gallery">Gallery</a></li>
                    <li><a href="#Contact">Contact</a></li>
                  </ul>
                  <a href="#" data-activates="mobile-demo" class="button-collapse right"><i class="material-icons">menu</i></a>
                </div>
              </nav>
            </div>
            `
})

export class NavBar {
  ngOnInit() {
    // Initialize sidebar at start
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 240
        edge: "right", // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    // Get Navbar fixed and change style when scrolled after Home
    $(".nav-wrapper").css({"margin-top": -1 * $(".NavBar").height()});
    $(".NavBarNav").css({"backgroud-color": "transparent"});
  }

  ngAfterContentInit() {
    $(window).scroll(() => {
      const windowTop = $(window).scrollTop(); // Location of the top of the window
      const navbarTop = $(".NavBar").offset().top; // Location of the top of navbar
      if (windowTop >= navbarTop) {
        // Set navbar to fixed
        $(".NavBarNav").addClass("blue darken-1");
        $(".NavBarNav").css({"position": "fixed", "top": "0px"});
      } else {
        // Set navbar to relative
        $(".nav-wrapper").css({"margin-top": -1 * $(".NavBar").height()});
        $(".NavBarNav").css({"position": "relative"});
        $(".NavBarNav").removeClass("blue darken-1");
        $(".NavBarNav").addClass("transparent");
      }
    });
  }
}
