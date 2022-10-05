import React from "react";
import Layout from "../../layouts/Layout/Layout";
import { CardImage } from "../../ui";
import { Button } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default (props) => {
  const [state, actions] = useCustomState();
  return (
      <div className="clash-card barbarian">
        <div className="clash-card__image clash-card__image--barbarian">
          <img src={props.icon} alt="barbarian" height='90%' />
        </div>
        <div className="clash-card__level clash-card__level--barbarian">Mythic</div>
        <div className="clash-card__unit-name">{props.name}</div>
        <div className="clash-card__unit-description">
          {props.description}
        </div>

        <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
          <div className="one-third">
            <div className="stat">#{props.world}</div>
            <div className="stat-value">World</div>
          </div>

          <div className="one-third">
            <div className="stat">#{props.region}</div>
            <div className="stat-value">Region</div>
          </div>

          <div className="one-third no-border">
            <div className="stat">#{props.realm}</div>
            <div className="stat-value">Realm</div>
          </div>

        </div>
      </div>
  );
};
