import{u as e,j as s,c1 as o,c3 as t}from"./index-52b3c3fe.js";import{u as a,s as i}from"./shareService-62e8d7d4.js";import{u as n,C as r}from"./useChart-156fcc8b.js";function l({accountId:l,onOk:c,show:d}){const{data:p,isLoading:h}=a({queryKey:["shareInfo",l],queryFn:()=>i.getShareStatistic(l),enabled:d}),{t:u}=e(),g=n({legend:{horizontalAlign:"center"},stroke:{show:!0},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},xaxis:{categories:p?.categories||[]},tooltip:{fillSeriesColor:!1},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return s.jsx(o,{title:u("token.statistic"),open:d,onOk:c,closable:!1,onCancel:c,children:s.jsx(t,{spinning:h,tip:u("token.queryingInfo"),children:s.jsx(r,{type:"bar",series:p?.series||[],options:g,height:320})})})}export{l as ShareInfoModal};