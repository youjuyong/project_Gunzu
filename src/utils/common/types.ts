
export type UserReducePropsType = {
            id : string,  
         token : string, 
       conn_dt : string, 
       conn_tm : string, 
      expireIn : number, 
      nickName : string, 
        cityYn : string, 
  cityUserName : string, 
      masterYn : string, 
         regDt : string 
}

export type HelmetType = {
    title : string,
    description : string,
    keywords : string,
    ogimgsrc ?: string,
    ogUrl ?: string,
    twitterImgsrc ?: string
}