import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import peppers from '../assets/images/other/Peppers.jpeg'
import elowen from '../assets/images/other/Elowen.jpeg'
import owl from '../assets/images/other/Owl.jpeg'
import sunset from '../assets/images/other/Sunset.jpeg'
import thread from '../assets/images/thread.jpg'

const Other = (props) => (
    <Layout>
        <Helmet>
            <title>Other Works</title>
            <meta name="description" content="Acrylic" />
        </Helmet>

        <BannerLanding title="Other Works" content="Oil Paint, Embroidery" background={thread} />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <div className="wide-image">
                        <img src={peppers} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Peppers</h3>
                            </header>
                            <p>I painted this when in a painting class I took in college. We had to do an alla prima painting (wet on wet paint) so I set up a still life with some peppers to do it!</p>
                            <p>24 x 24 on wood board</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={elowen} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Birt present for Elowen</h3>
                            </header>
                            <p>I stitched this as a birth present for my neice. The french knots were brutal because of how thick the canvas was.</p>
                            <p>6 x 8 on stretched natural canvas</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wide-image">
                        <img src={owl} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Owl</h3>
                            </header>
                            <p></p>
                            <p>18 x 24 oil on canvas board</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={sunset} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sunset</h3>
                            </header>
                            <p></p>
                            <p>24 x 24 oil on canvas board</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Other