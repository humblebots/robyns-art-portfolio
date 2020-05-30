import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import paintBrushes from '../assets/images/paint-brushes.jpg'
import pencils from '../assets/images/colored-pencils.jpg'
import palettes from '../assets/images/paint-palette.jpg'
import thread from '../assets/images/thread.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import img from '../assets/images/thread.jpg'

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
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${thread})` }}>
                            <header className="major">
                                <h3>Other</h3>
                                <p>Oil paint, embroidery</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
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
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex