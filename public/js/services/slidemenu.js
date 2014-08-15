angular.module('mean').factory('SlideMenu', function() {

  
    var dataFactory = {},
        toggled=true,
        elem= document.getElementById("main");
    
  // toggleClass
    var hasClass=function (elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    var toggleClass=function(elem,className){

        //var className="cbp-spmenu-push-toright";
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0 ) {
                newClass = newClass.replace( " " + className + " " , " " );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + className;
        }

    }

dataFactory.toggleClass=function() {
    var main= document.getElementById("main");
    var nav=document.getElementById("mainNav");
  toggleClass(main,"cbp-spmenu-push-toright");
  toggleClass(nav,"cbp-spmenu-margin-toright");
}
   


    return dataFactory;
})