import classNames from "classnames";
import Alert from "components/alert";
import React from "react";
import type { LayoutProps } from "./interface";
import { useLayoutState } from "./state";
import { HeaderLink, LayoutContainer } from "./style";



export const Layout = ({children}: LayoutProps): JSX.Element => {

    const { 
        isHome,
        isHistory
     } = useLayoutState();

    return (
        <LayoutContainer>
            <header>
                <HeaderLink to="/" className={classNames({active: isHome})}>
                    <i className="far fa-envelope" />
                    Send Email
                </HeaderLink>
                <HeaderLink to="/history" className={classNames({active: isHistory})}>
                    <i className="fas fa-history" />
                    History
                </HeaderLink>
            </header>
            {children}
            <Alert />
        </LayoutContainer>
    );
}



