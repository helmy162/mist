import React   from "react";
import { useEffect, useRef, useState } from "react";
import { useCustomState } from "../../../state/state";
import styles from "./ParallaxHeader.module.scss";
import { Layout } from "../../layouts";
import { InputDiscount } from "../../ui";
import { Button } from "../../elements";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Features,
  Features2,
  Subscribe,
  Services,
  Team,
  Services3,
  Contacts,
  Slider,
  Reviews,
  ParallaxHeader,
  Facts,
  VideoHeader,
} from "../../widgets";

export default () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ease: "none"});
  const [x, setX] = useState()
  const [y, setY] = useState()
  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [setX, setY]
  )

  const [state, actions] = useCustomState();

  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, {
      xPercent: -150,

      scrollTrigger: {
        trigger: boxRef.current,
        start: "bottom 80%",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <div
      className={styles.parallax}
      style={{
        backgroundImage: "url(" + state.data.header_bgs.about + ")",
      }}
    >
      <Layout col="1">
        <section style={{height:'50vh', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className={styles.intro}>
            <h1>
            About Us
            </h1>
            <h4 style={{fontWeight:'200', lineHeight:'normal'}}>
              Mist is a cutting-edge guild focused on us-250 progression. Our guild prides itself on always improving. We want raiders who want to improve their play, improve the raid team, and improve the culture we foster here. We value solid mechanical play over individual parses. If hardcore progression doesn't fit your playstyle but you're still looking for a cutting-edge focused environment to push content, we also run a late-night two night a week group.
            </h4>
            <div className={styles.buttons} style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', gap:'20px', flexWrap:'wrap'}}>
              <Button click={() => actions.toogleModal()} hoverType="solid-white-tb">
                RAIDER.IO
              </Button>
              <Button click={() => actions.toogleModal()} hoverType="solid-white-tb">
                WOW PROGRESS
              </Button>
            </div>
          </div>
        </section>
        <section style={{height:'75vh', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div ref={boxRef} style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            <h1  style={{textAlign:'center', fontSize: '5vw', color:'white', cursor:'default', marginBottom:'20px'}}>Teams</h1>
            <Services3 data={state.data.teams} />
          </div>
        </section>
        {/* <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginTop:'50px'}}>
          <h1 style={{textAlign:'center', fontSize: '10vw', color:'white'}}>Overview</h1>
          <iframe width="100%" height={window.innerHeight*0.8} src="https://www.youtube.com/embed/UANuDDQTNKY" title="Dragonflight Date Announce Trailer | World of Warcraft" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}
        <section style={{height:'75vh', display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
          <h1 style={{textAlign:'center', fontSize: '5vw', color:'white'}}>HighLights</h1>
          <div  style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', gap:'1%', flexWrap:'wrap'}}>
            <VideoHeader autoPlay={false} width='45%' height='45%'/>
            <VideoHeader autoPlay={false} width='45%' height='45%'/>
            <VideoHeader autoPlay={false} width='45%' height='45%'/>
            <VideoHeader autoPlay={false} width='45%' height='45%'/>
          </div>
        </section>
        <section style={{height:'75vh', display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
          <div className={styles.intro}>
            <h1>
            Guild Philosophy
            </h1>
            <h4 style={{fontWeight:'200', lineHeight:'normal'}}>
              Mist is a cutting-edge guild focused on us-250 progression. Our guild prides itself on always improving. We want raiders who want to improve their play, improve the raid team, and improve the culture we foster here. We value solid mechanical play over individual parses. If hardcore progression doesn't fit your playstyle but you're still looking for a cutting-edge focused environment to push content, we also run a late-night two night a week group.
            </h4>
          </div>    
        </section>  
      </Layout>
      <div className={styles.form}>
        
      </div>
      
    </div>
  );
};
