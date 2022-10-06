import React, { useEffect, Fragment } from "react";
import { Switch, Route, Redirect} from "react-router-dom";

import {
  Home,
  HomeParalax,
  HomeVideo,
  About,
  Services,
  Portfolio,
  Contacts,
  Blog,
  PostSingle,
  ServiceSingle,
  MemberCard,
  PortfolioSingle,
  Teams,
  Apply
} from "./components/pages";
import { Header, Sidebar, Footer } from "./components/layouts";
import { ModalForm, RequestForm } from "./components/ui";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";
import { HomeTeams } from "./components/widgets";

export default () => {
  const [state, actions] = useCustomState();

  useEffect(() => {
    actions.fetch();
  }, [actions]);

  let app = state.error ? <p>Can't load page</p> : <Spinner fluid />;

  if (state.data) {
    app = (
        <Fragment>
          <Sidebar data={state.data.menu} />
          <ModalForm />
          <RequestForm />
          <Header data={state.data.menu} />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/home-paralax" exact component={HomeParalax} />
            <Route path="/home-video" exact component={HomeVideo} />
            <Route path="/about-us" exact component={About} />
            <Route path="/apply" exact component={Apply} />
            <Route path="/services" exact component={Services} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/blog/:post_id" exact component={PostSingle} />
            <Route path="/teams/" exact component={Teams} />
            <Route path="/team/:member_id" exact component={MemberCard} />
            <Route
              path="/portfolio/:project_id"
              exact
              component={PortfolioSingle}
            />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </Fragment>
    );
  }

  return <Fragment>{app}</Fragment>;
};
