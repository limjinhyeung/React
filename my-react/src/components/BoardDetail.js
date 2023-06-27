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
    
    const navigateToEditPage=()=>{
        navigate(`/board/edit/${no}`,{state : detail});
    }

    const deleteBoard = async () => {
        if (window.confirm('게시글을 삭제하시겠습니까?')) {
            axios.delete(`/boards/${no}`);
            
            navigate('/board');
        } 
      };
    
    return(
        <div>
            <h2>Detail Page</h2>
            <input type='text' value={detail.no}/><br/>
            <input type='text' value={detail.title}/><br/>
            <input type='text' value={detail.content}/><br/>
            <button type='button' onClick={deleteBoard}>삭제</button>
            <button type='button' onClick={navigateToEditPage}>수정</button>
            <button type="button" onClick={()=>{navigate(-1)}}>돌아가기</button>
        </div>
    )
}