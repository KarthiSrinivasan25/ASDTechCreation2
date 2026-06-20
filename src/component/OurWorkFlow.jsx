import './OurWorkFlow.css'

function OurWorkFlow(){
    return(
        <section className="process-ultra">
        <div className="container">
          <div className="section-header">
            <span className="section-badge"><i className="fas fa-chart-line me-1"></i> Our Workflow</span>
            <h2 className="section-title">Our Process</h2>
          </div>

          <div className="steps-ultra">

            <div className="step-ultra-item">
              <div className="step-ultra-circle">
                <span className="step-number-ultra">01</span>
                <span className="step-icon-ultra"><i className="fas fa-comments"></i></span>
              </div>
              <div className="step-title-ultra">Discover</div>
              <div className="step-desc-ultra">Requirements & goals</div>
              <div className="step-glow-dot"></div>
            </div>

            <div className="step-ultra-item">
              <div className="step-ultra-circle">
                <span className="step-number-ultra">02</span>
                <span className="step-icon-ultra"><i className="fas fa-pencil-ruler"></i></span>
              </div>
              <div className="step-title-ultra">Plan</div>
              <div className="step-desc-ultra">Strategy & wireframes</div>
              <div className="step-glow-dot"></div>
            </div>

            <div className="step-ultra-item">
              <div className="step-ultra-circle">
                <span className="step-number-ultra">03</span>
                <span className="step-icon-ultra"><i className="fas fa-paint-brush"></i></span>
              </div>
              <div className="step-title-ultra">Design</div>
              <div className="step-desc-ultra">UI/UX & visuals</div>
              <div className="step-glow-dot"></div>
            </div>

            <div className="step-ultra-item">
              <div className="step-ultra-circle">
                <span className="step-number-ultra">04</span>
                <span className="step-icon-ultra"><i className="fas fa-code"></i></span>
              </div>
              <div className="step-title-ultra">Develop</div>
              <div className="step-desc-ultra">Agile coding</div>
              <div className="step-glow-dot"></div>
            </div>

            <div className="step-ultra-item">
              <div className="step-ultra-circle">
                <span className="step-number-ultra">05</span>
                <span className="step-icon-ultra"><i className="fas fa-check-double"></i></span>
              </div>
              <div className="step-title-ultra">Test</div>
              <div className="step-desc-ultra">QA & optimization</div>
              <div className="step-glow-dot"></div>
            </div>

            <div className="step-ultra-item">
              <div className="step-ultra-circle">
                <span className="step-number-ultra">06</span>
                <span className="step-icon-ultra"><i className="fas fa-rocket"></i></span>
              </div>
              <div className="step-title-ultra">Launch</div>
              <div className="step-desc-ultra">Deployment</div>
              <div className="step-glow-dot"></div>
            </div>

            <div className="step-ultra-item">
              <div className="step-ultra-circle">
                <span className="step-number-ultra">07</span>
                <span className="step-icon-ultra"><i className="fas fa-headset"></i></span>
              </div>
              <div className="step-title-ultra">Support</div>
              <div className="step-desc-ultra">24/7 maintenance</div>
              <div className="step-glow-dot"></div>
            </div>
          </div>
        </div>
      </section>

    )
}

export default OurWorkFlow