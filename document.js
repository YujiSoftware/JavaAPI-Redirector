var redirectTo = window.location.href.replace(/https?\:\/\/docs\.oracle\.com\/javase\/[678]/g, "https://docs.oracle.com/javase/8");
if(window.location.href != redirectTo){
  window.location.replace(redirectTo);
}
