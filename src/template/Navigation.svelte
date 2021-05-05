<script>
    let NavItems = [
        {
            icon: 'home',
            title: 'Kullanıcı',
            link:'./index.html',
            role: '',
            group: false,
            items: []
        },
        {
            icon: 'home',
            title: 'Interface',
            link:'./index.html',
            role: '',
            group: false,
            items:[
                {
                    icon: 'home',
                    title: 'Empty page',
                    link:'./index.html',
                    role: '',
                }
            ]
        },
        {
            icon: 'home',
            title: 'Yetkili',
            link:'./index.html',
            role: '',
            group: true,
            items: []
        },
        {
            icon: 'home',
            title: 'Interface',
            link:'./index.html',
            role: '',
            group: false,
            items:[
                {
                    icon: 'home',
                    title: 'Empty page',
                    link:'./index.html',
                    role: '',
                }
            ]
        },
        {
            icon: 'home',
            title: 'Yönetici',
            link:'./index.html',
            role: '',
            group: true,
            items: []
        },
        {
            icon: 'home',
            title: 'Interface',
            link:'./index.html',
            role: '',
            group: false,
            items:[
                {
                    icon: 'home',
                    title: 'Empty page',
                    link:'./index.html',
                    role: '',
                }
            ]
        }
    ]
</script>

<ul class="navbar-nav">
    {#each NavItems as { icon, title, link,role, group, items }, i}
        {#if group}
            <hr style="margin: 1rem 0;"/>
        {/if}
        {#if items!=null && items.length>0}
            <li class="nav-item active dropdown">
                <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" role="button"
                   aria-expanded="false">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                        <img style="max-width:75%;opacity: 0.5;" src="./dist/img/feather-icons/{icon}.svg" />
                    </span>
                    <span class="nav-link-title">{title}</span>
                </a>
                <div class="dropdown-menu">
                    <div class="dropdown-menu-columns">
                        <div class="dropdown-menu-column">
                            {#each items as { icon, title, link,role, items }, i}
                                <a class="dropdown-item active" href="./empty.html">
                                    Empty page
                                </a>
                            {/each}
                        </div>
                    </div>
                </div>
            </li>
        {:else}
            <li class="nav-item">
                <a class="nav-link" href="{link}">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                        <img style="max-width: 75%;    opacity: 0.5;" src="./dist/img/feather-icons/{icon}.svg">
                    </span>
                    <span class="nav-link-title">{title}</span>
                </a>
            </li>
        {/if}
    {/each}
</ul>