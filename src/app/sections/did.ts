import { html } from "../../lib/renderer";

const Did = () => {
  return html`
    <div id="did" class="section">
      <article class="section-content">
        <h2 class="section-title"><i class="icon-tie"></i> What I Did?</h2>
        <p>
          I've coded top class web sites and intranet applications. Worked in
          more than 400 projects, here are some of the samples...
        </p>

        <ol class="work-samples group">
          <li class="work-sample">
            <a href="https://github.com/bcinarli/caffeine" target="_blank">
              <span class="work-sample-preview">
                <i class="logo-caffeine">C</i>
              </span>

              <h3 class="work-sample-title">Caffeine</h3>
              <p class="work-sample-description">
                Sass Mixin and Functions Library
              </p>
            </a>
          </li>

          <li class="work-sample">
            <a href="https://github.com/bcinarli/melange" target="_blank">
              <span class="work-sample-preview">
                <i class="logo-melange">M</i>
              </span>

              <h3 class="work-sample-title">Melange</h3>
              <p class="work-sample-description">
                A maintainable CSS architecture approach
              </p>
            </a>
          </li>

          <li class="work-sample">
            <a href="https://github.com/uxrocket" target="_blank">
              <span class="work-sample-preview">
                <img
                  src="<?php echo url::base_url('content/2015/uxrocket.png'); ?>"
                  alt="UX Rocket Interactions Library"
                  width="200"
                  height="200"
                  class="work-image"
                />
              </span>

              <h3 class="work-sample-title">UX Rocket</h3>
              <p class="work-sample-description">
                A set of jQuery plugins and JavaScript methods for interactive
                sites
              </p>
            </a>
          </li>

          <li class="work-sample">
            <a href="http://gelecegiyazanlar.turkcell.com.tr" target="_blank">
              <span class="work-sample-preview">
                <img
                  src="<?php echo url::base_url('content/2015/gelecegi-yazanlar.jpg'); ?>"
                  alt="Turkcell Geleceği Yazanlar"
                  width="200"
                  height="200"
                  class="work-image"
                />
              </span>

              <h3 class="work-sample-title">Geleceği Yazanlar</h3>
              <p class="work-sample-description">
                Mobile development and education community support by Turkcell
              </p>
            </a>
          </li>

          <li class="work-sample">
            <a href="http://www.tai.com.tr" target="_blank">
              <span class="work-sample-preview">
                <img
                  src="<?php echo url::base_url('content/2015/tai.jpg'); ?>"
                  alt="TAI"
                  width="200"
                  height="200"
                  class="work-image"
                />
              </span>

              <h3 class="work-sample-title">TAI</h3>
              <p class="work-sample-description">
                Corporate website and content management system for Turkish
                Aerospace Industry
              </p>
            </a>
          </li>

          <li class="work-sample">
            <a href="http://www.ufukbahardorduncu.com" target="_blank">
              <span class="work-sample-preview">
                <img
                  src="<?php echo url::base_url('content/2015/ufuk-bahar-dorduncu.jpg'); ?>"
                  alt="Ufuk & Bahar Dördüncü"
                  width="200"
                  height="200"
                  class="work-image"
                />
              </span>

              <h3 class="work-sample-title">Ufuk & Bahar Dördüncü</h3>
              <p class="work-sample-description">
                Official website for Piano Duo Ufuk & Bahar Dördüncü
              </p>
            </a>
          </li>

          <li class="work-sample">
            <a href="http://www.mesakartall.com" target="_blank">
              <span class="work-sample-preview">
                <img
                  src="<?php echo url::base_url('content/2015/mesa-kartall.jpg'); ?>"
                  alt="Mesa Kartall"
                  width="200"
                  height="200"
                  class="work-image"
                />
              </span>

              <h3 class="work-sample-title">Mesa Kartall</h3>
              <p class="work-sample-description">
                Responsive website and content management system for Mesa Kartal
                Residence
              </p>
            </a>
          </li>

          <li class="work-sample">
            <a href="http://www.alcopole.com" target="_blank">
              <span class="work-sample-preview">
                <img
                  src="<?php echo url::base_url('content/2015/alcopole.jpg'); ?>"
                  alt="Alcopole"
                  width="200"
                  height="200"
                  class="work-image"
                />
              </span>

              <h3 class="work-sample-title">Alcopole</h3>
              <p class="work-sample-description">
                Content management system and JavaScript based animations for
                Alcopole Lightning Poles
              </p>
            </a>
          </li>

          <li class="work-sample">
            <a href="http://www.lokmanhekim.com.tr" target="_blank">
              <span class="work-sample-preview">
                <img
                  src="<?php echo url::base_url('content/2015/lokman-hekim-hastanesi.jpg'); ?>"
                  alt="Lokman Hekim Hastanesi"
                  width="200"
                  height="200"
                  class="work-image"
                />
              </span>

              <h3 class="work-sample-title">Lokman Hekim Hastanesi</h3>
              <p class="work-sample-description">
                Website and content management system for Lokman Hekim Hospital
              </p>
            </a>
          </li>

          <li class="work-sample">
            <span class="work-sample-preview">
              <i class="logo-caffeine">P</i>
            </span>

            <h3 class="work-sample-title">Enterprise Video Portal</h3>
            <p class="work-sample-description">
              Backbone and Sharepoint based video and broadcasting portal for
              Turkcell
            </p>
          </li>

          <li class="work-sample">
            <span class="work-sample-preview">
              <i class="logo-caffeine">I</i>
            </span>

            <h3 class="work-sample-title">Inventory App</h3>
            <p class="work-sample-description">
              Backbone based tablet web app for searching and comparing smart
              phones and tablets
            </p>
          </li>
        </ol>

        <p>
          For very extended versions of my works, you can visit my previous
          agencies web sites.
          <a href="http://www.iconpm.com" target="_blank">ICON</a>,
          <a href="http://nine10.ca" target="_blank">Nine10</a>
        </p>
      </article>
    </div>
  `;
};

export default Did;
