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
    <?php tools::inc('_cover'); ?>

    <?php tools::inc('_what'); ?>

    <?php tools::inc('_how'); ?>

    <?php tools::inc('_did'); ?>

    <?php tools::inc('_say-hi'); ?>

<?php tools::inc('includes/footer');
