import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import watermelon from '../assets/images/food/watermelon.jpeg'
import raspicecream from '../assets/images/food/raspberryicecream.jpeg'
import ramen from '../assets/images/food/ramen.jpeg'
import plums from '../assets/images/food/plums.jpeg'
import pizza from '../assets/images/food/pizza.jpeg'
import veggies from '../assets/images/food/pickledveggies.jpeg'
import parfait from '../assets/images/food/parfait.jpeg'
import oranges from '../assets/images/food/oranges.jpeg'
import icecream from '../assets/images/food/icecream.jpeg'
import hotdog from '../assets/images/food/hotdog.jpeg'
import frenchtoast from '../assets/images/food/frenchtoast.jpeg'
import corn from '../assets/images/food/corn.jpeg'
import tomatoes from '../assets/images/food/cherrytomatoes.jpeg'
import cupcake from '../assets/images/food/cherrycupcake.jpeg'
import blt from '../assets/images/food/blt.jpeg'
import beets from '../assets/images/food/beets.jpeg'
import foodbanner from '../assets/images/food/foodbanner.jpeg'

const FoodArt = (props) => (
    <Layout>
        <Helmet>
            <title>Food Art</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title={"Food Illustrations"} content={"I really like food"} background={foodbanner} />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <div className="wide-image">
                        <img src={watermelon} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Watermelon</h3>
                            </header>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={hotdog} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Hotdog</h3>
                            </header>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wide-image">
                        <img src={beets} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Beets</h3>
                            </header>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={cupcake} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Cupcake</h3>
                            </header>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wide-image">
                        <img src={icecream} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Blueberry Ice Cream</h3>
                            </header>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wide-image">
                        <img src={pizza} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Pizza</h3>
                            </header>
                        </div>
                    </div>
                </section><section>
                    <div className="wide-image">
                        <img src={blt} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>BLT</h3>
                            </header>
                        </div>
                    </div>
                </section><section>
                    <div className="wide-image">
                        <img src={raspicecream} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Raspberry Ice Cream</h3>
                            </header>
                        </div>
                    </div>
                </section><section>
                    <div className="wide-image">
                        <img src={corn} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Gilled Corn</h3>
                            </header>
                        </div>
                    </div>
                </section><section>
                    <div className="wide-image">
                        <img src={ramen} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Mushroom Ramen</h3>
                            </header>
                        </div>
                    </div>
                </section><section>
                    <div className="wide-image">
                        <img src={plums} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Plums</h3>
                            </header>
                        </div>
                    </div>
                </section><section>
                    <div className="wide-image">
                        <img src={frenchtoast} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>French Toast</h3>
                            </header>
                        </div>
                    </div>
                </section><section>
                    <div className="wide-image">
                        <img src={veggies} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Pickled Veggies</h3>
                            </header>
                        </div>
                    </div>
                </section><section>
                    <div className="wide-image">
                        <img src={oranges} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Oranges</h3>
                            </header>
                        </div>
                    </div>
                </section><section>
                    <div className="wide-image">
                        <img src={tomatoes} alt="" />
                    </div>
                    <div className="wide-content">
                        <div className="inner">
                            <header className="major">
                                <h3>Cherry Tomatoes</h3>
                            </header>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout >
)

export default FoodArt