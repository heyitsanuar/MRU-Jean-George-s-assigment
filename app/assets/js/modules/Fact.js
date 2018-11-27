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

    //The slider will change to the next sibling fact
    nextFact(){
        $(this).parents(".fact").addClass("fact--hidden");
        $(this).parents(".fact").next().removeClass("fact--hidden");    
    }

    //The slider will change to the previous sibling fact
    previousFact(){
        $(this).parents(".fact").addClass("fact--hidden");
        $(this).parents(".fact").prev().removeClass("fact--hidden");       
    }
}

export default Fact;