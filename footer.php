<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package rahul_bro
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'resum' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'resum' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'resum' ), 'resum', '<a href="http://Rahun%20Brohma">Rahun Brohma</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->
	<!-- Load React API -->
	<script src= "https://unpkg.com/react@16/umd/react.production.min.js"></script>
	<!-- Load React DOM-->
	<script src= "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
	<!-- Load Babel Compiler -->
	<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
<?php wp_footer(); ?>

</body>
</html>
