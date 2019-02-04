$(function() {

    var $tabs = $('.tabs ul li');

    $tabs.on('click', function(e){
        var $tabItem = $('.active');
        $tabItem.removeClass( "active" );

        var txt = e.target.innerHTML;
        $(this)[0].innerHTML = txt;
        // $(this)[0] - new active item

        if ( txt === "Zebras") {
            $('.content')[0].innerHTML = "(/ˈziːbrə/ ZEE-brə, UK also /ˈzɛbrə/ ZEB-rə)[1] are several species of African equids (horse family) united by their distinctive black-and-white striped coats. Their stripes come in different patterns, unique to each individual. They are generally social animals that live in small harems to large herds. Unlike their closest relatives, horses and donkeys, zebras have never been truly domesticated.";
        } else if ( txt === "Elephant") {
            $('.content')[0].innerHTML = "The elephants are the large mammals forming the family Elephantidae in the order Proboscidea. Three species are currently recognised: the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus). Elephants are scattered throughout sub-Saharan Africa, South Asia, and Southeast Asia. Elephantidae is the only surviving family of the order Proboscidea; other, now extinct, members of the order include deinotheres, gomphotheres, mammoths, and mastodons.";
        } else {
            $('.content')[0].innerHTML = "A rhinoceros (/raɪˈnɒsərəs/, from Greek rhinokeros, meaning 'nose-horned', from rhinos, meaning 'nose', and kerato/keras, meaning 'horn'), commonly abbreviated to rhino, is one of any five extant species of odd-toed ungulates in the family Rhinocerotidae, as well as any of the numerous extinct species. Two of the extant species are native to Africa and three to Southern Asia. The term \"rhinoceros\" is often more broadly applied to now extinct relatives of the superfamily Rhinocerotoidea.";
        }

        $tabItem[0].innerHTML = '<a href=\'#\'>' + $tabItem[0].innerHTML + '</a>';
        // activate the link

        $(this).addClass("active");

    });

});
