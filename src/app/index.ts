import { applyStyles, html } from "../lib/renderer";

import styles from "./index.module.scss";

import Cover from "./sections/cover";
import What from "./sections/what";
import How from "./sections/how";
import Did from "./sections/did";

const css = applyStyles(styles);

export const App = (): string => {
  return html`
    <div id="${css("wrapper")}" class="${css("page-wrap")}">
      ${Cover()} ${What()} ${How()} ${Did()}
    </div>
    <footer class="page-footer">
      <div class="footer-content">
        <p>
          © ${new Date().getFullYear()} - Bilal Cinarli. Built with Love. Cover
          image by
          <a href="http://sertouch.com" target="_blank">Sertaç Piskin</a>.
        </p>
      </div>
    </footer>
  `;
};

export default App;
