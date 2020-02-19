import axios from "axios";

export default {

    newUser: (data) => {
        return axios.post("/api/user/register", {data}).then((res, err) => {
            if(err)
                return err;
            return res;
        })
    }
}