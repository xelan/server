!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/js/",r(r.s=284)}({156:function(e,r,a){a.p=OC.linkTo("files_sharing","js/dist/"),a.nc=btoa(OC.requestToken),window.OCP.Collaboration.registerType("file",{action:function(){return new Promise((function(e,r){OC.dialogs.filepicker(t("files_sharing","Link to a file"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,r){e(r.id)})).fail((function(){r(new Error("Cannot get fileinfo"))}))}),!1,null,!1,OC.dialogs.FILEPICKER_TYPE_CHOOSE,"",{allowDirectoryChooser:!0})}))},typeString:t("files_sharing","Link to a file"),typeIconClass:"icon-files-dark"})},19:function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var n=(s=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(l," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([n]).join("\n")}var s,o,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,a){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(n[s]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);a&&n[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},228:function(e,t){!function(){"use strict";var e=OC.Backbone.View.extend({tagName:"span",events:{click:"_onClick"},_dirInfo:void 0,render:function(e){if(this._dirInfo=e.dirInfo||null,null===this._dirInfo||"/"===this._dirInfo.path&&""===this._dirInfo.name)this.$el.removeClass("shared icon-public icon-shared"),this.$el.hide();else{var t=e.dirInfo&&e.dirInfo.shareTypes&&e.dirInfo.shareTypes.length>0;this.$el.removeClass("shared icon-public icon-shared"),t?(this.$el.addClass("shared"),-1!==e.dirInfo.shareTypes.indexOf(OC.Share.SHARE_TYPE_LINK)?this.$el.addClass("icon-public"):this.$el.addClass("icon-shared")):this.$el.addClass("icon-shared"),this.$el.show(),this.delegateEvents()}return this},_onClick:function(e){e.preventDefault();var t=new OCA.Files.FileInfoModel(this._dirInfo),r=this;t.on("change",(function(){r.render({dirInfo:r._dirInfo})}));var a=t.attributes.path+"/"+t.attributes.name;OCA.Files.Sidebar.open(a),OCA.Files.Sidebar.setActiveTab("sharing")}});OCA.Sharing.ShareBreadCrumbView=e}()},229:function(e,t,r){var a=r(230);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,r(49).default)("57e7eec1",a,!0,{})},230:function(e,t,r){"use strict";r.r(t);var a=r(19),n=r.n(a)()(!0);n.push([e.i,"div.crumb span.icon-shared,div.crumb span.icon-public{display:inline-block;cursor:pointer;opacity:0.2;margin-right:6px}div.crumb span.icon-shared.shared,div.crumb span.icon-public.shared{opacity:0.7}\n","",{"version":3,"sources":["/home/roeland/nc/server/apps/files_sharing/src/style/sharebreadcrumb.scss"],"names":[],"mappings":"AAsBA,sDAEC,oBAAqB,CACrB,cAAe,CACf,WAAY,CACZ,gBAAiB,CACjB,oEAIA,WAAY","file":"sharebreadcrumb.scss","sourcesContent":["/**\n * @copyright 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @author 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program.  If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\ndiv.crumb span.icon-shared,\ndiv.crumb span.icon-public {\n\tdisplay: inline-block;\n\tcursor: pointer;\n\topacity: 0.2;\n\tmargin-right: 6px;\n}\n\ndiv.crumb span.icon-shared.shared,\ndiv.crumb span.icon-public.shared {\n\topacity: 0.7;\n}\n"]}]),t.default=n},284:function(e,r,a){"use strict";a.r(r);var n=a(50),i=a.n(n);_.extend(OC.Files.Client,{PROPERTY_SHARE_TYPES:"{"+OC.Files.Client.NS_OWNCLOUD+"}share-types",PROPERTY_OWNER_ID:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-id",PROPERTY_OWNER_DISPLAY_NAME:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-display-name"}),OCA.Sharing||(OCA.Sharing={}),OCA.Sharing.Util={_REMOTE_OWNER_REGEXP:new RegExp("^(([^@]*)@(([^@^/^\\s]*)@)?)([^[\\s/]*)([/](.*))?$"),attach:function(e){if(OC.Share&&"trashbin"!==e.id&&"files.public"!==e.id){var r=e.fileActions,a=e._createRow;e._createRow=function(e){var t=a.apply(this,arguments),n=OCA.Sharing.Util.getSharePermissions(e);return 0===e.permissions&&(delete r.actions.all.Comment,delete r.actions.all.Details,delete r.actions.all.Goto),t.attr("data-share-permissions",n),e.shareOwner&&(t.attr("data-share-owner",e.shareOwner),t.attr("data-share-owner-id",e.shareOwnerId),"shared-root"===e.mountType&&t.attr("data-permissions",e.permissions|OC.PERMISSION_UPDATE)),e.recipientData&&!_.isEmpty(e.recipientData)&&t.attr("data-share-recipient-data",JSON.stringify(e.recipientData)),e.shareTypes&&t.attr("data-share-types",e.shareTypes.join(",")),t};var n=e.elementToFile;e.elementToFile=function(e){var t=n.apply(this,arguments);if(t.sharePermissions=e.attr("data-share-permissions")||void 0,t.shareOwner=e.attr("data-share-owner")||void 0,t.shareOwnerId=e.attr("data-share-owner-id")||void 0,e.attr("data-share-types")&&(t.shareTypes=e.attr("data-share-types").split(",")),e.attr("data-expiration")){var r=parseInt(e.attr("data-expiration"));t.shares=[],t.shares.push({expiration:r})}return t};var i=e._getWebdavProperties;e._getWebdavProperties=function(){var e=i.apply(this,arguments);return e.push(OC.Files.Client.PROPERTY_OWNER_ID),e.push(OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME),e.push(OC.Files.Client.PROPERTY_SHARE_TYPES),e},e.filesClient.addFileInfoParser((function(e){var t={},r=e.propStat[0].properties,a=r[OC.Files.Client.PROPERTY_PERMISSIONS];a&&a.indexOf("S")>=0&&(t.shareOwner=r[OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME],t.shareOwnerId=r[OC.Files.Client.PROPERTY_OWNER_ID]);var n=r[OC.Files.Client.PROPERTY_SHARE_TYPES];return n&&(t.shareTypes=_.chain(n).filter((function(e){return e.namespaceURI===OC.Files.Client.NS_OWNCLOUD&&"share-type"===e.nodeName.split(":")[1]})).map((function(e){return parseInt(e.textContent||e.text,10)})).value()),t})),e.$el.on("fileActionsReady",(function(e){var t=e.$files;_.each(t,(function(e){var t=$(e),r=t.attr("data-share-types")||"",a=t.attr("data-share-owner");if(r||a){var n=!1,i=!1;_.each(r.split(",")||[],(function(e){(e=parseInt(e,10))===OC.Share.SHARE_TYPE_LINK||e===OC.Share.SHARE_TYPE_EMAIL?n=!0:(e===OC.Share.SHARE_TYPE_USER||e===OC.Share.SHARE_TYPE_GROUP||e===OC.Share.SHARE_TYPE_REMOTE||e===OC.Share.SHARE_TYPE_CIRCLE||e===OC.Share.SHARE_TYPE_ROOM)&&(i=!0)})),OCA.Sharing.Util._updateFileActionIcon(t,i,n)}}))})),e.$el.on("changeDirectory",(function(){OCA.Sharing.sharesLoaded=!1})),r.registerAction({name:"Share",displayName:function(e){if(e&&e.$file){var r=parseInt(e.$file.data("share-types"),10),a=e.$file.data("share-owner-id");if(r>=0||a)return t("core","Shared")}return t("core","Share")},altText:t("core","Share"),mime:"all",order:-150,permissions:OC.PERMISSION_ALL,iconClass:function(e,t){var r=parseInt(t.$file.data("share-types"),10);return r===OC.Share.SHARE_TYPE_EMAIL||r===OC.Share.SHARE_TYPE_LINK?"icon-public":"icon-shared"},icon:function(e,t){var r=t.$file.data("share-owner-id");if(r)return OC.generateUrl("/avatar/".concat(r,"/32"))},type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(t,r){var a=parseInt(r.$file.data("share-permissions"),10);(isNaN(a)||a>0)&&e.showDetailsView(t,"sharing")},render:function(e,t,a){return 0!=(parseInt(a.$file.data("permissions"),10)&OC.PERMISSION_SHARE)||a.$file.attr("data-share-owner")?r._defaultRenderAction.call(r,e,t,a):null}});var s=new OCA.Sharing.ShareBreadCrumbView;e.registerBreadCrumbDetailView(s)}},_updateFileListDataAttributes:function(e,t,r){if("files"!==e.id)if(_.pluck(r.get("shares"),"share_with_displayname").length){var a=_.mapObject(r.get("shares"),(function(e){return{shareWith:e.share_with,shareWithDisplayName:e.share_with_displayname}}));t.attr("data-share-recipient-data",JSON.stringify(a))}else t.removeAttr("data-share-recipient-data")},_updateFileActionIcon:function(e,t,r){return!!(t||r||e.attr("data-share-recipient-data")||e.attr("data-share-owner"))&&(OCA.Sharing.Util._markFileAsShared(e,!0,r),!0)},_markFileAsShared:function(e,r,a){var n,i,s,o,l=e.find('.fileactions .action[data-action="Share"]'),c=e.data("type"),d=l.find(".icon"),h=e.attr("data-share-owner-id"),u=e.attr("data-share-owner"),p=e.attr("data-mounttype"),f="icon-shared";l.removeClass("shared-style"),"dir"===c&&(r||a||h)?(o=void 0!==p&&"shared-root"!==p&&"shared"!==p?OC.MimeType.getIconUrl("dir-"+p):a?OC.MimeType.getIconUrl("dir-public"):OC.MimeType.getIconUrl("dir-shared"),e.find(".filename .thumbnail").css("background-image","url("+o+")"),e.attr("data-icon",o)):"dir"===c&&("true"===e.attr("data-e2eencrypted")?(o=OC.MimeType.getIconUrl("dir-encrypted"),e.attr("data-icon",o)):p&&0===p.indexOf("external")?(o=OC.MimeType.getIconUrl("dir-external"),e.attr("data-icon",o)):(o=OC.MimeType.getIconUrl("dir"),e.removeAttr("data-icon")),e.find(".filename .thumbnail").css("background-image","url("+o+")")),r||h?(i=e.data("share-recipient-data"),l.addClass("shared-style"),s="<span>"+t("core","Shared")+"</span>",h?(n=t("core","Shared by"),s=OCA.Sharing.Util._formatRemoteShare(h,u,n)):i&&(s=OCA.Sharing.Util._formatShareList(i)),l.html(s).prepend(d),(h||i)&&(l.find(".avatar").each((function(){$(this).avatar($(this).data("username"),32)})),l.find("span[title]").tooltip({placement:"top"}))):l.html('<span class="hidden-visually">'+t("core","Shared")+"</span>").prepend(d),a&&(f="icon-public"),d.removeClass("icon-shared icon-public").addClass(f)},_formatRemoteShare:function(e,t,r){var a=OCA.Sharing.Util._REMOTE_OWNER_REGEXP.exec(e);if(!a||!a[6])return'<span class="avatar" data-username="'+i()(e)+'" title="'+r+" "+i()(t)+'"></span><span class="hidden-visually">'+r+" "+i()(t)+"</span> ";var n=a[2],s=a[4],o=a[5],l=r+" "+n;s&&(l+="@"+s),o&&(l+="@"+o);var c='<span class="remoteAddress" title="'+i()(l)+'">';return c+='<span class="username">'+i()(n)+"</span>",s&&(c+='<span class="userDomain">@'+i()(s)+"</span>"),c+="</span> "},_formatShareList:function(e){var r=this;return(e=_.toArray(e)).sort((function(e,t){return e.shareWithDisplayName.localeCompare(t.shareWithDisplayName)})),$.map(e,(function(e){return r._formatRemoteShare(e.shareWith,e.shareWithDisplayName,t("core","Shared with"))}))},markFileAsShared:function(e,r,a){var n,i,s,o,l=e.find('.fileactions .action[data-action="Share"]'),c=e.data("type"),d=l.find(".icon"),h=e.attr("data-share-owner-id"),u=e.attr("data-share-owner"),p=e.attr("data-mounttype"),f="icon-shared";l.removeClass("shared-style"),"dir"===c&&(r||a||h)?(o=void 0!==p&&"shared-root"!==p&&"shared"!==p?OC.MimeType.getIconUrl("dir-"+p):a?OC.MimeType.getIconUrl("dir-public"):OC.MimeType.getIconUrl("dir-shared"),e.find(".filename .thumbnail").css("background-image","url("+o+")"),e.attr("data-icon",o)):"dir"===c&&("true"===e.attr("data-e2eencrypted")?(o=OC.MimeType.getIconUrl("dir-encrypted"),e.attr("data-icon",o)):p&&0===p.indexOf("external")?(o=OC.MimeType.getIconUrl("dir-external"),e.attr("data-icon",o)):(o=OC.MimeType.getIconUrl("dir"),e.removeAttr("data-icon")),e.find(".filename .thumbnail").css("background-image","url("+o+")")),r||h?(i=e.data("share-recipient-data"),l.addClass("shared-style"),s="<span>"+t("core","Shared")+"</span>",h?(n=t("core","Shared by"),s=this._formatRemoteShare(h,u,n)):i&&(s=this._formatShareList(i)),l.html(s).prepend(d),(h||i)&&(l.find(".avatar").each((function(){$(this).avatar($(this).data("username"),32)})),l.find("span[title]").tooltip({placement:"top"}))):l.html('<span class="hidden-visually">'+t("core","Shared")+"</span>").prepend(d),a&&(f="icon-public"),d.removeClass("icon-shared icon-public").addClass(f)},getSharePermissions:function(e){return e.sharePermissions}},OC.Plugins.register("OCA.Files.FileList",OCA.Sharing.Util);a(228),a(229),a(156);a.p=OC.linkTo("files_sharing","js/dist/"),a.nc=btoa(OC.requestToken),window.OCA.Sharing=OCA.Sharing},49:function(e,t,r){"use strict";function a(e,t){for(var r=[],a={},n=0;n<t.length;n++){var i=t[n],s=i[0],o={id:e+":"+n,css:i[1],media:i[2],sourceMap:i[3]};a[s]?a[s].parts.push(o):r.push(a[s]={id:s,parts:[o]})}return r}r.r(t),r.d(t,"default",(function(){return p}));var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=n&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},h=null,u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,r,n){c=r,h=n||{};var s=a(e,t);return f(s),function(t){for(var r=[],n=0;n<s.length;n++){var o=s[n];(l=i[o.id]).refs--,r.push(l)}t?f(s=a(e,t)):s=[];for(n=0;n<r.length;n++){var l;if(0===(l=r[n]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}}function f(e){for(var t=0;t<e.length;t++){var r=e[t],a=i[r.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](r.parts[n]);for(;n<r.parts.length;n++)a.parts.push(C(r.parts[n]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{var s=[];for(n=0;n<r.parts.length;n++)s.push(C(r.parts[n]));i[r.id]={id:r.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function C(e){var t,r,a=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(a){if(c)return d;a.parentNode.removeChild(a)}if(u){var n=l++;a=o||(o=m()),t=g.bind(null,a,n,!1),r=g.bind(null,a,n,!0)}else a=m(),t=y.bind(null,a),r=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else r()}}var O,v=(O=[],function(e,t){return O[e]=t,O.filter(Boolean).join("\n")});function g(e,t,r,a){var n=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=v(t,n);else{var i=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function y(e,t){var r=t.css,a=t.media,n=t.sourceMap;if(a&&e.setAttribute("media",a),h.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},50:function(e,t,r){"use strict";var a=/["'&<>]/;e.exports=function(e){var t,r=""+e,n=a.exec(r);if(!n)return r;var i="",s=0,o=0;for(s=n.index;s<r.length;s++){switch(r.charCodeAt(s)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==s&&(i+=r.substring(o,s)),o=s+1,i+=t}return o!==s?i+r.substring(o,s):i}}});
//# sourceMappingURL=additionalScripts.js.map