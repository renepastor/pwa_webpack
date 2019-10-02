// --------------------------------
//  Define Data Sources
// --------------------------------
import utils from '../../services/UtilsServ'

let Home = {
    render : async () => {
        var user = JSON.parse(localStorage.getItem("dataUser"));
        let view =  /*html*/`
            <section class="section text-center">
                <h5>Facturacion Movil </h5>
                <b>${utils.getSession("ssUserName")}</b>
                <i>${utils.getSession("ssAlias")}</i>
            </section>
        `
        return view
    }
    , after_render: async () => {
        console.log("Mi home..")
    }

}

export default Home;