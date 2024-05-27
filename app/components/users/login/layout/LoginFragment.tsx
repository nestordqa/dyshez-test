'use client';
import React from 'react';
import { useRouter } from 'next/navigation'
import { FieldValues, useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from '@/app/styles/login/loginFragment.module.css';
import { showSwal } from '@/app/components/common/utils/alerts';

export const LoginFragment = () => {
    const router = useRouter()
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm();
    const onSubmit = (data: FieldValues) => {
        withReactContent(Swal).fire({
            title: <i>Inicio de sesion exitoso</i>,
            icon: 'success',
            preConfirm: () => {
                router.push('/orders');
            }
          })
    };
    return (
        <div className={styles.container}>
            <p className={styles.paragraph}>
                Ingresa con tu correo electrónico o tu número de teléfono
            </p>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
            >
                <input
                    placeholder='@ Correo o teléfono'
                    className={styles.input}
                    {...register("email", { 
                        required: true, 
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })} 
                />
                {errors.email?.type === 'required' && <span className='text-red absolute top-[340px]'>Correo requerido</span>}
                {errors.email?.type === 'pattern' && <span className='text-red absolute top-[340px]'>Correo inválido</span>}
                <input
                    className={styles.input}
                    placeholder='Contraseña'
                    {...register("password", { 
                        required: true,
                    })} 
                />
                {errors.password?.type === 'required' && <span className='text-red absolute top-[420px]'>Contraseña requerida</span>}
                <button
                    className={styles.subtmitButton} 
                    type="submit"
                >
                    Continuar
                    <AiOutlineArrowRight />
                </ button>
            </form>
            <div className={styles.buttonsContainer}>

            </div>
        </ div>
    )
}
