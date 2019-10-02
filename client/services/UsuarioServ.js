import config  from '../config'
import utilsServ from '../services/UtilsServ'
import alertasComp from '../views/components/AlertasComp'
import menuComp from '../views/components/MenuComp'

const UsuarioServ = {
    // --------------------------------
    //  Acceso de usuario
    // --------------------------------
    token : (pUsuario, pClave) => {
        var query = `mutation{auth(input:{pUsuario:"${pUsuario}" pClave:"${pClave}"}){jwt}}`;
        console.log("Logos......");
        utilsServ.fnFetch({url: config.HOST_GRAPH, data: query})
        .then(res => {
            console.log("Logos......222",res.data.auth.jwt);
            utilsServ.setSession("token", res.data.auth.jwt);
            query = `query{miUsuario{cuenta persId alias
                usrRolesByUserId{nodes{rolId permiso}}
                }}`;
            utilsServ.fnFetch({url: config.HOST_GRAPH, data: query
            }).then(resUser => {
                console.log("Logos......333", resUser.data);
                utilsServ.setSession("ssUserName", resUser.data.miUsuario.cuenta);
                utilsServ.setSession("ssAlias", resUser.data.miUsuario.alias);
                utilsServ.setSession("ssPersId", resUser.data.miUsuario.persId);
                window.location = "index.html";
            }).catch(err => alertasComp.error(`Usuario y/o contraseña incorrectos`));
        });
        
    }
    // --------------------------------
    //  Acceso de usuario
    // --------------------------------
    ,primerRolMenu : () => {
        UsuarioServ.rolesUsuario()
        .then(res => {
            console.log(";;;;:::::,,,,,,.......");
            var listRoles = res.data.miUsuario.usrRolesByUserId.nodes;
            console.log("lista menu..", listRoles[0].rolId)
            UsuarioServ.menuUsuario(listRoles[0].rolId)
            .then(resMenu => {
                var listaMenu = resMenu.data.roleById.menuesByRolId.nodes;
                menuComp.opcionMenu(resMenu)
                console.log("lista menu..ddddd", listaMenu)
            });
        })
        
    }
    //
    // Roles del Usuario
    , rolesUsuario : () => {
        var query =`query {miUsuario {cuenta persId
            usrRolesByUserId {nodes {rolId permiso rol:roleByRolId {nombre id} }}
        }}`;
        var allRolUser = utilsServ.fnFetch({url: config.HOST_GRAPH, data: query})
        .then(resUser => {
            return (resUser)
        })
        .catch(errorUser => alertasComp.error(`No existe usuario en SIstema de personal <span hidden>${errorUser}</span>`));
        return allRolUser;
    }
    // --------------------------------
    //  Acceso de usuario
    // --------------------------------
    ,menuUsuario : (idRol="001") => {
        var query =`query{
                roleById(id: "${idRol}") {
                    menuesByRolId {nodes {
                    enlaceByEnlaId {nombre nivel ruta imagen
                        enlacesByPadreId(condition: {nivel: 2} orderBy: ORDEN_ASC) {nodes {
                        menuesByEnlaId(condition: {rolId: "${idRol}"}) {
                            nodes {enlaceByEnlaId {nombre nivel ruta imagen
                }}}}}}}}}
        }`;
        var alMenuUser = utilsServ.fnFetch({url: config.HOST_GRAPH, data: query})
        .then(menuUser => menuUser)
        .catch(errorMenu => alertasComp.error(`No existe usuario en SIstema de personal <span hidden>${errorMenu}</span>`));
        return alMenuUser;
    }
}

export default UsuarioServ;