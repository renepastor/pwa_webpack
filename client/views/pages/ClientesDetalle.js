import Utils        from './../../services/Utils.js'
import {openDb,getObjectStore}  from '../../js/iDB.js'
var moment = require('moment');

openDb();
function printZpl(zpl) {
    var printWindow = window.open();
    printWindow.document.open('text/plain')
    printWindow.document.write(zpl);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

let getModal = () => {
    $("#pnlModal").html(`<div class="modal-dialog modal-lg" role="document">
        <form class="csForm modal-content" id="formFactura">
         <fieldset>
          <div class="modal-header p-0">
            <legend class="modal-title" id="exampleModalLongTitle">  &nbsp; Emición Factura</legend>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row align-items-start">
              <label class="col">
                <b for="cufd">CUFD : </b>
                <span id="cufd">..</span>
              </label>
              <label class="col">
                <b for="puntoVenta">Punto de Venta : </b>
                <span id="puntoVenta">..</span>
              </label>
              <label class="col">
                <b for="fechaEmision">Fecha Emisión : </b>
                <span id="fechaEmision">__/__/____.</span>
              </label>
              <div class="col">
                <label for="cuenta">Cliente : </label>
                <select name="cuenta" id="cuenta"  placeholder="Cuenta"class="form-control text">
                    <option>--Cliente--</option>
                </select>
              </div>
              <label class="col">
                <select name="cuenta" id="cuenta" class="form-control text">
                    <option>--Suministro--</option>
                </select>
              </label>
              <label class="col">
                <textarea name="descripcion" id="descripcion"  placeholder="Descripcion..." class="form-control text">
                    ^XA        
                    ^FXTest ZPL^FS
                    ^FO50,100
                    ^A0N,89^FDHello ZPL^FS
                    ^XZ
                </textarea>
              </label>
              <label class="col">
                <input type="text" name="cantidad" id="cantidad"  placeholder="Cantidad" size="10" class="form-control decimal">
              </label>
              <label class="col">
                <select name="unidadMedida" id="unidadMedida" class="form-control text">
                    <option>--Unidad de Medida--</option>
                </select>
              </label>
              <label class="col">
                <b for="cuenta">Precio Unitario: </b>
                <span id="precioUnitario">0,00</span>
              </label>
              <label class="col">
                <b for="cuenta">Precio Total : </b>
                <span id="precioTotal">0,00</span>
              </label>
            </div>
            <div class="modal-footer justify-content-center p-2">
                <button type="submit" class="btn btn-sm btn-primary">
                    <i class="fa fa-save"></i> Guardar
                </button>
                <button type="button" class="btn btn-sm btn-primary" id="print">
                    <i class="fa fa-print"></i> Guardar e Imprimir
                </button>
                <button type="button" class="btn btn-sm btn-outline-primary" data-dismiss="modal">
                    Cancelar <i class="fa fa-close"></i>.
                </button>
            </div>
            </fieldset>
        </form>
        </div>
          
      `);
}

let ClienteDetalle = {

    render : async () => {
        let view = /*html*/`
            <h5>Contratos</h5>
            <table class="table w-100 table-striped">
                <thead>
                    <tr>
                        <th>Tipo Contrato</th>
                        <th>Ubicacion</th>
                        <th>Vigencia</th>
                        <th>Producto</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="listContrato">
                </tbody>
            </table>
            `
        return view;
    }
    , after_render: async () => {
        let request = Utils.parseRequestURL()
        var store = getObjectStore('clientesDetalle', 'readwrite');
        var index = store.index('idCliente');
        var range = IDBKeyRange.only(request.id);
        index.openCursor(range).onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                $("#listContrato").append(`<tr>
                <td>${cursor.value.nombreRazonSocial}</td>
                <td>${cursor.value.nombreRazonSocial}</td>
                <td>${moment(cursor.value.fechaInicio).format('DD/MM/YYYY')} ${moment(cursor.value.fechaFin).format('DD/MM/YYYY')}</td>
                <td>${cursor.value.nombreRazonSocial}</td>
                <td><a href="javascript:void(0)" class="btn btn-sm fa fa-file-text-o btn-outline-primary factura" data-backdrop="static" data-toggle="modal" data-target="#pnlModal"></a>
                </td>
                </tr>`);
                cursor.continue();
            }
            $("#listContrato").on("click", ".factura", function(){
                getModal();
                Modal;
                $("#formFactura").on("click", "#print", function(){
                    console.log("");
                    printZpl(document.getElementById('descripcion').value)
                })
            });
        }
    }
}

export default ClienteDetalle;