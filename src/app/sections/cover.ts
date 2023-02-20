import { applyStyles, html } from "../../lib/renderer";
import styles from "./cover.module.scss";

const css = applyStyles(styles);

const Cover = () => {
  return html`
    <div id="cover" class="${css("page-cover")}">
      <section class="${css("cover-content")}">
        <div class="${css("cover-photo")}">
          <img
            src="/images/photo.jpg"
            width="200"
            height="200"
            alt="Bilal Çınarlı"
          />
        </div>

        <div class="${css("cover-text-section")}">
          <h2 class="${css("cover-title")}">Bilal Çınarlı</h2>
          <h3 class="${css("cover-subtitle")}">
            Engineering Manager / Frontend Architect
          </h3>

          <nav class="social-personas">
            <a
              href="https://github.com/bcinarli"
              class="social-persona github"
              target="_blank"
            >
              <i class="icon-github"></i>
              <span class="for-screenreader-only">Github Profile</span>
            </a>
            <a
              href="https://twitter.com/bcinarli"
              class="social-persona twitter"
              target="_blank"
            >
              <i class="icon-twitter"></i>
              <span class="for-screenreader-only">Twitter Profile</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bcinarli"
              class="social-persona linkedin"
              target="_blank"
            >
              <i class="icon-linkedin"></i>
              <span class="for-screenreader-only">Linkedin Profile</span>
            </a>
          </nav>
        </div>
      </section>
    </div>
  `;
};

export default Cover;
