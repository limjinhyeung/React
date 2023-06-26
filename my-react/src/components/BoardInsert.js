import React from 'react';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Board(){
    //isSubmiting - button을 disable처리해줌. 
    const { register, handleSubmit, formState: { isSubmitting }} = useForm();

    //navigate에서 넘긴 값 받기(state값)-복수일경우 location.state.키 로 받을수 있다. 
    const {state} = useLocation();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        Axios.post("/boards", {
                no: state,
                title: data.title,
                content: data.content,
            })
            .then((res) => {    
                // console.log(res);
            })
            .catch((e) => {
                console.error(e);
            });
        //redirect없이 페이지 이동
        navigate('/board');
    };

    return(
        <div>
            <form 
                onSubmit={handleSubmit(async (data) => {
                    onSubmit(data)
                    await new Promise((r) => setTimeout(r, 1000));
                })}
            >
                 <input type="text" name="title" {...register("title")} /> <br/>
                 <input type="textarea" name="content" {...register("content")} /><br/> 
                <button type="submit" disabled={isSubmitting}>작성</button>
                <button type="button" onClick={()=>{navigate(-1)}}>돌아가기</button>
            </form>
        </div>
    )
}