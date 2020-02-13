// build time:Thu Feb 13 2020 18:20:37 GMT+0800 (GMT+08:00)
$(function(){var t=new APlayer({container:document.getElementById("aplayer"),fixed:true,autoplay:true,lrcType:3});$.getJSON("https://api.i-meto.com/meting/api?type=playlist&id=2022437288",function(e){t.list.add(e)})});
//rebuild by neat 