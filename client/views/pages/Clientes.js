// --------------------------------
//  Define Data Sources
// --------------------------------
import {openDb,getObjectStore}  from '../../js/iDB.js'
import {LIMIT_PG}  from '../../js/conf.js'

var nPg = 1;
var limit = 3;
var sig = 1;
var ant = 1;

let Cliente = {
    render : async () => {
        let view = /*html*/`
            <h5>Clientes</h5>
            <div class="input-group mb-0">
                <input type="search" class="form-control" placeholder="Buscar.." aria-label="Buscar.." aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"><i class="fa fa-search"></i></button>
                </div>
            </div>
            <table class="table w-100 table-striped">
                <thead>
                    <tr>
                        <th>Razon Social</th>
                        <th>Nit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="listCliente">
                </tbody>
            </table>
            <a class="page-link" href="javascript:void(0)" class="angle-double-rigth" id="sig">>></a>
            `
        return view;
    }
    , after_render: async () => {
        openDb();
        switch (this.id) {
            case "ant":
              nPg --;
              break;
            case "sig":
              nPg ++;
              break;
            default:
              break;
        }
        sig = nPg*LIMIT_PG;
        ant = (nPg-1)*LIMIT_PG;
        var store = getObjectStore('clientes', 'readwrite');
        var boundKeyRange = IDBKeyRange.bound(ant, sig, true, false);
        store.openCursor(boundKeyRange).onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                $("#listCliente").append(`<tr>
                    <td>${cursor.value.nombreRazonSocial}</td>
                    <td>${cursor.value.nitCi}</td>
                    <td><a href="#/clientes_detalle/${cursor.value.id}" class="btn btn-sm fa fa-list btn-outline-primary"></a></td>
                </tr>`);
                cursor.continue();
            }
        };
    }

}
export default Cliente;