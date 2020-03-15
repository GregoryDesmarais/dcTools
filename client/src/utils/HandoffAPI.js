import axios from "axios";

export default {

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