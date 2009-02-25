var BurrpTV = Class.create({
	initialize: function() {
	},
	getSchedule: function(startTime, endTime, channelId, callback){
		var json = "http:\/\/tv.burrp.com/json/scheduler/search.html?action=schedule&sT="+startTime+"&eT="+endTime+"&cH="+channelId+"&cB="+callback;
		var scriptElement = new Element('script',{src:json, type:"text/javascript",charset:"utf-b"});
		$(document.body).insert(scriptElement)
	},
	getEpisode: function(episodeId, startTime, callback){
		var json = "http:\/\/tv.burrp.com/json/scheduler/search.html?action=episodeDetail&sT="+startTime+"&eId="+episodeId+"&cB="+callback;
		var scriptElement = new Element('script',{src:json, type:"text/javascript",charset:"utf-b"});
		$(document.body).insert(scriptElement)
	},
	currentTime: function(attribute){
		return new Date().getTime(); //tv.burrp.com uses the epoch Unix time.
	},
});