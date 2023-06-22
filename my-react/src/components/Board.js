import React, {useEffect, useState} from 'react';
import Axios from 'axios';

export default function BoardList(){
    const [boards, setBoards] = useState([]);
    //최초로딩시 무한루프 도는거 방지용
    const [loading, setLoading] = useState(false)

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
                        <td>{board.content}</td>
                    </tr>
                ))}                    
                </tbody>
            </table>
        </div>
    )
    
}