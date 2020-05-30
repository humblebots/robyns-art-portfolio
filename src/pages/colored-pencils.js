import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import griffin from '../assets/images/colored_pencil/Griffin.jpeg'
import kraken from '../assets/images/colored_pencil/Kraken.jpeg'
import blueberries from '../assets/images/colored_pencil/Blueberries.jpeg'
import pencils from '../assets/images/colored-pencils.jpg'
import egg from '../assets/images/colored_pencil/FriedEgg.jpeg'

const ColoredPencils = (props) => (
    <Layout>
        <Helmet>
            <title>Colored Pencils</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title={"Colored Pencils"} content={"Caran d'ache Luminance"} background={pencils} />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={griffin} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Griffin</h3>
                            </header>
                            <p>I wanted to try something a bit out of my comfort zone here! This is a portrait of one of my cats, Griffin.</p>
                            <p>9 x 12 on toned paper</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wide-image">
                        <img src={kraken} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Kraken</h3>
                            </header>
                            <p>I was inspired to do this after seeing an artisan key cap! The colors were really fun to play with on this one.</p>
                            <p>9 x 12 on toned paper</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={blueberries} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Blueberries</h3>
                            </header>
                            <p>This is one of the first drawings I did with Caran d'Ache Luminance pencils. I really enjoyed picking the many colors in the blueberries and layering them.</p>
                            <p>9 x 12 on toned paper</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wide-image">
                        <img src={egg} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Fried Egg</h3>
                            </header>
                            <p>I love food and drawing it too! I wanted to see if I could capture the different shades of white an egg has, and the tan toned paper was a fun way to do it!</p>
                            <p>9 x 12 on toned paper</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout >
)

export default ColoredPencils