$(function (){

    $(".has-sub").hover(function(e){
      $(".has-sub > ul").slideDown("slow", function(){
  
        var numberOfSubmenuItems;
        var $this;
        var isMenuOpened = false;
  
        $('ul.sub-menu-level1').on({
              'mouseenter': function(){
                $this = $(this);
                var ch = $this.children();
                numberOfSubmenuItems = $this.children().length;
                var top = 0;
                var px = 39;
               
                console.log("1 MouseEnter Check if menu has already opened, isMenuOpened = " + isMenuOpened);
  
                // check if menu has already opened
                // if ( !isMenuOpened ) {
                  // debugger;
                  // check if there is next level of menu 
                      isMenuOpened = true;
  
                    if ( numberOfSubmenuItems > 0 ) {
  
                      top = $this.index() * px + "px";
  
                      console.log("2 MouseEnter slideDown before, isMenuOpened = " + isMenuOpened);
  
                      $("ul.sub-menu-level2").eq($this.index()).css("top", top).slideDown("slow", function(){
                        isMenuOpened = false;
                        console.log("3 MouseEnter slideDown inside, isMenuOpened = " + isMenuOpened);
                      });
  
                      console.log("4 MouseEnter slideDown after, isMenuOpened = " + isMenuOpened);
                    // $("span").text($this.index());
                    }
                  // } 
                }
              }, 'li' );
  
        $('ul.sub-menu-level1').on({
              'mouseleave': function(){
                // debugger;
  
                console.log("1 MouseLeave. Just inside. Check isMenuOpened = " + isMenuOpened);
  
              // if ( !isMenuOpened ) {
                isMenuOpened = true;
                console.log("2 MouseLeave. slideUp before, isMenuOpened = " + isMenuOpened);
                $("ul.sub-menu-level2").eq($this.index()).slideUp("slow", function(){
                  isMenuOpened = false;
                  console.log("3 MouseLeave. slideUp inside, isMenuOpened = " + isMenuOpened);
                });
              // }
              console.log("4 MouseLeave. slideUp after, isMenuOpened = " + isMenuOpened);
                  }
              }, 'li' );
  
    });
      
    }, function() {
      $(".has-sub > ul").slideUp("slow");
    });
  
  });