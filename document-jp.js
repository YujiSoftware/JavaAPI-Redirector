var location = window.location.href.replace(/https?\:\/\/docs\.oracle\.com\/javase\/jp\/[678]\/(docs\/)?/g, "https://docs.oracle.com/javase/jp/8/docs/");
if(window.location.href != location){
  window.location.replace(location);
}
