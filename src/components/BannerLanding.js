import React from 'react'

const BannerLanding = (props) => {
    const { title, content, background } = props;

    const styles = {
        backgroundImage: 'url(' + background + ')'
    };

    return (
        <section id="banner" className="style2" style={styles}>
            <div className="inner">
                <header className="major">
                    <h1>{title}</h1>
                </header>
                <div className="content">
                    <p>{content}</p>
                </div>
            </div>
        </section>
    )
}

export default BannerLanding
