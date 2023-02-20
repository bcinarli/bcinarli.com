import { html } from '../../lib/renderer';
import Spots from '../icons/spots';

const Did = () => {
  return html`
    <div id="did" class="section">
      <article class="section-content">
        <h2 class="section-title">${Spots()} What I Did?</h2>
        <p>
          I've coded top class web sites and intranet applications. Worked in more than 400 projects, here are some of
          the samples...
        </p>
      </article>
    </div>
  `;
};

export default Did;
