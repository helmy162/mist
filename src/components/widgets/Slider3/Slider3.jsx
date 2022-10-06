import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./Slider3.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";

export default ({ data = [] }) => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideList = data.map((item, index) => (
    <article key={index}>
      <Layout
        style={{
          background: "url(" + item.image + ") center/cover",
          minHeight:'100vh',
          height:'fit-content'
        }}
        col="1"
        mode="dark"
      >
        <div className={styles.slide}>
          <i
            className={"las la-long-arrow-alt-left"}
            onClick={() => sliderRef.slickPrev()}
          />
          <div className={styles.intro} style={{maxWidth:'unset'}}>
            <h1>{item.title}</h1>
            <div className="card2 user" style={{height:'fit-content', width:'100%'}}>
            <span className="inner-card-backface" style={{background:'transparent'}}>
              <span className="flip-inner-card">
              </span>
            </span>
            <span className="inner-card" style={{background:'transparent', width:'100%'}}>
              <div className="intro" style={{maxWidth:'unset', padding:'100px', borderRadius:'25px'}}>
                <div className="goals" style={{justifyContent:'center'}}>
                  <ul>
                    {item.data.map((item2, index2) => (
                      index===2?
                      <li key={index2} style={{marginBottom:'20px'}}><a href={item2.link}>{item2.title}</a></li>
                      :
                      <li key={index2} style={{marginBottom:'20px'}}> {item2.title} </li>
                    ))}
                  </ul> 
                </div>
              </div>
              <span className="glare"></span>
            </span>
            </div>
          </div>
          <i
            className={"las la-long-arrow-alt-right"}
            onClick={() => sliderRef.slickNext()}
          />
        </div>
      </Layout>
    </article>
  ));

  return (
    <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
      {slideList}
    </Slider>
  );
};
