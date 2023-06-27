import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export default function BoardList(props){

    const [boards, setBoards] = useState([]);

    const navigate = useNavigate();

    const navigateToInsert= ()=>{
        //우선 마지막 row의 no값을 가져와 +1하기(nodejs schema Sequence사용x)
        const no = parseInt(boards[boards.length-1].no)+1

        //navigate할때 값 넘기기(state:JSON으로 받을수 있다.)
        navigate("/board/add",{state: no});
    }

    //데이터 불러오기 uesEffect뒤에 ,[] 붙이면 무한로딩 없다?
    useEffect(()=>{
        Axios.get('/boards').then((response)=>{
            setBoards(response.data.data);
        });
    },[]);

    return(
        <div>
            <table border="1px"> 
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>내용</td>
                    </tr>
                </thead>           
                <tbody>
                {boards.map((board)=>(
                    <tr>
                        <td>{board.no}</td>
                        <td>{board.title}</td>
                        <td><Link to={`/board/detail/${board.no}`}>{board.content}</Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <button onClick={navigateToInsert}>글쓰기</button>
            </div>
        </div>
    )
}