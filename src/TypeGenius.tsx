import video from './images/obi_wan.gif';
import './TypeGenius.css'

const TypeGenius = () => {
  return (
    <>
      <div className="type-genius__hero">
        <div className="row">
            <div className="column column-66 type-genius__hero-title">
                <h1>Unleash the power of AI-driven text completion</h1>
                <p className='fakeTextarea'>TextGenius is the Chrome extension that autocompletes your whole world. The peanut| <span className='completion'> butter to your jelly</span></p>
            </div>
            <div className="column column-40">
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
        <div className="row type-genius__footer">
          <div className="column">
          <h2>"I like generating content!" - said no one ever</h2>
            <p>TypeGenius is an AI tool that helps you write those big posts and descriptions you love so much.</p>
            <p>Type Genius is powered by GPT, a state-of-the-art natural language processing AI developed by OpenAI. This groundbreaking Chrome extension elevates your browsing experience by autocompleting your entire world. Now, you can enjoy fast, intelligent, and context-aware autocomplete suggestions for your searches, emails, social media posts, and more!</p>
          </div>
        </div>
    </>
  );
};

export default TypeGenius;
