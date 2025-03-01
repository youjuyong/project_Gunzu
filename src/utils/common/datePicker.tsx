import DatePicker from "react-datepicker";
import {ko} from "date-fns/locale";
import './react-datepicker.css';
import { getMonth, getYear, format } from 'date-fns';
import {useState, useEffect} from "react";
import React from "react";


interface CalendarType {
    _callbackFunction?: (data: any) => void,
    control      ?: boolean | null      | undefined,
    type         ?: string  | null      | undefined,
    initDate     ?: string  | undefined | null,
    maxDate      ?: string  | undefined | null,
    initStrtHH   ?: string  | undefined | null,
    initEndHH    ?: string  | undefined | null,
    timeInterVal ?: number
}

const CalendarMonth = (props: CalendarType) => {

    // 초기 날짜 상태
    const [dateState, setDateState] = useState({startYYYYMM:new Date()});

    // 날짜가 변형 될시 콜백함수로 날자 데이터 반환
    useEffect(() => {
        if (props?._callbackFunction !== undefined) {
            props._callbackFunction({
                st_mm: replaceDateTime(dateState.startYYYYMM).substr(0,6)
            });
        }
    }, [dateState]);

    return (
        <> {
            props.type === 'year' ? 
            <DatePicker dateFormat="yyyy" // 날짜 형태
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                dateFormatCalendar="yyyy년"
                locale={ko}
                minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
                maxDate={new Date() } // maxDate 이후 날짜 선택 불가
                selected={dateState.startYYYYMM}
                onChange={(date: any) => setDateState({...dateState, startYYYYMM : date}) }
                showYearPicker={true}
                onKeyDown={(e) => {
                    e.preventDefault();
                }}
             />
             :
             <DatePicker dateFormat="yyyy/MM" // 날짜 형태
                    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                    dateFormatCalendar="yyyy년 MM월"
                    locale={ko}
                    minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
                    maxDate={new Date() } // maxDate 이후 날짜 선택 불가
                    selected={dateState.startYYYYMM}
                    onChange={(date: any) => setDateState({...dateState, startYYYYMM : date}) }
                    showMonthYearPicker
                    showFullMonthYearPicker
                    onKeyDown={(e) => {
                        e.preventDefault();
                    }}
             />
            }
        </>
    )
}

//    YYYY: 년도 MM : 월 DD : 일 변형
function replaceDateTime(YMD: any) {
    const Date = YMD.toLocaleDateString().replace(/\s+/g, '').split('.');
    const dateValue = String(Date[0]) + (String(Date[1]).length === 1
        ? '0' + String(Date[1]) : String(Date[1])) + (String(Date[2]).length === 1
        ? '0' + String(Date[2]) : String(Date[2]));
    return dateValue;
}

export const CalendarMonthInit = React.memo(CalendarMonth);