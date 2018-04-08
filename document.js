var result = /^https?\:\/\/docs\.oracle\.com\/javase\/(6|7|8|9|10)\//.exec(window.location.href);
if(result != null){
  let version = result[1];

  chrome.storage.sync.get({
    redirectTo: 'latest',
  }, function(items) {
    var redirectTo = items.redirectTo;
    if(redirectTo === "latest"){
      redirectTo = 10;
    }

    if(version != redirectTo){
      // https://docs.oracle.com/javase/6/docs/api/java/lang/String.html#String(byte[],%20int,%20int)
      // https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#String(byte[],%20int,%20int)
      // https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#String-byte:A-int-int-
      // https://docs.oracle.com/javase/9/docs/api/java/lang/String.html#String-byte:A-int-int-
      // https://docs.oracle.com/javase/10/docs/api/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)

      if(redirectTo >= 8){
        var url =
          result.input
            .replace(/^(https?\:\/\/docs\.oracle\.com\/javase\/)(?:6|7|8|9|10)\/(.*)/, `$1${redirectTo}/$2`)
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
            .replace(/^(https?\:\/\/docs\.oracle\.com\/javase\/)(?:6|7|8|9|10)\/(.*)/, `$1${redirectTo}/$2`)
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
