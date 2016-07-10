export const ADD_TRACK = 'ADD_TRACK';
export function requestPosts(title) {
  return {
    type: ADD_TRACK,
    title,
  };
}

export const PROMPT_TRACK = 'PROMPT_TRACK';
function promptTrack(trackData) {
  const firstMatch = trackData.tracks.items[0];

  return {
    type: PROMPT_TRACK,
    trackInfo: firstMatch,
  };
}

export const fetchPosts = (query) => (dispatch) => (
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`)
      .then(response => response.json())
      .then(json => dispatch(promptTrack(json)))
      .catch(error => error)
);
