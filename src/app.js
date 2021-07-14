import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

import { HOME } from "routes";

const MainPage = lazy(() => import("pages/main"));

function App() {
    return (
        <Suspense fallback={<LinearProgress />}>
            <Switch>
                <Route path={HOME} component={MainPage} />
            </Switch>
        </Suspense>
    );
}

export default App;
