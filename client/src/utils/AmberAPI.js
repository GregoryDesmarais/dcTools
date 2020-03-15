import axios from "axios";

export default {

    addAmber: (data) => {
        return axios.post("/api/amber/add", { data })
            .then(res => res)
            .catch(err => {
                //Axios formats the error is such a way that you are unable to access the response data object.
                //The following line will make the object accessible.
                err = Object.assign({}, err);
                return err.response;
            })
    },

    getAmber: () => {
        return axios.get("/api/amber/get")
            .then(res => res)
            .catch(err => {
                //Axios formats the error is such a way that you are unable to access the response data object.
                //The following line will make the object accessible.
                err = Object.assign({}, err);
                return err.response;
            })
    },

    removeAmber: (data) => {
        let id = {
            _id: data
        }
        return axios.delete("/api/amber/remove", { data: id }) //URL and optional config.  Passing ID as "data" property, accessed server side as "req.body"
            .then(res => res)
            .catch(err => {
                //Axios formats the error is such a way that you are unable to access the response data object.
                //The following line will make the object accessible.
                err = Object.assign({}, err);
                return err.response;
            })
    },
}