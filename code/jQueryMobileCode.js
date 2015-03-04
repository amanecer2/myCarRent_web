// this is code adds to all pages the function by program!;

$(document).bind("mobileinit",function(){
//$.mobile.fixedToolbars.setTouchToggleEnabled(false);
$.mobile.defaultPageTransition="slide";
$.mobile.page.prototype.options.addBackBtn=true;
$.mobile.page.prototype.options.backBtnText="back";
//$.mobile.dialog.prototype.options.closeBtnText="Cancle"  // a back button to diloag
//$.mobile.dialog.prototype.options.addCloseBtn=true;
//$( "#dialogDiv").dialog({ closeBtnText: "Cancle" });
});
