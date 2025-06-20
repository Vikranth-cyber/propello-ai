import { FaComments, FaBrain, FaChartLine, FaSatelliteDish, FaRocket, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Definition = () => {
  const features = [
    { icon: <FaComments />, title: "Natural Voice AI", description: "Speaks in humanlike tones with emotion-aware responses." },
    { icon: <FaBrain />, title: "Neuro Dialogues", description: "Persuasive questioning for high-quality sales conversations." },
    { icon: <FaChartLine />, title: "Insights", description: "Track call outcomes, sentiment, and conversions live." },
    { icon: <FaSatelliteDish />, title: "Multi-Channel", description: "Voice, SMS, WhatsApp, Email — all integrated." },
    { icon: <FaRocket />, title: "Fast Setup", description: "Go live in days — no code needed." },
    { icon: <FaLock />, title: "Security", description: "End-to-end encryption with strict controls." },
  ];

  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="slide-wrapper" id="definition">
      <div className="slide-container">
        <AnimatePresence mode="wait">
          {!showAbout ? (
            <motion.div
              key="main"
              className="main-content"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="definition-content">
                <h2 className="definition-title">What is Propello AI?</h2>
                <div className="definition-bar"></div>

                <div className="definition-grid">
                  {features.map((f, i) => (
                    <div key={i} className="feature-card">
                      <div className="feature-icon">{f.icon}</div>
                      <div className="feature-title">{f.title}</div>
                      <p className="feature-desc">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-btn-container">
                <button onClick={() => setShowAbout(true)} className="about-btn">
                  About Us <FaComments />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="about"
              className="about-panel"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="about-slide-content">
                <button onClick={() => setShowAbout(false)} className="back-btn">
                  &larr; Back
                </button>
                <h2>Empowering Businesses with Smart Voice Automation</h2>
                <div className="about-slide-text">
                  <p>
                    At Propello AI, we're redefining how businesses connect with customers through powerful, 
                    AI-driven voice automation. Our intelligent voice bots handle customer queries, 
                    appointment bookings, and order tracking — seamlessly and naturally.
                  </p>
                  <p>
                    Whether you're a real estate builder, bank or a local clinic, Propello AI gives you 
                    an always-on voice assistant that speaks your customer's language — literally. 
                    With robust integration capabilities and fast onboarding, we make intelligent automation 
                    accessible to every business.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

     <style>{`
  .slide-wrapper {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    min-height: 100vh;
    color: #e0e0e0;
    font-family: var(--font-body);
    position: relative;
  }

  .slide-container {
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .main-content,
  .about-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    padding: 1rem 0.5rem 2rem 0.5rem;
    box-sizing: border-box;
  }

  .definition-content {
    max-width: 1000px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }

  .definition-title {
    font-size: 2.2rem;
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 0;
  }

  .definition-bar {
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
    margin: 1rem auto 1.2rem;
    border-radius: 2px;
  }

  .definition-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0 0.5rem;
  }

  .feature-card {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    min-height: 180px;
    box-shadow: 0 0 6px rgba(255,255,255,0.1);
    transition: 0.3s ease;
    overflow: hidden;
  }

  .feature-card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px #5D9EFF;
  }

  .feature-icon {
    font-size: 1.6rem;
    color: #A3E4D7;
  }

  .feature-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0.5rem 0;
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .feature-desc {
    font-size: 0.9rem;
    color: #cfd8e3;
    overflow: hidden;
    text-overflow: ellipsis;
  }

 .about-btn-container {
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 9;
}

  .about-btn {
    padding: 0.7rem 1.4rem;
    font-size: 1rem;
    font-weight: bold;
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
    color: black;
    border-radius: 25px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 0 6px #5D9EFF;
    border: none;
    cursor: pointer;
  }

  .about-panel {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .about-slide-content {
    max-width: 900px;
    margin: auto;
    padding: 2rem 1rem;
  }

  .about-slide-content h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    background: linear-gradient(90deg, #5D9EFF, #A3E4D7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .about-slide-text {
    font-size: 1.3rem;
    line-height: 2;
  }

  .about-slide-text p {
    margin-bottom: 1.5rem;
  }

  .back-btn {
    background: none;
    border: none;
    color: #A3E4D7;
    font-size: 1.2rem;
    cursor: pointer;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .definition-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 600px) {
    .definition-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .main-content {
      padding: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    .about-btn {
      font-size: 0.85rem;
      padding: 0.5rem 1rem;
    }

    .feature-icon {
      font-size: 1.3rem;
    }

    .feature-title {
      font-size: 0.9rem;
    }

    .feature-desc {
      font-size: 0.75rem;
    }

    .definition-title {
      font-size: 1.5rem;
    }

    .about-slide-content h2 {
      font-size: 1.6rem;
    }

    .about-slide-text {
      font-size: 1rem;
    }
  }
`}</style>

    </section>
  );
};

export default Definition;
