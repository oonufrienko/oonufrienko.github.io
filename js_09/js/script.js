$(function() {
    $('.jcarousel').jcarousel({
        animation: {
            duration: 800,
            easing:   'linear',
            complete: function() {
            }
        },
        wrap: 'circular'
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + "&nbsp;" + ' </a>';
        }
    });

    $('.jcarousel-pagination a:first').addClass('active');

    $('.jcarousel-prev').click(function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });
    
    $('.jcarousel-next').click(function() {
         $('.jcarousel').jcarousel('scroll', '+=1');
    });

    $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
    .jcarouselPagination();


});