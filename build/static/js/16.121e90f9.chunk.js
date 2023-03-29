(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[16],{1767:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return F})),t.d(a,"validate",(function(){return i}));var r=t(314),s=t.n(r),i=F,n=t(1873).default,m=new RegExp("^[\\w ]+$","u"),o=new RegExp("^[\\w]+$","u"),p=new RegExp("^[ \\w]+$","u"),h=new RegExp("^[ \\w\\.,:]+$","u"),u=t(1874).fullFormats["date-time"],f=t(1874).fullFormats.uri,d=new RegExp("^0x[a-fA-F0-9]{40}$","u"),c=new RegExp("^[ \\w.'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$","u"),y=new RegExp("^[a-zA-Z0-9+\\-%/$.]+$","u");function l(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,r=void 0===t?"":t;a.parentData,a.parentDataProperty,a.rootData;var s=null,i=0,m=i,o=!1,p=i,h=i,u=!1,f=i;if(i===f)if("string"===typeof e){if(n(e)>42){var d={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};null===s?s=[d]:s.push(d),i++}else if(n(e)<1){var c={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};null===s?s=[c]:s.push(c),i++}}else{var y={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};null===s?s=[y]:s.push(y),i++}var g=f===i;if(!(u=u||g)){var v=i;if("boolean"!==typeof e){var P={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===s?s=[P]:s.push(P),i++}g=v===i;if(!(u=u||g)){var w=i;if("number"!=typeof e||!isFinite(e)){var F={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};null===s?s=[F]:s.push(F),i++}g=w===i;if(!(u=u||g)){var k=i;if(null!==e){var b={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};null===s?s=[b]:s.push(b),i++}g=k===i;u=u||g}}}if(u)i=h,null!==s&&(h?s.length=h:s=null);else{var x={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};null===s?s=[x]:s.push(x),i++}var D=p===i;if(!(o=o||D)){var N={instancePath:r,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return null===s?s=[N]:s.push(N),i++,l.errors=s,!1}return i=m,null!==s&&(m?s.length=m:s=null),l.errors=s,0===i}function g(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,r=void 0===t?"":t;a.parentData,a.parentDataProperty;var i=a.rootData,m=void 0===i?e:i,p=null,h=0,u=h,f=!1,d=h,c=h,y=!1,v=h;if(h===v)if("string"===typeof e){if(n(e)>42){var P={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};null===p?p=[P]:p.push(P),h++}else if(n(e)<1){var w={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};null===p?p=[w]:p.push(w),h++}}else{var F={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};null===p?p=[F]:p.push(F),h++}var k=v===h;if(!(y=y||k)){var b=h;if("boolean"!==typeof e){var x={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===p?p=[x]:p.push(x),h++}k=b===h;if(!(y=y||k)){var D=h;if("number"!=typeof e||!isFinite(e)){var N={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};null===p?p=[N]:p.push(N),h++}k=D===h;if(!(y=y||k)){var O=h;if(null!==e){var $={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};null===p?p=[$]:p.push($),h++}k=O===h;y=y||k}}}if(y)h=c,null!==p&&(c?p.length=c:p=null);else{var z={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};null===p?p=[z]:p.push(z),h++}var T=d===h;if(!(f=f||T)){var E=h;if(h===E)if(e&&"object"==s()(e)&&!Array.isArray(e))if(Object.keys(e).length>10){var I={instancePath:r,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};null===p?p=[I]:p.push(I),h++}else{for(var L in e){var j=h,A=h;if(h===A)if("string"===typeof L){if(n(L)>40){var V={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:L};null===p?p=[V]:p.push(V),h++}else if(n(L)<1){var _={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:L};null===p?p=[_]:p.push(_),h++}else if(!o.test(L)){var R={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:L};null===p?p=[R]:p.push(R),h++}}else{var B={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:L};null===p?p=[B]:p.push(B),h++}var C=j===h;if(!C){var q={instancePath:r,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:L},message:"property name must be valid"};null===p?p=[q]:p.push(q),h++;break}}if(C)for(var U in e){var S=h;l(e[U],{instancePath:r+"/"+U.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:U,rootData:m})||(h=(p=null===p?l.errors:p.concat(l.errors)).length);var Z=S===h;if(!Z)break}}else{var M={instancePath:r,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};null===p?p=[M]:p.push(M),h++}T=E===h;f=f||T}if(!f){var K={instancePath:r,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return null===p?p=[K]:p.push(K),h++,g.errors=p,!1}return h=u,null!==p&&(u?p.length=u:p=null),g.errors=p,0===h}function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,r=void 0===t?"":t;a.parentData,a.parentDataProperty;var i=a.rootData,m=void 0===i?e:i,p=null,h=0,u=h,f=!1,d=h,c=h,y=!1,l=h;if(h===l)if("string"===typeof e){if(n(e)>42){var P={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};null===p?p=[P]:p.push(P),h++}else if(n(e)<1){var w={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};null===p?p=[w]:p.push(w),h++}}else{var F={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};null===p?p=[F]:p.push(F),h++}var k=l===h;if(!(y=y||k)){var b=h;if("boolean"!==typeof e){var x={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===p?p=[x]:p.push(x),h++}k=b===h;if(!(y=y||k)){var D=h;if("number"!=typeof e||!isFinite(e)){var N={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};null===p?p=[N]:p.push(N),h++}k=D===h;if(!(y=y||k)){var O=h;if(null!==e){var $={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};null===p?p=[$]:p.push($),h++}k=O===h;y=y||k}}}if(y)h=c,null!==p&&(c?p.length=c:p=null);else{var z={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};null===p?p=[z]:p.push(z),h++}var T=d===h;if(!(f=f||T)){var E=h;if(h===E)if(e&&"object"==s()(e)&&!Array.isArray(e))if(Object.keys(e).length>10){var I={instancePath:r,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};null===p?p=[I]:p.push(I),h++}else{for(var L in e){var j=h,A=h;if(h===A)if("string"===typeof L){if(n(L)>40){var V={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:L};null===p?p=[V]:p.push(V),h++}else if(n(L)<1){var _={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:L};null===p?p=[_]:p.push(_),h++}else if(!o.test(L)){var R={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:L};null===p?p=[R]:p.push(R),h++}}else{var B={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:L};null===p?p=[B]:p.push(B),h++}var C=j===h;if(!C){var q={instancePath:r,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:L},message:"property name must be valid"};null===p?p=[q]:p.push(q),h++;break}}if(C)for(var U in e){var S=h;g(e[U],{instancePath:r+"/"+U.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:U,rootData:m})||(h=(p=null===p?g.errors:p.concat(g.errors)).length);var Z=S===h;if(!Z)break}}else{var M={instancePath:r,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};null===p?p=[M]:p.push(M),h++}T=E===h;f=f||T}if(!f){var K={instancePath:r,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return null===p?p=[K]:p.push(K),h++,v.errors=p,!1}return h=u,null!==p&&(u?p.length=u:p=null),v.errors=p,0===h}function P(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,r=void 0===t?"":t;a.parentData,a.parentDataProperty;var i=a.rootData,m=void 0===i?e:i,p=null,h=0;if(0===h){if(!e||"object"!=s()(e)||Array.isArray(e))return P.errors=[{instancePath:r,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;if(Object.keys(e).length>10)return P.errors=[{instancePath:r,schemaPath:"#/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"}],!1;for(var u in e){var f=h,d=h;if(h===d)if("string"===typeof u){if(n(u)>40){var c={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:u};null===p?p=[c]:p.push(c),h++}else if(n(u)<1){var y={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:u};null===p?p=[y]:p.push(y),h++}else if(!o.test(u)){var l={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:u};null===p?p=[l]:p.push(l),h++}}else{var g={instancePath:r,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:u};null===p?p=[g]:p.push(g),h++}var w=f===h;if(!w){var F={instancePath:r,schemaPath:"#/propertyNames",keyword:"propertyNames",params:{propertyName:u},message:"property name must be valid"};return null===p?p=[F]:p.push(F),h++,P.errors=p,!1}}if(w)for(var k in e){var b=h;v(e[k],{instancePath:r+"/"+k.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:k,rootData:m})||(h=(p=null===p?v.errors:p.concat(v.errors)).length);var x=b===h;if(!x)break}}return P.errors=p,0===h}function w(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,r=void 0===t?"":t;a.parentData,a.parentDataProperty;var i=a.rootData,m=void 0===i?e:i,p=null,h=0;if(0===h){if(!e||"object"!=s()(e)||Array.isArray(e))return w.errors=[{instancePath:r,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var u;if(void 0===e.chainId&&(u="chainId")||void 0===e.address&&(u="address")||void 0===e.decimals&&(u="decimals")||void 0===e.name&&(u="name")||void 0===e.symbol&&(u="symbol"))return w.errors=[{instancePath:r,schemaPath:"#/required",keyword:"required",params:{missingProperty:u},message:"must have required property '"+u+"'"}],!1;var l=h;for(var g in e)if("chainId"!==g&&"address"!==g&&"decimals"!==g&&"name"!==g&&"symbol"!==g&&"logoURI"!==g&&"tags"!==g&&"extensions"!==g)return w.errors=[{instancePath:r,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:g},message:"must NOT have additional properties"}],!1;if(l===h){if(void 0!==e.chainId){var v=e.chainId,F=h;if("number"!=typeof v||v%1||isNaN(v)||!isFinite(v))return w.errors=[{instancePath:r+"/chainId",schemaPath:"#/properties/chainId/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(h===F&&"number"==typeof v&&isFinite(v)&&(v<1||isNaN(v)))return w.errors=[{instancePath:r+"/chainId",schemaPath:"#/properties/chainId/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"}],!1;var k=F===h}else k=!0;if(k){if(void 0!==e.address){var b=e.address,x=h;if(h===x){if("string"!==typeof b)return w.errors=[{instancePath:r+"/address",schemaPath:"#/properties/address/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!d.test(b))return w.errors=[{instancePath:r+"/address",schemaPath:"#/properties/address/pattern",keyword:"pattern",params:{pattern:"^0x[a-fA-F0-9]{40}$"},message:'must match pattern "^0x[a-fA-F0-9]{40}$"'}],!1}k=x===h}else k=!0;if(k){if(void 0!==e.decimals){var D=e.decimals,N=h;if("number"!=typeof D||D%1||isNaN(D)||!isFinite(D))return w.errors=[{instancePath:r+"/decimals",schemaPath:"#/properties/decimals/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(h===N&&"number"==typeof D&&isFinite(D)){if(D>255||isNaN(D))return w.errors=[{instancePath:r+"/decimals",schemaPath:"#/properties/decimals/maximum",keyword:"maximum",params:{comparison:"<=",limit:255},message:"must be <= 255"}],!1;if(D<0||isNaN(D))return w.errors=[{instancePath:r+"/decimals",schemaPath:"#/properties/decimals/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1}k=N===h}else k=!0;if(k){if(void 0!==e.name){var O=e.name,$=h;if(h===$){if("string"!==typeof O)return w.errors=[{instancePath:r+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(n(O)>40)return w.errors=[{instancePath:r+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters"}],!1;if(n(O)<1)return w.errors=[{instancePath:r+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!c.test(O))return w.errors=[{instancePath:r+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w.'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$"},message:'must match pattern "^[ \\w.\'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$"'}],!1}k=$===h}else k=!0;if(k){if(void 0!==e.symbol){var z=e.symbol,T=h;if(h===T){if("string"!==typeof z)return w.errors=[{instancePath:r+"/symbol",schemaPath:"#/properties/symbol/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(n(z)>20)return w.errors=[{instancePath:r+"/symbol",schemaPath:"#/properties/symbol/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(n(z)<1)return w.errors=[{instancePath:r+"/symbol",schemaPath:"#/properties/symbol/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!y.test(z))return w.errors=[{instancePath:r+"/symbol",schemaPath:"#/properties/symbol/pattern",keyword:"pattern",params:{pattern:"^[a-zA-Z0-9+\\-%/$.]+$"},message:'must match pattern "^[a-zA-Z0-9+\\-%/$.]+$"'}],!1}k=T===h}else k=!0;if(k){if(void 0!==e.logoURI){var E=e.logoURI,I=h;if(h===I&&h===I){if("string"!==typeof E)return w.errors=[{instancePath:r+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!f(E))return w.errors=[{instancePath:r+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}k=I===h}else k=!0;if(k){if(void 0!==e.tags){var L=e.tags,j=h;if(h===j){if(!Array.isArray(L))return w.errors=[{instancePath:r+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;if(L.length>10)return w.errors=[{instancePath:r+"/tags",schemaPath:"#/properties/tags/maxItems",keyword:"maxItems",params:{limit:10},message:"must NOT have more than 10 items"}],!1;for(var A=L.length,V=0;V<A;V++){var _=L[V],R=h,B=h;if(h===B){if("string"!==typeof _)return w.errors=[{instancePath:r+"/tags/"+V,schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(n(_)>10)return w.errors=[{instancePath:r+"/tags/"+V,schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters"}],!1;if(n(_)<1)return w.errors=[{instancePath:r+"/tags/"+V,schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!o.test(_))return w.errors=[{instancePath:r+"/tags/"+V,schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"'}],!1}if(!(R===h))break}}k=j===h}else k=!0;if(k)if(void 0!==e.extensions){var C=h;P(e.extensions,{instancePath:r+"/extensions",parentData:e,parentDataProperty:"extensions",rootData:m})||(h=(p=null===p?P.errors:p.concat(P.errors)).length);k=C===h}else k=!0}}}}}}}}return w.errors=p,0===h}function F(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,r=void 0===t?"":t;a.parentData,a.parentDataProperty;var i=a.rootData,d=void 0===i?e:i,c=null,y=0;if(0===y){if(!e||"object"!=s()(e)||Array.isArray(e))return F.errors=[{instancePath:r,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var l;if(void 0===e.tokens&&(l="tokens"))return F.errors=[{instancePath:r,schemaPath:"#/required",keyword:"required",params:{missingProperty:l},message:"must have required property '"+l+"'"}],!1;var g=y;for(var v in e)if("name"!==v&&"timestamp"!==v&&"version"!==v&&"tokens"!==v&&"keywords"!==v&&"tags"!==v&&"logoURI"!==v)return F.errors=[{instancePath:r,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:v},message:"must NOT have additional properties"}],!1;if(g===y){if(void 0!==e.name){var P=e.name,k=y;if(y===k){if("string"!==typeof P)return F.errors=[{instancePath:r+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(n(P)>30)return F.errors=[{instancePath:r+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:30},message:"must NOT have more than 30 characters"}],!1;if(n(P)<1)return F.errors=[{instancePath:r+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!m.test(P))return F.errors=[{instancePath:r+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}var b=k===y}else b=!0;if(b){if(void 0!==e.timestamp){var x=e.timestamp,D=y;if(y===D&&y===D){if("string"!==typeof x)return F.errors=[{instancePath:r+"/timestamp",schemaPath:"#/properties/timestamp/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!u.validate(x))return F.errors=[{instancePath:r+"/timestamp",schemaPath:"#/properties/timestamp/format",keyword:"format",params:{format:"date-time"},message:'must match format "date-time"'}],!1}b=D===y}else b=!0;if(b){if(void 0!==e.version){var N=e.version,O=y,$=y;if(y===$){if(!N||"object"!=s()(N)||Array.isArray(N))return F.errors=[{instancePath:r+"/version",schemaPath:"#/definitions/Version/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var z;if(void 0===N.major&&(z="major")||void 0===N.minor&&(z="minor")||void 0===N.patch&&(z="patch"))return F.errors=[{instancePath:r+"/version",schemaPath:"#/definitions/Version/required",keyword:"required",params:{missingProperty:z},message:"must have required property '"+z+"'"}],!1;var T=y;for(var E in N)if("major"!==E&&"minor"!==E&&"patch"!==E)return F.errors=[{instancePath:r+"/version",schemaPath:"#/definitions/Version/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:E},message:"must NOT have additional properties"}],!1;if(T===y){if(void 0!==N.major){var I=N.major,L=y;if("number"!=typeof I||I%1||isNaN(I)||!isFinite(I))return F.errors=[{instancePath:r+"/version/major",schemaPath:"#/definitions/Version/properties/major/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(y===L&&"number"==typeof I&&isFinite(I)&&(I<0||isNaN(I)))return F.errors=[{instancePath:r+"/version/major",schemaPath:"#/definitions/Version/properties/major/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var j=L===y}else j=!0;if(j){if(void 0!==N.minor){var A=N.minor,V=y;if("number"!=typeof A||A%1||isNaN(A)||!isFinite(A))return F.errors=[{instancePath:r+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(y===V&&"number"==typeof A&&isFinite(A)&&(A<0||isNaN(A)))return F.errors=[{instancePath:r+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;j=V===y}else j=!0;if(j)if(void 0!==N.patch){var _=N.patch,R=y;if("number"!=typeof _||_%1||isNaN(_)||!isFinite(_))return F.errors=[{instancePath:r+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(y===R&&"number"==typeof _&&isFinite(_)&&(_<0||isNaN(_)))return F.errors=[{instancePath:r+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;j=R===y}else j=!0}}}b=O===y}else b=!0;if(b){if(void 0!==e.tokens){var B=e.tokens,C=y;if(y===C){if(!Array.isArray(B))return F.errors=[{instancePath:r+"/tokens",schemaPath:"#/properties/tokens/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;if(B.length>1e4)return F.errors=[{instancePath:r+"/tokens",schemaPath:"#/properties/tokens/maxItems",keyword:"maxItems",params:{limit:1e4},message:"must NOT have more than 10000 items"}],!1;if(B.length<1)return F.errors=[{instancePath:r+"/tokens",schemaPath:"#/properties/tokens/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items"}],!1;for(var q=B.length,U=0;U<q;U++){var S=y;if(w(B[U],{instancePath:r+"/tokens/"+U,parentData:B,parentDataProperty:U,rootData:d})||(y=(c=null===c?w.errors:c.concat(w.errors)).length),!(S===y))break}}b=C===y}else b=!0;if(b){if(void 0!==e.keywords){var Z=e.keywords,M=y;if(y===M){if(!Array.isArray(Z))return F.errors=[{instancePath:r+"/keywords",schemaPath:"#/properties/keywords/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;if(Z.length>20)return F.errors=[{instancePath:r+"/keywords",schemaPath:"#/properties/keywords/maxItems",keyword:"maxItems",params:{limit:20},message:"must NOT have more than 20 items"}],!1;for(var K=!0,J=Z.length,H=0;H<J;H++){var W=Z[H],Y=y;if(y===Y){if("string"!==typeof W)return F.errors=[{instancePath:r+"/keywords/"+H,schemaPath:"#/properties/keywords/items/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(n(W)>20)return F.errors=[{instancePath:r+"/keywords/"+H,schemaPath:"#/properties/keywords/items/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(n(W)<1)return F.errors=[{instancePath:r+"/keywords/"+H,schemaPath:"#/properties/keywords/items/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!m.test(W))return F.errors=[{instancePath:r+"/keywords/"+H,schemaPath:"#/properties/keywords/items/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}if(!(K=Y===y))break}if(K){var G,Q=Z.length;if(Q>1)for(var X={};Q--;){var ee=Z[Q];if("string"===typeof ee){if("number"==typeof X[ee])return G=X[ee],F.errors=[{instancePath:r+"/keywords",schemaPath:"#/properties/keywords/uniqueItems",keyword:"uniqueItems",params:{i:Q,j:G},message:"must NOT have duplicate items (items ## "+G+" and "+Q+" are identical)"}],!1;X[ee]=Q}}}}b=M===y}else b=!0;if(b){if(void 0!==e.tags){var ae=e.tags,te=y;if(y===te){if(!ae||"object"!=s()(ae)||Array.isArray(ae))return F.errors=[{instancePath:r+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;if(Object.keys(ae).length>20)return F.errors=[{instancePath:r+"/tags",schemaPath:"#/properties/tags/maxProperties",keyword:"maxProperties",params:{limit:20},message:"must NOT have more than 20 properties"}],!1;for(var re in ae){var se=y,ie=y;if(y===ie)if("string"===typeof re){if(n(re)>10){var ne={instancePath:r+"/tags",schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters",propertyName:re};null===c?c=[ne]:c.push(ne),y++}else if(n(re)<1){var me={instancePath:r+"/tags",schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:re};null===c?c=[me]:c.push(me),y++}else if(!o.test(re)){var oe={instancePath:r+"/tags",schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:re};null===c?c=[oe]:c.push(oe),y++}}else{var pe={instancePath:r+"/tags",schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:re};null===c?c=[pe]:c.push(pe),y++}var he=se===y;if(!he){var ue={instancePath:r+"/tags",schemaPath:"#/properties/tags/propertyNames",keyword:"propertyNames",params:{propertyName:re},message:"property name must be valid"};return null===c?c=[ue]:c.push(ue),y++,F.errors=c,!1}}if(he)for(var fe in ae){var de=ae[fe],ce=y,ye=y;if(y===ye){if(!de||"object"!=s()(de)||Array.isArray(de))return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var le=void 0;if(void 0===de.name&&(le="name")||void 0===de.description&&(le="description"))return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/required",keyword:"required",params:{missingProperty:le},message:"must have required property '"+le+"'"}],!1;var ge=y;for(var ve in de)if("name"!==ve&&"description"!==ve)return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:ve},message:"must NOT have additional properties"}],!1;if(ge===y){if(void 0!==de.name){var Pe=de.name,we=y;if(y===we){if("string"!==typeof Pe)return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(n(Pe)>20)return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(n(Pe)<1)return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!p.test(Pe))return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w]+$"},message:'must match pattern "^[ \\w]+$"'}],!1}var Fe=we===y}else Fe=!0;if(Fe)if(void 0!==de.description){var ke=de.description,be=y;if(y===be){if("string"!==typeof ke)return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(n(ke)>200)return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/maxLength",keyword:"maxLength",params:{limit:200},message:"must NOT have more than 200 characters"}],!1;if(n(ke)<1)return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!h.test(ke))return F.errors=[{instancePath:r+"/tags/"+fe.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/pattern",keyword:"pattern",params:{pattern:"^[ \\w\\.,:]+$"},message:'must match pattern "^[ \\w\\.,:]+$"'}],!1}Fe=be===y}else Fe=!0}}var xe=ce===y;if(!xe)break}}b=te===y}else b=!0;if(b)if(void 0!==e.logoURI){var De=e.logoURI,Ne=y;if(y===Ne&&y===Ne){if("string"!==typeof De)return F.errors=[{instancePath:r+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!f(De))return F.errors=[{instancePath:r+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}b=Ne===y}else b=!0}}}}}}}return F.errors=c,0===y}},1873:function(e,a,t){"use strict";function r(e){for(var a,t=e.length,r=0,s=0;s<t;)r++,(a=e.charCodeAt(s++))>=55296&&a<=56319&&s<t&&56320===(64512&(a=e.charCodeAt(s)))&&s++;return r}Object.defineProperty(a,"__esModule",{value:!0}),a.default=r,r.code='require("ajv/dist/runtime/ucs2length").default'},1874:function(e,a,t){"use strict";var r=t(203),s=t(811);function i(e,a){return{validate:e,compare:a}}Object.defineProperty(a,"__esModule",{value:!0}),a.formatNames=a.fastFormats=a.fullFormats=void 0,a.fullFormats={date:i(o,p),time:i(u,f),"date-time":i((function(e){var a=e.split(d);return 2===a.length&&o(a[0])&&u(a[1],!0)}),c),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:function(e){return y.test(e)&&l.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])*)?$/i,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:function(e){if(F.test(e))return!1;try{return new RegExp(e),!0}catch(a){return!1}},uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:function(e){return g.lastIndex=0,g.test(e)},int32:{type:"number",validate:function(e){return Number.isInteger(e)&&e<=P&&e>=v}},int64:{type:"number",validate:function(e){return Number.isInteger(e)}},float:{type:"number",validate:w},double:{type:"number",validate:w},password:!0,binary:!0},a.fastFormats=s(s({},a.fullFormats),{},{date:i(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,p),time:i(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,f),"date-time":i(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,c),uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i}),a.formatNames=Object.keys(a.fullFormats);var n=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,m=[0,31,28,31,30,31,30,31,31,30,31,30,31];function o(e){var a=n.exec(e);if(!a)return!1;var t=+a[1],r=+a[2],s=+a[3];return r>=1&&r<=12&&s>=1&&s<=(2===r&&function(e){return e%4===0&&(e%100!==0||e%400===0)}(t)?29:m[r])}function p(e,a){if(e&&a)return e>a?1:e<a?-1:0}var h=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;function u(e,a){var t=h.exec(e);if(!t)return!1;var r=+t[1],s=+t[2],i=+t[3],n=t[5];return(r<=23&&s<=59&&i<=59||23===r&&59===s&&60===i)&&(!a||""!==n)}function f(e,a){if(e&&a){var t=h.exec(e),r=h.exec(a);if(t&&r)return(e=t[1]+t[2]+t[3]+(t[4]||""))>(a=r[1]+r[2]+r[3]+(r[4]||""))?1:e<a?-1:0}}var d=/t|\s/i;function c(e,a){if(e&&a){var t=e.split(d),s=r(t,2),i=s[0],n=s[1],m=a.split(d),o=r(m,2),h=o[0],u=o[1],c=p(i,h);if(void 0!==c)return c||f(n,u)}}var y=/\/|:/,l=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;var g=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;var v=-Math.pow(2,31),P=Math.pow(2,31)-1;function w(){return!0}var F=/[^\\]\\Z/}}]);
//# sourceMappingURL=16.121e90f9.chunk.js.map