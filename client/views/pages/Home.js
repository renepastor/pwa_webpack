// --------------------------------
//  Define Data Sources
// --------------------------------
import config from '../../config'
import menu from '../components/Menu'

let getPostsList = async () => {
    
}

let Home = {
    render : async () => {
        let posts = await getPostsList()
        var user = JSON.parse(localStorage.getItem("dataUser"));
        let view =  /*html*/`
            <section class="section text-center">
                <h5>Facturacion Movil </h5>
                <b>${user.nombre}</b>
                <i>${user.unidad}</i>
            </section>
        `
        return view
    }
    , after_render: async () => {
        var jsonMenuRol =  MENU.find(roles => (roles.rol === "lecturador"));
        $("#listMenu").html("");
		fnMenu(jsonMenuRol.data);
    }

}

export default Home;