$(document).ready(function() {
    $('.rating-value ul li').find('.half').mouseenter(function (e) {
        hoverStars(e);
    });

    $('.rating-value ul li').find('.full').mouseenter(function (e) {
        hoverStars(e);
    });

    $('.rating-value ul').mouseleave(function (e) {
        mouseLeaveStars(e);
    });

    $('.rating-value ul li').find('.full').click(function (e) {
        clickStars(e);
        countSelectedStars(e);
    });

    $('.rating-value ul li').find('.half').click(function (e) {
        clickStars(e);
        countSelectedStars(e);
    });
})

function hoverStars(e) {
    var starAlreadySelected = $(e.currentTarget).closest('ul').attr('data-selected');
    if (starAlreadySelected === '0') {
        starsSelections(e);
    }
}

function mouseLeaveStars(e) {
    var starAlreadySelected = $(e.currentTarget).attr('data-selected');
    if (starAlreadySelected === '0') {
        $(e.currentTarget).find('li span').addClass('no-visible');
        $(e.currentTarget).find('li .shadow').removeClass('no-visible');
    }
}

function clickStars(e) {
    $(e.currentTarget).closest('ul').attr('data-selected', 1);
    starsSelections(e);
}

function starsSelections(e) {
    $(e.currentTarget).removeClass('no-visible');
    $(e.currentTarget).siblings('span').addClass('no-visible');
    $(e.currentTarget).closest('.star').prevAll().find('span').addClass('no-visible');
    $(e.currentTarget).closest('.star').prevAll().find('span.full').removeClass('no-visible');
    $(e.currentTarget).closest('.star').nextAll().find('span').addClass('no-visible');
}

function countSelectedStars(e) {
    var liPosition = $(e.currentTarget).closest('li').index() + 1;
    var starPosition = $(e.currentTarget).index() + 1;

    var tenth = starPosition === 3 ? 0.5 : 0;

    $(e.currentTarget).closest('ul').attr('data-cotation', liPosition - tenth);
    countTotal();
}

function countTotal() {
    var total = 0;
    var temp = 0;
    var moyenne = 0;
    $(document).find('.rating-value ul').each(function () {
        total = total + Number($(this).attr('data-cotation'));
        temp++;
    });

    moyenne = (total / temp);
    moyenne = (moyenne / 10) * temp;

    $('.note').text(moyenne.toFixed(2) + '/' + temp);
}