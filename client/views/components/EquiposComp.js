let EquiposComp = {
    body: async (data) => {
      return `
      <h5>Admin. Equipos</h5>
        <div class="table-responsive project-stats">
          <table class="table table-striped table-sm table-hover">
            <thead class="thead-default">
              <tr>
                <th><button class="btn btn-sm btn-new fa fa-plus-square" data-backdrop="static" data-toggle="modal" data-url="/analisisEquipos/add.html" data-target="#pnlModal" id="new">Nuevo</button></th>
                <th>Analisis</th>
                <th>Equipo</th>
                <th>Unidad Medida</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Precio Total</th>
                <th>Porcentaje Productivo</th>
                <th>Precio Inproductivo</th>
              </tr>
            </thead>
            <tbody id="pnlAnalisisEquipos">
            </tbody>
          </table>
        </div>
        <div id="pnlPg"></div>
         `;
    },
    list: async (data) => {
      $("#pnlAnalisisEquipos").append(`
      <div role="alert" aria-live="assertive" aria-atomic="true" class="toast show  bg-warning text-dark" data-autohide="false" onclick="this.remove();" onload="setTimeout(document.querySelector(".toast").remove(), 3000); ">
        <div class="toast-header bg-warning text-dark">
          <i class="fa fa-check"></i>
          <strong class="mr-auto">  ${title}</strong>
          <small>${moment().format("DD/MM hh:mm")}</small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body"> ${msj}</div>
      </div>`);
    },
    add: async (msj, title="Aviso") => {
      console.log("Alerta Aviso");
      $("#pnlModal").append(`
      <div class="modal-dialog modal-lg" role="document">
  <form class="csForm modal-content" id="formCrearAnalisisEquipos">
   <fieldset>
    <div class="modal-header p-0">
      <legend class="modal-title" id="exampleModalLongTitle">  &nbsp; Crear Analisis Equipos</legend>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="row align-items-start">
        <div class="form-group col">
          <label for="analisisId">Analisis : </label>
          <select name="analisisId" id="analisisId" required="required" class="form-control int8">
            <option value="">--Seleccionar--</option>
          </select>
        </div>
        <div class="form-group col">
          <label for="equipoId">Equipo : </label>
          <select name="equipoId" id="equipoId" required="required" class="form-control int8">
            <option value="">--Seleccionar--</option>
          </select>
        </div>
        <div class="form-group col">
          <label for="unidadMedida">Unidad Medida : </label>
          <input type="text" name="unidadMedida" id="unidadMedida" required="required" placeholder="Unidad Medida" size="30" class="form-control text">
        </div>
        <div class="form-group col">
          <label for="cantidad">Cantidad : </label>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary" onClick="menos('cantidad')">-</button>
            <input type="text" name="cantidad" id="cantidad" required="required" placeholder="Cantidad" max="9999" min="0" step="1" size="5" class="form-control numeric"/>
            <button type="button" class="btn btn-outline-primary" onClick="mas('cantidad')">+</button>
          </div>
          
        </div>
        <div class="form-group col">
          <label for="precioUnitario">Precio Unitario : </label>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary" onClick="menos('precioUnitario')">-</button>
            <input type="text" name="precioUnitario" id="precioUnitario" required="required" placeholder="Precio Unitario" max="9999" min="0" step="1" size="5" class="form-control numeric"/>
            <button type="button" class="btn btn-outline-primary" onClick="mas('precioUnitario')">+</button>
          </div>
          
        </div>
        <div class="form-group col">
          <label for="precioTotal">Precio Total : </label>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary" onClick="menos('precioTotal')">-</button>
            <input type="text" name="precioTotal" id="precioTotal" required="required" placeholder="Precio Total" max="9999" min="0" step="1" size="5" class="form-control numeric"/>
            <button type="button" class="btn btn-outline-primary" onClick="mas('precioTotal')">+</button>
          </div>
          
        </div>
        <div class="form-group col">
          <label for="porcentajeProductivo">Porcentaje Productivo : </label>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary" onClick="menos('porcentajeProductivo')">-</button>
            <input type="text" name="porcentajeProductivo" id="porcentajeProductivo" required="required" placeholder="Porcentaje Productivo" max="9999" min="0" step="1" size="5" class="form-control numeric"/>
            <button type="button" class="btn btn-outline-primary" onClick="mas('porcentajeProductivo')">+</button>
          </div>
          
        </div>
        <div class="form-group col">
          <label for="precioInproductivo">Precio Inproductivo : </label>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary" onClick="menos('precioInproductivo')">-</button>
            <input type="text" name="precioInproductivo" id="precioInproductivo" required="required" placeholder="Precio Inproductivo" max="9999" min="0" step="1" size="5" class="form-control numeric"/>
            <button type="button" class="btn btn-outline-primary" onClick="mas('precioInproductivo')">+</button>
          </div>
          
        </div>
        
      </div>
    </div>
    <div class="modal-footer justify-content-center p-2">
      <button type="submit" class="btn btn-sm btn-primary">
        <i class="fa fa-save"></i> Guardar
      </button>
      <button type="button" class="btn btn-sm btn-outline-primary" data-dismiss="modal">
        Cancelar <i class="fa fa-close"></i> 
      </button>
    </div>
   </fieldset>
  </form>
</div>
      `);
    },
    edit: async (msj, title="Error") => {
      console.log("Alerta Error");
      $("#msjLoad").append(`
      <div role="alert" aria-live="assertive" aria-atomic="true" class="toast show bg-danger text-dark" data-autohide="false" onclick="this.remove();" onload="setTimeout(document.querySelector(".toast").remove(), 3000); ">
        <div class="toast-header bg-danger text-dark">
          <i class="fa fa-shield"></i>
          <strong class="mr-auto">  ${title}</strong>
          <small>${moment().format("DD/MM hh:mm")}</small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">${msj}</div>
      </div>`);
    }

}

export default EquiposComp;