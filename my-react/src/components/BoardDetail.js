import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function BoardDetail(){
    //useState() 안에 {} 초기값 설정해주면 오류 없음
    const [detail, setDetail] = useState({});

    //url에 담긴 파라미터 받기
    const no = useParams().no;

    //navigate설정 
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`/boards/${no}`)
            .then((res)=>{
                setDetail(res.data.detail);
            })
    },[])

    // const navigateToUpdate =()=>{
    //     navigate()
    // }
    return(
        <div>
            <h2>detail</h2>
            <input type='text' value={detail.no}/>
            <input type='text' value={detail.title}/>
            <input type='text' value={detail.content}/>
            <button type="button" onClick={()=>{navigate(-1)}}>돌아가기</button>
        </div>
    )
}