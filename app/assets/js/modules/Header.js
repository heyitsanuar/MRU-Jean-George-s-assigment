import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smothScroll from 'jquery-smooth-scroll';

class Header {
    constructor() {
        //Collecting needed elements from DOM
        this.btnMenuOpen = $("#btn-menu-open");
        this.btnMenuClose = $("#btn-menu-close");
        this.menu = $("#menu");

        //Header change class elements
        this.header = $(".header__navigation");
        this.headerWaypointTrigger = $(".landing-page");

        //Page section elements both header and body
        this.linksHeader = $(".header__menu-item");
        
        //Setting on required methods
        this.createHeaderWaypoints();
        this.addSmoothScrolling();
        this.events();
    }

    events() {
        this.btnMenuOpen.click(this.showMenu.bind(this));
        this.btnMenuClose.click(this.showMenu.bind(this));
    }

    //MOBILE DEVICE: When pressing the buttons of the menu, it hides or is shown
    showMenu() {
        this.menu.toggleClass("header__menu--is-toggled");
        this.btnMenuClose.toggleClass("header__menu-exit--is-visible");
    }

    //Creates waypoints for elements
    createHeaderWaypoints() {
        var thisPrev = this;

        new Waypoint({
            element: this.headerWaypointTrigger[0],
            handler: function(direction) {
                //Adding or removing a class which gives a color to the header depending on the scroll movement
                if(direction == "down"){
                    thisPrev.header.addClass("header__navigation--scrolled");
                }else{
                    thisPrev.header.removeClass("header__navigation--scrolled");
                }
            },
            offset: "10%"
        });
    }

    //Adds smooth scrolling when clicking on links
    addSmoothScrolling() {
        this.linksHeader.smoothScroll();
    }
}

export default Header;