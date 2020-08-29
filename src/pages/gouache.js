import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import coffeePlant from '../assets/images/gouache/CoffeePlant.jpeg'
import powerLines from '../assets/images/gouache/Powerlines.jpeg'
import thunderstorm from '../assets/images/gouache/Thunderstorm.jpeg'
import brushes from '../assets/images/paint-brushes.jpg'

const Gouache = (props) => (
    <Layout>
        <Helmet>
            <title>Gouache</title>
            <meta name="description" content="Gouache" />
        </Helmet>

        <BannerLanding title="Gouache" content="Holbein Acryla" background={brushes} />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={coffeePlant} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Coffee Plant</h3>
                            </header>
                            <p>I painted this right after a trip I went on to Portland, Oregon. There were so many fantastic coffee shops there!</p>
                            <p>11 x 14 on cold pressed watercolor paper</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wide-image">
                        <img src={powerLines} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Power Lines</h3>
                            </header>
                            <p>This was done while reminiscing about rainy summer afternoons.</p>
                            <p>11 x 14 on cold pressed watercolor paper</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={thunderstorm} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Thunderstorm</h3>
                            </header>
                            <p>This was a super fun and quick painting I did to get back into it! I love the summer thunderstorms that we get down in Florida.</p>
                            <p>11 x 14 on cold pressed watercolor paper</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Gouache