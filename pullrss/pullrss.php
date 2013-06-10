<?php

$feed=$_GET["q"];

switch($feed) {
	case "music":
		$xml=("http://ws.audioscrobbler.com/2.0/user/pyrestrike/recenttracks.rss");
		break;
	case "games":
		$xml=("http://raptr.com/pyrestrike/rss");
		break;
        case "blog":
                $xml=("http://www.brianhq.com/blog/?feed=rss2");
                break;
}

$xmlDoc = new DOMDocument();
$xmlDoc->load($xml);

//get elements from "<channel>"
$channel=$xmlDoc->getElementsByTagName('channel')->item(0);
$channel_title = $channel->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
$channel_link = $channel->getElementsByTagName('link')->item(0)->childNodes->item(0)->nodeValue;
//description if desired
$channel_desc = $channel->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue;

//output elements from "<channel>"
echo("<a href='" . $channel_link . "'>" . $channel_title . "</a>");
echo("<br />");
echo($channel_desc);
echo("<br />");

//get and output "<item>" elements
$x=$xmlDoc->getElementsByTagName('item');
//echo("<ul>");
for ($i=0; $i<$x->length && $i<10; $i++) {
  //create a div for the item
  echo("<div class=feed-item>");
  $item_title=$x->item($i)->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
  $item_link=$x->item($i)->getElementsByTagName('link')->item(0)->childNodes->item(0)->nodeValue;
  $item_date=$x->item($i)->getElementsByTagName('pubDate')->item(0)->childNodes->item(0)->nodeValue;

  //open the link
  echo("<a href='".$item_link."'>");

  //formatting
  // extract the time zone from the full date
  $item_tz=substr($item_date, 26, 5);
  // extract the time from the full date
  $item_time=substr($item_date, 17, 8);
  // extract the date from the full date
  $item_date=substr($item_date, 0, 16);

  // format the time to 12-hr, PST
  if($item_tz!="-0800") {
     $item_time=date_create($item_time, timezone_open('GMT'));
     $new_date_timezone=new DateTimeZone('America/Los_Angeles');
     date_timezone_set($item_time, $new_date_timezone);
  } else {
     $item_time=date_create($item_time, timezone_open('America/Los_Angeles'));
  }
  $item_time=date_format($item_time, 'h:i A');

  //if it's the music feed, grab album art
  if($feed=="music") {
     //break down the track title string into variables
     $delimiter=" ".html_entity_decode('&ndash;', ENT_COMPAT, 'UTF-8')." ";
     $format_title=str_replace(" & ", "%20%26%20", $item_title);
     $hyphen_pos=strpos($format_title, $delimiter);
     $track_artist=substr($format_title, 0, $hyphen_pos);
     $track_title=substr($format_title, $hyphen_pos+5);
     
     //use Last.FM's API to retrieve album art
     $track_info=simplexml_load_file("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=c4de6f8f747d46a78bf8381bc013c05f&artist=".$track_artist."&track=".$track_title);
     $item_image=$track_info->track->album;
     if($item_image){
        $item_image=$item_image->image[0];
        echo "<img class='albumart' src=".$item_image." />";
     } else {
        echo "No Album Art";
     }
  }

  //print out the formatted feed data
  echo ("<li class='feed-point'>" . $item_title . "<br />" .$item_date. ", " . $item_time . "</li></a></div>");
}
//echo("</ul>");
?>
