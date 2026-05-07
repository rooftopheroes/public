// WIDGET.JS.TEMPLATE FILE FROM MONOLITH
(function() {
  if (!window.oc_widget_loaded) {
    window.oc_widget_loaded = true
    var loadScript = function(url, callback) {
      // Adding the script tag to the head as suggested before
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onreadystatechange = callback;
      script.onload = callback;
      head.appendChild(script);
    };

    var loadiFrameResizer = function() {
      document.head.insertAdjacentHTML("beforeend", '<style>iframe{width: 1px;min-width: 100%;}</style>')
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.min.js");
    }

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/pym/1.3.2/pym.v1.min.js');
    loadiFrameResizer();

    var bootstrap = function() {
      if ((typeof iFrameResize == 'undefined') || (typeof pym == 'undefined')) {
        waitForiFrameResize();
      } else {
        init();
      }
    };

    var waitForiFrameResize = function() {
      setTimeout(function() {
        bootstrap();
      }, 20);
    };

    var generateSiteDataParams = function(firstChar) {
      var siteDomain = encodeURIComponent(window.location.hostname) || "";
      var sitePath = encodeURIComponent(window.location.pathname) || "";
      var siteURL = encodeURIComponent(window.location.href) || "";

      return (firstChar || '&') + 'sitedomain=' + siteDomain + '&sitepath=' + sitePath + '&siteurl=' + siteURL;
    }

    var init = function() {
      //SHINGLES
      if(document.querySelector('div.oc_shingle_view')) {
        var widget_links = document.querySelectorAll('div.oc_shingle_view');
// Alias requests for old slugs / misspellings
var aliases = {
  'trudefinition-duration' : [ 'trudefintion-duration' ],
  'trudefinition-duration-cool' : [ 'duration-cool' ]
};
var analyticTrackingData = "&widget=true&sitedomain=" + window.location.host + "&sitepath=" + window.location.pathname + "&siteurl=" + window.location.href;

for (var i = 0; i < widget_links.length; i++) {
  var link = widget_links[i];
  var id = 'oc_shingle_view_' + i;

  link.setAttribute('id', id);
  var shingle = link.getAttribute('data-shingle') || 'trudefinition-duration';
  var view = link.getAttribute('data-view') || 'house';
  var layout = link.getAttribute('data-layout') || 'row';
  var style = link.getAttribute('data-style') || 'default';
  var allowed_colors = link.getAttribute('data-allowed-colors') || '';

  for (var key in aliases) {
    if (aliases[key].indexOf(shingle) > -1) {
      shingle = key;
      break;
    }
  }

  // Fix mispelling on some client pages
  if (shingle === 'trudefintion-duration') {
    shingle = 'trudefinition-duration';
  }

  var discontinuedShingles = ['trudefinition-weatherguard-hp', 'duration-premium-cool'];
  if (!discontinuedShingles.includes(shingle)) {
    var src = 'https://www.owenscorning.com/public_widgets/shingle/' + shingle + '?view=' + view + '&style=' + style + '&layout=' + layout + '&allowedcolors=' + allowed_colors + analyticTrackingData;
    link.innerHTML = '<iframe id="my'+ id +'" src="' + src + '" frameBorder="0" title="Shingle Widget"></iframe>';
    iFrameResize({
      log: true,
      minHeight: 400,
    }, '#my' + id);
  }
}

      }

      //DESIGN AND INSPIRE
      if(document.querySelector('div.oc_design_and_inspire')) {
        //DESIGN AND INSPIRE
var design_and_inspire_links = document.querySelectorAll('div.oc_design_and_inspire');
var analyticTrackingData = "?widget=true&sitedomain=" + window.location.host + "&sitepath=" + window.location.pathname + "&siteurl=" + window.location.href;
for (var i = 0; i < design_and_inspire_links.length; i++) {
	var link = design_and_inspire_links[i];
	var id = 'oc_design_and_inspire_' + i;
	link.setAttribute('id', id);
	var slide_delay = link.getAttribute('slide-delay') || '4000';

	var src = 'https://www.owenscorning.com/public_widgets/design_and_inspire' + analyticTrackingData;
  link.innerHTML = '<iframe id="my'+ id +'" src="' + src + '" frameBorder="0" title="Design and Inspire Widget"></iframe>';
  iFrameResize({
    log: true,
    minHeight: 400,
  }, '#my' + id);
}

      }

      // Roof Gawking
      if(document.querySelector('div.roof_gawking')) {
        // Roof Gawking
var roof_gawking_links = document.querySelectorAll('div.roof_gawking');
var analyticTrackingData = "?widget=true&sitedomain=" + window.location.host + "&sitepath=" + window.location.pathname + "&siteurl=" + window.location.href;
for (var i = 0; i < roof_gawking_links.length; i++) {
	var link = roof_gawking_links[i];
	var id = 'roof_gawking_' + i;
	link.setAttribute('id', id);
	var slide_delay = link.getAttribute('slide-delay') || '4000';

	var src = 'https://www.owenscorning.com/public_widgets/roof_gawking' + analyticTrackingData;
  link.innerHTML = '<iframe id="my'+ id +'" src="' + src + '" frameBorder="0" title="Roof Gawking"></iframe>';
  iFrameResize({
    log: true,
    minHeight: 1000,
  }, '#my' + id);
}

      }

      // Roof Smarter
      if(document.querySelector('div.roof_smarter')) {
        // Roof Smarter
var roof_smarter_links = document.querySelectorAll('div.roof_smarter');
var analyticTrackingData = "?widget=true&sitedomain=" + window.location.host + "&sitepath=" + window.location.pathname + "&siteurl=" + window.location.href;
for (var i = 0; i < roof_smarter_links.length; i++) {
	var link = roof_smarter_links[i];
	var id = 'roof_smarter_' + i;
	link.setAttribute('id', id);
	var slide_delay = link.getAttribute('slide-delay') || '4000';

	var src = 'https://www.owenscorning.com/public_widgets/roof_smarter' + analyticTrackingData;
  link.innerHTML = '<iframe src="' + src + '" id="my'+ id +'" min-height="900px" width="100%" scrolling="auto" frameBorder="0" title="Roof Smarter"> </iframe>';
  iFrameResize({
    log: true,
		scrolling: "yes",
    minHeight: 1000,
  }, '#my' + id);
}

      }

      //TOTAL PROTECTION ROOFING SYSTEM
      if(document.querySelector('div.total_protection_roofing_system')) {
        //TOTAL PROTECTION ROOFING SYSTEM
var tprs_links = document.querySelectorAll('div.total_protection_roofing_system');
var analyticTrackingData = "?widget=true&sitedomain=" + window.location.host + "&sitepath=" + window.location.pathname + "&siteurl=" + window.location.href;
for (var i = 0; i < tprs_links.length; i++) {
  var link = tprs_links[i];
  var id = 'total_protection_roofing_system_' + i;
  link.setAttribute('id', id);
  var src = 'https://www.owenscorning.com/public_widgets/tprs' + analyticTrackingData;
  link.innerHTML = '<iframe id="my'+ id +'" src="' + src + '" frameBorder="0" title="TPRS Widget"></iframe>';
  iFrameResize({
    log: true,
    minHeight: 400,
  }, '#my' + id);
}

      }

      // WARRANTY
      if(document.querySelector('div.oc_warranty')) {
        var warranty_links = document.querySelectorAll('div.oc_warranty');
for (var i = 0; i < warranty_links.length; i++) {
  var link = warranty_links[i];
  var id = 'oc_warranty_' + i;
  link.setAttribute('id', id);

  var standard, tprs, systemProtection, preferredProtection, platinumProtection;
  var standard = link.getAttribute('data-standard-coverage') || 'false';
  var tprs = link.getAttribute('data-tprs-coverage') || 'false';
  var systemProtection = link.getAttribute('data-system-protection') || 'false';
  var preferredProtection = link.getAttribute('data-preferred-protection') || 'false';
  var platinumProtection = link.getAttribute('data-platinum-protection') || 'false';

  if (tprs === 'false' && systemProtection === 'false' && preferredProtection === 'false' && platinumProtection === 'false') {
    standard = true;
  }
  var src = 'https://www.owenscorning.com/public_widgets/warranty' + generateSiteDataParams('?') + '&standard=' + standard + '&tprs=' + tprs + '&systemProtection=' + systemProtection + '&preferredProtection=' + preferredProtection + '&platinumProtection=' + platinumProtection;
  link.innerHTML = '<iframe id="my'+ id +'" src="' + src + '" frameBorder="0" title="Warranty Widget"></iframe>';
  iFrameResize({
    log: true,
    minHeight: 400,
  }, '#my' + id);
}

      }

      // DESIGN EYE Q
      if (document.getElementById("visualizer")) {
        //Design EyeQ®
var id = 'visualizer';
var design_eyeq = document.getElementById(id);
var zip = design_eyeq.dataset.zip;
var photoUrl = design_eyeq.dataset.photoUrl || 'https://picsum.photos/seed/roof-upload-demo/1500/1000';

var analyticTrackingData =
  '?widget=true&zip=' + zip +
  '&sitedomain=' + window.location.host +
  '&sitepath=' + window.location.pathname +
  '&siteurl=' + window.location.href +
  '&photoUrl=' + encodeURIComponent(photoUrl);

var src = 'https://roofvisualizer.owenscorning.com/' + analyticTrackingData;
design_eyeq.innerHTML = '<iframe id="myVisualizer" src="' + src + '" frameBorder="0" title="Design EyeQ Widget"></iframe>';
iFrameResize({
  log: true,
  minHeight: 400,
}, '#myVisualizer');

      }
    };

    document.addEventListener('DOMContentLoaded', bootstrap);
    if (document.readyState !== 'loading') {
      setTimeout(bootstrap, 1);
    }
  }
})();
