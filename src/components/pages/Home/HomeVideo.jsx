import React, { Fragment } from "react";
import {
  Features,
  Services,
  Team,
  Services2,
  Contacts,
  Reviews,
  VideoHeader,
  Process,
} from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];
  
  return (
    <Fragment>
      <div  style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
          <VideoHeader autoPlay={true}/>
          <div style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', gap:'2%'}}>
            <VideoHeader autoPlay={false} width='45%' height='45%'/>
            <VideoHeader autoPlay={false} width='45%' height='45%'/>
          </div>
          </div>
    </Fragment>
  );
};
