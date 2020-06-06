import React from 'react'

const Banner = (props) => {
    const { background } = props;

    const styles = {
        backgroundImage: 'url(' + background + ')'
    };

    return (
        <section id="banner" className="major" style={styles}>
            <div className="inner">
                <header className="major">
                    <h1>Hi, my name is Robyn</h1>
                </header>
                <div className="content">
                    <p>This is a collection of my illustrations</p>
                </div>
            </div>
        </section>
    )
}


export default Banner
