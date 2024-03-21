export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const PHOTO_URL="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTihlZ6ORqHMLqPS__tIsmyY75u568iz42FdsZZNwzR_ehovk73L0LP18eFoiqr_LscsP0Em9OnKMv13uD4g9f3GiO805oE.png?r=6c2"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_tmdb_key
    }
  };
  
  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

  export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  export const SUPPORTED_LANGUAGES=[
    {identifier:"en",name:"English"},
     {identifier:"hindi",name:"Hindi"},
     {identifier:"spanish",name:"Spanish"}
  ];

  export const openai_gpt_key=process.env.REACT_APP_openai_gpt_key