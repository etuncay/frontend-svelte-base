import { templateStore } from '../template/template-store';
export let templateLayout='';
templateStore.subscribe(value => {
    templateLayout = value.templateLayout;
});


import PublicLayout  from '../template/layout/public/Public.svelte'
import AdminLayoutVertical from '../template/layout/admin/AdminLayoutVertical.svelte'
import AdminLayoutHorizontal from '../template/layout/admin/AdminLayoutHorizontal.svelte'

import SigninOidc from '../oidc/SigninOidc.svelte'


let AdminLayoutComponent =AdminLayoutHorizontal;

import LoginPage from './view/Login.svelte'

import PublicIndex  from './view/PublicIndex.svelte'
import AdminIndex  from './view/AdminIndex.svelte'


switch (templateLayout) {
    case 'admin-layout-horizontal':
        AdminLayoutComponent = AdminLayoutHorizontal
        break;
    case 'admin-layout-vertical':
        AdminLayoutComponent = AdminLayoutVertical
        break;
}


function userIsAdmin() {
    return true;
}

const routes = [
    {
        name: '/',
        component: PublicIndex,
        layout: PublicLayout,
    },
    { name: 'login', component: LoginPage },
    { name:'signin-oidc',component: SigninOidc},
    {
        name: 'admin',
        component: AdminLayoutComponent,
        onlyIf: { guard: userIsAdmin, redirect: '/login' },
        nestedRoutes: [
            { name: 'index',  component: AdminIndex }
        ],
    },
]

export { routes }