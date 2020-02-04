// build time:Tue Feb 04 2020 21:30:54 GMT+0800 (GMT+08:00)
$(function(){var t=new APlayer({container:document.getElementById("aplayer"),fixed:true,autoplay:true,lrcType:3});$.getJSON("https://api.fczbl.vip/163/?type=playlist&id=2022437288",function(e){t.list.add(e)})});
//rebuild by neat 