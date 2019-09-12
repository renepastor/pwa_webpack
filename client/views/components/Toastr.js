let Alertas = {
    // Alerta de de exito
    /////////////////////////////////////
    ok: async (title = "", msj) => {
        let view =  /*html*/`
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
          </div>`;
    }

    // Alerta Aviso warning
    ////////////////////////////////
    ,info: ansync (title = "Aviso", msj) => {
        let view =  /*html*/`
          <div role="alert" aria-live="assertive" aria-atomic="true" class="toast show bg-info text-dark" data-autohide="false" onclick="this.remove();" onload="setTimeout(document.querySelector(".toast").remove(), 3000); ">
            <div class="toast-header bg-info text-dark">
              <i class="fa fa-info-circle"></i>
              <strong class="mr-auto">  ${title}</strong>
              <small>${moment().format("DD/MM hh:mm")}</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body">${msj}</div>
          </div>`;
     }

    // Alerta de error
    ////////////////////////////////
    ,error: ansync (title = "Error", msj) => {
        let view =  /*html*/`<div role="alert" aria-live="assertive" aria-atomic="true" class="toast show bg-danger text-dark" data-autohide="false" onclick="this.remove();" onload="setTimeout(document.querySelector(".toast").remove(), 3000); ">
            <div class="toast-header bg-danger text-dark">
              <i class="fa fa-shield"></i>
              <strong class="mr-auto">  ${title}</strong>
              <small>${moment().format("DD/MM hh:mm")}</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body">${msj}</div>
            </div>`;
        return view
    }
}

export default Alertas;