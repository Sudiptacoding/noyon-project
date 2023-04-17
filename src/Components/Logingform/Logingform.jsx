import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Logingform.css'
import { userContext } from '../../App';
import { getAuth, signInWithPopup, GoogleAuthProvider, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();


const Logingform = () => {
    const [users, setUsers] = useContext(userContext)
    const [toggol, setToggol] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()
    users.isSignin ? navigate('/') : <div></div>

    const onSubmit1 = (logindata, e) => {
        console.log(logindata)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, logindata.email, logindata.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified == false) {
                    alert('Pleace check your email and verified now')
                } else {
                    const newUser = { ...users }
                    newUser.isSignin = true;
                    newUser.emailValid = user.emailVerified;
                    localStorage.setItem('signin', true);
                    setUsers(newUser);
                }
            })
            .catch((error) => {
                alert(error.errorMessage)
                const newUser = { ...users }
                newUser.isSignin = false;
                localStorage.setItem('signin', false);
                setUsers(newUser);
            });

        console.log(logindata)
        e.target.reset();
    };
    const onSubmit = (signup, e) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, signup.email, signup.password)
            .then((userCredential) => {
                const user = userCredential.user;
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert('Check your gmail')
                        if (user.emailVerified == true) {
                            const newUser = { ...users }
                            newUser.isSignin = true;
                            newUser.emailValid = user.emailVerified;
                            localStorage.setItem('signin', true);
                            setUsers(newUser);
                        }
                    });

            })
            .catch((error) => {
                alert(error.errorMessage)
                const newUser = { ...users }
                newUser.isSignin = false;
                localStorage.setItem('signin', false);
                setUsers(newUser);
            });

        e.target.reset();
    };

    const handelGoogle = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert('Check your gmail')
                        if (user.emailVerified == false) {
                            alert('Pleace check your email and verified now')
                        } else {
                            const newUser = { ...users }
                            newUser.isSignin = true;
                            newUser.emailValid = user.emailVerified;
                            localStorage.setItem('signin', true);
                            setUsers(newUser);
                        }
                    });
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
                const newUser = { ...users }
                newUser.isSignin = false;
                localStorage.setItem('signin',false);
                setUsers(newUser);

            });
    }

    const handelDelet = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            alert('Sign out SuccessFully')
            const newUser = { ...users }
            newUser.isSignin = false;
            localStorage.setItem('signin', false);
            setUsers(newUser);
        }).catch((error) => {
            alert(error.message)
        });
    }





    return (
        <div> {users.isSignin ? <div className='signout'><button onClick={handelDelet}>Sign Out</button></div> : <div className='form__card'>
            {
                toggol ? <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>{toggol ? 'Sign up' : 'Login'}</h1>
                    <input  {...register("name")} placeholder='Enter Your Name' />
                    <input  {...register("email")} placeholder='Enter Your Email' />
                    <input {...register("password", { required: true })} placeholder='Enter Your Password' />
                    {errors.password && <span style={{ color: 'red' }}>Please input your password</span>}
                    <input type="submit" />
                    <hr style={{ color: 'white', paddingTop: '10px' }} />
                    <div className='google-add'> <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" /> <button onClick={handelGoogle}>Google Sign in</button> </div>
                    <hr style={{ color: 'white', paddingTop: '15px' }} />
                    <div>
                        {
                            toggol ? <strong>Have an account?  <strong className='Log__b' onClick={() => setToggol(!toggol)}>Log in now</strong> </strong> : <strong>Don't have an account? <strong onClick={() => setToggol(!toggol)}>Sign Up</strong> </strong>
                        }
                    </div>
                </form> : <form onSubmit={handleSubmit(onSubmit1)}>
                    <h1>{toggol ? 'Sign up' : 'Login'}</h1>
                    <input  {...register("email")} placeholder='Enter Your Email' />
                    <input {...register("password", { required: true })} placeholder='Enter Your Password' />
                    {errors.password && <span style={{ color: 'red' }}>Please input your password</span>}
                    <input type="submit" />
                    <hr style={{ color: 'white' }} />
                    <div className='google-add'> <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" /> <button onClick={handelGoogle}>Google Sign in</button> </div>
                    <hr style={{ color: 'white', paddingTop: '15px' }} />
                    <div>
                        {
                            toggol ? <strong>Have an account?  <strong onClick={() => setToggol(!toggol)}>Log in now</strong> </strong> : <strong>Don't have an account? <strong className='Log__s' onClick={() => setToggol(!toggol)}>Sign Up</strong> </strong>
                        }
                    </div>
                </form>
            }
        </div>
        }

        </div>
    );
};

export default Logingform;