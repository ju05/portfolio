// Open mailto links in a new tab
$('#mailto').click(function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    window.open(url);
});