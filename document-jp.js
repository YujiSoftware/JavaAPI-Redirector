var redirectTo = window.location.href.replace(/https?\:\/\/docs\.oracle\.com\/javase\/jp\/[678]\/(docs\/)?/g, "https://docs.oracle.com/javase/jp/8/docs/");
if(window.location.href != redirectTo){
  window.location.replace(redirectTo);
}
