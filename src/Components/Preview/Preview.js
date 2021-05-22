import React from 'react';
import marked from 'marked';

const Preview = ({text}) => {
  return (
    <div id="preview-section">
      <div className="section-title">
        <figure>
          <img src="https://res.cloudinary.com/luisbn/image/upload/v1604468913/markdown-parser/enable_xt3ue9.svg" />
          <figcaption>
            Editor
          </figcaption>
        </figure>
      </div>

      <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}>
      </div>
    </div >
  );
}

export default Preview;
