import React from 'react';
// import UplodData from '../UplodData/UplodData';
// import Admin from '../Admin/Admin';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='Home-bg' >

                <div className='container'>
                    <img src="https://i.postimg.cc/dVVp3Cpg/341146492-772168984337218-2366102651425944232-n.jpg" alt="" /></div>
                <h3>Acorn Box</h3>
                <p>An easy-to-use wallet app built for everyone and anyone</p>
                <Link to='https://play.google.com/store/apps/details?id=eco.acorn&fbclid=IwAR0DjzDncbe82mYj3lqg82LLLI4m8IYSEDHTFXSdK5Bd-a9VffhhYmQ3Ov8&pli=1'><button>Downlood</button></Link>
            </div>
            <div className='logo_home'>
                <div className='home__heder'>
                    <h2>Acorn Box is a mobile wallet built for ACN</h2>
                    <p>With Acorn Box, you can use various DAPPs and seamlessly manage your ACN rewards</p>
                </div>
                <div>
                    <img src="data:image/png;base64,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" alt="" />
                    <h5>Connect Acorn Box and MARO Connect with a simple touch</h5>
                </div>
                <div>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM0LjM0NDIgMjIuNzgwNUMzMi4wMTYxIDIyLjc4MDUgMjkuNzQwMiAyMy40NzA0IDI3LjgwNCAyNC43NjMxQzI1Ljg2NzcgMjYuMDU1OCAyNC4zNTggMjcuODkzMyAyMy40NjU1IDMwLjA0MzZDMjIuNTcyOSAzMi4xOTM4IDIyLjMzNzYgMzQuNTYwMyAyMi43ODkyIDM2Ljg0NDFDMjMuMjQwOCAzOS4xMjggMjQuMzU5MSA0MS4yMjY5IDI2LjAwMjggNDIuODc1NkMyNy42NDY1IDQ0LjUyNDMgMjkuNzQyIDQ1LjY0ODkgMzIuMDI0NSA0Ni4xMDc0QzM0LjMwNyA0Ni41NjU5IDM2LjY3NDIgNDYuMzM3NyAzOC44MjcxIDQ1LjQ1MTdDNDAuOTggNDQuNTY1NiA0Mi44MjIxIDQzLjA2MTQgNDQuMTIwNiA0MS4xMjkxQzQ1LjQxOTIgMzkuMTk2OCA0Ni4xMTYgMzYuOTIzIDQ2LjEyMyAzNC41OTQ5QzQ2LjEyNTkgMzMuMDQ1NyA0NS44MjMzIDMxLjUxMSA0NS4yMzI4IDMwLjA3ODdDNDQuNjQyMyAyOC42NDYzIDQzLjc3NTQgMjcuMzQ0NCA0Mi42ODE1IDI2LjI0NzJDNDEuNTg3NyAyNS4xNSA0MC4yODgzIDI0LjI3OTIgMzguODU3OCAyMy42ODQzQzM3LjQyNzIgMjMuMDg5NSAzNS44OTM1IDIyLjc4MjQgMzQuMzQ0MiAyMi43ODA1Wk0zOC43MTQ5IDI4LjE3MDhWMjUuMjI2MUMzOS43NzM4IDI1LjcyNDkgNDAuNzM4NiAyNi40MDI3IDQxLjU2NjkgMjcuMjI5NkwzNS4wMzU4IDM0LjE4MTRWMjQuMjYzNkMzNS43Nzg1IDI0LjMyMDEgMzYuNTEyNiAyNC40NTg4IDM3LjIyNDcgMjQuNjc3MVYyOS43MjUxTDM4LjcxNDkgMjguMTcwOFpNMjUuNTk1NiAyOS4xMTJMMjcuMTM1OCAzMi4xNzc5TDI3Ljg0ODggMzAuNDA5NkwyNi41NjUzIDI3Ljg1NzFWMjcuODA3MkMyNy45NjY2IDI2LjE4OSAyOS44Mzg5IDI1LjA0OTcgMzEuOTIgMjQuNTQ4N0wzMS4zODUyIDI1LjgyNUwyNi44ODYyIDM2LjUyTDI1LjQ2MDIgMzkuODQ5OEMyNC40OTEyIDM4LjIzMDIgMjMuOTg4NSAzNi4zNzQ0IDI0LjAwNzQgMzQuNDg3MkMyNC4wMjYyIDMyLjYgMjQuNTY2IDMwLjc1NDYgMjUuNTY3MSAyOS4xNTQ3TDI1LjU5NTYgMjkuMTEyWk0zMy42MTY5IDQ0Ljg0MDhDMzIuMjQ4MyA0NC43NDM3IDMwLjkxMjcgNDQuMzc0NyAyOS42ODg0IDQzLjc1NTJDMjguNDY0MiA0My4xMzU3IDI3LjM3NTcgNDIuMjc4MyAyNi40ODY5IDQxLjIzM0wyNy40NDk1IDM4Ljk0NDJMMjguNTkwMyAzNi4yNDJIMzIuMTU1M1YzNC44MTZIMjkuMjAzNEwzMy42MTY5IDI0LjMyNzdWNDQuODc2NVY0NC44NDA4Wk0zNS4wNDI5IDQ0Ljg0MDhWMzYuMjg0OEwzNi42NzU3IDM0LjU1MjJMNDIuMDg3NCA0MS4yOTcyQzQxLjIwOCA0Mi4zMTk3IDQwLjEzNTggNDMuMTU4OSAzOC45MzIgNDMuNzY2OUMzNy43MjgxIDQ0LjM3NSAzNi40MTY0IDQ0LjczOTkgMzUuMDcxNSA0NC44NDA4SDM1LjA0MjlaTTM3LjY4MTEgMzMuNTA0TDQyLjUzNjYgMjguMzQxOUM0My4zMzYxIDI5LjM5MzIgNDMuOTI0NCAzMC41ODkyIDQ0LjI2OTIgMzEuODY0MUw0MC43NzU1IDM1LjAyOTlMNDEuNjg4MSAzNi4xNzA3TDQ0LjU3NTggMzMuNTUzOUM0NC42MTU0IDMzLjg4NzYgNDQuNjM2OCAzNC4yMjMzIDQ0LjY0IDM0LjU1OTNDNDQuNjM4MSAzNi41MzMxIDQ0LjA2NjIgMzguNDY0MiA0Mi45OTI5IDQwLjEyMDdMMzcuNjgxMSAzMy41MDRaIiBmaWxsPSIjMzAzRTQ3Ii8+CjxyZWN0IHg9IjQiIHk9IjMuNzEyNCIgd2lkdGg9IjQuMjQ0MjkiIGhlaWdodD0iNy43MTY4OSIgcng9IjEuMTU3NTMiIHN0cm9rZT0iIzMwM0U0NyIgc3Ryb2tlLXdpZHRoPSIxLjQyNTIxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS40MDUzIDNDOC4zNzI0NSAzIDcuNTM1MTYgMy44MzcyOSA3LjUzNTE2IDQuODcwMTRWMTAuMjcyQzcuNTM1MTYgMTEuMzA0OCA4LjM3MjQ1IDEyLjE0MjEgOS40MDUzIDEyLjE0MjFIMTEuODczOUMxMS41NDU0IDExLjcyNTQgMTEuMjk3IDExLjI0MjYgMTEuMTUxOSAxMC43MTY5SDkuNDA1M0M5LjE1OTU3IDEwLjcxNjkgOC45NjAzNyAxMC41MTc3IDguOTYwMzcgMTAuMjcyVjQuODcwMTRDOC45NjAzNyA0LjYyNDQxIDkuMTU5NTcgNC40MjUyMSA5LjQwNTMgNC40MjUyMUgxMS4zMzQ1QzExLjU4MDIgNC40MjUyMSAxMS43Nzk0IDQuNjI0NDEgMTEuNzc5NCA0Ljg3MDE0VjguMjU1NzRDMTIuMDI2NSA4LjEwMzY3IDEyLjMxNzMgOC4wMTU5NSAxMi42Mjg3IDguMDE1OTVIMTMuMjA0N1Y0Ljg3MDE0QzEzLjIwNDcgMy44MzcyOSAxMi4zNjc0IDMgMTEuMzM0NSAzSDkuNDA1M1oiIGZpbGw9IiMzMDNFNDciLz4KPHBhdGggZD0iTTEyLjQ4OTMgNC44Njk5NEMxMi40ODkzIDQuMjMwNjUgMTMuMDA3NSAzLjcxMjQgMTMuNjQ2OCAzLjcxMjRIMTUuNTc2QzE2LjIxNTMgMy43MTI0IDE2LjczMzUgNC4yMzA2NSAxNi43MzM1IDQuODY5OTRWOC41MzU0NkMxNi43MzM1IDkuNzA3NDkgMTUuNzgzNCAxMC42NTc2IDE0LjYxMTQgMTAuNjU3NlYxMC42NTc2QzEzLjQzOTQgMTAuNjU3NiAxMi40ODkzIDkuNzA3NDkgMTIuNDg5MyA4LjUzNTQ2VjQuODY5OTRaIiBzdHJva2U9IiMzMDNFNDciIHN0cm9rZS13aWR0aD0iMS40MjUyMSIvPgo8cGF0aCBkPSJNMjAuOTc3NyA5LjExNDIzVjQuODY5OTRDMjAuOTc3NyA0LjIzMDY1IDIwLjQ1OTQgMy43MTI0IDE5LjgyMDIgMy43MTI0SDE3Ljg5MDlDMTcuMjUxNiAzLjcxMjQgMTYuNzMzNCA0LjIzMDY1IDE2LjczMzQgNC44Njk5NFY4LjcyODM4IiBzdHJva2U9IiMzMDNFNDciIHN0cm9rZS13aWR0aD0iMS40MjUyMSIvPgo8cGF0aCBkPSJNMTIuNjI3MyA4LjcyODI3QzEyLjEyNSA4LjcyODI3IDExLjcxNzggOS4xMzU0NiAxMS43MTc4IDkuNjM3NzZWOS42Mzc3NkMxMS43MTc4IDExLjQ3OTUgMTMuMjEwOCAxMi45NzI2IDE1LjA1MjYgMTIuOTcyNkgxNy41MDU0QzE4LjE0NDcgMTIuOTcyNiAxOC42NjMgMTMuNDkwOCAxOC42NjMgMTQuMTMwMVYxNi4yMTM3QzE4LjY2MyAxOC4yNTk0IDIwLjMyMTQgMTkuOTE3OCAyMi4zNjcxIDE5LjkxNzhWMTkuOTE3OEMyMi44Nzg1IDE5LjkxNzggMjMuMjkzMSAxOS41MDMyIDIzLjI5MzEgMTguOTkxN1YxMi45NzI2QzIzLjI5MzEgMTAuNjI4NSAyMS4zOTI5IDguNzI4MjcgMTkuMDQ4OCA4LjcyODI3SDEyLjYyNzNaIiBzdHJva2U9IiMzMDNFNDciIHN0cm9rZS13aWR0aD0iMS40MjUyMSIvPgo8cGF0aCBkPSJNMTIuNDg5MyAxMS44MTUyVjE0LjEzMDNDMTIuNDg5MyAxNy4zMjY3IDE1LjA4MDUgMTkuOTE3OSAxOC4yNzY5IDE5LjkxNzlIMjIuMTM1NCIgc3Ryb2tlPSIjMzAzRTQ3IiBzdHJva2Utd2lkdGg9IjEuNDI1MjEiLz4KPHBhdGggZD0iTTQgMTAuMDc4OVYxNC4xMzAyQzQgMTcuMzI2NyA2LjU5MTIzIDE5LjkxNzkgOS43ODc2NyAxOS45MTc5SDE4LjI3NjMiIHN0cm9rZT0iIzMwM0U0NyIgc3Ryb2tlLXdpZHRoPSIxLjQyNTIxIi8+CjxwYXRoIGQ9Ik00IDEwLjA3ODlWMTkuOTE3OUgxOC4yNzYzIiBzdHJva2U9IiMzMDNFNDciIHN0cm9rZS13aWR0aD0iMS40MjUyMSIvPgo8cGF0aCBkPSJNMjAuOTc4NSA0Ljg3MDEyTDIzLjI5MzYgMTIuMzk0MSIgc3Ryb2tlPSIjMzAzRTQ3IiBzdHJva2Utd2lkdGg9IjEuNDI1MjEiLz4KPHJlY3QgeD0iNCIgeT0iMTkuOTE4IiB3aWR0aD0iMTkuMjkyMiIgaGVpZ2h0PSIzLjU2MTciIHN0cm9rZT0iIzMwM0U0NyIgc3Ryb2tlLXdpZHRoPSIxLjQyNTIxIi8+CjxwYXRoIGQ9Ik0yMy4yOTIyIDM0LjYwNzRWMjMuNDc5NUg0TDQgMjkuMTA3NCIgc3Ryb2tlPSIjMzAzRTQ3IiBzdHJva2Utd2lkdGg9IjEuNDI1MjEiLz4KPC9zdmc+Cg==" alt="" />
                    <h5>Connect Acorn Box and MARO Connect with a simple touch</h5>
                </div>
                <div>
                    <img src="data:image/png;base64,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" alt="" />
                    <h5>Connect Acorn Box and MARO Connect with a simple touch</h5>
                </div>
            </div>
            <div className='dasbord__home'>
                <div>
                    <h4>Receive reward by participating in governance and staking OAK</h4>
                    <p>Acorn Box is the official application of the Acorn Protocol governance token, OAK. Users can use OAK Mint, Governance Participation, and Stake Service within Acorn Box.</p>
                    <Link target='_blanks' to='https://acornbox.org/?fbclid=IwAR1XY-aF9BhKS8JqUbTBs92A0vk3R6W9Lgyzj86QYIvUky1EaaQd8iCzDBA#/'><h5>OAK DASHBOARD → </h5></Link>
                </div>
                <div>
                    <h4>Mobile wallet designed for Acorn Protocol</h4>
                    <p>Acorn Box users can create value whenever and wherever and get rewarded in real-time for their contribution with Acorn Protocol. Acorn Protocol builds a transparent and sustainable network economy protocol</p>
                    <Link target='_blanks' to='http://acorn.eco/#/'><h5>See more → </h5></Link>
                </div>
                <div>
                    <h4>Easy-to-use mobile wallet built on the Maro Blockchain</h4>
                    <p>Acorn Box is operated stably and efficiently on the Maro Blockchain. The Maro Blockchain builds a sustainable token economy and open infrastructure providing all global citizens a means to seamlessly connect to the global economy for even more opportunities for prosperity</p>
                    <Link target='_blanks' to='https://ma.ro/#/'><h5>See more → </h5></Link>
                </div>
            </div>
            <footer>
                <div className='footer'>
                    <img src="https://i.postimg.cc/dVVp3Cpg/341146492-772168984337218-2366102651425944232-n.jpg" alt="" />
                    <h5>Other Links</h5>
                    <h6>Maro</h6>
                    <h6>Acorn Protocol</h6>
                    <hr style={{color:'white'}} />
                    <h5>Social media</h5>
                    <div>
                    <i class="fa-solid fa-envelope"></i>
                    <i class="fa-brands fa-square-instagram"></i>                    
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-twitch"></i>
                    <i class="fa-solid fa-b"></i>
                    </div>


                </div>
                <div className='footer'>
                    <h5>Resources</h5>
                    <h6>Acorn Box</h6>
                    <h6>MARO Connect</h6>
                </div>
            </footer>
        </>

    );
};

export default Home;