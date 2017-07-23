var redirectTo = window.location.href.replace(/https?\:\/\/docs\.oracle\.com\/javase\/[678]/g, "https://docs.oracle.com/javase/8");
if(window.location.href != redirectTo){
  redirectTo =
    redirectTo
      .replace("#field_summary", "#field.summary")
      .replace("#constructor_summary", "#constructor.summary")
      .replace("#method_summary", "#method.summary")
      .replace("#field_detail", "#field.detail")
      .replace("#constructor_detail", "#constructor.detail")
      .replace("#method_detail", "#method.detail")
      .replace(/%20/g, "")
      .replace(/\s+/g, "")
      .replace(/[\(\),]/g, "-");

  window.location.replace(redirectTo);
}
