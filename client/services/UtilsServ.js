const UtilsServ = { 
    //
    // 
    fnFetch : (param) =>{
        var obj = Object.assign(param, {method:"POST"});
        var misCabeceras = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        if (localStorage && localStorage.token) {
            misCabeceras = new Headers({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token,
                'Content-Type': 'application/json'
            });
        }
        var miInit = { method: 'POST',
                        headers: misCabeceras,
                        mode: 'cors',
                        body: JSON.stringify({
                            "query":obj.data
                        })
                     };
        //  console.log("jjjjjjjjjjjj",obj.url,miInit)
        return fetch(obj.url,miInit).then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        });
    }

    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    ,parseRequestURL : () => {
        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource    : null,
            id          : null,
            verb        : null
        }
        request.resource    = r[1]
        request.id          = r[2]
        request.verb        = r[3]

        return request
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default UtilsServ;