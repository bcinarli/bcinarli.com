import { html } from '../../lib/renderer';
import Hat from '../icons/hat';

const What = () => {
  return html`
    <div id="what" class="section">
      <article class="section-content">
        <h2 class="section-title">${Hat()} What I'm Doing?</h2>

        <p>
          I'm a big enthusiast of building <strong>maintainable</strong> and <strong>scalable</strong> frontends. To
          achieve this goal; I <strong>analyse</strong> the problems, <strong>observe</strong> the business changes,
          <strong>partner</strong> with product owners to <strong>define</strong> technology roadmaps and look for
          opportunities.
        </p>

        <p>
          I deal with <strong>architectural decisions</strong>, PoCs, enabling engineers to
          <strong>perform without blockers</strong>. Also, to improve <strong>developer experience</strong>, I deal with
          <strong>developer tooling</strong>, analyse the pain points and work to improve the local development
          environment, developer happiness and productivity.
        </p>

        <p>
          I help to <strong>grow</strong> my team both in technical and in their soft skills. I regularly
          <strong>mentor</strong> junior engineers and <strong>coach</strong> senior / staff engineers. Throughout my
          career, I <strong>hired</strong> engineers, <strong>built high-performing teams</strong>, and managed team
          harmony and growth.
        </p>

        <p>
          To deliver the goals better, depending on the needs and requirements, I built web <strong>frameworks</strong>, created <strong>design
          systems</strong>, designed <strong>frontend architectures</strong>, taught modern web development and gave workshops.
        </p>
      </article>
    </div>
  `;
};

export default What;
