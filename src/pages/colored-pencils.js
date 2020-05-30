import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import griffin from '../assets/images/colored_pencil/Griffin.jpeg'
import kraken from '../assets/images/colored_pencil/Kraken.jpeg'
import blueberries from '../assets/images/colored_pencil/Blueberries.jpeg'
import pencils from '../assets/images/colored-pencils.jpg'

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
                    <Link to="/generic" className="image">
                        <img src={griffin} alt="" />
                    </Link>
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
                    <Link to="/generic" className="wide-image">
                        <img src={kraken} alt="" />
                    </Link>
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
                    <Link to="/generic" className="image">
                        <img src={blueberries} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default ColoredPencils