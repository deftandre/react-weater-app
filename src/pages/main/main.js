import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { LinearProgress, withStyles } from "@material-ui/core";

import Header from "./header";

import * as routes from "routes";

/** Use lazy with suspense to dinamic import and view render */
const Home = lazy(() => import("pages/home"));
const CityInfo = lazy(() => import("pages/city-info"));

const Main = () => {
    //** scroll to top when you back to home */
    useScrollToTop();

    return (
        <>
            <Header />

            <Spacer />

            <Suspense fallback={<LinearProgress />}>
                <Switch>
                    <Route path={routes.HOME} exact component={Home} />
                    <Route path={routes.CITY_INFO} component={CityInfo} />
                </Switch>
            </Suspense>
        </>
    );
};

/** scroll to top when pathname change */
function useScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

/** style spacer the acording with toolbar */
const style = (theme) => ({
    main: theme.mixins.toolbar,
});

/** create a custom spacer between header and body */
const Spacer = withStyles(style)(({ classes }) => (
    <div className={classes.main} />
));

export default Main;
