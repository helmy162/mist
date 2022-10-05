import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./Slider2.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import CastleCard from "../CastleCard/CastleCard";

export default (props) => {
 
  let sliderRef = useRef(null);
  // get window dimensions
  function getWindowDimensions() { const { innerWidth: width, innerHeight: height } = window;return {width,height};}
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {function handleResize() {setWindowDimensions(getWindowDimensions());} window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize);}, []);
    return windowDimensions;
  }
  const { height, width } = useWindowDimensions();
  const x = width>1537? 3: width>993? 2 : 1;
  const y = x===3 ? 4 : x===2 ? 3 : 0;
  console.log(x,y);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideList = props.data.slice(y).map((item, index) => (
    <article key={index}>
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
          />
          <div>
            {/* <h1 style={{fontSize:'3vw', margin:'50px 0px'}}> {item.name} </h1> */}
            {props.children.slice(index*x, index*x+x)}
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
