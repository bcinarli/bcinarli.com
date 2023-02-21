import { applyStyles, html } from '../../lib/renderer';

import styles from './did.module.scss';

import Spots from '../icons/spots';

const css = applyStyles(styles);

const Did = () => {
  return html`
    <div id="did" class="section" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
      <article class="section-content">
        <h2 class="section-title">${Spots()} What I Did?</h2>
        <p>
          I've coded top class websites and intranet applications. Worked in more than 400 projects, spoke at more than
          20 conferences across Europe. Here are some selection of those;
        </p>

        <p>
          I created a
          <a href="https://github.com/bcinarli/bcinarli.com/tree/main/src/lib/renderer" target="_blank"
            >simple rendering engine</a
          >
          for this page, it is about 100 lines of code and helps me to create components, update DOM and write HTML
          inside JavaScript.
        </p>

        <p>
          With my team, I designed the <strong>frontend architecture</strong> in adidas. An approach called
          "<strong>micro-applications</strong>" to unblock teams and allowing them to
          <strong>deploy independently</strong> under same domain along with an accompanied meta framework to improve
          developer experience and application's overall performance.
        </p>

        <p>
          I was lucky to explain the <strong>Micro Application</strong> approach in different conferences. You can check
          the slides from <strong>WeAreDevelopers</strong> conference from 2022 and
          <strong>International JS Conference </strong> from 2021.
        </p>

        <ol class="${css('conference-list')}">
          <li>
            <a
              href="https://speakerdeck.com/bcinarli/independently-together-better-developer-experience-and-app-performance"
              target="_blank"
            >
              <span>Micro Applications @WeAreDevelopers</span>
              <span><img src="/images/micro-applications.webp" width="300" /></span>
            </a>
          </li>
          <li>
            <a href="https://speakerdeck.com/bcinarli/micro-applications-divide-and-conquer" target="_blank">
              <span>Micro Applications @International JS Conference</span>
              <span><img src="/images/micro-applications-02.webp" width="300" /></span>
            </a>
          </li>
        </ol>

        <p>
          With my team, in Turkcell, I created a <strong>design system</strong> library called
          <strong>UXRocket</strong> and Sass/CSS tooling for it called <strong>Caffeine</strong> and
          <strong>Melange</strong> and a templating library called <strong>Breve</strong>. Turkcell still uses this
          design system and tooling around it in it's CRM application that serves more them 40 million customer.
        </p>

        <p>
          During my agency years, I created a PHP/MySQL based Content Management System that supports templating and
          taxonomy and extensions. Also, for customers, we built a e-mail marketing software to sent newsletters.
        </p>
      </article>
    </div>
  `;
};

export default Did;
