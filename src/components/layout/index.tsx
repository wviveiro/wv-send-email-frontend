
export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );
}


interface LayoutProps {
    children: JSX.Element
}

