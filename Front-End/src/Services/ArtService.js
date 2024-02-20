import axios from "axios";

class ArtService{

    getAllArt(){
       return  axios.get("/Art/getAllArts");
    }

    deleteArt(id){
        return axios.delete("/Art/"+id)
    }
}

export default new ArtService();