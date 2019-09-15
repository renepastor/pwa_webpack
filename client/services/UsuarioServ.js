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
        utilsServ.fnFetch({url: config.HOST_SERVICE, data: query})
        .then(res => {
            localStorage.setItem("token",res.data.auth.jwt);
            query = `query{miUsuario{cuenta persId alias
                usrRolesByUserId{nodes{rolId permiso}}
                }}`;
            utilsServ.fnFetch({url: config.HOST_SERVICE, data: query}).then(resUser => {
                localStorage.setItem("dataUser",JSON.stringify(resUser.data.miUsuario))
                window.location = window.location.origin;
            })
        })
    }
    
    ,primerRolMenu : () => {
        UsuarioServ.rolesUsuario()
        .then(res => {
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
        var datosUser = JSON.parse(localStorage.dataUser);
        var query =`query {miUsuario {cuenta persId
            usrRolesByUserId {nodes {rolId permiso rol:roleByRolId {nombre id} }}
        }}`;
        var allRolUser = utilsServ.fnFetch({url: config.HOST_SERVICE, data: query})
        .then(resUser => resUser)
        .catch(errorUser => alertasComp.error(`No existe usuario en SIstema de personal <span hidden>${errorUser}</span>`));
        return allRolUser;
    }

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
        var alMenuUser = utilsServ.fnFetch({url: config.HOST_SERVICE, data: query})
        .then(menuUser => menuUser)
        .catch(errorMenu => alertasComp.error(`No existe usuario en SIstema de personal <span hidden>${errorMenu}</span>`));
        return alMenuUser;
    }
}

export default UsuarioServ;