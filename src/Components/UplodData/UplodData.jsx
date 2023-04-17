import React, { useState } from 'react';
import { storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import ProgressBar from 'react-bootstrap/ProgressBar';

import './UplodData.css'

const UplodData = () => {


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
        if (backurl && fullurl && fonturl) {
            const existingData = localStorage.getItem('myData') || '[]';
            const parsedData = JSON.parse(existingData);
            const newItem = { Fonturl: `${fonturl}`, Backurl: `${backurl}`, Fullurl: `${fullurl}`, Date: new Date() };
            parsedData.push(newItem);
            localStorage.setItem('myData', JSON.stringify(parsedData));

            const clearfont = document.getElementById('clearfont')
            const clearback = document.getElementById('clearback')
            const clearfull = document.getElementById('clearfull')
            clearfont.value = ''
            clearback.value = ''
            clearfull.value = ''
        } else {
            alert('একটু অপেক্ষা করুন')
        }
    }
    return (
        <div className='form__submit'>
            <div className='uplod_img f_up'>
                <strong>আপনার আইডি কাডের প্রথম পাতার ছবি দেন</strong>
                <img src={fonturl} alt="" />
                <ProgressBar now={fontpro} label={`${fontpro}%`} visuallyHidden />
                <input id='clearfont' type="file" onChange={handelImageChange} />
            </div>
            <div className='uplod_img'>
            <strong>আপনার আইডি কাডের প্রথম ছবি দেন</strong>
                <img src={backurl} alt="" />
                <ProgressBar now={backpro} label={`${backpro}%`} visuallyHidden />
                <input id='clearback' type="file" onChange={handelImageChange1} />
            </div>
            <div className='uplod_img'>
            <strong>আপনার আইডি কাডের প্রথম ছবি দেন</strong>
                <img src={fullurl} alt="" />
                <ProgressBar now={fullpro} label={`${fullpro}%`} visuallyHidden />
                <input id='clearfull' type="file" onChange={handelImageChange2} />
            </div>
            <div className='uplod_img'>
                <button onClick={handelSubmit}><strong>সংযোগ করুন</strong></button>
            </div>
        </div>
    );
};

export default UplodData;