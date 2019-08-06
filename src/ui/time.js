import React, {Fragment} from "react";
import styled from 'styled-components';

const View = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 22px;
    line-height: normal;
    color: #333333;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 1px solid #EBEBEB;
    
`;

const Icon = styled.div`
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0C2.24297 0 0 2.24297 0 5C0 7.75703 2.24297 10 5 10C7.75703 10 10 7.75703 10 5C10 2.24297 7.75703 0 5 0ZM5 8.94737C2.82342 8.94737 1.05263 7.17658 1.05263 5C1.05263 2.82342 2.82342 1.05263 5 1.05263C7.17658 1.05263 8.94737 2.82342 8.94737 5C8.94737 7.17658 7.17658 8.94737 5 8.94737Z' fill='%23A9A6B8'/%3E%3Cpath d='M7.68407 4.84555H5.73152C5.66057 4.72994 5.56302 4.63239 5.44741 4.56144V2.21415C5.44741 1.96707 5.24712 1.76678 5.00004 1.76678C4.75297 1.76678 4.55268 1.96707 4.55268 2.21415V4.56144C4.30676 4.71242 4.14233 4.98381 4.14233 5.29292C4.14233 5.76586 4.52712 6.15063 5.00004 6.15063C5.30915 6.15063 5.58054 5.98621 5.73152 5.74028H7.68407C7.93115 5.74028 8.13144 5.53999 8.13144 5.29292C8.13144 5.04584 7.93115 4.84555 7.68407 4.84555Z' fill='%23A9A6B8'/%3E%3C/svg%3E ");
`;

const Text = styled.span`
    font-size: 16px;
`;

const Value = styled.span`
    margin-right: 10px;
`;

const Days = ({value}) => (value !== 0 ? <Value>{value}<Text>d</Text></Value> : null);
const Hours = ({value}) => (value !== 0 ? <Value>{value}<Text>h</Text></Value> : null);
const Minutes = ({value}) => (value !== 0 ? <Value>{value}<Text>m</Text></Value> : null);
const Seconds = ({value}) => (value !== 0 ? <Value>{value}<Text>s</Text></Value> : null);


export const Time = ({days, hours, minutes, seconds}) => (
    <View>
        <Icon/>
        <Fragment>
            <Days value={days}/>
            <Hours value={hours}/>
            <Minutes value={minutes}/>
            <Seconds value={seconds}/>
            <Value><Text>to go</Text></Value>
        </Fragment>
    </View>
);