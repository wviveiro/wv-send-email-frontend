import { useRouteMatch } from "react-router-dom";

/** This state will be the main source of our redux (context) */
export const useLayoutState = () => {
    const isHome = useRouteMatch({
        path: '/',
        exact: true,
    });
    const isHistory = useRouteMatch("/history");

    return {
        isHistory,
        isHome
    }
}