<?php
/**
 * @author Bilal Cinarli
 * @link http://bcinarli.com
 **/
?>
<!DOCTYPE html>
<html xmlns:fb="http://ogp.me/ns/fb#">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<?php html::load_meta(); ?>
    <meta name="author" content="<?php echo html::$author; ?>" />

	<link rel="stylesheet" href="<?php echo url::styles('styles.min.css'); ?>">
    <link rel="shortcut icon" href="<?php echo url::images('favicon.png'); ?>" type="image/x-icon" />

    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="http://bcinarli.com/">
    <meta name="twitter:title" content="<?php echo SITE_TITLE; ?>">
    <meta name="twitter:description" content="What I'm Doing? I'm a big enthusiast of building maintainable and scalable front-ends. To achieve this goal, I build frameworks mostly power with Sass, PHP and ...">
    <meta name="twitter:image" content="<?php echo url::make_abs_url('app/assets/images/'); ?>photo.jpg">
    <meta name="twitter:site" content="@bcinarli">
    <meta name="twitter:creator" content="@bcinarli">

    <meta property="fb:app_id" content="298952123566093" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php echo SITE_TITLE; ?>" />
    <meta property="og:url" content="http://bcinarli.com/" />
    <meta property="og:site_name" content="Bilal Cinarli" />
    <meta property="og:image" content="<?php echo url::make_abs_url('app/assets/images/'); ?>photo.jpg" />
</head>
<body<?php echo html::$id != '' ? ' id="' . html::$id . '"' : ''; ?><?php echo html::$class != '' ? ' class="' . html::$class . '"' : ''; ?>>
    <?php tools::inc('includes/analytics'); ?>
    <div id="wrapper" class="page-wrap">
		<header id="masthead" class="page-header">
            <div class="content-holder">
                <h1 class="page-title">
                    <a href="<?php echo url::homepage(); ?>/#cover" class="logo">
                        <span class="logo-image"></span>
                        <span class="logo-name">Bilal Çınarlı</span>
                    </a>
                </h1>

                <nav class="page-nav">
                    <?php navigation::getNav('main_nav', 'output=&wrap='); ?>
                </nav>
            </div>
		</header>
		<div id="content" class="page-content">