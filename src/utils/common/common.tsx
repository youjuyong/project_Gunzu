import { Loading                 } from "../../commComponent/Loading";
import axios        from "axios";
import qs           from "qs";
import { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient, useMutation } from  "react-query";

export async function axiosCall(requsetType: string, url: string, data: any, _callbackFunction ?: ((data: any) => void) | null, _errorCallback ?: ((data: any) => void) | null) {
    const options = {
        url: url,
        method: requsetType,
        params: data,
        headers: {
            Authorization: sessionStorage.getItem("token")
            ,  "Content-Type": "application/json; charset=utf-8",
        },
        paramsSerializer: (params: any) => {
            return qs.stringify(params, {arrayFormat: "comma"});
        },
        error : (data:any) => {
            console.log(data);
        }
    }

    await axios(options).then(response => {
        if (response.data != null) {
            _callbackFunction && _callbackFunction(response.data);
        }
    }).catch(error => {
        if (error?.response?.status === 401) {
            alert("로그인 토큰이 만료되어 로그인 페이지로 이동합니다.");
            window.location.href = "/";
        } else {
            if (_errorCallback != null) _errorCallback(error);
        }

    });
}


export function errorHandler(response: any) {
    switch (response?.data?.errorCode) {
        case "E001":
            alert("[ERROR] Server Side Error");
            return;
        case "P001":
            alert("요청하신 데이터가 없습니다.");
            break
        case "P002":
            alert("[ERROR] 트랜잭션 서버 에러");
            break;
        case "F001":
            alert("[ERROR] 파일 업로드 에러");
            break;
        case "E004":
            alert("[Error] 아이디와 비밀번호를 확인하세요!");
            break;
        case "E005":
        case "E002":
            alert(response.data.suggestion);
            break;
        case "E006":
            alert(response.data.suggestion);
            break;
        case "F002":
            alert("[Error] 잘못된 파일 양식입니다. 파일 양식을 확인하세요.\n" + response.data.suggestion);
            break;
        case "F003":
            alert("[Error] 출발 시간은 4자리 ( ex : 18시 30분 -> 1830 ) 형식으로 작성해주세요.");
            break;
        case "F004":
            alert("[Error] 노선 명칭에 해당하는 노선이 없습니다.");
            break;
        case "F005":
            alert("[Error] 구분을 기입해 주시기 바랍니다.");
            break;
        case "F006":
            alert("[Error] '시간'은 0시 이상 24시 이하로 입력해주세요.");
            break;
        case "F007":
            alert("[Error] '분'은 0분 이상 59분 이하로 입력해주세요.");
            break;
        case "F008":
            alert("이미 경품 신청을 하셨습니다.");
            break;
        case "F009":
            alert("신청이 완료되었습니다.당첨자는 이벤트 후 공개됩니다.")
            break;
        case "F010":
            alert("경품 목록이 모두 소진되었습니다. 다음 이벤트를 노려 주세요 ^^.")
            break;
        default:
            alert("에러가 발생했습니다");
    }
}


/*
    ※ 단일 reactQuery 생성 ※
    1. keyId : query Id
    2. url   : promise 요청 Api url
    3. statleTime (number | Infinity) : 데이터가 fresh -> stale 상태로 변경 되는데 걸리는 시간, fresh 상태로 유지되는 시간
    4. cacheTime  (number | Infinity) : 데이터가 inactive 상태일때 캐싱된 상태로 남아 있는 시간,
    5. retry (boolean | number (failureCount : number, error : TError) => boolean) - default : 3회 실패한 쿼리 재시도,
       - true : 쿼리 실패시 무한으로 재시도,
       - false : 재시도 하지 않음
    6. refetchOnMount (boolean | "always") - default : true : 데이터가 stal 상태일때 mount 시 마다 refetch 여부를 설정하는 옵션
    7. refetchOnWindowFocus(boolean | "always") - default : true : 데이터가 stale 상태일 경우 윈도우 포커싱이 될때마다 refetch 여부를 설정하는 옵션
    9. onSuccess ((data): TDdata => void)
    10. onError ((error : Terror) => void)
    11. refetchInterval : 암묵적으로 해당 캐시에 대한 데이터를 재요청
    12. initialData (Tdata | () => TData)
*/
export function useQuerySingle(
    keyName: string,
    keyId: any,
    url: string,
    statleTime           ?: number,
    cacheTime            ?: number | undefined,
    retry                ?: boolean | number,
    refetchOnMount       ?: boolean | string,
    refetchOnWindowFocus ?: boolean | string,
    refetchInterval      ?: number,
    successCallback      ?: (arg: any) => void | null,
    errorCallback        ?: (arg: any | null) => void | null,
    enabled              ?: boolean,
    ...arg: any
) {
    const result = useQuery(
        [keyName, keyId],
        async () => {
            const response = await fetch(url, {headers: {Authorization: sessionStorage.getItem("token")!}});
            if (response.status === 401) {
                alert("로그인 토큰이 만료되어 로그인 페이지로 이동합니다.");
                window.location.href = "/"
            } else {
                const data = await response.json();
                return data;
            }
            // API를 호출하여 사용자 데이터를 가져오는 비동기 함수
        },
        {
            staleTime: statleTime,
            cacheTime: cacheTime, // 1분 동안 캐시로 저장
            retry: retry,
            refetchOnMount: refetchOnMount,
            refetchOnWindowFocus: refetchOnWindowFocus,
            refetchInterval: refetchInterval,
            onSuccess: (data:any) => {
                if (typeof successCallback === 'function') {
                    successCallback(data);
                }
            },
            onError: (e: any) => {
                if (typeof errorCallback === 'function') {
                    errorCallback(e);
                }
            },
            enabled: enabled,
            ...arg
        },
    );

    return result;
}

export function  useMutationSingle (
        queryKey : string,
        param : any,
        callbackFn : any
) {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: callbackFn,
          onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: [queryKey] }),
        });

        
}


interface imageLazyHook {
    src       : string | any,
    alt       : string,
    className : string,
    height    : number
}

export const LazyImageHook = (  props : imageLazyHook ) => {
    const imgRef:any = useRef(null);
    const [ isLoading, setIsLoading ] = useState(false);
    
    useEffect (() => {
        let observer = new IntersectionObserver(
            (entries, observer) => {
              entries.forEach((entry) => {

                if (entry.isIntersecting && imgRef?.current !== undefined ) {
                    const imgR = imgRef?.current;
                    if ( imgR === null ) return;
                    imgR.src  = props.src;
                  
                    imgR.onload = () => {
                     setIsLoading(true);
                     observer.disconnect();
                   };
                }
              });
            },
            {
              rootMargin: "100px",
            }
        );

        if ( imgRef?.current ) {
            observer.observe(imgRef.current);
        }

        return () => {
            observer.disconnect();
        }

    },[props.src]);

    return isLoading ? (
        <img className={props.className} alt={props.alt} id={props.src} src={props.src} />
      ) : (
        <img
        className={props.className}
        ref={imgRef}
        id={props.src}
        style={{
            zIndex:'999',
            height: `${props.height}}px`,
            backgroundColor: "whitesmoke",
            borderRadius : '10px'
        }}
        ></img>
      )
 
}