import { FaChrome } from 'react-icons/fa';
import video from './images/demo.gif';
import Subscribe from './Subscribe';
import './TypeGenius.scss'

const TypeGenius = () => {
  return (
    <>
      <div className="type-genius__hero">
        <div className="row">
            <div className="column type-genius__hero-title">
                <h1>Unleash the power of AI driven auto complete</h1>
                <p className='fakeTextarea'>TextGenius is the Chrome extension that autocompletes your whole world. The peanut| <span className='completion'> butter to your jelly</span></p>
                <a href="https://chrome.google.com/webstore/detail/type-genius/ejokcdmbiifiagicppiakpneifaofghh" 
                target='_blank'
                rel="noreferrer"
                className="download bg-purple-900 border-none hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  <FaChrome /> Download for Chrome
                </a>
            </div>
            <div className="column hide-medium-down">
            <div
              className="videoContainer"
              style={{
                backgroundImage: `url(${video})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '615px',
                height: '375px',
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
            <h1 className='dark-color'>Features</h1>
            <div className="row">
              <div className="column small-12 medium-4">
                <h1>🚀</h1>
                <h2>In-browser AI Autocomplete</h2>
                <p>Enhance your typing experience across multiple websites, including search engines, email providers, and social media platforms.</p>
              </div>
              <div className="column small-12 medium-4">
                <h1>🎯</h1>
                <h2>Context-aware Suggestions</h2>
                <p>Receive tailored suggestions based on the context of your writing.</p>
              </div>
              <div className="column small-12 medium-4">
                <h1>💡</h1>
                <h2>Instant Ideas</h2>
                <p>Need help brainstorming? Type Genius provides ideas for topics, blog posts, and more.</p>
              </div>
            </div>
            <div className="row">
              <div className="column small-12 medium-6 column-medium-offset-20">
                <h1>🔒</h1>
                <h2>Privacy-first</h2>
                <p>Your data stays on your device, ensuring your privacy and security.</p>
              </div>
              <div className="column small-12 medium-6">
                <h1>⚙️</h1>
                <h2>Customizable</h2>
                <p>Adjust settings to match your preferences and usage style.</p>
              </div>
            </div>
        </section>
        </div>
        <div className="row type-genius__footer">
          <div className="column">
          <h1>Subscribe for updates</h1>
          <p>We won't send any emails other than our release materials.</p>
            <Subscribe />
          </div>
        </div>
    </>
  );
};

export default TypeGenius;
