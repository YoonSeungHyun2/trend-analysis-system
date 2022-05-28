import Link from 'next/link';

import { useState, useEffect } from 'react';
import Graph from '../components/Graph/graph'
import axios from 'axios';
import RegStat_A from '../components/Keyword/RegStat_A'
import 'bootstrap/dist/css/bootstrap.min.css'




export default function KeywordRegStat_A() {

 



    return (
        <div className="px-4 py-3 my-5">

        <ul className="nav nav-tabs" style={{ fontFamily : 'NanumSquare' , fontSize : 17 , fontWeight : 'bold'}}>
                 <li className="nav-item px-4">
                  <Link className="nav-link" href="/">Main</Link>
                </li>

                <li clLinkssName="nav-item px-4">
                  <Link className="nav-link" href="/ChartView_K">차트 조회</Link>
                </li>

                <li className="nav-item px-4">
                  <Link className="nav-link" href="/KeywordHandle">키워드 조회/등록/삭제</Link>
                </li>

                <li className="nav-item px-4">
                  <Link className="nav-link" href="/KeywordModify">키워드 정정</Link>
                </li>

                <li className="nav-item px-4">
                  <Link className="nav-link active font-weight-bold" href="/KeywordRegStat_K">키워드 등록 현황</Link>
                </li>
              </ul>
            
            <br></br> 

            <div >
              <RegStat_A/>
            </div>

           


     
        </div>
    );
};