var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var ignorePaths=['/apps/auth','/apps/webstore/stores/update_cart'];function shouldWarn(){for(var i=0;i<ignorePaths.length;i++){if(window.location.pathname.indexOf(ignorePaths[i])!=-1){return false;}}
return true;}
if(shouldWarn()){var oldOnBeforeUnload=window.onbeforeunload;function fw_confirmExit(){try{var siteIdentifier=webs&&webs.stats&&webs.stats.siteId||window.location.hostname;_gaq.push(['_trackEvent','spam','earlyUnload',siteIdentifier]);}catch(e){}finally{return "WARNING! This page is attempting to forward you to another site. If you do not trust this site, you should click CANCEL.";}}
window.onbeforeunload=fw_confirmExit;window.setTimeout(function(){window.onbeforeunload=oldOnBeforeUnload;},600);}

}
/*
     FILE ARCHIVED ON 12:53:37 Apr 02, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:23:11 Sep 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.841
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.014
  cdx.remote: 12.452
  LoadShardBlock: 167.167 (6)
  PetaboxLoader3.datanode: 188.173 (7)
  load_resource: 124.2
  PetaboxLoader3.resolve: 47.204
*/