import './Hero.css'

function Hero(props){
    return(
        <section className="contact-hero">
                <div className="container">
                    <h1>
                        {props.HeroTitlePrefix} <br />
                        <span
                            style={{
                                background: "linear-gradient(135deg, #4361ee, #4cc9f0)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {props.HeroTitleSuffix}
                        </span>
                    </h1>
                <p>{props.HeroDescription}</p>
                </div>
            </section>
    )
}

export default Hero