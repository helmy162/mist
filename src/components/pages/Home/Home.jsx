import React, { Fragment } from "react";
import {
  Features,
  Features2,
  Subscribe,
  Services,
  Team,
  Services3,
  Slider,
  Reviews,
  ParallaxHeader,
  Facts,
  VideoHeader,
} from "../../widgets";
import HomeVideo from "./HomeVideo";

import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
          <Slider data={state.data.posts} />
          <div style={{margin:'0'}}>
            <ParallaxHeader />
          </div>
          
    </Fragment>
  );
};
