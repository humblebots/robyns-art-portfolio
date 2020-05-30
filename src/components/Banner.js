import React from 'react'

const Banner = (props) => {
    // const { backgroundImage } = props;
    const backgroundImage = props.background;

    const styles = {
        backgroundImage: 'url(' + backgroundImage + ')'
    };

    return (
        <section id="banner" className="major">
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
