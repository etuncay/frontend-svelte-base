<script>
    import { Router } from 'svelte-router-spa'
    import { routes } from './routes/routes'
    let options = { gaPageviews: true}
</script>
<Router {routes}   {options} />
