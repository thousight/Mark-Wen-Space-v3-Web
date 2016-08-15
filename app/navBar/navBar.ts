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

    // Initialize navbar style
    $(".nav-wrapper").css({"margin-top": -1 * $(".NavBar").height()});
    $(".NavBarNav").addClass("transparent");
  }

  ngAfterContentInit() {
    // Mechanism for sticky navbar
    $(window).scroll(() => {
      const windowTop = $(window).scrollTop(); // Location of the top of the window
      const homeHeight = $(".Home").outerHeight();
      const navbarHeight = $(".NavBar").height();
      if (windowTop > (homeHeight - navbarHeight)) {
        // Set navbar to fixed
        $(".nav-wrapper").css({"margin-top": "0px"});
        $(".NavBar").addClass("navbar-fixed");
        $(".NavBarNav").addClass("blue darken-1");
        $(".NavBarNav").css({"position": "fixed", "top": "0px"});
        $(".hide-on-med-and-down .brand-logo .button-collapse").css({"position": "fixed", "top": "0px"})
      } else {
        // Set navbar to relative
        $(".nav-wrapper").css({"margin-top": -1 * $(".NavBar").height()});
        $(".NavBar").removeClass("navbar-fixed");
        $(".NavBarNav").css({"position": "relative"});
        $(".NavBarNav").removeClass("blue darken-1");
        $(".NavBarNav").addClass("transparent");
      }
    });
  }
}
