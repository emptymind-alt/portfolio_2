import React from 'react';
import {Fade} from 'react-reveal';
import Wobble from 'react-reveal/Wobble';
import Spin from 'react-reveal/Spin';

const Quote = () => {
    return (
        <div className="quote-div">
            <div className="head mx-5">
                <div className="main-div">
                <Spin>
                    <section className="div-1 quote">
                        <p className="my-3">“ We May Encounter Many Defeats But We Must Not Be Defeated. ”</p>
                        <span>- <em>Maya Angelou</em></span>
                    </section>
                </Spin>
                </div>
            </div>
        </div>
    )
}

export default Quote;
