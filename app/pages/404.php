<?php
/**
 * @author Bilal Cinarli
 * @link http://bcinarli.com
 **/

html::$id = 'error-404';
html::$class = 'error-404';
html::$author = 'Bilal Cinarli';

?>
<?php tools::inc('includes/header'); ?>
    <section id="error-content" class="page-section">
        <article class="section-content content-holder">
            <h3 class="section-title">Yep! You broke it. :/</h3>

            <p><a href="<?php echo url::homepage(); ?>/">Click</a> to see the real page.</p>
        </article>
    </section>

        </div><!-- #main -->
    </div><!-- #wrapper -->
</body>
</html>
