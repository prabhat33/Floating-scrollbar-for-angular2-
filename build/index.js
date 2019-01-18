"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.customScrollBar = undefined;

const SimpleScrollbar = require('simple-scrollbar');

var customScroll={};
var globalOffset = require("global-offset"),
    resize = require("resize-event");

customScroll.scroll = function(element,option) {
    var offset = globalOffset(element),
        scrollbar = document.createElement("div"),
        inner = document.createElement("div");

    element.style.overflowX = "scroll";

    element.parentNode.insertBefore(scrollbar, element);

    scrollbar.style.backgroundColor = "transparent";
    scrollbar.style.position = "fixed";
    scrollbar.style.bottom = 0;
    scrollbar.style.left = offset.left + "px";
    scrollbar.style.height = "20px";
    scrollbar.style.width = element.getBoundingClientRect().width + "px";
    scrollbar.style.overflowX = "scroll";
    scrollbar.style.overflowY = "hidden";

    scrollbar.appendChild(inner);

    inner.style.height = "1px";
    inner.style.width = element.children[0].getBoundingClientRect().width + "px";
    resize(element.children[0], function() {
        inner.style.width = element.children[0].getBoundingClientRect().width + "px";
    });

    scrollbar.onscroll = function() {
        element.scrollLeft = scrollbar.scrollLeft;
    };
    element.onscroll = function() {
        scrollbar.scrollLeft = element.scrollLeft;
    };

    //Don't just do it, make the scrollbar beautiful

    if(option && option.beautifyScroll !=undefined && option.beautifyScroll==true){

        scrollbar.classList.add("style-bar");
        element.classList.add("style-bar");

        // Developer has asked for some custom color for the scrollbar

        if(option.scrollBarColor&& option.scrollBarColor!=false && option.scrollBarColor!=undefined){
            customCss(option.scrollBarColor);
        }else{
            customCss("#F5F5F5");
        }

    }

    window.onscroll = function() {
        scrollbar.style.display = element.getBoundingClientRect().height + offset.top <= window.scrollY + window.innerHeight ? "none" : "block";
        scrollbar.scrollLeft = element.scrollLeft;
    };
};

function customCss(color){
    var styleEl = document.createElement('style');
    styleEl.innerHTML = '.style-bar::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); border-radius: 10px; background-color:#F5F5F5; } .style-bar::-webkit-scrollbar { width: 12px; background-color: #F5F5F5; } .style-bar::-webkit-scrollbar-thumb { border-radius: 10px; -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); background-color: '+color+'; }';
    document.head.appendChild(styleEl);
}

exports.customScrollBar = customScroll;
