import { html } from '../../lib/renderer';
import Wave from '../icons/wave';

const How = () => {
  return html`
    <div id="how" class="section">
      <article class="section-content">
        <h2 class="section-title">${Wave()} How I'm Doing?</h2>

        <p>
          I <strong>read</strong> a lot to keep my skills up to date. I love to <strong>learn</strong> new things and
          <strong>experiment</strong> with new approaches. I believe in <strong>fail fast</strong>,
          <strong>fail beautiful</strong>, <strong>tweak</strong> and <strong>restart</strong> approach.
        </p>

        <p>
          I provide <strong>guided</strong> flexibility and a <strong>safe</strong> environment to the teams I manage. I
          <strong>listen</strong> to the engineers and what they are keen on building. Then, I
          <strong>encourage</strong> them to create initiatives towards those and <strong>fine-tune</strong> them to
          overlap with company <strong>OKRs</strong>and targets.
        </p>

        <p>
          Even though I have vast expertise in <strong>frontend development</strong> and
          <strong>developer tooling</strong>, I have a good understanding and hands-on experience in
          <strong>backend</strong>, <strong>cloud</strong>, <strong>DevOps</strong> and <strong>databases</strong>.
        </p>

        <p>
          Those skills help me to understand the end-to-end flow and navigate through unknowns. That helped me find
          opportunities to <strong>improve</strong> application <strong>performance</strong>, developer
          <strong>experience</strong> and <strong>business</strong>. For example, while working at adidas in 2021, I
          contributed an <strong>80 million Euro uplift</strong> in online sales by seeing an opportunity to improve
          page speed after <strong>analysing the user/visit analytic</strong>s data and
          <strong>browser statistics</strong>.
        </p>

        <p>
          Since 2001, I have used different stacks in the frontend, from <strong>Prototype</strong> to
          <strong>MooTools</strong> to <strong>jQuery</strong>, <strong>Backbone</strong> to
          <strong>Angular</strong> and <strong>React</strong>, and <strong>TypeScript</strong> and
          <strong>Node</strong>. For styling, I used different approaches like <strong>utilities</strong> to
          <strong>BEM</strong> and <strong>OOCSS</strong>, pure CSS to preprocessors like <strong>Less</strong> and
          <strong>Sass</strong>, <strong>PostCSS</strong>, <strong>CSS-in-JS</strong>, and <strong>CSS Modules</strong>.
          On the tooling side, from ready-made tools to <strong>Browserify</strong>, <strong>Grunt</strong> and
          <strong>Gulp</strong> to <strong>Webpack</strong> and then <strong>esbuild</strong>, <strong>Vite</strong>.
          Not to mention testing with <strong>Mocha</strong>, <strong>Chai</strong>, <strong>Istanbul</strong>,
          <strong>Jest</strong>, and libraries like <strong>Enzyme</strong>, <strong>Testing Library</strong> and
          linting the code with <strong>jshint</strong>, <strong>eslint</strong>, <strong>stylelint</strong>,
          <strong>prettier</strong>... However, I do not have a strong preference for the tools. Whatever works best for
          the team is more important.
        </p>
      </article>
    </div>
  `;
};

export default How;
