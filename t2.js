function fadeIn() {
    var text = $('.content').text().replace(/^\s+|\s+$/g, '');
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for (; i < length; i += sp) {
        txt = text.substring(i, i + sp);
        html.push('<span class="c animated">' + txt + '</span>');
    }
    $('.content').removeClass('c').html(html.join(''));

    for (i = 0, length = html.length; i < length; i++) {
        ! function(i) {
            setTimeout(function() {
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            }, i * 400);
        }(i);
    }
};

$('#audioplay').click(() => {
    let audio = $('#audio')[0];
    audio.play()
})

$('#box-body').click(() => {
    setTimeout(() => {
        let audio = $('#audio')[0];
        audio.play()
        document.querySelector("#main").hidden = false
        document.querySelector("#container").hidden = true
        document.querySelector("#heart").hidden = false
        document.querySelector("body").style.backgroundColor = "#542246"
        document.querySelector("#heart").hidden = false
        fadeIn()
    }, 1200)
})



window.onload = () => {

}