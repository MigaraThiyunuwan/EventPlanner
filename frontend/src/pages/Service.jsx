import React from 'react'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'

function Service() {
    return (
        <div>
            <NewNav />
            <header>
                <div className="overlay">
                    <h1>Our Services</h1>
                    <p>Bliss Hub.. ultimate online destination for seamless wedding planning!</p>
                    <br></br>
                    {/* <a href='signup'><button1>Sign Up Now</button1></a> */}
                </div>
            </header>

            <div className='hometitle'>
                Cherish Every Moment <br></br> with Our Expertise
            </div>

            <section class="articles">
                <article>
                    <div class="bg-secondary article-wrapper">
                        <figure>
                            <img src="https://picsum.photos/id/1011/800/450" alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>This is some title</h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                            
                        </div>
                    </div>
                </article>
                <article>

                    <div class="bg-secondary article-wrapper">
                        <figure>
                            <img src="https://picsum.photos/id/1005/800/450" alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>This is some title</h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                            
                        </div>
                    </div>
                </article>
                <article>

                    <div class="bg-secondary article-wrapper">
                        <figure>
                            <img src="https://picsum.photos/id/103/800/450" alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>This is some title</h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                            
                        </div>
                    </div>
                </article>
                <article>
                    <div class="bg-secondary article-wrapper">
                        <figure>
                            <img src="https://picsum.photos/id/103/800/450" alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>This is some title</h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                            
                        </div>
                    </div>
                </article>
            </section>
            <Footer />
        </div>
    )
}

export default Service
