//make rss
function showRSS(str)
{
	//base case
	if (str.length==0) { 
		return;
	}
	
	//check for IE6/5
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
	else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	//update the div element
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("latest-ajax").innerHTML=xmlhttp.responseText;
		}
	}
	
	//call the php script
	xmlhttp.open("GET","php/pullrss.php?q="+str,true);
	xmlhttp.send();
}

function getLastPostDate(){
	//check for IE6/5
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
	else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//update the div element
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			var date = xmlhttp.responseText;
			date = date.substring(0, 16);
			document.getElementById("blog-info").innerHTML="Latest: "+date;
		}
	}
	
	//call the php script
	xmlhttp.open("GET","php/getPostDate.php",true);
	xmlhttp.send();
}

//ready functions
$(document).ready(function(){
	$('#section').hide();
	$('#content').load('../content/home.txt');
	
	//set menu hover animations
	$('.hover-link').hover(
		function(){
			var id = $(this).attr('id');
			$('#section').html(id.toUpperCase()).slideDown();
		}, 
		function(){
			$('#section').slideUp()
		}
	);
	$('.hover-link').click(
		function(){
			var id= $(this).attr('id');
			$('#title-scroll').addClass("hidden-scroll").removeClass("active-scroll");
			$('#title-scroll').html(id.toUpperCase());
			$('#title-scroll').addClass("active-scroll").removeClass("hidden-scroll");
	});

	$('#home').click(
		function(){
			$('#content').fadeOut(8);
			$('#content').load('../content/home.txt').fadeIn();
		}
	);
	$('#latest').click(
		function(){
			$('#content').fadeOut(8);
			$('#content').load('../content/latest.txt', function() {
				//$.getScript("loadlatest.js");
			}).fadeIn();
			showRSS("blog");
		}
	);
	$('#resume').click(
		function(){
			$('#content').fadeOut(8);
			$('#content').load('../content/resume.txt', function() {
				$.getScript("js/loadresume.js");
			}).fadeIn();
		}
	);
	$('#projects').click(
		function(){
                        $('#content').fadeOut(8);
                        $('#content').load('../content/projects.txt').fadeIn();
                }
	);
	$('#contact').click(
		function(){
			$('#content').fadeOut(8);
			$('#content').load('../content/contact.txt').fadeIn();
		}
	);
	
	//set link hover changes
	$('#blog-link').hover(
		function(){
			getLastPostDate();
		},
		function(){
			$('#blog-info').html('240/240');
		}
	);
});
