import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { LinearProgress, withStyles } from "@material-ui/core";
import Header from "./header";

import * as routes from "routes";

const Home = lazy(() => import("pages/home"));

const Main = () => {
    useScrollToTop();

    return (
        <>
            <Header />

            <Spacer />

            <Suspense fallback={<LinearProgress />}>
                <Switch>
                    <Route path={routes.HOME} exact component={Home} />
                </Switch>
            </Suspense>
        </>
    );
};

function useScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

const style = (theme) => ({
    main: theme.mixins.toolbar,
});

const Spacer = withStyles(style)(({ classes }) => (
    <div className={classes.main} />
));

export default Main;
