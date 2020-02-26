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
    },
    addHandoff: (data) => {
        return axios.post("/api/handoff/add", {data})
        .then((res, err) => {
            if(err) return err;
            return res;
        })
    },
    getHandoffs: (data) => {
        return axios.post("/api/handoff/get", {data})
        .then((res,err) => {
            if(err) return err;
            return res;
        })
    },
    getShifts: () => {
        return axios.post("/api/handoff/getshifts")
        .then((res,err) => {
            if(err) return err;
            return res;
        })
    },
    getDCs: () => {
        return axios.post("/api/handoff/getdcs")
        .then((res,err) => {
            if(err) return err;
            return res;
        })
    },
}