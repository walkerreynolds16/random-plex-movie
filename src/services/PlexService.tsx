import IMovieData from "../types/MovieData";
import IPlexConfig from "../types/PlexConfig";
import axios from "axios";

const plexConfig: IPlexConfig = {
  baseUrl: "http://192.168.0.25:32400",
  plexToken: "2AMdX__EM2ufEyrc_3X7",
};

const getAllMovies = async () => {
  const url = "library/sections/1/all";
  // return await axios({
  //   url: `${plexConfig.baseUrl}/${url}`,
  //   method: 'get',
  //   params: {
  //     "X-Plex-Token": plexConfig.plexToken,
  //   }
  // })
  //   .then((response) => {
  //     console.log(response);
  //     return {
  //       status: response.status,
  //       data: response.data,
  //     };
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     return {
  //       status: error.status,
  //       data: error.response,
  //     };
  //   });
  return await axios.get<Array<IMovieData>>(
    `${plexConfig.baseUrl}/${url}`,
    {
      params: {
        "X-Plex-Token": plexConfig.plexToken,
      }
    }
  )
};

const PlexService = {
  getAllMovies
};

export default PlexService;
