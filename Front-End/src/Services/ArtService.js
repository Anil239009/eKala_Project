import axios from "axios";

class ArtService{

    getAllArt(){
       return  axios.get("/Art/getAllArts");
    }
}

export default new ArtService();