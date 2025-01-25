import axios        from "axios";
import { useQuery } from  "react-query";
import qs           from "qs";

export async function axiosCall(requsetType: string, url: string, data: any, _callbackFunction ?: ((data: any) => void) | null, _errorCallback ?: ((data: any) => void) | null) {
    const options = {
        url: url,
        method: requsetType,
        params: data,
        headers: {
            Authorization: localStorage.getItem("token")
        },
        paramsSerializer: (params: any) => {
            return qs.stringify(params, {arrayFormat: "comma"});
        },
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

    })
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
    keyId: string | null,
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
            const response = await fetch(url, {headers: {Authorization: localStorage.getItem("token")!}});
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