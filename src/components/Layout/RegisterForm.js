import React from 'react';
import { useForm } from 'react-hook-form';

import classes from './RegisterForm.module.css';

export const RegisterForm = () => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch('example'));

    return (
        <div className={classes.formBox}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="Team Name" {...register("teamName", { required: true})} />
                { errors.teamName && <span>This field is required</span> }
                <input defaultValue="Email" {...register("email", { required: true})} />
                { errors.email && <span>This field is required</span> }
                
                <input className={classes.submit} type="submit" />            
            </form>
        </div>
    )
}
