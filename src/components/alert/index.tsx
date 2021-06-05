import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';


const AlertContainer = styled.div`
    position: fixed;
    bottom: -100px;
    display: flex;
    justify-content: center;

    width: 100%;

    transition: bottom .5s ease-in-out;
    

    & > div {
        padding: 20px;
        
        border-radius: 5px;
        width: 80%;
        text-align: center;

        background-color: rgba(235, 213, 52, 0.5);
        border: solid 2px rgba(235, 213, 52, 1);
    }
    

    &.danger > div {
        background-color: rgba(235, 55, 52, 0.5);
        border: solid 2px rgba(235, 55, 52, 1);
    }

    &.success  > div {
        background-color: rgba(52, 235, 98, 0.5);
        border: solid 2px rgba(52, 235, 98, 1);
    }

`;

let alert_float = (type: string, message: string):void => {}

/** Function displays an alert at the bottom of the page whenever called */
const Alert = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Clone object to show in the page
        alert_float = (type: string, message: string):void => {
            if (ref.current) {
                const clone = ref.current.cloneNode(true) as HTMLElement;
                clone.classList.add(type);
                
                // Create content inside clone
                const div = document.createElement('div');

                div.innerText = message;

                clone.appendChild(div);

                document.body.appendChild(clone);

                
                setTimeout(() => {
                    clone.style.bottom = '15px';

                    let exists = true;
                    
                    const removeObject = () => {
                        if (!exists) return;
                        exists = false;
                        clone.style.bottom = '-100px';
                        setTimeout(() => {
                            document.body.removeChild(clone);
                        }, 500);
                    }

                    clone.onclick = removeObject;

                    setTimeout(() => {
                        removeObject();
                    }, 5000);

                }, 10);
            }
        }
    }, []);


    return (
        <AlertContainer ref={ref} />
    );
};

export default Alert;

export {alert_float}