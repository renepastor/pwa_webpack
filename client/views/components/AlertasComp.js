var moment = require('moment');

let AlertasComp = {
    ok: async (msj, title="") => {
      console.log("Alerta OK");
      $("#msjLoad").append(`
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
    aviso: async (msj, title="Aviso") => {
      console.log("Alerta Aviso");
      $("#msjLoad").append(`
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
      </div>`);
    },
    error: async (msj, title="Error") => {
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

export default AlertasComp;