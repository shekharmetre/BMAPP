import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../../utils/Fiebase'
import { useNavigate, Link } from 'react-router-dom'
const provider = new GoogleAuthProvider()
const auth = getAuth(app)
import Api from '../../utils/Api'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../utils/store/slice/Message'

const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toekem, setToken] = useState('')
    const [shopName, setShopName] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState()
    const [role, setRole] = useState('')
    const navigation = useNavigate()
    const dispatch = useDispatch()

    const roled = () => {
        const roles = document.getElementsByName('role')
        for (var role of roles) {
            if (role.checked) {
                const selectedValue = role.value;
                return selectedValue
            }
        }
    }
    const roles = roled()
    // sigin in with popup
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

    // signin with manually
    const HandlSubmit = async () => {
        const role = roled();
        if (!name || !email || !mobile || !shopName || !password || !role) {
            // If any of the required fields is missing, show an error
            console.error('Please fill in all required fields');
            dispatch(addMessage("Required All Field"))
        } else {
            try {
                const response = await Api.post('/api/user', {
                    name, email, password, mobile, role: roles,
                    shopName, address,
                });
                if (response.data.message === 'User already exists') {
                    navigation('/login')
                    dispatch(addMessage("User already exists"))
                    console.log("user already exists")
                } else {
                    navigation('/login')
                    addMessage("user created successfully")
                    console.log('user created successfully')


                }
            } catch {
                console.log(error)
            }
        }





    };


    return (
        <div className='w-full h-[100vh] bg-[#826AFC] text-white p-5'>
            <h2 className=' text-center text-3xl px-2 font-dancing'>Welcome To Registration Mobile Shop</h2>
            <section className='registration grid grid-cols-2 gap-5'>

                <div className='col-span-2'>
                    <label htmlFor="name" >Full Name</label>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Full Name....' />
                </div>

                <div className=''>
                    <label htmlFor="emails">Email Address</label>
                    <input type="text" name='emails' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address' />
                </div>
                <div className=''>
                    <label htmlFor="password">Password</label>
                    <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password....' />
                </div>
                <div>
                    <label htmlFor="name" >Mobile Number</label>
                    <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} maxLength={10} name='name' placeholder='Mob No....' />
                </div>
                <div>
                    <label htmlFor="name">Shop Name</label>
                    <input type="text" name='name' value={shopName} onChange={(e) => setShopName(e.target.value)} placeholder="Enter Shop Name" className='outline-none' />
                </div>
                <div className='col-span-2'>
                    <label htmlFor="name" >Shop Address</label>
                    <input type="text" name='name' value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Addrss...." className='outline-none' />
                </div>

            </section>
            <div className='flex mt-10 justify-between items-center radi'>
                <label>
                    <input type="radio" name="role" value="retailer" />
                    Male
                </label>

                <label>
                    <input type="radio" name="role" value="wholesaler" />
                    Wholesaler
                </label>

                <label>
                    <input type="radio" name="role" value="other" />
                    Other
                </label>
            </div>
            <button onClick={HandlSubmit} className='btn btn-success w-full mt-10 text-white'>
                Submit
            </button>
            <p className='text-sm flex justify-center mt-2'>If already Have an account , <Link to='/login' className='underline text-[16px]'>Login here</Link></p>
            <div className="self-stretch flex items-stretch justify-between gap-5 ml-3.5 mr-3.5 mt-8 px-0.5 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                <motion.div onClick={SigninWithGoogle} className="border bg-white flex grow basis-[0%] flex-col justify-center items-center px-16 py-3.5 rounded-xl border-solid border-stone-300 max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc18e0600647e94cb69587a329e71bb7ed888054cc438afbd0f0fbf41c2e6791?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden"
                    />
                </motion.div>
                <motion.div whileTap={{ scale: 0.2 }} className="border bg-white flex grow basis-[0%] flex-col justify-center items-center px-16 py-3.5 rounded-xl border-solid border-stone-300 max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f2d31f9da1a2c966c773d6ea2770f570f9a0af843ed3f2f114072bccafc08e?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden"
                    />
                </motion.div>
                <motion.div whileTap={{ scale: 0.2 }} className="border bg-white flex grow basis-[0%] flex-col justify-center items-center px-16 py-3.5 rounded-xl border-solid border-stone-300 max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87f215b7a0c5487c0dbdad2dfb1be52f75b5ab22977cc9862760434a29ab87bf?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Registration