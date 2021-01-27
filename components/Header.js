import React from 'react';
import headerStyle from '../styles/Header.module.css'

function Header(props) {
    const x  = 1;
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>WebDev</span>
            </h1>
            <p className={headerStyle.description}>
                keep up to date with crash course 
            </p>

            <style jsx>
                {`
                    .title {
                        color: ${x > 3 ? 'red' : 'blue'};
                    }
                    `}
            </style>
        </div>
    );
}

export default Header;