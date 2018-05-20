var result = /^https?\:\/\/docs\.oracle\.com\/javase\/jp\/(6|7|8|9|10)\/(docs|api)\//.exec(window.location.href);
if(result != null){
  let version = result[1];

  chrome.storage.sync.get({
    redirectTo: 'latest',
  }, function(items) {
    var redirectTo = items.redirectTo;
    if(redirectTo === "latest"){
      redirectTo = "10";
    }

    if(version != redirectTo){
      // https://docs.oracle.com/javase/jp/6/api/java/lang/String.html#String(byte[],%20int,%20int)
      // https://docs.oracle.com/javase/jp/7/api/java/lang/String.html#String(byte[],%20int,%20int)
      // https://docs.oracle.com/javase/jp/8/docs/api/java/lang/String.html#String-byte:A-int-int-
      // https://docs.oracle.com/javase/jp/9/docs/api/java/lang/String.html#String-byte:A-int-int-
      // https://docs.oracle.com/javase/jp/10/docs/api/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)

      if(redirectTo >= 8){
        var url =
          result.input
            .replace(/^(https?\:\/\/docs\.oracle\.com\/javase\/jp\/)(?:6|7|8|9|10)\/(docs\/)?(.*)/, `$1${redirectTo}/docs/$3`)
            .replace("#field_summary", "#field.summary")
            .replace("#constructor_summary", "#constructor.summary")
            .replace("#method_summary", "#method.summary")
            .replace("#field_detail", "#field.detail")
            .replace("#constructor_detail", "#constructor.detail")
            .replace("#method_detail", "#method.detail")
            .replace(/%20/g, "")
            .replace(/\[\]/g, ":A")
            .replace(/[\(\),]/g, "-");
      
        window.location.replace(url);
      }else{
        var url =
          result.input
            .replace(/^(https?\:\/\/docs\.oracle\.com\/javase\/jp\/)(?:6|7|8|9|10)\/(docs\/)?(.*)/, `$1${redirectTo}/$3`)
            .replace("#field.summary", "#field_summary")
            .replace("#constructor.summary", "#constructor_summary")
            .replace("#method.summary", "#method_summary")
            .replace("#field.detail", "#field_detail")
            .replace("#constructor.detail", "#constructor_detail")
            .replace("#method.detail", "#method_detail");
      
        window.location.replace(url);
      }
    }
  });
}
