import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { Link } from 'react-router-dom';


const Register = () => {
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
      <h3 className='font-bold text-xl text-center mt-6 mb-4'>Register</h3>
        <div className='flex flex-cols justify-center border w-300px border-cement mx-auto bg-lightblue rounded-xl py-6'>
            <form className='signUp' onSubmit={handleSubmit((data) => console.log(data), onError)}>
                <div className='form-section'>
                    <label>Name</label>
                    <input className='input-section'
                    name='firstName' type='text'
                    placeholder='enter name'
                    {...register('firstName', {required: true, minLength:4})} />
                    {errors.firstName && <p className='err-msg'>Name must be at least 5 characters.</p>}
                </div>
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
                <div className='form-section relative'>
                    <label>Confirm Password</label>
                    <input className='input-section'
                    name='confirmPassword' type={confirmType}
                    placeholder='confirm password'
                    {...register('confirmPassword', {required:true, minLength: 8})} />
                    {watch('confirmPassword') !== watch('password') 
                    && getValues('confirmPassword') ? <p className='err-msg'>Password doesn't match</p> : null}
                    <span className='absolute right-3 top-6' onClick={showConfirmPassword}><Icon className='text-grey' icon={showIcon} size={22} /></span>
                </div>
                <div>
                    <div className='flex items-center gap-2' >
                        <input
                        name='isAccepted' type='checkbox'
                        {...register('isAccepted', {required:true})}/>
                        <label className='text-xs'>I accept the terms & policy</label>
                    </div> 
                    <div className='h-3'>
                        {errors.isAccepted && <div className='err-msg'>Please accept our terms</div>}
                    </div> 
                </div>
                <div className='flex justify-center'>
                    <button className='bg-cherry w-full py-1 mt-3 text-lightblue font-semibold rounded-lg' type='submit'>Sign up </button>
                </div>
                <div className='my-2'>
                    <p>Already have an account? <Link to='/login' className='font-bold text-cherry'>Sign in</Link></p>
                </div>
            </form>
        </div>
      </div>    
    );
};

export default Register;