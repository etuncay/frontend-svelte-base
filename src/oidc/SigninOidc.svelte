<script>
    import oidcClient from 'oidc-client';


    new oidcClient.UserManager().signinRedirectCallback().then(function (user){

       window.location.replace("http://localhost:5000/admin");
    });
</script>