import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { Link } from 'react-router-dom';


const Login = () => {
  const[icon, setIcon] = useState(eyeOff);
    const[showIcon, setShowIcon] = useState(eyeOff);
    const[type, setType] = useState('password');
    const[confirmType, setConfirmType] = useState('password');
    const{
        register, 
        handleSubmit,
        getValues,
        watch, 
        formState: {errors},
    } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPaword: '',
        isAccepted: false
    });
    const showPassword = () => {
        if(type==='password') {
            setIcon(eye)
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    };

    const showConfirmPassword = () => {
        if(confirmType==='password') {
            setConfirmType('text')
            setShowIcon(eye)
        } else {
            setConfirmType('password')
            setShowIcon(eyeOff)
        }
    };
    const onError = (errors,e) => console.log(errors, e);
    return (
      <div>
      <h3 className='font-bold text-xl text-center mt-6 mb-4'>Login</h3>
        <div className='flex flex-cols justify-center border w-300px border-cement mx-auto bg-lightblue rounded-xl py-6'>
            <form className='signUp' onSubmit={handleSubmit((data) => console.log(data), onError)}>
                <div className='form-section'>
                    <label>Email</label>
                    <input className='input-section'
                    name='email' type='email'
                    placeholder='enter email'
                    {...register('email', {required: true ,pattern: /\S+@\S+\.\S+/.test })} />
                    {errors.email && <p className='err-msg'>Please enter valid email.</p>}
                </div>
                <div className='form-section relative'>
                    <label>Password</label>
                    <input className='input-section'
                    name='password' type={type}
                    placeholder='enter password'
                    {...register('password', {required:true, minLength: 8})} />
                    {errors.password && <p className='err-msg'>Password must be at least 8 characters long</p>}
                    <span className='absolute right-3 top-6' onClick={showPassword}><Icon className='text-grey' icon={icon} size={22} /></span>
                </div>
                <div>
                    <div className='flex items-center gap-2' >
                        <input
                        name='isAccepted' type='checkbox'
                        {...register('isAccepted', {required:true})}/>
                        <label className='text-xs'>Remember me</label>
                    </div> 
                </div>
                <div className='flex justify-center'>
                    <button className='bg-cherry w-full py-1 mt-3 text-lightblue font-semibold rounded-lg' type='submit'>Sign in </button>
                </div>
                <div className='my-2'>
                    <p>Don't have an account? <Link to='/register' className='font-bold text-cherry'>Sign up</Link></p>
                </div>
            </form>
        </div>
      </div>    
    );
};

export default Login;