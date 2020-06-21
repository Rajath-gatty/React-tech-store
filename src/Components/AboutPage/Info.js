import React from 'react'
import Title from '../Title';
import aboutBcg from '../../Images/aboutBcg.jpeg';

const Info = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} alt="about page" className="img-fluid"
                            style={{ background: "var(--drakGrey" }} />
                    </div >
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="About us" center />
                        <p className="text-lead text-muted my-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta dolore odio labore minima in vero voluptatem corporis doloribus soluta? Amet?
        </p>
                        <p className="text-lead text-muted my-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta dolore odio labore minima in vero voluptatem corporis doloribus soluta? Amet?
        </p>
                        <button className="main-link"
                            type="button"
                            style={{ margin: "0 auto", marginTop: "2rem" }}>
                            more Info
                        </button>
                    </div>
                </div>
            </div>
        </section >

    );
}



export default Info;