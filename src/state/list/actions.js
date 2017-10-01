const TOGGLE_INSTAGRAM = 'toggle/instagram';
const TOGGLE_YOUTUBE = 'toggle/youtube';

export const toggleInstagram = () => dispatch => dispatch({
    type: TOGGLE_INSTAGRAM
});

export const toggleYoutube= () => dispatch => dispatch({
    type: TOGGLE_YOUTUBE
});
