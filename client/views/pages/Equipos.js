// --------------------------------
//  Define Data Sources
// --------------------------------
import config from '../../config'
import utils from '../../services/UtilsServ'
import equiposComp from '../components/EquiposComp'

let Equipos = {
      render : async () => {
        let view =  /*html*/equiposComp.body();
        return view
    }
    , after_render: async () => {
      
      
      $("#new").on("click", function(){
        equiposComp.add()
        //fnUrl(this);
        Modal;
      });
      $("tbody#pnlAnalisisEquipos").html("");
      var listAnalisisEquipos =function(PAG=0,limit=PAG, n=0, c=1){
          var q =`query{allAnalisisEquipos(offset:${pg}, first:${limit} orderBy: EDITADO_DESC){totalCount nodes{id analisisId equipoId unidadMedida cantidad precioUnitario precioTotal porcentajeProductivo precioInproductivo  estado editado usuario }}}`;
          utils.fnFetch({url: config.HOST_SERVICE, data: q})
          .then(res => {
            var d = res.data.allAnalisisEquipos.nodes;
            n = res.data.allAnalisisEquipos.totalCount;
            if(d.length > 0 && parseInt((pg+d.length)/PAG) <= parseInt(n/PAG)){
              $("#load").html("Cargando....");
              d.map(function(row) {
                $(".table-responsive").height(document.body.scrollHeight - 150);
                $("#pnlPg").html("Nro Reg. "+(pg+(c++))+" de "+n+`  <button class="btn btn-sm" onclick="pg = pg+PAG; listAnalisisEquipos(pg);">Siguiente <i class="fa fa-chevron-right"></i></button>`);
                $("tbody#pnlAnalisisEquipos").append(`
                    <tr class="${row.estado}">
                      <td>
                        <button class="btn btn-sm btn-outline-primary fa fa-edit" title="Modificar analisisEquipos" onClick="fnUrl(this);" data-url="/analisisEquipos/edit.html" data-backdrop="static" data-toggle="modal" data-target="#pnlModal" data-dato='{"id":"${row.id}"}' data-name="analisisEquipos" id="${row.id}"></button>
                      </td>
                      <td>${row.analisisId}</td>
                      <td>${row.equipoId}</td>
                      <td>${row.unidadMedida}</td>
                      <td>${row.cantidad}</td>
                      <td>${row.precioUnitario}</td>
                      <td>${row.precioTotal}</td>
                      <td>${row.porcentajeProductivo}</td>
                      <td>${row.precioInproductivo}</td>
                    </tr>`
                );
              });
              $("button.permisos").popover({html:true});
              $("button.permisos").on("click", function(){permisos(this);});
              $("#load").html("");
              //fnTableScroll("table");
            }else{$(".project-stats").attr("disabled", "disabled").off("scroll");}
          })
        }
      var pg = 0;    listAnalisisEquipos(pg);
      $(".project-stats").scroll(function(){
        var scrollTopMax = window.scrollMaxY || (this.scrollHeight - this.clientHeight);
        if(this.scrollTop == scrollTopMax ){
          pg = pg+PAG;
          listAnalisisEquipos(pg);
        }
      });
      
      
    }
}

export default Equipos;