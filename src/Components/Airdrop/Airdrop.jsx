import React, { useContext } from 'react';
import './Airdrop.css';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../App';


const Airdrop = () => {
const [users, setUsers] = useContext(userContext)
const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const newItem = {
            Email: `${data.Email}`,
            Acn: `${data.Email}`,
            Name: `${data.name}`,
            Polygon: `${data.poligon}`,
            Refer: `${data.refer}`,
            Talygram: `${data.talegram}`,
            Talygram2: `${data.teweter2}`,
            Tweter: `${data.tweter}`,
        };
        const newItems = {...users , ...newItem}
        setUsers(newItems)
        navigate('/verification')
        e.target.reset();
    };


    return (
        <div className='airdrop'>
            <div><img src="https://i.postimg.cc/QMJPXJQR/337788772-174504471708452-6043797548416745304-n.jpg" alt="" /></div>
            <div className='link'>
                <h1>
                    Event Duration: 20st Apr - 7th May
                    Every elegable user will get 100,000 Acorn protocol native token (ACN) token.  and 5000 old version  of token. Everyone  have to convert their tokon  old version  to new  will update  on it later.
                    Rule: FIRST COME FIRST SERVE.For first 20,000 participants who complete verification and airdrop tasks
                    Airdrop distribution: Tokens will be distributed  after complete KYC & airdrop task, Token will automatically sent your wallet and please wait for launch the mainnet
                </h1>
                <h2>
                    ✅ Follow our Twitter Retweet and like pinned tweet
                    &nbsp;<Link to='https://twitter.com/AcornProtocol?s=09'>https://twitter.com/AcornProtocol?s=09</Link>
                </h2>
                <h2>
                    ✅  Please join our Telegram
                    &nbsp;<Link to='https://t.me/acorn_official'>https://t.me/acorn_official</Link>
                </h2>
                <h2>
                    ✅ Join our discord group
                    &nbsp;<Link to='https://discord.gg/ZZcDHWpKE5'>https://discord.gg/ZZcDHWpKE5</Link>
                </h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">1. &nbsp; Enter your register email</label>
                    <input {...register("Email", { required: true })} placeholder='Your answer' />
                    <label htmlFor="">2. &nbsp; The link of your retweet of this airdrop tweet</label>
                    <input {...register("tweter", { required: true })} placeholder='Your answer' />
                    <label htmlFor="">3. &nbsp; Your  Twitter account</label>
                    <input {...register("teweter2", { required: true })} placeholder='Your answer' />
                    <label htmlFor="">4. &nbsp; Your  Telegram  username</label>
                    <input {...register("talegram", { required: true })} placeholder='Your answer' />
                    <label htmlFor="">5. &nbsp; Submit your ACN address from ACORN BOX app</label>
                    <input {...register("acn", { required: true })} placeholder='Your answer' />
                    <label htmlFor="">6. &nbsp; Submit your polygon address to receive ACN token( do not submit exchange wallet address )</label>
                    <input {...register("poligon", { required: true })} placeholder='Your answer' />
                    <label htmlFor="">7. &nbsp; Enter Your Name</label>
                    <input {...register("name", { required: true })} placeholder='Your answer' />
                    <label htmlFor="">8. &nbsp; Enter your refaral name </label>
                    <input {...register("refer", { required: true })} placeholder='Your answer' />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Airdrop;