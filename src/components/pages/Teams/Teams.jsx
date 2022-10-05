import React, { Fragment, useState, useEffect } from "react";
import {
  Features,
  Features2,
  Subscribe,
  Services,
  Team,
  Services3,
  Contacts,
  Slider,
  Slider2,
  Slider3,
  Reviews,
  ParallaxHeader,
  Facts,
  VideoHeader,
} from "../../widgets";
import { useCustomState } from "../../../state/state";
import './Teams.css';
import CastleCard from "../../widgets/CastleCard/CastleCard";
import { Layout } from "../../layouts";
import { CardImage } from "../../ui";

export default ({ data = [] }) => {
  const state = useCustomState()[0];

  const axios = require('axios').default;
  const [mistData, fetchData] = useState([]);
  const [nathria, setNathria] = useState([]);
  const [fatednathria, setFatedNathria] = useState([]);
  const [sanctum, setSanctum] = useState([]);
  const [fatedsanctum, setFatedSanctum] = useState([]);
  const [sepulcher, setsepulcher] = useState([]);
  const [fatedsepulcher, setFatedSepulcher] = useState([]);
  const [x, setX] = useState('');


  let calculateAngle = function(e, item, parent) {
    let dropShadowColor = `rgba(0, 0, 0, 0.3)`
    if(parent.getAttribute('data-filter-color') !== null) {
        dropShadowColor = parent.getAttribute('data-filter-color');
    }

    parent.classList.add('animated');
    // Get the x position of the users mouse, relative to the button itself
    let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
    // Get the y position relative to the button
    let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

    // Calculate half the width and height
    let halfWidth  = item.getBoundingClientRect().width / 2;
    let halfHeight = item.getBoundingClientRect().height / 2;

    // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
    // Changing these numbers will change the depth of the effect.
    let calcAngleX = (x - halfWidth) / 16;
    let calcAngleY = (y - halfHeight) / 14;
  
    let gX = (1 - (x / (halfWidth * 2))) * 100;
    let gY = (1 - (y / (halfHeight * 2))) * 100;
  
    item.querySelector('.glare').style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;
    // And set its container's perspective.
    parent.style.perspective = `${halfWidth * 6}px`
    item.style.perspective = `${halfWidth * 6}px`

    // Set the items transform CSS property
    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;
    parent.querySelector('.inner-card-backface').style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`;
  
    if(parent.getAttribute('data-custom-perspective') !== null) {
        parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`
    }

    // Reapply this to the shadow, with different dividers
    let calcShadowX = (x - halfWidth) / 3;
    let calcShadowY = (y - halfHeight) / 6;
    
    // Add a filter shadow - this is more performant to animate than a regular box shadow.
    item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;
}
document.querySelectorAll('.card2').forEach(function(item) {
    if(item.querySelector('.flip') !== null) {
      item.querySelector('.flip').addEventListener('click', function() {
        item.classList.add('flipped');
      });
    }
    if(item.querySelector('.unflip') !== null) {
      item.querySelector('.unflip').addEventListener('click', function() {
        item.classList.remove('flipped');
      });
    }
    item.addEventListener('mouseenter', function(e) {
        calculateAngle(e, this.querySelector('.inner-card'), this);
    });

    item.addEventListener('mousemove', function(e) {
        calculateAngle(e, this.querySelector('.inner-card'), this);
    });

    item.addEventListener('mouseleave', function(e) {
        let dropShadowColor = `rgba(0, 0, 0, 0.3)`
        if(item.getAttribute('data-filter-color') !== null) {
            dropShadowColor = item.getAttribute('data-filter-color')
        }
        item.classList.remove('animated');
        item.querySelector('.inner-card').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        item.querySelector('.inner-card-backface').style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
        item.querySelector('.inner-card').style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
    });
})

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('https://raider.io/api/v1/guilds/profile?region=us&realm=illidan&name=mist&fields=raid_rankings')
        .then(response => {
          fetchData(response.data);
          setNathria(response.data.raid_rankings["castle-nathria"].mythic);
          setFatedNathria(response.data.raid_rankings["fated-castle-nathria"].mythic);
          setSanctum(response.data.raid_rankings["sanctum-of-domination"].mythic);
          setFatedSanctum(response.data.raid_rankings["fated-sanctum-of-domination"].mythic);
          setsepulcher(response.data.raid_rankings["sepulcher-of-the-first-ones"].mythic);
          setFatedSepulcher(response.data.raid_rankings["fated-sepulcher-of-the-first-ones"].mythic);
        });
    console.log(mistData.raid_rankings)
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  const item = state.data.castles;
  console.log(item);

  return (
    <Fragment>
          <Slider2 data={state.data.castles}>
                <CastleCard name={item[0].name} bg={item[0].bg} icon={item[0].icon} description={item[0].description} world={nathria.world} region={nathria.region} realm={nathria.realm}/>
                <CastleCard name={item[1].name} bg={item[1].bg} icon={item[1].icon} description={item[1].description} world={fatednathria.world} region={fatednathria.region} realm={fatednathria.realm}/>
                <CastleCard name={item[2].name} bg={item[2].bg} icon={item[2].icon} description={item[2].description} world={sanctum.world} region={sanctum.region} realm={sanctum.realm}/>
                <CastleCard name={item[3].name} bg={item[3].bg} icon={item[3].icon} description={item[3].description} world={fatedsanctum.world} region={fatedsanctum.region} realm={fatedsanctum.realm}/>
                <CastleCard name={item[4].name} bg={item[4].bg} icon={item[4].icon} description={item[4].description} world={sepulcher.world} region={sepulcher.region} realm={sepulcher.realm}/>
                <CastleCard name={item[5].name} bg={item[5].bg} icon={item[5].icon} description={item[5].description} world={fatedsepulcher.world} region={fatedsepulcher.region} realm={fatedsepulcher.realm}/>
          </Slider2>
          {/* <Team data={state.data.members} /> */}
          <div
            className="parallax"
            style={{
              backgroundImage: "url(" + state.data.header_bgs.about + ")",
              flexDirection:'column',
              alignItems:'center',
            }}
          >
            <Layout col="1">
              <div style={{width:'60vw', flexBasis: '40%',}}>
                <h1>Achievements</h1>
                <Slider3 data={state.data.achievements} />
              </div>
            </Layout>
            <Layout col="1">
              <section className="about" id="about">
                <h1 style={{textAlign:'center'}}>
                  Our Goals
                </h1>
                <div className="card2 user" style={{height:'fit-content', width:'80%'}}>
                  <span className="inner-card-backface" style={{background:'transparent'}}>
                    <span className="flip-inner-card">
                    </span>
                  </span>
                  <span className="inner-card" style={{background:'transparent', width:'100%'}}>
                    <div className="intro" style={{maxWidth:'unset', padding:'100px', borderRadius:'25px'}}>
                      
                      <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <ul>
                          <li style={{marginBottom:'20px'}}>Lorem, ipsum dolor sit amet consectetur </li>
                          <li style={{marginBottom:'20px'}}>Lorem, ipsum dolor sit amet consectetur </li>
                          <li style={{marginBottom:'20px'}}>Lorem, ipsum dolor sit amet consectetur </li>
                          <li style={{marginBottom:'20px'}}>Lorem, ipsum dolor sit amet consectetur </li>
                        </ul>
                          <img src="https://i.ibb.co/wCR7NmS/logo.png" alt="" width="25%"/>
                      </div>
                    </div>
                    <span className="glare"></span>
                  </span>
                </div>
              </section>
            </Layout>
            
          </div>
          
          {/* <Contacts /> */}
    </Fragment>
  );
};
