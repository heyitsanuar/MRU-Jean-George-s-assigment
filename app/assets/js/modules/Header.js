import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Header {
    constructor() {
        this.btnMenuOpen = $("#btn-menu-open");
        this.btnMenuClose = $("#btn-menu-close");
        this.banner = $("");
        this.menu = $("#menu");

        //Header change class elements
        this.header = $(".header__navigation");
        this.headerWaypointTrigger = $(".landing-page");

        //Page section elements both header and body
        this.logo = $("");
        this.btnAbout = $("");
        
        this.createHeaderWaypoints();
        this.events();
    }

    events() {
        this.btnMenuOpen.click(this.showMenu.bind(this));
        this.btnMenuClose.click(this.showMenu.bind(this));
    }

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
                if(direction == "down"){
                    thisPrev.header.addClass("header__navigation--scrolled");
                }else{
                    thisPrev.header.removeClass("header__navigation--scrolled");
                }
            },
            offset: "10%"
        });
    }
}

export default Header;