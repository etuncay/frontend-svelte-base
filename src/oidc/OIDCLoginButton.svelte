<script>
    import oidcClient from 'oidc-client';

    oidcClient.Log.logger = console;

    var config = {
        authority: "https://oauth.sabis.subu.edu.tr",
        client_id: "sabis.defaultproject.js",
        redirect_uri: "http://localhost:5000/signin-oidc",
        response_type: "id_token token",
        scope:"openid profile",
        post_logout_redirect_uri : "http://localhost:5000/logout",
        automaticSilentRenew: true
    };

    var mgr = new oidcClient.UserManager(config);
    mgr.getUser().then(function (user) {
        if (user) {
            console.log("User logged in", user.profile);
        }
        else {
            mgr.signinRedirect();
            console.log("User not logged in");
        }
    });
</script>

<button on:click={mgr.signinRedirect()}>Giriş</button>