import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import paintBrushes from '../assets/images/paint-brushes.jpg'
import pencils from '../assets/images/colored-pencils.jpg'
import palettes from '../assets/images/paint-palette.jpg'
import thread from '../assets/images/thread.jpg'
import img from '../assets/images/gouache/Thunderstorm.jpeg'
import me from '../assets/images/MyPortrait.jpeg'
import foodbanner from '../assets/images/foodbanner.jpg'
import Gouache from './gouache';

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Robyn's Illustrations"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner background={img} />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${foodbanner})` }}>
                            <header className="major">
                                <h3>Food Illustrations</h3>
                                <p>Colored Pencil and Gouache</p>
                            </header>
                            <Link to="/food" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${paintBrushes})` }}>
                            <header className="major">
                                <h3>Gouache</h3>
                                <p>Holbein Acryla</p>
                            </header>
                            <Link to="/gouache" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pencils})` }}>
                            <header className="major">
                                <h3>Colored Pencil</h3>
                                <p>Caran d'Ache Luminance / Primsacolors</p>
                            </header>
                            <Link to="/colored-pencils" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${palettes})` }}>
                            <header className="major">
                                <h3>Acrylic</h3>
                                <p>Various brands</p>
                            </header>
                            <Link to="/acrylic" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${thread})` }}>
                            <header className="major">
                                <h3>Other</h3>
                                <p>Oil paint, embroidery</p>
                            </header>
                            <Link to="/other-works" className="link primary"></Link>
                        </article>
                        {/* <article style={{ backgroundImage: `url(${pic05})` }}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic06})` }}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>
                    <section id="two" className="spotlights">
                        <section>
                            <div className="image">
                                <img src={me} alt="" />
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>About Me</h3>
                                    </header>
                                    <p>Although I am a Software Engineer by trade, I have always had a passion for art. I've tried many different mediums, but my favorites have been colored pencils and gouache.</p>
                                    <p>Open for commissions!</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex