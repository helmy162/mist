import React, { useState, useEffect } from 'react'
import { Button } from "../../../elements";
import THEME from "../../../../state/theme";
import './CardImage.css';


export default ({ children, label, image, user ,layout = "grid", discord}) => {
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
    let calcAngleX = (x - halfWidth) / 6;
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

  const [Users, fetchUsers] = useState([])
  const [x, setX] = useState('');
  const getData = () => {
    fetch('https://raider.io/api/v1/characters/profile?region=us&realm=illidan&name=' + user +'&fields=mythic_plus_scores')
      .then((res) => res.json())
      .then((res) => {
        console.log(Users)
        fetchUsers([...Users, res])
        setX(res.class);
        console.log(Users)
      })
  }
  
  useEffect(() => {
    getData()
  }, [])

  return(
  <>
  {Users.map((item, i) => {
    return <div class="card2 user">
      <span class="inner-card-backface">
        <span class="flip-inner-card">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est nunc.</p>
          <span class="unflip">Unflip</span>
        </span>
      </span>
      <span class="inner-card">
        <span class="user-details">
          <span class="top-section">
            <span class="flip">Flip</span>
          </span>
          <span class="bottom-section">
            <span class="name">{item.name}</span>
            <span class="area"><span class="area-container" style={{color: 
            item.class==='Death Knight'? '#C41E3A':
            item.class==='Demon Hunter'? '#A330C9':
            item.class==='Druid'? '#FF7D0A':
            item.class==='Hunter'? '#ABD473':
            item.class==='Mage'? '#69CCF0':
            item.class==='Monk'? '#00FF96':
            item.class==='Paladin'? '#F58CBA':
            item.class==='Priest'? '#FFFFFF':
            item.class==='Rogue'? '#FFF569':
            item.class==='Shaman'? '#0070DE':
            item.class==='Warlock'? '#9482C9':
            item.class==='Warrior'? '#C79C6E':
            'white'}}>{item.class}</span></span>
            {discord?
              <div class="flip-button buttons">
                <div class="flip-button-inner">
                  <div class="flip-button-front ">
                    <button> <i class="lab la-discord" style={{fontSize:'24px', marginRight:'5px'}}></i> Discord</button>
                  </div>
                  <div class="flip-button-back" style={{fontSize:'12px'}}>
                    <div> {discord}</div>
                  </div>
                </div>
              </div>
            : null}
          </span>
          <span class="user-icon"> <img src={require('./icons/'+item.class+'.png')}/>
          </span>
        </span>
        <span class="glare"></span>
      </span>
      </div>
    })}
  </>
  );
};
