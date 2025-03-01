import React, { useCallback, useState }    from "react";
import { CalendarMonthInit } from "../../../../utils/common/datePicker";

const VillageStaticsInfoCp = ( ) => {
    const [calendarTime, setCalendarTime] = useState();

    // 시간 변경시 콜백 함수
    const timeCallback = useCallback(( data:any ) => {
            setCalendarTime(data);
     }, [calendarTime]);

     console.log(calendarTime);

    return (
        <>
            <div className="section2InnerDiv">
                <div className="contentstitle">
                    <h3>※ 마을 주민수는 매일 오후 9시에 업데이트 됩니다.</h3>
                </div>
                <div className="staticContentDiv">
                        <div className="feildBox">
                                <table>
                                    <caption>마을별 주민수 동향 비교 (평균)</caption>
                                    <tbody>
                                        <tr>
                                            <th>저번달</th>
                                            <td>10%</td>
                                        </tr>
                                        <tr>
                                            <th>어제</th>
                                            <td>1명</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <div className="staticsBox ">
                            <div className="statics_searchbox snans">
                                <div className="select_date">
                                    <select className="select276" title="마을선택"></select>
                                    {/* <input className="select276" type="text" title="날짜"></input> */}
                                    <CalendarMonthInit  _callbackFunction = { timeCallback }/>
                                    <button title="조회" className="btnsearch" >조회</button>
                                </div>
                            </div>
                            <div className="staticsBox2">
                                <p className="statics_title"><span>TEST</span></p>
                                <div className="statics_table">
                                    <table className="table2">
                                        <caption>마을별 주민수 통계</caption>
                                        <thead>
                                            <tr>
                                                <th>마을명</th>
                                                <th>구분</th>
                                                <th>01</th>
                                                <th>02</th>
                                                <th>03</th>
                                                <th>04</th>
                                                <th>05</th>
                                                <th>06</th>
                                                <th>07</th>
                                                <th>08</th>
                                                <th>09</th>
                                                <th>10</th>
                                                <th>11</th>
                                                <th>12</th>
                                                <th>13</th>
                                                <th>14</th>
                                                <th>15</th>
                                                <th>16</th>
                                                <th>17</th>
                                                <th>18</th>
                                                <th>19</th>
                                                <th>20</th>
                                                <th>21</th>
                                                <th>22</th>
                                                <th>23</th>
                                                <th>24</th>
                                                <th>25</th>
                                                <th>26</th>
                                                <th>27</th>
                                                <th>28</th>
                                                <th>29</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th rowSpan={2}>한양</th>
                                            <th >평균5주</th>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>15</td>
                                            <td>15</td>
                                            <td>15</td>
                                          </tr>
                                          <tr>
                                            <th>어제</th>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>15</td>
                                            <td>15</td>
                                            <td>15</td>
                                          </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="statics_grapDiv1 snans">
                                <h4>그래프</h4>
                                <div className="graph graph1"></div>
                                <div className="graph graph2"></div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}


export const  VillageStaticsInfoCompo = React.memo(VillageStaticsInfoCp);