import React, { useCallback, useState, useRef, useEffect }    from "react";
import { CalendarMonthInit                } from "../../../../utils/common/datePicker";
import { AxiosCall, useQuerySingle, errorHandler, Token  } from "../../../../utils/common/common";
import { API_IP_INFO                      } from "../../../../utils/apiUrl";
import { Loading                          } from "../../../../commComponent/Loading";
import { HighChartVertical, HighChartPola } from "../../../../utils/common/chart";
import { HumanStaticsliTagStyle           } from "../../../../utils/commonStyles";

const SELECT_COMM_CODE = 'YANT';
const dateArr      = Array.from({length : 31}, (v,i ) =>  String(i+1).length === 1 ? '0' + String(i+1) : String(i+1));
const chartdateArr = Array.from({length : 31}, (v,i ) =>  String(i+1) + '일');
const YangStaticsCp = () => {
    const token = Token();
    const [ reulstList, setResultList ] = useState<any>({ dateList : [], loading : false, searchInfo : [] });
    const [     charList, setCharList ] = useState<any>({ current  : [], pre : []});

    const chartRef1 = useRef<HTMLDivElement>(null);
    const chartRef2 = useRef<HTMLDivElement>(null);

    const yangvillageList  = useQuerySingle("get-yang-village-list", null, `${API_IP_INFO}/stat/village-list`, 60000 * 5, 60000 * 10, false, true, false);
    const codeList         = useQuerySingle("get-yangTime-list", null, `${API_IP_INFO}/comm/code-list/${SELECT_COMM_CODE}`, 60000 * 5, 60000 * 10, false, true, false);
    
    const [   paramInfo, setParamInfo ] = useState({village_id : '', month : '', yang_time_id : '' });

    const day    = paramInfo.month.substr(0,4) + '-' + paramInfo.month.substr(4,2);
    const preday = reulstList?.dateList.length !== 0 ? reulstList.dateList[0]["DT_CC"].substr(0,4) + '-' + reulstList.dateList[0]["DT_CC"].substr(4,2) : '';
  

    // 시간 변경시 콜백 함수
    const timeCallback = useCallback(( data:any ) => {
            setParamInfo({...paramInfo, month: data.st_mm});
     }, [paramInfo]);

    // 마을명, 시간 select 선택시
    const onChangeSelect = ( e : any ) => {
        const { name, value} = e.target;
        setParamInfo({...paramInfo, [name] : value});
    };

    useEffect(() => {
        setCharList({ current : reulstList.dateList.map((v : { CURRENT_CNT : number} ) => v.CURRENT_CNT ), 
                          pre : reulstList.dateList.map((v : {     PRE_CNT : number} ) => v.PRE_CNT     )
        });
    },[reulstList.dateList]);

    // 조회 버튼 클릭시
    const clickVillageHuman = () => {
            if ( paramInfo.village_id === '' ) 
            {
                alert('마을명을 선택해주세요.');
                return;
            } else if 
            ( paramInfo.yang_time_id === '' ) {
                alert('양이전쟁 시간(오전,오후)을/룰 선택해주세요.');
                return;
            }
    
            const param = {
                strt_dt   : paramInfo.month,
                villageId : paramInfo.village_id,
                type      : paramInfo.yang_time_id

            }

            setResultList({...reulstList, loading : true });
            AxiosCall("get", API_IP_INFO + "/stat/yang-data-statics", param, (data) => {
                if ( data["preCnt"] === undefined || data["preCnt"].length === 0 ) {
                    alert("데이터가 없습니다.");
                    return;
                }
                setResultList({...reulstList, dateList : data["preCnt"] , loading : false, searchInfo : data["curCnt"] });
            }, (e) => {
                            errorHandler(e.response);
            }, token);
        };

    const options = {
        xAxis : { title : { text : '일자'} } ,
        yAxis : { title : { text : '전공(명)'} }
    }

    return (
        <>
            <div className="section2InnerDiv">
                            <div className="contentstitle">
                                <h3>※ 양이전쟁 데이터는 매일 오후 11시에 업데이트 됩니다.</h3>
                            </div>
                            <div className="staticContentDiv">
                                    <div className="feildBox">
                                            <table>
                                                <caption>마을별 양이전쟁 전공수 동향 비교 (평균)</caption>
                                                <tbody>
                                                    <tr>
                                                    <th>저번달</th>
                                                    <td>{reulstList.searchInfo.length !== 0 ? reulstList.searchInfo[0]?.ASC_PER + '%' : ''} { reulstList.searchInfo.length !== 0 && reulstList.searchInfo[0]?.ASC_ICON === 'UP'     ? <img alt="UP" className="tdImg"                                 src={require("../../../../assets/image/up.png")}     ></img> :
                                                                                                                                              reulstList.searchInfo.length !== 0 && reulstList.searchInfo[0]?.ASC_ICON === 'DOWN'   ? <img alt="DOWN" className="tdImg"                               src={require("../../../../assets/image/down.png")}   ></img> :
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
                                                <select className="select276" title="마을선택" name="village_id" onChange={onChangeSelect} >
                                                     <option value='' key='statics_yang_Vuilga'>마을명</option>
                                                     {
                                                         yangvillageList.data && yangvillageList.data.map((v :{ VILLAGE_NAME:string, VILLAGE_ID : string}) => {
                                                    
                                                             return (
                                                                 <option value={v.VILLAGE_ID} key={v.VILLAGE_ID + 'yangoption'}>{v.VILLAGE_NAME}</option>
                                                             )
                                                         })
                                                     }
                                                </select>
                                                <select className="select170" title="전쟁시간" name="yang_time_id" onChange={onChangeSelect} >
                                                     <option value='' key='1select3'>전쟁 시간</option>
                                                     {
                                                         codeList.data && codeList.data.map((v :{ commCd:string, commCdKorName : string}) => {
                                                    
                                                             return (
                                                                 <option value={v.commCd} key={v.commCdKorName + 'yangoption'}>{v.commCdKorName}</option>
                                                             )
                                                         })
                                                     }
                                                </select>
                                                 <CalendarMonthInit  _callbackFunction = { timeCallback }/>
                                                <button title="조회" className="btnsearch" onClick={clickVillageHuman}>조회</button>
                                            </div>
                                        </div>
                                        <div className="staticsBox2">
                                            <p className="statics_title"><span>{reulstList.searchInfo.length !== 0 ? reulstList.searchInfo[0]["DT"] + ' ' +  reulstList.searchInfo[0]["VILLAGE_NAME"] + '마을 '+ ( paramInfo.yang_time_id === 'YANT1' ? '오전' : '오후' ) + ' 평균 양이전쟁 전공수는 ' + reulstList.searchInfo[0]["KILL_YANG"] + ' 입니다.': '' }</span></p>
                                            <div className="statics_table">
                                                <fieldset className="mark1">
                                                    <ul className="markscon">
                                                        <HumanStaticsliTagStyle width='85px'> <span className="green"></span>700 ~     </HumanStaticsliTagStyle>
                                                        <HumanStaticsliTagStyle width='85px'><span className="yellow"></span>100 ~ 700</HumanStaticsliTagStyle>
                                                        <HumanStaticsliTagStyle width='85px'><span className="red"></span>1  ~ 100     </HumanStaticsliTagStyle>
                                                        <HumanStaticsliTagStyle width='85px'><span className="gray"></span>0            </HumanStaticsliTagStyle>
                                                    </ul>
                                                </fieldset>
                                                    <>
                                                        <table className="table2">
                                                            <caption>마을별 양이전쟁 전공수 통계</caption>
                                                            <thead>
                                                                <tr>
                                                                    <th>마을명</th>
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
                                                                    <th>저번달<span className="monthSpan">{ preday }</span></th>
                                                                    {
                                                                        reulstList?.dateList && reulstList.dateList.map( (v : { PRE_CNT : number, DT_BB : string }, index : number) => {
                                                                            const cnt = v?.PRE_CNT ===undefined ? 0 : v?.PRE_CNT ;
                                                                            let color = ''; 

                                                                            if      ( v?.PRE_CNT >= 700                     ) { color = 'green';  } 
                                                                            else if ( v?.PRE_CNT >= 100 && v?.PRE_CNT < 700 ) { color = 'yellow'; }
                                                                            else if ( v?.PRE_CNT >  0   && v?.PRE_CNT < 100 ) { color = 'pink';   }  
                                                                            else    { color = 'gray'; }

                                                                            return  <th className={color} key={  v + 'sadsa' + index }>{cnt}</th>

                                                                        })
                                                                    } 
                                                            </tr>
                                                            <tr className="statics_table_tr" key='statics_yang_tr'>
                                                            <th key='statics_table_th'>이번달<span className="monthSpan">{reulstList.dateList.length === 0 ? '' : (day)}</span></th>
                                                            {
                                                                        reulstList?.dateList && reulstList.dateList.map( (v : any, index : any) => {
                                                                            const cnt = v?.CURRENT_CNT === undefined ? 0 : v?.CURRENT_CNT;
                                                                            let color = ''; 

                                                                            if      ( v?.CURRENT_CNT >= 700                          ) { color = 'green';  } 
                                                                            else if ( v?.CURRENT_CNT >= 100 && v?.CURRENT_CNT < 700 ) { color = 'yellow'; }
                                                                            else if ( v?.CURRENT_CNT >  0   && v?.CURRENT_CNT < 100 ) { color = 'pink';   }  
                                                                            else    { color = 'gray'; }

                                                                            return <td className={color} key={ v + 'dfsaf' + index }>{cnt}</td>;
                                                                    }) 
                                                            }
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </>
                                            </div>
                                        </div>
                                        <div className="statics_grapDiv1 snans">
                                            <h4>그래프</h4>
                                            <div className="graph graph1" ref={chartRef1}>
                                                {
                                                        reulstList.loading === true  ?  <Loading/> : charList.pre.length === 0 ? '' :
                                                        <HighChartVertical xCategory={chartdateArr} title="마을별 양이 전쟁 전공수" series={[{name :  day, data : charList.current.filter((v:any)=> v !== '-').map((v:any) => Number(v)) }, { name :  preday, data : charList.pre.filter((v:any)=> v !== '-').map((v:any) => Number(v)) } ]} ref={chartRef1} options = {options}/> 
                                                }
                                            </div>
                                            <div className="graph graph2" ref={chartRef2}>
                                                 {
                                                        reulstList.loading === true  ?  <Loading/> : charList.pre.length === 0 ? '' :
                                                        <HighChartPola xCategory={chartdateArr} title="마을별 양이 전쟁 전공수" series={[{type: 'line', name :  day, data : charList.current.filter((v:any)=> v !== '-').map((v:any) => Number(v)) }, { type: 'line', name :  preday, data : charList.pre.filter((v:any)=> v !== '-').map((v:any) => Number(v)) } ]} ref={chartRef2} options = {options}/> 
                                                 }
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
        </>
    );
}

export const YangStaticsInfoCompo = React.memo(YangStaticsCp);