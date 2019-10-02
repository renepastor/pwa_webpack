"use strict";
import "./scss/style.scss";

import './css/sistema.css';
import './css/animate.css';

///import './js/app.js'
import './js/main.js'
//import './js/js.js'



import Login              from './views/pages/Login.js'
import Home               from './views/pages/Home.js'
import Equipos            from './views/pages/Equipos.js'
import Materiales         from './views/pages/Materiales.js'
import ManoObra           from './views/pages/ManoObra.js'

import Facturar           from './views/pages/Facturar.js'
import About              from './views/pages/About.js'
import Error404           from './views/pages/Error404.js'
import navbarComp         from './views/components/NavbarComp.js'
import bottombarComp      from './views/components/BottombarComp.js' 
import utilsServ          from './services/UtilsServ.js'
import usuarioServ        from './services/UsuarioServ'

const pag = 20;

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'                       : Home
    , '/login'                : Login
    , '/facturar'             : Facturar
    , '/about'                : About
    , '/equipos'              : Equipos
    , '/materiales'           : Materiales
    , '/manoobra'             : ManoObra
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const inicio = null || document.getElementById('login_container');
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('pnlBody');
    const footer = null || document.getElementById('footer_container');

    // Render the Header and footer of the page
    if(!utilsServ.getSession("token")){
        inicio.innerHTML = await Login.render();
        await Login.after_render(); 
    }else{
        header.innerHTML = await navbarComp.render();
        await navbarComp.after_render();

        footer.innerHTML = await bottombarComp.render();
        await bottombarComp.after_render();

        // Get the parsed URl from the addressbar
        let request = utilsServ.parseRequestURL()

        // Parse the URL and if it has an id part, change it with the string ":id"
        let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
        // Get the page from our hash of supported routes.
        // If the parsed URL is not in our list of supported routes, select the 404 page instead
        let page = routes[parsedURL] ? routes[parsedURL] : Error404
        content.innerHTML = await page.render();
        await page.after_render();

        // Menu para el usuario
        if($("#listMenu").text().trim() == ""){
            usuarioServ.primerRolMenu()
        }
        
    }  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
