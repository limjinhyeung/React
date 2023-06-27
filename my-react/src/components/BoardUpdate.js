import Axios from 'axios';
import react from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BoardUpdate(){
    const { register, handleSubmit, formState: { isSubmitting }} = useForm();

    const navigate = useNavigate();

    const {state} = useLocation();

    const onSubmit = (data) => {
        Axios.post(`/boards/${state.no}`, {
                title: data.title,
                content: data.content,
            })
            .then((res) => {    
                console.log(res);
            })
            .catch((e) => {
                console.error(e);
            });
        //redirect없이 페이지 이동
        navigate(`/board/detail/${state.no}`);
    };
    return(
        <div>
            <h2>Edit Page</h2>
            <form
                onSubmit={handleSubmit(async (data) => {
                    onSubmit(data);
                })}
            >
                <label>번호</label>
                <input type="text" placeholder={state.no} disabled/><br/>
                <label>제목</label>
                <input type="text" placeholder={state.title} {...register("title")}/><br/>
                <label>내용</label>
                <input type="text" placeholder={state.content} {...register("content")}/><br/>
                <button type="submit" disabled={isSubmitting}>수정</button>
                <button type="button" onClick={()=>{navigate(-1)}}>돌아가기</button>
            </form>
        </div>
    )
}