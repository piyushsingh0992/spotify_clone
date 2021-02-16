export const initialState = {
    // general
    user: null,
    token:"",
    spotify: null,
    // side nav bar
    playlists: [],

    // Home page

    usertopartists:null,
    usertoptracks:null,
    recentlyplayedtracks:null,
    featuredplaylists:null,
    newreleases:null,

    //LIBRARY
    savedtracks:null,
    savedalbums:null,


    //music player
    currentsong:null,

    //playlistpage
    currentplaylist:null,
  };
  
  const reducer = (state, action) => {
    // console.log("action ->",action);
    switch (action.type) {
      // general
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };


      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };    

      // side navbar  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };  

      //home page

      case "SET_USER_TOP_ARTISTS":
        return {
          ...state,
          usertopartists:action.usertopartists,
        };
      case "SET_USER_TOP_TRACKS":
        return {
          ...state,
          usertoptracks:action.usertoptracks,
          };

      case "SET_RECENTLY_PLAYED_TRACKS":        
          return{
            ...state,
            recentlyplayedtracks:action.recentlyplayedtracks,
          };

      case "SET_FEATURED_PLAYLISTS":
        return {
          ...state,
          featuredplaylists:action.featuredplaylists,
        }

        case "SET_NEW_RELEASES":
          return {
            ...state,
            newreleases:action.newreleases,
          }

        //library

        case "SET_SAVED_TRACKS":
          return {
            ...state,
            savedtracks:action.savedtracks,
          }

        case "SET_SAVED_ALBUMS":
          return {
            ...state,
            savedalbums:action.savedalbums,
          }
        //music player
        case "SET_CURRENT_SONG":
          return {
          ...state,
          currentsong:action.currentsong,}
            
          case "SET_CURRENT_PLAYLIST":
            return  {
              ...state,
          currentplaylist:action.currentplaylist}
      default:
        return state;
    }
  };
  
  export default reducer;