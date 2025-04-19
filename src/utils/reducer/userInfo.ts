
import { UserReducePropsType } from "../common/types";
const SAVE   = "userInfo/SAVE"   as const;
const CRLEAR = "userInfo/DELETE" as const;

export const user_save = ( props : UserReducePropsType ) => (
    
    {
           type : SAVE
      , payload : { 
                    userId : props.id
                  ,  token : props.token
                 , conn_dt : props.conn_dt
                 , conn_tm : props.conn_tm
                , expireIn : props.expireIn
                , nickName : props.nickName
                  , cityYn : props.cityYn
            , cityUserName : props.cityUserName
                 , masterYn: props.masterYn
                   , regDt : props.regDt
                  } 
    }
)

export const user_clear = () => ({ type : CRLEAR })

type userStateType = {
      userId : string | null,
       token : string | null, 
     conn_dt : string | null, 
     conn_tm : string | null,
    expireIn : number | null, 
    nickName : string | null, 
      cityYn : string | null, 
cityUserName : string | null, 
    masterYn : string | null,
       regDt : string | null 
};
const initalState : userStateType = {
       userId : null,
        token : null,
      conn_dt : null,
      conn_tm : null,
     expireIn : null,
     nickName : null,
       cityYn : null,
 cityUserName : null,
     masterYn : null,
        regDt : null
};

type UserActionType = 
    | ReturnType<typeof user_save> | ReturnType<typeof user_clear>;


export default function userReducer( state : userStateType = initalState
    , action : UserActionType ) {

        switch ( action.type ) {
            case  SAVE :
                return { 
                          userId : action.payload.userId, 
                           token : action.payload.token, 
                         conn_dt : action.payload.conn_dt, 
                         conn_tm : action.payload.conn_tm, 
                        expireIn : action.payload.expireIn,
                        nickName : action.payload.nickName, 
                          cityYn : action.payload.cityYn, 
                    cityUserName : action.payload.cityUserName, 
                        masterYn : action.payload.masterYn, 
                           regDt : action.payload.regDt
                        };
            case CRLEAR :
                return {
                          userId : null,
                           token : null,
                         conn_dt : null,
                         conn_tm : null,
                        expireIn : null,
                        nickName : null,
                          cityYn : null,
                    cityUserName : null,
                        masterYn : null,
                           regDt : null
                        };            
            default : return state;
        }
}

