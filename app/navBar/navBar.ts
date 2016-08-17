import { Component } from "@angular/core";
declare let $: any;

@Component({
  selector: "navBar",
  template: `
            <div id="navBar" class="NavBar">
              <nav class="NavBarNav blue darken-1">
                <div class="nav-wrapper">
                  <a id="BrandLogo" class="brand-logo"><img class="MWLogo" src="./img/NavbarIcon.png" alt="HTML5 Icon"></a>
                  <ul class="right hide-on-med-and-down">
                    <li><a class="navbar-items" href="#Home">Home</a></li>
                    <li><a class="navbar-items" href="#About">About</a></li>
                    <li><a class="navbar-items" href="#Exp">Experience</a></li>
                    <li><a class="navbar-items" href="#Portfolio">Portfolio</a></li>
                    <li><a class="navbar-items" href="#Education">Education</a></li>
                    <li><a class="navbar-items" href="#Skills">Skills</a></li>
                    <li><a class="navbar-items" href="#Gallery">Gallery</a></li>
                    <li><a class="navbar-items" href="#Contact">Contact</a></li>
                  </ul>
                  <ul class="side-nav" id="mobile-demo">
                    <li><a class="navbar-items" href="#Home">Home</a></li>
                    <li><a class="navbar-items" href="#About">About</a></li>
                    <li><a class="navbar-items" href="#Exp">Experience</a></li>
                    <li><a class="navbar-items" href="#Portfolio">Portfolio</a></li>
                    <li><a class="navbar-items" href="#Education">Education</a></li>
                    <li><a class="navbar-items" href="#Skills">Skills</a></li>
                    <li><a class="navbar-items" href="#Gallery">Gallery</a></li>
                    <li><a class="navbar-items" href="#Contact">Contact</a></li>
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
        menuWidth: 240,
        edge: "right", // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    // Initialize navbar style
    $(".nav-wrapper").css({"margin-top": -1 * $(".NavBar").height()});
  }

  ngAfterViewInit() {
    // Mechanism for sticky navbar, be careful with it
    $(window).scroll(() => {
      const windowTop = $(window).scrollTop(); // Location of the top of the window
      const offset = $(".Home").outerHeight() - $(".NavBar").height();
      const transparency = windowTop / offset;
      $(".NavBarNav").css({"background-color": `rgba(30, 136, 230, ${transparency})`});
      if (windowTop > offset) {
        // Set navbar to fixed
        $(".About").css({"margin-top": "-77px"});
        $(".NavBar").addClass("navbar-fixed");
        $(".NavBarNav").removeClass("transparent");
        $(".NavBarNav").addClass("blue darken-1");
        // Don't try to combine these 2 lines below, it just won't work right
        $(".NavBarNav").css({"position": "fixed", "top": "0px"});
        $(".nav-wrapper").css({"margin-top": "0px"});
        $(".hide-on-med-and-down .brand-logo .button-collapse").css({"position": "fixed", "top": "0px"});
      } else {
        // Set navbar to relative
        $(".About").css({"margin-top": "-15px"});
        $(".NavBar").css({"height": $(".NavBarNav").height() + "px"});
        $(".NavBar").removeClass("navbar-fixed");
        $(".NavBarNav").css({"position": "relative"});
        $(".NavBarNav").removeClass("blue darken-1");
        $(".nav-wrapper").css({"margin-top": -1 * $(".NavBar").height()});
      }
    });

    // When you click BrandLogo it brings you to top
    $("#BrandLogo").click(() => {
      $("html, body").animate({
        scrollTop: 0
      }, 350);
    });
  }
}
