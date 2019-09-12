// --------------------------------
//  Define de Base de Datos indexedDB
// --------------------------------
import {openDb}  from '../../js/iDB.js'
import {setImportarFacturacion} from '../../model/Sincronizar'
openDb();

let Sincronizar = {
    render : async () => {
        let view =  /*html*/`
        <section role="dialog">
        <h4>Sincronozar Facturas</h4>
        <div class="content">
            <div class="d-flex justify-content-center form_container p-2">
                <form method="POST" id="formSincronizar" class="p-2 tab-content">
                    <div class="card-header p-1"><b>Sincronozar Facturas</b></div>
                    <div class="input-group">
                        <label for="">Cantidad de Notas Fiscales por Sincronizar:</label>
                        <b></b>
                    </div>
                    <div class="input-group">
                        <label for="">Cantidad de Notas Ficales Válidas por Sincronizar:</label>
                        <b></b>
                    </div>
                    <div class="input-group">
                        <label for="">Cantidad de Notas Fiscales Anulados por Sincronzar:</label>
                        <b></b>
                    </div>
                    <div class="input-group">
                        <label for="">Fecha Ultima Sincronizacion:</label>
                        <b></b>
                    </div>
                    <div class="inpForm m-1 text-center">
                        <button type="submit" class="btn btn-sm btn-outline-primary"><i class=" fa fa-sing-in"></i> Sincronizar</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </section>
        `
        return view
    }
    , after_render: async () => {
        if (!window.indexedDB) {
            console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
        }
        // Sincronizar
        $("#formSincronizar").submit(function(e) {
            e.preventDefault();
            $('#msjLoad').show();
            setImportarFacturacion();
        });
        
    }
}

export default Sincronizar;

