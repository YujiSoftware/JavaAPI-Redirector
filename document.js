// https://docs.oracle.com/javase/6/docs/api/java/lang/String.html#String(byte[],%20int,%20int)
// https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#String(byte[],%20int,%20int)
// https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#String-byte:A-int-int-
// https://docs.oracle.com/javase/9/docs/api/java/lang/String.html#String-byte:A-int-int-
// https://docs.oracle.com/javase/10/docs/api/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)
// https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)
// https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)
// https://docs.oracle.com/en/java/javase/13/docs/api/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)
// https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)

// https://docs.oracle.com/javase/jp/6/api/java/lang/String.html#String(byte[],%20int,%20int)
// https://docs.oracle.com/javase/jp/7/api/java/lang/String.html#String(byte[],%20int,%20int)
// https://docs.oracle.com/javase/jp/8/api/java/lang/String.html#String-byte:A-int-int-
// https://docs.oracle.com/javase/jp/8/docs/api/java/lang/String.html#String-byte:A-int-int-
// https://docs.oracle.com/javase/jp/9/docs/api/java/lang/String.html#String-byte:A-int-int-
// https://docs.oracle.com/javase/jp/10/docs/api/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)
// https://docs.oracle.com/javase/jp/11/docs/api/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)
// https://docs.oracle.com/javase/jp/12/docs/api/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)
// https://docs.oracle.com/javase/jp/13/docs/api/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)
// https://docs.oracle.com/javase/jp/14/docs/api/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)

const paths = [
  // English
  { version: 6, language: "en", hasModule: false, prefix: "/javase/6/docs/api/" },
  { version: 7, language: "en", hasModule: false, prefix: "/javase/7/docs/api/" },
  { version: 8, language: "en", hasModule: false, prefix: "/javase/8/docs/api/" },
  { version: 9, language: "en", hasModule: false, prefix: "/javase/9/docs/api/" },
  { version: 10, language: "en", hasModule: false, prefix: "/javase/10/docs/api/" },
  { version: 11, language: "en", hasModule: true, prefix: "/en/java/javase/11/docs/api/" },
  { version: 12, language: "en", hasModule: true, prefix: "/en/java/javase/12/docs/api/" },
  { version: 13, language: "en", hasModule: true, prefix: "/en/java/javase/13/docs/api/" },
  { version: 14, language: "en", hasModule: true, prefix: "/en/java/javase/14/docs/api/" },
  { version: 15, language: "en", hasModule: true, prefix: "/en/java/javase/15/docs/api/" },
  { version: 16, language: "en", hasModule: true, prefix: "/en/java/javase/16/docs/api/" },
  { version: 17, language: "en", hasModule: true, prefix: "/en/java/javase/17/docs/api/" },
  { version: 18, language: "en", hasModule: true, prefix: "/en/java/javase/18/docs/api/" },
  { version: 19, language: "en", hasModule: true, prefix: "/en/java/javase/19/docs/api/" },
  { version: 20, language: "en", hasModule: true, prefix: "/en/java/javase/20/docs/api/" },
  { version: 21, language: "en", hasModule: true, prefix: "/en/java/javase/21/docs/api/" },
  { version: 22, language: "en", hasModule: true, prefix: "/en/java/javase/22/docs/api/" },
  // Japanese
  { version: 6, language: "jp", hasModule: false, prefix: "/javase/jp/6/api/" },
  { version: 7, language: "jp", hasModule: false, prefix: "/javase/jp/7/api/" },
  { version: 8, language: "jp", hasModule: false, prefix: "/javase/jp/8/docs/api/" },
  { version: 8, language: "jp", hasModule: false, prefix: "/javase/jp/8/api/" },  // See: https://yoshio3.com/2015/03/10/java-se-8-api-jp-doc-new-url/
  { version: 9, language: "jp", hasModule: false, prefix: "/javase/jp/9/docs/api/" },
  { version: 10, language: "jp", hasModule: false, prefix: "/javase/jp/10/docs/api/" },
  { version: 11, language: "jp", hasModule: true, prefix: "/javase/jp/11/docs/api/" },
  { version: 12, language: "jp", hasModule: true, prefix: "/javase/jp/12/docs/api/" },
  { version: 13, language: "jp", hasModule: true, prefix: "/javase/jp/13/docs/api/" },
  { version: 14, language: "jp", hasModule: true, prefix: "/javase/jp/14/docs/api/" },
  { version: 15, language: "jp", hasModule: true, prefix: "/javase/jp/15/docs/api/" },
  { version: 16, language: "jp", hasModule: true, prefix: "/javase/jp/16/docs/api/" },
  { version: 17, language: "jp", hasModule: true, prefix: "/javase/jp/17/docs/api/" },
  { version: 18, language: "jp", hasModule: true, prefix: "/javase/jp/18/docs/api/" },
  { version: 19, language: "jp", hasModule: true, prefix: "/javase/jp/19/docs/api/" },
  { version: 20, language: "jp", hasModule: true, prefix: "/javase/jp/20/docs/api/" },
  { version: 21, language: "jp", hasModule: true, prefix: "/javase/jp/21/docs/api/" },
  { version: 22, language: "jp", hasModule: true, prefix: "/javase/jp/21/docs/api/" },  // TODO: Changed at release
];

let javadoc = {
  found: false,
  version: -1,
  language: "",
  module: null,
  route: "",
  hash: ""
};

if(window.location.hostname === "docs.oracle.com"){
  let path = paths.find(p => window.location.pathname.startsWith(p.prefix));
  if(path !== undefined){
    javadoc.found = true;
    javadoc.version = path.version;
    javadoc.language = path.language;
    javadoc.hash = window.location.hash;

    let route = window.location.pathname.substring(path.prefix.length);
    let components = route.split("/");
    if(path.hasModule && moduleSearchIndex.has(components[0])){
      javadoc.module = components[0];
      javadoc.route = components.slice(1).join("/");
    }else{
      javadoc.route = route;
    }
  }
}

if(javadoc.found){
  chrome.storage.sync.get({
    redirectTo: 'latest',
  }, function(items) {
    let redirectTo = items.redirectTo;
    if(redirectTo === "latest"){
      redirectTo = paths.filter(p => p.language == javadoc.language).pop().version;
    }

    // Do not redirect packages removed from JDK11
    // See: JEP 320 (Remove the Java EE and CORBA Modules)
    const packageName = javadoc.route.split(/\//g).slice(0, -1).join(".");
    if(removedPackageFromJdk11.has(packageName)){
      redirectTo = Math.max(javadoc.version, 8);
    }

    if(javadoc.version == redirectTo){
      return;
    }

    let newPath = paths.find(p => p.version == redirectTo && p.language == javadoc.language);
    if(newPath.version >= 11){
      let module = javadoc.module || packageSearchIndex[packageName] || "";
      if(module !== ""){
        module += "/"
      }
      window.location.replace(`https://docs.oracle.com${newPath.prefix}${module}${javadoc.route}${javadoc.hash}`);
    }else{
      window.location.replace(`https://docs.oracle.com${newPath.prefix}${javadoc.route}${javadoc.hash}`);
    }
  });
}
