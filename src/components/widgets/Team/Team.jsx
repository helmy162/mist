import React from "react";
import styles from "./Team.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { CardImage } from "../../ui";
import { Button } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";
import logo from './logo.png';
export default ({ data = [] }) => {
  const [state, actions] = useCustomState();

  const teamList = data.map((item, index) => (
    <article key={index}>
      <CardImage image={item.class} label={logo} user={item.user} item={item} discord={item.discord}>
      </CardImage>
    </article>
  ));

  return (
    <Layout
      style={{
        background: "transparent",
      }}
      mode="dark"
      col="3"
      padding
      blur
    >
      {/* <div className="layout-header">
        <span className="subtitle" style={{ color: THEME.color }}>
          Team members
        </span>
        <h2 style={{ color: "#fff" }}>
          Best workers in our industry for your purpose.
        </h2>
        <p style={{ color: "#fff" }}>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div> */}
      {teamList}
      {/* <div className={["layout-footer", styles.footer].join(" ")}>
        <span>
          <b style={{ color: THEME.color }}>Let's start do business. </b>
          <br />
          Make arrangement and get discount.
        </span>
        <Button
          hoverType="solid-white-tb"
          click={() =>
            actions.toogleRequest("Make arrangement and get discount")
          }
        >
          Make request
        </Button>
      </div> */}
    </Layout>
  );
};
