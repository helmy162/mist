import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./Slider2.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";

export default (props) => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const item= props.data[props.teamID];
  const slideList = <article>
      <Layout
        style={{
          background: "url(" + item.bg + ") center/cover",
          height:'100vh'
        }}
        col="1"
        mode="dark"
      >
        <div className={styles.slide}>
          <i
            className={"las la-long-arrow-alt-left"}
            onClick={() => sliderRef.slickPrev()}
            style={{visibility: 'hidden'}}
          />
          <div className={styles.intro}>
            <h1>{item.name}</h1>
            <p style={{marginBottom:'10px'}}>{item.short}</p>
            <div className={styles.intro} style={{maxWidth:'unset', marginBottom:'20px'}}>
              <div className="card2 user" style={{height:'fit-content', width:'100%'}}>
              <span className="inner-card-backface" style={{background:'transparent'}}>
                <span className="flip-inner-card"></span>
              </span>
              <span className="inner-card" style={{background:'transparent', width:'100%'}}>
                <div className="intro" style={{maxWidth:'unset', padding:'100px', borderRadius:'25px'}}>
                  <div className="goals" style={{justifyContent:'center', flexDirection:'column'}}>
                    <h1>Raid Times</h1>
                    <ul>
                        { item.TimeRanges.map((item2, index2) => (
                          <li key={index2} style={{marginBottom:'20px'}}> {item2.time} </li>
                        ))}
                    </ul> 
                  </div>
                </div>
                <span className="glare"></span>
              </span>
              </div>
            </div>
            <Button to={"/apply/"} hoverType="solid-white-tb">
              Apply Now
            </Button>
          </div>
          <i
            className={"las la-long-arrow-alt-right"}
            onClick={() => sliderRef.slickNext()}
            style={{visibility: 'hidden'}}
          />
        </div>
      </Layout>
    </article>
  ;

  return (
    <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
      {slideList}
    </Slider>
  );
};
