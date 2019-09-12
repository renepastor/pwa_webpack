let Menu = {
    // Alerta de de exito
    /////////////////////////////////////
    principal: async (title = "", msj) => {
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

}

export default Menu;