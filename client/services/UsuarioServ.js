import config  from '../config'
import utils from '../services/Utils'
import {openDb} from '../js/iDB'

import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

openDb();
const UsuarioSer = {
    // --------------------------------
    //  Acceso de usuario
    // --------------------------------
    token : (pUsuario, pClave) => {
        var query = `mutation{
            auth(input:{pUsuario:"${pUsuario}" pClave:"${pClave}"}){jwt}}`;
        utils.fnFetch(config.HOST_SERVICE, query)
        .then(res => {
            localStorage.setItem("token",res.data.auth.jwt);
            query = `query{miUsuario{cuenta persId alias
                usrRolesByUserId{nodes{rolId permiso}}
              }}`;
            utils.fnFetch(config.HOST_SERVICE, query).then(resUser => {
                localStorage.setItem("dataUser",resUser.data.miUsuario)
                window.location = window.location.origin;
            })
        })
    }

    // --------------------------------
    //  Lista roles del usuario
    // --------------------------------
    , rolesUsuario: (ms) => {
    }
    // --------------------------------
    //  Lista Menu del rol
    // --------------------------------
    , rolesUsuario: (ms) => {

    }
}

export default UsuarioSer;