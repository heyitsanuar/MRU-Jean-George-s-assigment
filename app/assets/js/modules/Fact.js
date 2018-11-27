import $ from 'jquery';

class Fact {
    constructor(){
        this.facts = $(".fact");
        this.backBtns = $(".fa-chevron-left:not(fact__point--disabled)");
        this.nextBtns = $(".fa-chevron-right:not(fact__point--disabled)");

        this.events();
    }
    
    events(){
        this.backBtns.click(this.previousFact);
        this.nextBtns.click(this.nextFact);
    }

    nextFact(){
        $(this).parents(".fact").addClass("fact--hidden");
        $(this).parents(".fact").next().removeClass("fact--hidden");    
    }

    previousFact(){
        $(this).parents(".fact").addClass("fact--hidden");
        $(this).parents(".fact").prev().removeClass("fact--hidden");       
    }
}

export default Fact;