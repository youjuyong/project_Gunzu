import { useLocation, Link } from "react-router-dom";
import { useState, useLayoutEffect,useRef, useEffect } from "react";
import { axiosCall       } from "../../../utils/common/common";
import { HighChartBar    } from "../../../utils/common/chart";
import { API_IP_INFO     } from "../../../utils/apiUrl";

const EventBoardTextMainCompo = ( props : any ) => {
    const [ dateTime, setDateTime   ]     = useState();
    const [ dateCheck, setDateCheck ]:any = useState ({ date1 : false, date2 : false, date3 : false, date4 : false });
    const [ timeCheck, setTimeCheck ]:any = useState ({ time1 : false, time2 : false, time3 : false, time4 : false, time5 : false, time6 : false, time7 : false });
    const { text_id, text_title, reg_dt, event_term} = props.state;
    const user_id = localStorage.getItem("id");

    const dateCheckCnt = Object.values(dateCheck).filter((v : any) => v === true ).length;
    const timeCheckCnt = Object.values(timeCheck).filter((v : any) => v === true ).length;
    const [chartData, setChartData]:any = useState({dateXcategory : [], dateSerize : [], timeXcategory : [], timeSerize : []});

    const chartRef = useRef<HTMLDivElement>(null);
   
    const [charVisible, setChartVisible] = useState(false);


    const changeDate = ( e :  any ) => {
        const {name} = e.target;

        if ( dateCheck[name] === true ) {
            setDateCheck({...dateCheck, [name] : !dateCheck[name]});
            return;
        }

        
        if ( dateCheckCnt >= 2) {
            alert("날짜는 3개 이상 선택 할 수 없습니다.");
            return;
        }
        setDateCheck({...dateCheck, [name] : !dateCheck[name]});
    }

    const changeTime = ( e :  any ) => {
        const {name} = e.target;

        if ( timeCheck[name] === true ) {
            setTimeCheck({...timeCheck, [name] : !timeCheck[name]});
            return;
        }
       
        if ( timeCheckCnt >= 2) {
            alert("시간은 3개 이상 선택 할 수 없습니다.");
            return;
        }
        setTimeCheck({...timeCheck, [name] : !timeCheck[name]});
    }

    // 처음 날짜 가져오기
    useLayoutEffect(() => {
            axiosCall("get", API_IP_INFO + '/board/event-board-day-time', {text_id : text_id, event_term : event_term}, (data) => {
                setDateTime(data);
            });
     },[]);

     useEffect(() => {
        chartReload();
     },[charVisible]);

     const chartReload = () => {
        if ( !dateTime ) return;
        axiosCall("get", API_IP_INFO + '/board/event-board-day-time-chart', {text_id : text_id}, (data) => {
            if ( data.length > 0 ) {
                setChartData({ 
                    dateXcategory : [dateTime[0]["DATE1"], dateTime[0]["DATE2"],dateTime[0]["DATE3"], dateTime[0]["DATE4"]]
                     , dateSerize : [data[0]["DATE1"], data[0]["DATE2"],data[0]["DATE3"], data[0]["DATE4"]]
                  , timeXcategory : [dateTime[0]["TIME1"],dateTime[0]["TIME2"],dateTime[0]["TIME3"],dateTime[0]["TIME4"],dateTime[0]["TIME5"],dateTime[0]["TIME6"],dateTime[0]["TIME7"]]
                     , timeSerize : [data[0]["TIME1"],data[0]["TIME2"],data[0]["TIME3"],data[0]["TIME4"],data[0]["TIME5"],data[0]["TIME6"],data[0]["TIME7"]]
                 });
            }
        });
     }
    
     // 결과보기
     const resultView = () => {
        setChartVisible(true);
     }

     // 신청하기
     const dateSumitHandler = () => {
       

        axiosCall("get", API_IP_INFO + '/board/event-board-user-check', {text_id : text_id, user_id : user_id}, (data) => {
          if ( data.length > 0 ) {
            alert("이미 신청이 되셨습니다. 관리자에게 문의 부탁드립니다.");
            return;
          }

          if ( dateCheckCnt < 2 ) {
            alert("날짜를 2개이상 선택해주세요.");
            return;
          }

          if ( timeCheckCnt < 2 ) {
                alert("시간을 2개이상 선택해주세요.");
                return;
          }
          const param = {
              text_id : text_id
            , user_id : user_id
            ,   date1 : dateCheck.date1 === false ? 0 : 1
            ,   date2 : dateCheck.date2 === false ? 0 : 1
            ,   date3 : dateCheck.date3 === false ? 0 : 1
            ,   date4 : dateCheck.date4 === false ? 0 : 1
            ,   time1 : timeCheck.time1 === false ? 0 : 1
            ,   time2 : timeCheck.time2 === false ? 0 : 1
            ,   time3 : timeCheck.time3 === false ? 0 : 1
            ,   time4 : timeCheck.time4 === false ? 0 : 1
            ,   time5 : timeCheck.time5 === false ? 0 : 1
            ,   time6 : timeCheck.time6 === false ? 0 : 1
            ,   time7 : timeCheck.time7 === false ? 0 : 1
          }

          axiosCall("put", API_IP_INFO + '/board/event-board-day-time-sumit', param, (data) => {
                if ( data === 1 ) {
                    alert("신청되셨습니다.");
                    chartReload();
                    return;
                }
          });
        });
     }

    const options = {
        xAxis : { title : { text : '일자'} } ,
        yAxis : { title : { text : '건수'} }
    }
    return (
       <>
            <table className="event_table eventboard_content">
               <caption>공지사항 리스트</caption>
                    <tbody>
                            <tr>
                                <th colSpan={4} className="eventBoardTitle">{text_title}</th>
                            </tr>
                            <tr>
                                <th>작성일</th>
                                <td className="reg_dt">{reg_dt}</td>
                                <th>첨부파일</th>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="tdconten">
                                    <p>안녕하세요. 의정부 마을 대행수입니다~. 현재 {event_term}차 이벤트 날짜를 설문조사 하고있습니다.</p><br></br>
                                    <p>원하시는 날짜 2개를 선택해주세요!</p><br></br>
                                    <div className="dateSelect">
                                        <div className="dateDiv"><input type="checkbox" name="date1" checked={dateCheck.date1} onChange={changeDate} ></input><span className="dateSpan">{dateTime && dateTime[0]["DATE1"]}</span></div>
                                        <div className="dateDiv"><input type="checkbox" name="date2" checked={dateCheck.date2} onChange={changeDate} ></input><span className="dateSpan">{dateTime && dateTime[0]["DATE2"]}</span></div>
                                        <div className="dateDiv"><input type="checkbox" name="date3" checked={dateCheck.date3} onChange={changeDate} ></input><span className="dateSpan">{dateTime && dateTime[0]["DATE3"]}</span></div>
                                        <div className="dateDiv"><input type="checkbox" name="date4" checked={dateCheck.date4} onChange={changeDate} ></input><span className="dateSpan">{dateTime && dateTime[0]["DATE4"]}</span></div>
                                    </div>
                                    <br></br>
                                    <p>원하시는 시간대 2개를 선택해 주세요~</p><br></br>
                                    <div className="dateSelect timecheck">
                                        <div className="dateDiv"><input type="checkbox" name="time1" checked={timeCheck.time1} onChange={changeTime} ></input><span className="dateSpan">{dateTime && dateTime[0]["TIME1"]}</span></div>
                                        <div className="dateDiv"><input type="checkbox" name="time2" checked={timeCheck.time2} onChange={changeTime} ></input><span className="dateSpan">{dateTime && dateTime[0]["TIME2"]}</span></div>
                                        <div className="dateDiv"><input type="checkbox" name="time3" checked={timeCheck.time3} onChange={changeTime} ></input><span className="dateSpan">{dateTime && dateTime[0]["TIME3"]}</span></div>
                                        <div className="dateDiv"><input type="checkbox" name="time4" checked={timeCheck.time4} onChange={changeTime} ></input><span className="dateSpan">{dateTime && dateTime[0]["TIME4"]}</span></div>
                                        <div className="dateDiv"><input type="checkbox" name="time5" checked={timeCheck.time5} onChange={changeTime} ></input><span className="dateSpan">{dateTime && dateTime[0]["TIME5"]}</span></div>
                                        <div className="dateDiv"><input type="checkbox" name="time6" checked={timeCheck.time6} onChange={changeTime} ></input><span className="dateSpan">{dateTime && dateTime[0]["TIME6"]}</span></div>
                                        <div className="dateDiv"><input type="checkbox" name="time7" checked={timeCheck.time7} onChange={changeTime} ></input><span className="dateSpan">{dateTime && dateTime[0]["TIME7"]}</span></div>
                                    </div>

                                    <div className="eventSumitDiv"><button className="eventDate snans" onClick={dateSumitHandler}>신청하기</button><button className="eventDate snans" onClick={resultView}>결과보기</button></div>
                                    <section className = "graphEvent" ref={chartRef}>
                                         { charVisible && <HighChartBar xCategory={chartData.dateXcategory} title="이벤트 날짜 투표" series={{name : '이벤트 날짜', data :chartData.dateSerize }} ref={chartRef} options = {options}/> }
                                    </section>
                                    <section className = "graphEvent2" ref={chartRef}>
                                         { charVisible && <HighChartBar xCategory={chartData.timeXcategory} title="이벤트 날짜 투표" series={{name : '이벤트 날짜', data :chartData.timeSerize }} ref={chartRef} options = {options}/> }
                                    </section>
                                </td>
                            </tr>
                    </tbody>
             </table>
       </>
    )
}

export default EventBoardTextMainCompo;