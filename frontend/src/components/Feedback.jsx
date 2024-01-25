import React from 'react'

function Feedback(props) {
    return (
        <div className='feedbackContainer'>
            <figure class="snip1533">
                <figcaption>
                    <blockquote>
                        <p>{props.msg}</p>
                    </blockquote>
                    <h3>{props.username}</h3>
                    <h4>Google Inc.</h4>
                </figcaption>
            </figure>
        </div>
    )
}

export default Feedback
