<?php
/**
 * @author Bilal Cinarli
 * @link http://bcinarli.com
 **/
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<?php html::load_meta(); ?>
    <meta name="author" content="<?php echo html::$author; ?>" />

	<link rel="stylesheet" href="<?php echo url::styles('styles.css'); ?>">
    <link rel="shortcut icon" href="<?php echo url::images('favicon.png'); ?>" type="image/x-icon" />
</head>
<body<?php echo html::$id != '' ? ' id="' . html::$id . '"' : ''; ?><?php echo html::$class != '' ? ' class="' . html::$class . '"' : ''; ?>>
	<div id="wrapper" class="page-wrap">
		<header class="page-header">
			<h1 class="page-heading"><?php echo html::$title; ?></h1>
		</header>
		<div id="main" class="main-content">