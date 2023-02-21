import { html } from '../../lib/renderer';
import Spots from '../icons/spots';

const Did = () => {
  return html`
    <div id="did" class="section">
      <article class="section-content">
        <h2 class="section-title">${Spots()} What I Did?</h2>
        <p>
          I've coded top class web sites and intranet applications. Worked in more than 400 projects, spoke at more than
          20 conferences across Europe.
        </p>
      </article>
    </div>
  `;
};

export default Did;
