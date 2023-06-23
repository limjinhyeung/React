import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export default function BoardList(){
    const [boards, setBoards] = useState([]);
    //최초로딩시 무한루프 도는거 방지용
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const navigateToInsert= ()=>{
        //우선 마지막 row의 no값을 가져와 +1하기(nodejs schema Sequence사용x)
        const no = parseInt(boards[boards.length-1].no)+1

        //navigate할때 값 넘기기
        navigate("/BoardInsert",{"no": no});
    }

    if(loading === false){
        Axios.get('/boards').then((response)=>{
            setBoards(response.data.data);
            setLoading(true);
        })
    }
    
    return (    
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
                        {/* <td><Link to={`/BoardDetail`}>{board.content}</Link></td> */}
                        <td>{board.content}</td>
                    </tr>
                ))}                    
                </tbody>
            </table>
            <button onClick={navigateToInsert}>글쓰기</button>
        </div>
    )
    
}