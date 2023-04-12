import video from './images/demo.gif';
import Subscribe from './Subscribe';
import './Test.scss'

const Test = () => {
  return (
    <>
      <div className="container">
        <img src="static/images/logo.png" alt="" width="200px" />
        <form>
                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="search">Search</label>
                        <textarea className="custom-textarea" name="search" id="search"></textarea>
                    </div>
                </div>

                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="query">Query</label>
                        <textarea className="custom-textarea" name="query" id="query"></textarea>
                    </div>
                </div>

                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="story">Story</label>
                        <textarea className="custom-textarea" name="story" id="story"></textarea>
                    </div>
                </div>

                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="movie-quotes">Movie Quotes</label>
                        <textarea className="custom-textarea" name="movie-quotes"
                            id="movie-quotes"></textarea>
                    </div>
                </div>


                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="music-lyrics">Music Lyrics</label>
                        <textarea className="custom-textarea" name="music-lyrics"
                            id="music-lyrics"></textarea>
                    </div>
                </div>

                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="haiku">Haiku</label>
                        <textarea className="custom-textarea" name="haiku" id="haiku"></textarea>
                    </div>
                </div>

                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="reply">Reply</label>
                        <textarea className="custom-textarea" name="reply" id="reply"></textarea>
                    </div>
                </div>

                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="review">Review</label>
                        <textarea className="custom-textarea" name="review" id="review"></textarea>
                    </div>
                </div>

                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="spam">Spam</label>
                        <textarea className="custom-textarea" name="spam" id="spam"></textarea>
                    </div>
                </div>

                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label htmlFor="notes">Notes</label>
                        <textarea className="custom-textarea" name="notes" id="notes"></textarea>
                    </div>
                </div>

                <label htmlFor="email">Email (blacklist field)</label>
                <input type="email" name="email" id="email" placeholder="Email" />

                <div className="autocomplete-container">
                    <div className="suggestion-container">
                        <label>Empty</label>
                        <textarea className="custom-textarea long-textarea"></textarea>
                    </div>
                </div>

                <input className="button-primary" type="submit" value="Submit" />

        </form>
    </div>
    </>
  );
};

export default Test;
