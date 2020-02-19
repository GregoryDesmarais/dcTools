import axios from "axios";

export default {

    newUser: (data) => {
        return axios.post("/api/user/register", { data }).then((res, err) => {
            if (err)
                return err;
            return res;
        })
    },

    getUsers: () => {
        return axios.post("/api/user/get")
            .then((res, err) => {
                if (err) return err;
                return res;
            })
    },

    removeUser: (data) => {
        return axios.post("/api/user/remove", { data })
            .then((res, err) => {
                if (err) return err;
                return res;
            })
    }
}