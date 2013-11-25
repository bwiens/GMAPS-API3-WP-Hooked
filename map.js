	

    var markers = [
        ['<a href="http://www.ship.edu">Shippensburg University</a>', 40.06090, -77.52148, 'wp-content/uploads/mapicons/shiptest.png', 'Shippensburg University'],
        ['<a href="http://www.millersville.edu">Millersville University</a>', 39.99680, -76.35440, 'wp-content/uploads/mapicons/mville.png', 'Millersville University'],
        ['<a href="http://www.kutztown.edu">Kutztown University</a>', 40.50980, -75.78410, 'wp-content/uploads/mapicons/kutz.png', 'Kutztown University'],
        ['<a href="http://www.edinboro.edu">Edinboro University</a>', 41.8708, -80.1293, 'wp-content/uploads/mapicons/edin.png', 'Edinboro University'],
        ['<a href="http://www.mansfield.edu">Mansfield University</a>', 41.8081, -77.0694, 'wp-content/uploads/mapicons/mans.png', 'Mansfield University'],
        ['<a href="http://www.sru.edu">Slippery Rock University</a>', 41.0612, -80.0445, 'wp-content/uploads/mapicons/slippery.png', 'Slippery Rock'],
        ['<a href="http://www.clarion.edu">Clarion University</a>', 41.2085, -79.3789, 'wp-content/uploads/mapicons/clarion.png', 'Clarion University'],
        ['<a href="http://www.lhup.edu">Lock Haven University</a>', 41.1425, -77.4621, 'wp-content/uploads/mapicons/lockhaven.png', 'Lock Haven University'],
        ['<a href="http://www.bloomu.edu">Bloomsburg University</a>', 41.0085, -76.4482, 'wp-content/uploads/mapicons/bloom.png', 'Bloomsburg University'],
        ['<a href="http://www.esu.edu">East Stroudsburg University</a>', 40.9979, -75.1708, 'wp-content/uploads/mapicons/esu.png', 'East Stroudsburg University'],
        ['<a href="http://www.geneva.edu">Geneva College</a>', 40.7721, -80.3234, 'wp-content/uploads/mapicons/geneva.png', 'Geneva College'],
        ['<a href="http://www.iup.edu">Indiania University of Pennsylvania</a>', 40.6169, -79.1583, 'wp-content/uploads/mapicons/indiana.png', 'Indiania University of Pennsylvania'],
        ['<a href="http://www.portal.state.pa.us/portal/server.pt/community/commonwealth_libraries/7225/welcome_from_the_commissioner_of_libraries/524027u">State Library of Pennsylvania</a>', 40.2646, -76.8808, 'wp-content/uploads/mapicons/statelib.png', 'State Library of Pennsylvania'],
        ['<a href="http://www.harrisburgu.net">Harrisburg University</a>', 40.2622, -76.8804, 'wp-content/uploads/mapicons/harrisburg.png', 'Harrisburg University'],  
        ['<a href="http://www.calu.edu">California University of Pennsylvania</a>', 40.0632, -79.8822, 'wp-content/uploads/mapicons/calu.png', 'California University of Pennsylvania'],  
        ['<a href="http://www.lincoln.edu">Lincoln University</a>', 39.8095, -75.9275, 'wp-content/uploads/mapicons/lincoln.png', 'Lincoln University'],
        ['<a href="http://www.cheyney.edu">Cheyney University</a>', 39.9367, -75.5249, 'wp-content/uploads/mapicons/cheyney.png', 'Cheyney University'],
        ['<a href="http://www.wcupa.edu">West Chester University</a>', 39.9534, -75.5975, 'wp-content/uploads/mapicons/westchester.png', 'West Chester University'],
        ];
     
     
    function initialize() {
        var latlng = new google.maps.LatLng(40.9, -77.5);
        var myOptions = {
            zoom: 7,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            mapTypeControl: false
        };
        var map = new google.maps.Map(document.getElementById("gmap"),myOptions);
        var infowindow = new google.maps.InfoWindow(), marker, i;
        for (i = 0; i < markers.length; i++) {  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(markers[i][1], markers[i][2]),
                map: map,
                icon: markers[i][3],
                title: markers[i][4]
             
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(markers[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }
     
    google.maps.event.addDomListener(window, 'load', initialize);


