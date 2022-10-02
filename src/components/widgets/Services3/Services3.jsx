import React, { useState, useEffect, useRef } from "react";
import styles from "./Services3.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";

import { Button } from "../../elements";

export default ({ data = [] }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    window.addEventListener("resize", resizeListener);
    return window.removeEventListener("resize", resizeListener);
  }, []);

  const resizeListener = () => {
    setHeight(ref.current.clientHeight);
  };

  let listStatistic = data
    .map((item, index) => (
      <div
        key={index}
        className={styles.wrapper}
        style={{
          borderColor: THEME.color,
        }}
      >
        <div className={styles.extra} style={{ background: THEME.color }}>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={item.icon} alt="card_icon" />
          </div>

          <h3
            style={{
              color: THEME.color,
            }}
          >
            {item.title}
          </h3>
          <p>{item.text.replace(/^(.{60}[^\s]*).*/, "$1")}</p>
          <div className={styles.button}>
            <Button
              to={"/teams" + item.link}
              type="solid-white-tb"
              hoverType="solid-white-tb"
              round
              small
              before="&#xf105;"
            />
          </div>
        </div>
      </div>
    ))
    .slice(0, 2);

  listStatistic.unshift(
    <div
      key={Math.random()}
      className={styles.list_header}
      style={{ background: THEME.color }}
    >
      <div className={styles.list_front}>
        <h3>
          Here is what you <b>should know</b>
        </h3>
        <i className="las la-long-arrow-alt-down" />
      </div>
      <div className={styles.list_back}>
        <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );

  return (
    <div className={styles.stat_area}>
      <Layout
        style={{
          // transform: "translateY(-50%)",
        }}
        col="1"
      >
        <div className={styles.statistic} ref={ref}>
          {listStatistic}
        </div>
      </Layout>
    </div>
  );
};
