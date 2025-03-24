import React, { useCallback, useState, useRef, useEffect }    from "react";
import { CalendarMonthInit                } from "../../../../utils/common/datePicker";
import { axiosCall                        } from "../../../../utils/common/common";
import { API_IP_INFO                      } from "../../../../utils/apiUrl";
import { Loading                          } from "../../../../commComponent/Loading";
import { HighChartVertical, HighChartPola } from "../../../../utils/common/chart";
import { HumanStaticsliTagStyle           }    from "../../../../utils/commonStyles";

const dateArr      = Array.from({length : 31}, (v,i ) =>  String(i+1).length === 1 ? '0' + String(i+1) : String(i+1));
const chartdateArr = Array.from({length : 31}, (v,i ) =>  String(i+1) + '일');

const ServerStaticsInfoCp = ( ) => {
  //  const villageList  = useQuerySingle("get-village-list", null, `${API_IP_INFO}/stat/village-list`, 60000 * 5, 60000 * 10, false, true, false);
    const [   paramInfo, setParamInfo ] = useState({server_id : '', month : '' });
    const [ reulstList, setResultList ] = useState<any>({ dateList : [], loading : false, searchInfo : [] });
    const [     charList, setCharList ] = useState<any>({ current : [], pre : []});
    const chartRef  = useRef<HTMLDivElement>(null);
    const chartRef2 = useRef<HTMLDivElement>(null);
    const day    = paramInfo.month.substr(0,4) + '-' + paramInfo.month.substr(4,2);
    const preday = reulstList?.dateList.length !== 0 ? reulstList.dateList[0]["DT_CC"].substr(0,4) + '-' + reulstList.dateList[0]["DT_CC"].substr(4,2) : '';
  
    // 시간 변경시 콜백 함수
    const timeCallback = useCallback(( data:any ) => {
            setParamInfo({...paramInfo, month: data.st_mm});
     }, [paramInfo]);

     // 조회 버튼 클릭시
     const clickServerHuman = () => {
        if ( paramInfo.server_id === '' ) {
            alert('조회 하고자하는 서버명을 선택해주세요.');
            return;
        }

        const param = {
            strt_dt   : paramInfo.month,
            serverId : paramInfo.server_id
        }

        setResultList({...reulstList, loading : true });
        axiosCall("get", API_IP_INFO + "/stat/server-human-statics", param, (data) => {
            if ( data["preCnt"] === undefined || data["preCnt"].length === 0 ) {
                alert("데이터가 없습니다.");
                return;
            }
            setResultList({...reulstList, dateList : data["preCnt"] , loading : false, searchInfo : data["curCnt"] });
        });
     };

     // 서버명 select 선택시
     const onChangeServerName = ( e : any ) => {
        const { name, value} = e.target;
        setParamInfo({...paramInfo, [name] : value});
     };

     useEffect(() => {
        setCharList({ current : reulstList.dateList.map((v : { CURRENT_CNT : number} ) => v.CURRENT_CNT ), 
                          pre : reulstList.dateList.map((v : {     PRE_CNT : number} ) => v.PRE_CNT     )
         });
     },[reulstList.dateList]);

     const options = {
        xAxis : { title : { text : '일자'} } ,
        yAxis : { title : { text : '주민수(명)'} }
    }

    return (
        <>
            <div className="section2InnerDiv">
                <div className="contentstitle">
                    <h3>※ 마을 주민수는 매일 오후 9시에 업데이트 됩니다.</h3>
                </div>
                <div className="staticContentDiv">
                        <div className="feildBox">
                                <table>
                                    <caption>서버별 주민수 동향 비교 (평균)</caption>
                                    <tbody>
                                        <tr>
                                            <th>저번달</th>
                                            <td>{reulstList.searchInfo.length !== 0 ? reulstList.searchInfo[0]?.ASC_PER + '%' : ''} { reulstList.searchInfo.length !== 0 && reulstList.searchInfo[0]?.ASC_ICON === 'UP'     ? <img alt="UP" className="tdImg" src={require("../../../../assets/image/up.png")}     ></img> :
                                                                                                                                      reulstList.searchInfo.length !== 0 && reulstList.searchInfo[0]?.ASC_ICON === 'DOWN'   ? <img alt="DOWN" className="tdImg" src={require("../../../../assets/image/down.png")}   ></img> :
                                                                                                                                      reulstList.searchInfo.length !== 0 && reulstList.searchInfo[0]?.ASC_ICON === 'NORMAL' ? <img alt="NORMAL" className="tdImg" style = {{ margin : '3px'}} src={require("../../../../assets/image/normal.png")} ></img> : ''}</td>
                                        </tr>
                                        {/* <tr>
                                            <th>어제</th>
                                            <td>1명</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                        </div>
                        <div className="staticsBox ">
                            <div className="statics_searchbox snans">
                                <div className="select_date">
                                    <select className="select276" title="마을선택" name="server_id" onChange={ onChangeServerName }>
                                         <option value='' key=''>서버명</option>
                                         <option value='SEVT1' key='server_option1'>세종</option>
                                    </select>
                                    <CalendarMonthInit  _callbackFunction = { timeCallback }/>
                                    <button title="조회" className="btnsearch" onClick= { clickServerHuman }>조회</button>
                                </div>
                            </div>
                            <div className="staticsBox2">
                                <p className="statics_title"><span>{reulstList.searchInfo.length !== 0 ? reulstList.searchInfo[0]["DT"] + ' ' +  reulstList.searchInfo[0]["SERVER_NAME"] + ' 평균 주민수는 ' + reulstList.searchInfo[0]["HUMAN_CNT"] + ' 입니다.': '' }</span></p>
                                <div className="statics_table">
                                    <fieldset className="mark1">
                                        <ul className="markscon">
                                        <HumanStaticsliTagStyle width='100px'> <span className="green"></span>1800 ~     </HumanStaticsliTagStyle>
                                        <HumanStaticsliTagStyle width='100px'><span className="yellow"></span>1600 ~ 1800</HumanStaticsliTagStyle>
                                        <HumanStaticsliTagStyle width='100px'><span className="red"></span>0  ~ 1600     </HumanStaticsliTagStyle>
                                        <HumanStaticsliTagStyle width='100px'><span className="gray"></span>0            </HumanStaticsliTagStyle>
                                        </ul>
                                    </fieldset>
                                    { reulstList?.loading === true ? <Loading/> :  
                                        <>
                                            <table className="table2">
                                                <caption>서버별 주민수 통계</caption>
                                                <thead>
                                                    <tr>
                                                        <th>서버명</th>
                                                        <th>구분</th>
                                                        {
                                                            dateArr.map((v : string, index : number) => {
                                                            const key = index + 'dsafdfffaa' + reulstList.loading;
                                                                return (
                                                                    <th key={key}>{v}</th>
                                                                )
                                                            })
                                                        } 
                                                    </tr>
                                                </thead>
                                                <tbody key='tbody'>
                                                <tr className="statics_table_tr">
                                                    <th rowSpan={2}>{(reulstList?.dateList.length === 0 || reulstList?.dateList === undefined )  ? '' : reulstList?.dateList[0]["VILLAGE_NAME"] }</th>
                                                    <th >저번달<span className="monthSpan">{ preday }</span></th>
                                                      {
                                                          reulstList?.dateList && reulstList.dateList.map( (v : { PRE_CNT : number, DT_BB : string }, index : number) => {
                                                            const cnt = v?.PRE_CNT ===undefined ? 0 : v?.PRE_CNT ;
                                                            let color = ''; 

                                                            if      ( v?.PRE_CNT >= 1800                        ) { color = 'green';  } 
                                                            else if ( v?.PRE_CNT >= 1500  && v?.PRE_CNT < 1800  ) { color = 'yellow'; }
                                                            else if ( v?.PRE_CNT > 0      && v?.PRE_CNT < 1500  ) { color = 'pink';   }  
                                                            else    { color = 'gray'; }

                                                            return  <th className={color} key={  v + 'sadsa' + index }>{cnt}</th>

                                                        })
                                                     } 
                                                </tr>
                                                <tr className="statics_table_tr" key='statics_table_tr'>
                                                    <th key='statics_table_th'>이번달<span className="monthSpan">{reulstList.dateList.length === 0 ? '' : (day)}</span></th>
                                                    {
                                                            reulstList?.dateList && reulstList.dateList.map( (v : any, index : any) => {
                                                                const cnt = v?.CURRENT_CNT === undefined ? 0 : v?.CURRENT_CNT;
                                                                let color = ''; 

                                                                if      ( v?.CURRENT_CNT >= 1800                           ) { color = 'green';  } 
                                                                else if ( v?.CURRENT_CNT >= 1500  && v?.CURRENT_CNT < 1800 ) { color = 'yellow'; }
                                                                else if ( v?.CURRENT_CNT > 0      && v?.CURRENT_CNT < 1500 ) { color = 'pink';   }  
                                                                else    { color = 'gray'; }

                                                                 return <td className={color} key={ v + 'dfsaf' + index }>{cnt}</td>;
                                                        }) 
                                                    }
                                                </tr>
                                                </tbody>
                                            </table>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="statics_grapDiv1 snans">
                                <h4>그래프</h4>
                                <div className="graph graph1" ref={chartRef}>
                                    {
                                        reulstList.loading === true  ?  <Loading/> : charList.pre.length === 0 ? '' :
                                        <HighChartVertical xCategory={chartdateArr} title="서버별 주민수" series={[{name :  day, data : charList.current.filter((v:any)=> v !== '-').map((v:any) => Number(v)) }, { name :  preday, data : charList.pre.filter((v:any)=> v !== '-').map((v:any) => Number(v)) } ]} ref={chartRef} options = {options}/> 
                                    }
                                </div>
                                <div className="graph graph2" ref={chartRef2}>
                                    {
                                        reulstList.loading === true  ?  <Loading/> : charList.pre.length === 0 ? '' :
                                        <HighChartPola xCategory={chartdateArr} title="서버별 주민수" series={[{type: 'line', name :  day, data : charList.current.filter((v:any)=> v !== '-').map((v:any) => Number(v)) }, { type: 'line', name :  preday, data : charList.pre.filter((v:any)=> v !== '-').map((v:any) => Number(v)) } ]} ref={chartRef2} options = {options}/> 
                                    }
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}


export const  ServerStaticsInfoCompo = React.memo(ServerStaticsInfoCp);