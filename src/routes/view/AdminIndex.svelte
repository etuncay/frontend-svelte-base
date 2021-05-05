<script>

    import { templateStore } from '../../template/template-store';
    import oidcClient from 'oidc-client';
    import { auth } from '../../oidc/OidcStore';

    const { UserManager } = oidcClient;
    templateStore.set({
        title: 'Admin Dashboard'
    })
    if(auth()){
        console.log('işlem tamam')
    }

</script>