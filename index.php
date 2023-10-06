<?php
/*
* Plugin Name: Minimal Gutenberg Block
*/

function register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'register_block' );
