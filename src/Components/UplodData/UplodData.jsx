import React, { useContext, useState } from 'react';
import { storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import ProgressBar from 'react-bootstrap/ProgressBar';

import './UplodData.css'
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const UplodData = () => {
    const [users, setUsers] = useContext(userContext);
    const navigate = useNavigate()

    const [backurl, setBackurl] = useState(null);
    const [fullurl, setFullurl] = useState(null);
    const [fonturl, setFonturl] = useState(null);


    const [fontpro, setFontpro] = useState(0);
    const [backpro, setBackpro] = useState(0);
    const [fullpro, setFullpro] = useState(0);




    const handelImageChange = (e) => {

        if (e.target.files[0]) {
            const storageRef = ref(storage, `images/${e.target.files[0].name}`);
            const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setFontpro(progress)
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {

                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setFonturl(downloadURL)
                    });
                }
            );
        }
    }


    const handelImageChange1 = (e) => {
        if (e.target.files[0]) {
            const storageRef = ref(storage, `images/${e.target.files[0].name}`);
            const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setBackpro(progress)
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {

                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setBackurl(downloadURL)
                    });
                }
            );
        }
    }

    const handelImageChange2 = (e) => {
        if (e.target.files[0]) {
            const storageRef = ref(storage, `images/${e.target.files[0].name}`);
            const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setFullpro(progress)
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    alert(error.message)
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setFullurl(downloadURL)
                    });
                }
            );
        }
    }




    const handelSubmit = () => {

        if (backurl && fullurl && fonturl && users.Acn && users.Email && users.Name && users.Polygon && users.Refer && users.Talygram && users.Talygram2 && users.Tweter) {
            const newItem = { Fonturl: `${fonturl}`, Backurl: `${backurl}`, Fullurl: `${fullurl}`, Date: new Date(), Acn: `${users.Acn}`, Email: `${users.Email}`, Name: `${users.Name}`, Polygon: `${users.Polygon}`, Refer: `${users.Refer}`, Talygram: `${users.Talygram}`, Talygram2: `${users.Talygram2}`, Tweter: `${users.Tweter}`, };
            fetch('https://shy-pear-bighorn-sheep-coat.cyclic.app/users', {
                method: 'POST',
                body: JSON.stringify(newItem),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            alert('Upload successfully')
            navigate('/')
        } else {
            alert('Please wait')
        }


    }
    return (
        <div className='form__submit'>
            <div className='fake'><h4><Link>Complet Your KYC</Link></h4></div>
            <div className='up__det'><strong>Provide verification documents</strong></div>
            <div className='uplod_img f_up'>
                <strong>Please select the front side of the ID to upload.</strong>
                <img src={fonturl} alt="" />
                <ProgressBar now={fontpro} label={`${fontpro}%`} visuallyHidden />
                <input id='clearfont' type="file" onChange={handelImageChange} />
            </div>
            <div className='uplod_img'>
                <strong>Please select the back side of the ID to upload</strong>
                <img src={backurl} alt="" />
                <ProgressBar now={backpro} label={`${backpro}%`} visuallyHidden />
                <input id='clearback' type="file" onChange={handelImageChange1} />
            </div>
            <div className='uplod_img'>
                <strong>In this step please take a selfie with your ID. Then give us your selfie

                    Please submit a clear and visible selfie for identification purposes. Please note that any modifications to the selfie will not be accepted.
                    To ensure accuracy and authenticity, we ask that you include your valid ID/passport in the selfie. In addition, please hold a piece of paper with the word "Acron protocol" and the date the selfie was taken written on it.</strong>
                <img src={fullurl} alt="" />
                <ProgressBar now={fullpro} label={`${fullpro}%`} visuallyHidden />
                <input id='clearfull' type="file" onChange={handelImageChange2} />
            </div>
            <div className='uplod_img'>
                <button onClick={handelSubmit}><strong>Submit</strong></button>
            </div>
        </div>
    );
};

export default UplodData;