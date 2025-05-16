# Raptive CMP Overrides

This repo contains a small JavaScript file to inject custom styles into the Raptive CMP shadow DOM.

## What it does

- Applies custom CSS styles the GDPR/Cookie conset dialog.
- Injects a `<style>` block directly into the CMP's open shadow DOM after it loads.

## Setup

1. Save the JavaScript as `cmp_style_inject.js` in your WordPress theme, under:  
   `/wp-content/themes/your-theme/js/cmp_style_inject.js`

2. Add the following to your `functions.php`:

```php
function custom_cmp_style_injector() {
    wp_enqueue_script(
        'cmp_style_inject',
        get_stylesheet_directory_uri() . '/js/cmp_style_inject.js',
        [],
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'custom_cmp_style_injector');
