	

    // custom map scripts
    function add_onload_var($classes = '') {
       if(is_front_page()) {
          $classes[] = 'onload="initialize()"';
       }
       return $classes;
    }
     
    add_filter('body_class','add_onload_var');
     
    function load_map_scripts() {
                    if(is_front_page()) {
                            wp_enqueue_script('mapjs', 'http://maps.googleapis.com/maps/api/js?sensor=false&v=3');
                            wp_enqueue_script('mapjs_init', get_stylesheet_directory_uri() . '/map.js');
            }
    }
     
    add_action('wp_enqueue_scripts','load_map_scripts');


