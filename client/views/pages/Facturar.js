// --------------------------------
//  Define Data Sources
// --------------------------------
let Facturar = {
    after_render: async () => {
        $("#pnlModal").html(`<div class="modal-dialog modal-lg" role="document">
        <form class="csForm modal-content" id="formCrearUsuarios">
         <fieldset>
          <div class="modal-header p-0">
            <legend class="modal-title" id="exampleModalLongTitle">  &nbsp; Crear Usuarios</legend>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row align-items-start">
              <div class="form-group col">
                <label for="cuenta">Cuenta : </label>
                <input type="text" name="cuenta" id="cuenta"  placeholder="Cuenta" size="10" class="form-control text">
              </div>
            </div>
            <div class="modal-footer justify-content-center p-2">
                <button type="submit" class="btn btn-sm btn-primary">
                    <i class="fa fa-save"></i> Guardar
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

}

export default Facturar;