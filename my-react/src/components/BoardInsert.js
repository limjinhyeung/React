import React from 'react';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function BoardInsert(){
    //isSubmiting - button을 disable처리해줌. 
    const { register, handleSubmit, formState: { isSubmitting }} = useForm();

    //navigate에서 넘긴 값 받기(변수명 동일)
    const no = useLocation();

    const onSubmit = (data) => {
        Axios.post("/boards/insert", {
                no: no,
                title: data.title,
                content: data.content,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.error(e);
            });
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
                <button type="submit" disabled={isSubmitting}>글쓰기</button>
            </form>
        </div>
    )
}