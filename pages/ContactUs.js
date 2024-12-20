import { useState,useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar"
import styles from '@/styles/ContactUs.module.css';
import Head from "next/head";
import Assistant from "@/components/Assistant";
export default function ContactUs (){
    const [emailValue,setEmailValue] = useState('');
    const [body,setBody]  = useState('');
    const sendEmail =  async ()=>{
        console.log("trying");
        let email = await fetch('/api/sendemail',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:emailValue,subject:"testing",body:body
            })
        })
    };
    const onEmailChange = ()=>{
        setEmailValue(event.target.value);
    }
    const onBodyChange = ()=>{
        setBody(event.target.value);
    }

    const [websiteData,setWebsiteData] = useState({title:"",description:""});
    useEffect(()=>{
        const readData = async ()=>{
            const response = await fetch(`/api/getdata`);
            if(response.ok){
                  console.log('trying to fetch the data');
                  const data = await response.json();
                  console.log(data.message);
                  setWebsiteData(data.message);

            }
      }
      readData();
    },[])
    return(
        <>
            <Head>
                {websiteData !== null && (<title>{websiteData.name}</title>)}
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
            </Head>
            <div className={styles.container}>
                <Assistant/>
                <div className={styles.topDiv}>
                    <Navbar/>
                </div>
                
                <div className={styles.newsDiv}>

                        <div className={styles.newsDiv_top}>

                                    <h2 className={styles.newsDiv_top_header}>Come Visit Us</h2>
                                    <p className={styles.newsDiv_top_paragraph}>Visit the  {websiteData.name} head office <br/> We&apos;d love to chat with you over a cup of ☕ chai!</p>
                        </div>

                        <div className={styles.newsDiv_photoFrame}>
                                <img src="/office.jpeg" className={styles.newsDiv_photoFrame_photo} width={100} height={100}/>
                                {/* <p className={styles.newsDiv_photoFrame_paragraph}>Our office at Didihat, Pithoragarh</p> */}
                        </div>


                        <div className={styles.newsDiv_formFrame}>
                                    <div className={styles.newsDiv_formFrame_form}>
                                                <div className={styles.form_left}>
                                                        <div className={styles.form_left_body}>
                                                            <div className={styles.form_left_top}>
                                                                <h2 className={styles.form_left_header}>Contact Us</h2>
                                                                <p className={styles.form_left_paragraph}>Leave us your message below and  will make sure we get back to you</p>
                                                            </div>
                                                            <div className={styles.form_left_bottom}>
                                                                        <div className={styles.form_left_name}>
                                                                                <div className={styles.form_left_name_top}>
                                                                                    <div className={styles.form_left_first_name}>
                                                                                        <p>First Name</p>
                                                                                    </div>
                                                                                    <div className={styles.form_left_last_name}>
                                                                                        <p>Last Name</p>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                <div className={styles.form_left_name_bottom}>
                                                                                    <div className={styles.form_left_first_input}>
                                                                                            <input type="text" className={styles.nameInput} placeholder="First name"/>
                                                                                    </div>
                                                                                    <div className={styles.form_left_last_input}>
                                                                                        <input type="text" className={styles.nameInput} placeholder="Last name"/>
                                                                                    </div>
                                                                                </div>
                                                                        </div>

                                                                        <div className={styles.form_left_email}>
                                                                            <p>Email</p>
                                                                            <input type="text" className={styles.emailInput} placeholder="you@company.com" onChange={onEmailChange}/>
                                                                        </div>

                                                                        <div className={styles.form_left_message}>
                                                                                <p>Message</p>
                                                                                <textarea type="text" className={styles.messageInput} placeholder="Leave us a message" onChange={onBodyChange}/>
                                                                        </div>

                                                                        <div className={styles.form_left_submit}>
                                                                                <button className={styles.submitButton} onClick={sendEmail}>
                                                                                    <p className={styles.submitButton_text}>Send Message</p>
                                                                                </button>
                                                                        </div>
                                                            </div>
                                                        </div>
                                                </div>

                                                <div className={styles.form_right}>
                                                    <img src="/flower.png" className={styles.form_right_photo} width={100} height={100}/>
                                                </div>
                                    </div>
                        </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}