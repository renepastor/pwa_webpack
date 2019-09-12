"use strict";
import "./scss/style.scss";

//const dateTime = require('bootstrap4-datetimepicker');
//import './css/toastr.min.css';
import './css/sistema.css';
import './css/animate.css';

import './js/app.js'
import './js/main.js'
import './js/js.js'



import Login              from './views/pages/Login.js'
import Home               from './views/pages/Home.js'
import Sincronizar        from './views/pages/Sincronizar.js'
import Clientes           from './views/pages/Clientes.js'
import ClientesDetalle    from './views/pages/ClientesDetalle.js'
import Facturar           from './views/pages/Facturar.js'
import About              from './views/pages/About.js'
import Error404           from './views/pages/Error404.js'
import PostShow           from './views/pages/PostShow.js'
import Register           from './views/pages/Register.js'

import Navbar             from './views/components/Navbar.js'
import Bottombar          from './views/components/Bottombar.js' 

import Utils              from './services/Utils.js'

import {MENU}             from './js/conf'
import {fnMenu}           from './js/lib'



// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'                       : Home
    , '/login'                : Login
    , '/sincronizar'          : Sincronizar
    , '/clientes'             : Clientes
    , '/clientes_detalle/:id' : ClientesDetalle
    , '/facturar'             : Facturar
    , '/about'                : About
    , '/p/:id'                : PostShow
    , '/register'             : Register
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
    
    // Lazy load view element:
    const inicio = null || document.getElementById('login_container');
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('pnlBody');
    const footer = null || document.getElementById('footer_container');
    
      
    // Render the Header and footer of the page
    if(!localStorage.getItem("token")){        
        inicio.innerHTML = await Login.render();
        await Login.after_render(); 
    }else{        
        header.innerHTML = await Navbar.render();
        await Navbar.after_render();

        footer.innerHTML = await Bottombar.render();
        await Bottombar.after_render();

        // Get the parsed URl from the addressbar
        let request = Utils.parseRequestURL()

        // Parse the URL and if it has an id part, change it with the string ":id"
        let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
        // Get the page from our hash of supported routes.
        // If the parsed URL is not in our list of supported routes, select the 404 page instead
        let page = routes[parsedURL] ? routes[parsedURL] : Error404
        content.innerHTML = await page.render();
        await page.after_render();

        // Menu para el usuario
        var jsonMenuRol =  MENU.find(roles => (roles.rol === "lecturador"));
        $("#listMenu").html("");
        fnMenu(jsonMenuRol.data);
    }  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
