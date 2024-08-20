import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentPhoto,setcurrentPhoto] = useState(0);
  const [currentTheme,setcurrentTheme] = useState(0);
  let photos = ['/real.jpg','/kids.jpg','/water.jpg','/school.jpg','training.jpg'];
  let themes = ['linear-gradient(180deg, #FFF 0%, #419C70 100%)','linear-gradient(180deg, #FFF 0%, #1662D5 62.5%, #2B80BD 83.5%)','linear-gradient(180deg, #FFF 0%, #61A2C6 62.5%, #3A5783 83.5%)','linear-gradient(180deg, #FFF 0%, #ABABAB 62.5%, #BC884C 83.5%)','linear-gradient(180deg, #FFF 0%, #E9AAFF 62.5%, #7F50BC 83.5%)']
  useEffect(()=>{
     
      const intervalID = setInterval(() => {
                
                  setcurrentPhoto((prevPhoto)=>(prevPhoto + 1) % photos.length);
                  setcurrentTheme((prevTheme)=>(prevTheme + 1) % themes.length);
      }, (2000));
      return () => clearInterval(intervalID);
  },[])
  return (
    <>
      <Head>
        <title>Abhilasha Samiti</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>

        <link rel="icon" href="/favicon.ico" />
        
      </Head>
    
      <main className={`${styles.main} ${inter.className}`}>
      <Assistant/>
      <Navbar/>
                  <div className={styles.topDiv} style={{background:themes[currentTheme]}}>
                        <div className={styles.topDiv_photoDiv}>
                              <div className={styles.photoDiv_photoFrame} >
                              {photos.map((src, index) => ( 
                                    <div
                                          key={index}
                                          className={`${styles.slide} ${
                                                index === currentPhoto
                                                ? styles.show : styles.show
                                          }`}
                                          >
                                          <img className={`${styles.photoFrame_image} `} src={photos[currentPhoto]} width={850} height={450}/>
                                    </div>
                              ))}
                        
                        
                              </div>
                              <div className={styles.carousel_nav}>
                                     <button className={currentPhoto === 0 ? styles.nav_dot : styles.nav_dot_inactive} onClick={()=>{setcurrentPhoto(0); setcurrentTheme(0)}}></button>
                                     <button className={currentPhoto === 1 ? styles.nav_dot : styles.nav_dot_inactive}></button>
                                     <button className={currentPhoto === 2 ? styles.nav_dot : styles.nav_dot_inactive}></button>
                                     <button className={currentPhoto === 3 ? styles.nav_dot : styles.nav_dot_inactive}></button>
                                     <button className={currentPhoto === 4 ? styles.nav_dot : styles.nav_dot_inactive}></button>
                                  
                            
       
                               </div>
                        </div>
                       
                    
                  </div>

            <div className={styles.infoDiv}>
                <h2 className={styles.infoDiv_header}>WHO WE ARE</h2>
                <div className={styles.infoDiv_spacer}></div>
                <div className={styles.infoDiv_descriptionDiv}>
                  <p className={styles.infoDiv_paragraph}>
                      <span className={styles.infoDiv_highlightedtext}>ABHILASHA SAMITI</span> is a voluntary organization in Pithoragarh, Uttarakhand Operating nationally, it focuses on improving livelihoods, social work, biodiversity,  human trafficking, health awareness, women empowerment, culture, and gender issues. 
                  </p>
                  <p className={styles.infoDiv_paragraph}>
                  It conducts public awareness campaigns on the right to education and provides employment-oriented training for Self Help Groups, especially in Pithoragarh and other districts of Uttarakhand like Champawat, Almora, and Bageswar.
                  </p>
                </div>
            </div>
            
            <div className={styles.milestoneDiv}>
                <div className={styles.milestoneDiv_body}>
                      <div className={styles.milestoneDiv_left}>
                              <h2 className={styles.milestoneDiv_left_header}>Our Milestones</h2>
                              <p className={styles.milestoneDiv_left_subheader}>& We are just getting started!</p>
                      </div>

                      <div className={styles.milestoneDiv_right}>


                               <div className={styles.milestoneDiv_right_top}>
                                      <div className={styles.milestoneDiv_right_top_block}>
                                            <div className={styles.block_top}>
                                                <img className={styles.block_top_image} src="reading-book.png" width={80} height={80}/>
                                                <h2 className={styles.block_top_header}>2K +</h2>
                                            </div>
                                            <div className={styles.block_top_description}>
                                                  <p>admitted to <br/> our school</p>
                                            </div>
                                      </div>
                                      <div className={styles.milestoneDiv_right_top_block_second}>
                                            <div className={styles.block_top}>
                                                <img className={styles.block_top_image} src="neighborhood.png" width={80} height={80}/>
                                                <h2 className={styles.block_top_header}>50 +</h2>
                                            </div>
                                            <div className={styles.block_top_description}>
                                                  <p>villages were <br/> provided services</p>
                                            </div>
                                      </div>
                               </div>


                               <div className={styles.milestoneDiv_right_bottom}>
                                      <div className={styles.milestoneDiv_right_bottom_block}>
                                            <div className={styles.block_top}>
                                                <img className={styles.block_top_image} src="group.png" width={80} height={80}/>
                                                <h2 className={styles.block_top_header}>100 +</h2>
                                            </div>
                                            <div className={styles.block_top_description}>
                                                  <p>volunteers are<br/> present to serve</p>
                                            </div>
                                      </div>
                                      <div className={styles.milestoneDiv_right_bottom_block_second}>
                                            <div className={styles.block_top}>
                                                <img className={styles.block_top_image} src="portfolio.png" width={80} height={80}/>
                                                <h2 className={styles.block_top_header}>5yrs +</h2>
                                            </div>
                                            <div className={styles.block_top_description}>
                                                  <p>of experience <br/> as organisation</p>
                                            </div>
                                      </div>
                               </div>
                      </div>

                </div>

            </div>

            
            <div className={styles.newsDiv}>
                  <div className={styles.newsDiv_top}>

                  <h2>What&apos;s new in Abhilasha?</h2>

                  </div>

                  <div className={styles.newsDiv_bottom}>
                  <div className={styles.newsDiv_block}>
                              <div className={styles.newsDiv_block_left}>
                                    <div className={styles.newsDiv_block_left_top}>
                                          <h2 className={styles.newsDiv_block_header}>Our meet at Kashipur</h2>
                                          <div className={styles.newsDiv_block_spacer}></div>
                                    </div>

                                    <div className={styles.newsDiv_block_left_bottom}>
                                          <p>We recently had our big meet-up at Kashipur with over 120 + schools joining on shared vision of making education more accessible</p>
                                    </div>
                              </div>
                              <div className={styles.newsDiv_block_right}>
                                          <div className={styles.newsDiv_block_right_photo}>
                                                <img src="/meeting.jpg" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                          </div>
                              </div>
                  </div>
                  <div className={styles.newsDiv_block_second}>
                              <div className={styles.newsDiv_block_second_left}>
                                          <div className={styles.newsDiv_block_second_left_photo}>
                                                <img src="/office.jpg" className={styles.newsDiv_block_second_left_photo_image} width={150} height={150}/>
                                          </div>
                              </div>

                              <div className={styles.newsDiv_block_second_right}>
                                    <div className={styles.newsDiv_block_second_right_top}>
                                          <h2 className={styles.newsDiv_block_header}>New office at Haldwani</h2>
                                          <div className={styles.newsDiv_block_spacer}></div>
                                    </div>

                                    <div className={styles.newsDiv_block_second_right_bottom}>
                                          <p>We recently opened a new office in Haldwani, where we will provide training to upskill the youth with in-demand skills.</p>
                                    </div>
                              </div>
                              
                        </div>

                  </div>


            </div>
            <div className={styles.volunteerDiv}>

                  <div className={styles.volunteerDiv_spacer}></div>
                  <div className={styles.volunteerDiv_top}>
                              <h2>Abhilasha Needs You</h2>
                  </div>
                  <div className={styles.volunteerDiv_bottom}>
                        <div className={styles.volunteerDiv_bottom_div}>
                              <div className={styles.volunteerDiv_card}>
                                    <div className={styles.volunteerDiv_card_top}>
                                          <img src="/donate.png" width={140} height={140}/>
                                          <h2 className={styles.volunteerDiv_card_header_first}>DONATE</h2>
                                          <p className={styles.volunteerDiv_card_paragraph}>Join us in our mission <br/> to create a better future <br/> Every donation counts.</p>
                                    </div>
                                   
                                    <div className={styles.volunteerDiv_card_bottom}>
                                          <Link href={""} className={styles.volunteerDiv_card_button}>
                                                <h2 className={styles.volunteerDiv_card_button_text}>Support Us</h2>
                                          </Link>
                                    </div>
                              </div>
                              <div className={styles.volunteerDiv_card}>
                                    <div className={styles.volunteerDiv_card_top}>
                                          <img src="/volunteer.png" width={140} height={140}/>
                                          <h2 className={styles.volunteerDiv_card_header_middle}>VOLUNTEER</h2>
                                      <p className={styles.volunteerDiv_card_paragraph}>Help us make an impact<br/>Become a volunteer!</p>
                                         
                                    </div>
                                    <div className={styles.volunteerDiv_card_bottom}>
                                                <Link href={""} className={styles.volunteerDiv_card_button}>
                                                      <h2 className={styles.volunteerDiv_card_button_text}>Join</h2>
                                                </Link>
                                          </div>
                                    
                              </div>
                              <div className={styles.volunteerDiv_card}>
                                    <div className={styles.volunteerDiv_card_top}>
                                          <img src="/donate.png" width={140} height={140}/>
                                          <h2 className={styles.volunteerDiv_card_header_last}>INTERN</h2>
                                          <p className={styles.volunteerDiv_card_paragraph}>Gain valuable experience <br/> Apply now for our<br/>internship program</p>
                                    </div>
                                  
                                    <div className={styles.volunteerDiv_card_bottom}>
                                          <Link href={""} className={styles.volunteerDiv_card_button}>
                                                <h2 className={styles.volunteerDiv_card_button_text}>Apply</h2>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                        
                  </div>
                  <div className={styles.footerContainer}>
                               <Footer/>
                  </div>
            
                 

            </div>
            

      </main>
    </>
  );
}