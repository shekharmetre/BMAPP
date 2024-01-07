import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../../utils/Fiebase'
const provider = new GoogleAuthProvider()
const auth = getAuth(app)
import Api from '../../utils/Api'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../../utils/store/slice/Loggeduser'
import { addMessage } from '../../utils/store/slice/Message'

const Login = () => {
    const [visible, setvisible] = useState(false)
    const navigation = useNavigate()
    const [click, setClick] = useState(1)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const LoginDialogue = (index) => {
        setClick(index)
    }
    const SigninWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            console.log(result.user)
            const { displayName, email, phoneNumber, photoURL, } = result.user
            //    const reponse = await Api.post('/api/user',{})
        } catch (error) {
            console.log(error)
        }

    }
    const handleLoginActivity = async () => {
        try {
            const response = await Api.post('/api/login', { email, password })
            if (response?.status === 200) {
                dispatch(LoginUser(response?.data))
                dispatch(addMessage("welcome " + response?.data.name))
                navigation('/home')
            }
            if (response?.status === 201) {
                console.log(response?.data?.message)
                dispatch(addMessage(response?.data?.message))
            }
            if (response?.status === 202) {
                navigation('/registration')
                console.log(response?.data.message)
                dispatch(addMessage(response?.data?.message))
            }

        } catch {
            console.log("check something error")
            dispatch(addMessage('check someting error'))
        }

    }

    return (
        <div className="backdrop-blur-[12.5px] log-back bg-opacity-30 flex  flex-col px-20 py-12  border-[3px] border-solid border-indigo-500 border-opacity-50 max-md:px-5">
            <div className="text-white text-2xl font-bold self-stretch ml-3.5 mr-3.5 max-md:max-w-full max-md:mr-2.5">
                Welcome To Retailer/Wholesaler
            </div>
            <div className="text-white text-4xl font-bold self-stretch ml-3.5 mr-3.5 mt-6 max-md:max-w-full max-md:mr-2.5">
                Login
            </div>
            <div className='flex gap-10 mt-5 text-white'>
                <p className={`border-dotted duration-1000 shadow-md  transition-all p-2 border-2 ${click === 1 && "bg-blue-950 shadow-white"}`} onClick={() => LoginDialogue(1)}>Retailer</p>
                <p className={`border-dotted duration-1000 shadow-md  transition-all p-2 border-2 ${click === 2 && "bg-blue-950 shadow-white"}`} onClick={() => LoginDialogue(2)}>Wholesaler</p>

            </div>
            <div className="text-white text-lg self-stretch ml-3.5 mr-3.5 mt-8 max-md:max-w-full max-md:mr-2.5">
                Email
            </div>
            <input type="text" placeholder='Enter email...' value={email} onChange={(e) => setEmail(e.target.value)} className='text-black text-opacity-40 outline-none text-sm whitespace-nowrap border bg-white self-stretch justify-center ml-3.5 mr-3.5 mt-2.5 pl-6 pr-16 py-5 rounded-xl border-solid border-stone-300 items-start max-md:max-w-full max-md:mr-2.5 max-md:px-5' />
            <div className="text-white text-lg self-stretch ml-3.5 mr-3.5 mt-9 max-md:max-w-full max-md:mr-2.5">
                Password
            </div>
            <div className='relative'>
                <input type={visible ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password...' className='outline-none w-full text-stone-300 text-sm whitespace-nowrap border bg-white self-stretch justify-center ml-3.5 mr-3.5 mt-2.5 pl-6 pr-16 py-5 rounded-xl border-solid border-stone-300 items-start max-md:max-w-full max-md:mr-2.5 max-md:px-5' />
                {visible ? (<AiFillEye className='absolute right-2 top-8' onClick={() => setvisible(false)} />
                ) : (<AiFillEyeInvisible className='absolute right-2 top-8' onClick={() => setvisible(true)} />
                )}
            </div>
            <div className="text-white text-xs self-stretch ml-3.5 mr-3.5 mt-5 max-md:max-w-full max-md:mr-2.5">
                Forgot Password?
            </div>
            <div className="text-white text-xl font-bold whitespace-nowrap bg-sky-900 self-stretch justify-center items-center ml-3.5 mr-3.5 mt-11 px-16 py-4 rounded-xl max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:px-5" onClick={handleLoginActivity}>
                Sign in
            </div>
            <div className="text-white text-sm self-center whitespace-nowrap mt-9">
                or continue with
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-5 ml-3.5 mr-3.5 mt-8 px-0.5 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                <div onClick={SigninWithGoogle} className="border bg-white flex grow basis-[0%] flex-col justify-center items-center px-16 py-3.5 rounded-xl border-solid border-stone-300 max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc18e0600647e94cb69587a329e71bb7ed888054cc438afbd0f0fbf41c2e6791?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden"

                    />
                </div>
                <div className="border bg-white flex grow basis-[0%] flex-col justify-center items-center px-16 py-3.5 rounded-xl border-solid border-stone-300 max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f2d31f9da1a2c966c773d6ea2770f570f9a0af843ed3f2f114072bccafc08e?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden"
                    />
                </div>
                <div className="border bg-white flex grow basis-[0%] flex-col justify-center items-center px-16 py-3.5 rounded-xl border-solid border-stone-300 max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87f215b7a0c5487c0dbdad2dfb1be52f75b5ab22977cc9862760434a29ab87bf?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden"
                    />
                </div>
            </div>
            <div className="self-center flex items-stretch gap-2 mt-9" onClick={() => navigation('/registration')}>
                <div className="text-white text-sm grow whitespace-nowrap">
                    Don’t have an account yet?
                </div>
                <div className="text-white text-sm font-semibold grow whitespace-nowrap">
                    Register for free
                </div>
            </div>
        </div>
    )
}

export default Login