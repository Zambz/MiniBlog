$(function () {
    var APPLICATION_ID = "346E4E89-4637-7BF6-FFE5-E55522AADD00",
            SECRET_KEY = "D4676A5F-121A-C551-FFA2-BB04D3BD8D00",
            VERSION = "v1";

    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);
    
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

