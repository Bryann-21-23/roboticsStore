import { Routes} from '@angular/router';
import { Home } from './pages/home/home';
import { Register } from './pages/visits/register/register';
import { Catalogo } from './pages/visits/catalogo/catalogo';
import { Blog } from './pages/visits/blog/blog';
import { Login } from './pages/visits/login/login';
import { Nosotros } from './pages/visits/nosotros/nosotros';
import { CatalogoUsers } from './pages/users/catalogo-users/catalogo-users';
import { CarritoCompras } from './pages/users/carrito-compras/carrito-compras';
import { PerfilUsers } from './pages/users/perfil-users/perfil-users';
import { HomeUsers } from './pages/users/home-users/home-users';

export const routes: Routes = [
    {path:  '', component: Home},
    {path: 'home', component: Home},
    {path: 'registro', component: Register},
    {path: 'catalogo', component: Catalogo},
    {path: 'blog', component: Blog},
    {path: 'nosotros', component: Nosotros},
    {path: 'login', component: Login},
    {path: 'catalogoUsers', component: CatalogoUsers},
    {path: 'carrito', component: CarritoCompras},
    {path: 'perfil', component: PerfilUsers},
    {path: 'homeUsers', component: HomeUsers},
]
