import video from './images/obi_wan.gif';
import './TypeGenius.css'

const TypeGenius = () => {
  return (
    <>
      <div className="type-genius__hero">
        <div className="row">
            <div className="column type-genius__hero-title">
                <h1>Unleash the power of AI-powered text completion in your browser.</h1>
                <p>An AI-powered Chrome extension that autocompletes your whole world. The peanut butter to your jelly.</p>
            </div>
            <div className="column">
            <div
              className="videoContainer"
              style={{
                backgroundImage: `url(${video})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '420px',
                height: '240px',
                float: 'right'
              }}
            >
              &nbsp;
            </div>

                {/* <div>
                  <button>Download from Chrome Web Store</button>
                </div> */}
            </div>
        </div>
      </div>
        <div className="type-genius__content">
        <section className="type-genius-features">
            <h2>Features</h2>
            <ul>
              <li>🚀 <strong>In-browser AI Autocomplete</strong>: Enhance your typing experience across multiple websites, including search engines, email providers, and social media platforms.</li>
              <li>🎯 <strong>Context-aware Suggestions</strong>: Receive tailored suggestions based on the context of your writing.</li>
              <li>💡 <strong>Instant Ideas</strong>: Need help brainstorming? Type Genius provides ideas for topics, blog posts, and more.</li>
              <li>🔒 <strong>Privacy-first</strong>: Your data stays on your device, ensuring your privacy and security.</li>
              <li>⚙️ <strong>Customizable</strong>: Adjust settings to match your preferences and usage style.</li>
            </ul>

        </section>
        </div>
    </>
  );
};

export default TypeGenius;
