import React, {useEffect, useState} from 'react';
import BoardList from './BoardList';
import BoardInsert from './BoardInsert';
import Main from './Main';

export default function Board(){
    //이동할 페이지 상태값
    const [comp, setComp] = useState(<Main/>);
    
    return (    
        <div>
            {/*url 전환 없이 component 변경하기 */}
            <button onClick={()=> setComp(<Main/>)}>메인으로</button>
            <button onClick={()=> setComp(<BoardInsert/>)}>글쓰기</button>
            <button onClick={()=> setComp(<BoardList props={setComp}/>)}>리스트</button>

            {/* 여기에 전환하려는 div 담기 */}
            <div children={comp} />
        </div>
    );
};