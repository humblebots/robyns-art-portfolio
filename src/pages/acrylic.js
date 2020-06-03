import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import koiPond from '../assets/images/acrylic/KoiPond.jpeg'
import pluto from '../assets/images/acrylic/Pluto.jpeg'
import sunsetClouds from '../assets/images/acrylic/SunsetClouds.jpeg'
import palette from '../assets/images/paint-palette.jpg'

const Acrylic = (props) => (
    <Layout>
        <Helmet>
            <title>Acrylic</title>
            <meta name="description" content="Acrylic" />
        </Helmet>

        <BannerLanding title="Acrylic" content="" background={palette} />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <div className="wide-image">
                        <img src={koiPond} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Koi Pond</h3>
                            </header>
                            <p>This is one of my largest works I've ever done! </p>
                            <p>24 x 36 on stretched canvas</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pluto} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Pluto</h3>
                            </header>
                            <p>The newest pictures of Pluto are quite mesmerizing; I bumped up the colors in my painting of it.</p>
                            <p>11 x 14 on wood board</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={sunsetClouds} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sunset Clouds</h3>
                            </header>
                            <p></p>
                            <p>11 x 14 on wood board</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Acrylic