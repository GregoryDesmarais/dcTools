import axios from "axios";

export default {

    add: (data) => {
        return axios.post("/api/cardboard/add", { data })
            .then(res => res)
            .catch(err => {
                //Axios formats the error is such a way that you are unable to access the response data object.
                //The following line will make the object accessible.
                err = Object.assign({}, err);
                return err.response;
            })
    },

    get: () => {
        return axios.get("/api/cardboard/get")
            .then(res => res)
            .catch(err => {
                //Axios formats the error is such a way that you are unable to access the response data object.
                //The following line will make the object accessible.
                err = Object.assign({}, err);
                return err.response;
            })
    },

    remove: (data) => {
        let id = {
            _id: data
        }
        return axios.delete("/api/cardboard/remove", { data: id }) //URL and optional config.  Passing ID as "data" property, accessed server side as "req.body"
            .then(res => res)
            .catch(err => {
                //Axios formats the error is such a way that you are unable to access the response data object.
                //The following line will make the object accessible.
                err = Object.assign({}, err);
                return err.response;
            })
    },
}