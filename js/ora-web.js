$('.nav-item').click(function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    $.ajax({
        url: $(this).find('.nav-link').attr('data-toggle'),
    }).done(function(html) {;
        $('#content').html(html);
    });
})
$(function() {
    $("#slider").slider();
    $("#slider2").slider();
});
$(function() {
    $.ajax({
        url: 'home.html',
    }).done(function(html) {;
        $('#content').html(html);
    });
    $('.nav-item').each(function(index) {
        console.log(index.find('.nav-link').attr('data-toggle'))

    });
})