Google Maps API3 Wordpress Hooked
=================================

While there are Wordpress plugins to do the work for you, they do do not allow all the features and extensions of a custom script.

The map I built is responsive, and features an array of multiple custom markers with infowindows. The map has no limits for extentions that can be found found and added, see Google's Documentation https://developers.google.com/maps/documentation/javascript/.  

Components
==========
1. Map Script
2. Wordpress Hook
3. Header
4. CSS

1. Map Script (map.js) 

Based on Google Maps Javascript API3. 

Place it according to what you set in the next step. In my case, ('mapjs_init', get_stylesheet_directory_uri() . '/map.js');. 

Load the API in a div by setting var map = new google.maps.Map(document.getElementById("gmap"),myOptions); -- so in my case I loaded the map with <div id="gmap"></div> (See step 4).

2. Wordpress Hook (gmaps-hook.php)

Enqueue the necessary javascript files (for more information see http://codex.wordpress.org/Function_Reference/wp_enqueue_script). 

This is done by adding the code found in gmaps-hook.php to your functions.php in wordpress.

Note the conditional here, is_front_page() will load the scripts only on the front page. If you don't have a static page but a blog page use is_home instead (is_home = is_blog). The same is true for the onload script that initializes the actual map file. If you want the map on an entirely custom page (not front), you will need to create a different hook. 

3. Header

You want to initialize the map conditionally, not on every page. People often add these hooks
into their header.php but this is a bad practice.

Therefore, add the code found in for-header.php to your header.php in wordpress.

(Note the body_class*, which adds a bunch of classes on its own. If your site looks different, you can just replace the body_class with whatever was in your header.php by default. Read http://codex.wordpress.org/Function_Reference/body_class for more information.) 

*This step might slightly (!) vary depending on your theme

4. CSS

The #gmap, or whatever you named your map div in the script needs to be styled. For one, there is a bug that affects the images inside the map. Again I think it has to do with responsive themes but to fix this and also set a size I added the following:

#gmap {width: 100%; padding-bottom: 50%;}
#gmap img {max-width: inherit;}

Google suggested setting 100% for both width and height but this did not work in Wordpress (and might depend on your theme). I utilized the css padding-hack (http://alistapart.com/article/creating-intrinsic-ratios-for-video), which made the map responsive. 

You can now simply add the <div id="gmap"></div> to your front page. 




