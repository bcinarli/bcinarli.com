<?php
/**
 * @author Bilal Cinarli
 * @link http://bcinarli.com
 **/

html::$id = 'homepage';
html::$class = 'homepage';
html::$author = 'Bilal Cinarli';

?>
<?php tools::inc('includes/header'); ?>
    <section id="cover" class="cover page-cover">
        <div class="cover-content">
            <span class="cover-photo">
                <img src="<?php echo url::images('photo.jpg'); ?>" alt="Bilal Çınarlı" />
            </span>

            <h1 class="cover-title">Bilal Çınarlı</h1>
            <h2 class="cover-subtitle">Front-end Architect & Full Stack PHP Developer</h2>
            <nav class="social-personas">
                <a href="https://github.com/bcinarli" class="social-persona github" target="_blank">
                    <i class="icon-github"></i> <span class="for-screenreader-only">Github Profile</span>
                </a>
                <a href="https://twitter.com/bcinarli" class="social-persona twitter" target="_blank">
                    <i class="icon-twitter"></i> <span class="for-screenreader-only">Twitter Profile</span>
                </a>
                <a href="https://www.linkedin.com/in/bcinarli" class="social-persona linkedin" target="_blank">
                    <i class="icon-linkedin"></i> <span class="for-screenreader-only">Linkedin Profile</span>
                </a>
            </nav>
        </div>
    </section>

    <?php tools::inc('_what'); ?>

    <?php tools::inc('_how'); ?>

    <?php tools::inc('_did'); ?>

    <?php tools::inc('_say-hi'); ?>

<?php tools::inc('includes/footer');
