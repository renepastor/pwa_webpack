// --------------------------------
//  Define Data Sources
// --------------------------------

let Home = {
    render : async () => {
        var user = JSON.parse(localStorage.getItem("dataUser"));
        let view =  /*html*/`
            <section class="section text-center">
                <h5>Facturacion Movil </h5>
                <b>${user.cuenta}</b>
                <i>${user.alias}</i>
            </section>
        `
        return view
    }
    , after_render: async () => {
        console.log("Mi home..")
    }

}

export default Home;