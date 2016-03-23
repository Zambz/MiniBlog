$(function () {
    var APPLICATION_ID = "346E4E89-4637-7BF6-FFE5-E55522AADD00",
        SECRET_KEY = "D4676A5F-121A-C551-FFA2-BB04D3BD8D00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var user = new Backendless.User();
    user.email = "reapz16@gmail.com";
    user.password = "password";
    Backendless.UserService.register(user);
    
});