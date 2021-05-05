import oidcClient from 'oidc-client';
let tokenKey ='Token'

let  oidcSettings = {
    authority: "https://oauth.sabis.subu.edu.tr",
    client_id: "sabis.defaultproject.js",
    redirect_uri: "http://localhost:5000/signin-oidc",
    response_type: "id_token token",
    scope:"openid profile sabis.defaultproject.api",
    post_logout_redirect_uri : "http://localhost:5000/logout"
};

export function oidcSettingsGet(){
    return oidcSettings;
}


export function userGet(){
    let mgr = new oidcClient.UserManager(oidcSettingsGet());
    mgr.getUser().then(function (user) {
        if (user) {
            return user
        }
        else {
            mgr.signinRedirect();
        }
    });
}

export function userProfileGet(){
    let mgr = new oidcClient.UserManager(oidcSettingsGet());
    mgr.getUser().then(function (user) {
        if (user) {
            return user.profile
        }
        else {
            mgr.signinRedirect();
        }
    });
}

export function auth(){

    let mgr = new oidcClient.UserManager(oidcSettingsGet());
    mgr.getUser().then(function (user) {
        if (user) {
            console.log("User logged in2", user);
            let expires_at = user.expires_at;
            const start = Date.now();
            if((((expires_at - (start/1000))/360))>0){

                return true;
            }
        }
        else {
            mgr.signinRedirect();
        }
    });

    return false;
}