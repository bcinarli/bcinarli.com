/*!
 * bcinarli.com
 * @developer Bilal Cinarli
 *
 * @preserve
 **/

var app = {
    version: "0.1.0"
};

(function(app, $, window) {
    "use strict";

    var _settings = {
            header  : "#masthead",
            logo    : ".logo",
            menu    : ".page-nav",
            duration: 1000
        },
        classes = {
            current: "current"
        },
        scrolling = false,
        sections = {
            gap        : 0,
            breakPoints: [],
            tops       : [],
            hash       : []
        },
        events = {
            "click": "click.go"
        };

    app.$objs = {};

    app.init = function() {
        app.$objs.header = $(_settings.header);
        app.$objs.gap = app.$objs.header.height();
        app.$objs.menu = $(_settings.menu);
        app.$objs.menuLinks = app.$objs.menu.find("a");

        app.$objs.isMobile = $("#wrapper").hasClass("is-mobile");

        app.sections.init();
        app.navigation.init();
        app.scroll.check();
    };

    app.toggle = function() {
        app.$objs.toggle.on(events.click, function() {
            app.$objs.menu.toggle();
        });
    };

    app.navigation = {
        init     : function() {
            app.navigation.trap(_settings.menu);
        },
        trap     : function(menu) {
            console.log("init");

            $("body").on(events.click, menu + " a, " + _settings.logo, function(e) {
                e.preventDefault();

                var link = $(this),
                    section = this.hash;

                if(app.$objs.isMobile) {
                    app.$objs.menu.hide();
                }

                app.scroll.to(section);
                app.navigation.highlight(link);
            });
        },
        highlight: function(link) {
            app.$objs.menuLinks.removeClass(classes.current);
            link.addClass(classes.current);
        }
    };

    app.scroll = {
        check: function() {
            $(window).on("scroll", function() {
                var _scroll = $(window).scrollTop(),
                    _class = "remove";

                if(_scroll > app.$objs.gap) {
                    _class = "add";
                }

                $("body")[_class + "Class"]("is-scrolled");

                app.sections.current(_scroll);
            });
        },

        to: function(section) {
            var _section = section || "#cover",
                scroll = 0;

            if(_section.length) {
                scrolling = true;
                scroll = sections.hash[_section] - app.$objs.gap;

                $("html,body").animate({
                    scrollTop: scroll
                }, _settings.duration, function() {
                    scrolling = false;
                });
            }
        }
    };

    app.sections = {
        vars: {
            closest       : 0,
            next          : 0,
            currentSection: ""
        },

        init: function() {
            sections.gap = app.$objs.gap;

            var _cover = "#cover",
                _coverTop = 0;

            sections.hash[_cover] = _coverTop;
            sections.tops[_coverTop] = _cover;
            sections.breakPoints.push(_coverTop);

            app.$objs.menuLinks.each(function() {
                var _hash = this.hash || "#cover",
                    s = $(_hash),
                    _top = s.offset().top;

                $(this).addClass("app-section-" + _hash.substr(1));

                sections.hash[_hash] = _top;
                sections.tops[_top] = _hash;
                sections.breakPoints.push(_top);
            });
        },

        current: function(scrollTop) {
            if(scrolling) {
                return;
            }

            for(var i = 0; i < sections.breakPoints.length; i++) {
                if(sections.breakPoints[i + 1] !== "undefined" && scrollTop + sections.gap < sections.breakPoints[i + 1]) {
                    app.sections.vars.closest = sections.breakPoints[i];
                    app.sections.vars.next = sections.breakPoints[i + 1];
                    app.sections.vars.currentSection = sections.tops[app.sections.vars.closest];
                    break;
                }
            }

            if(scrollTop + sections.gap >= app.sections.vars.next) {
                app.sections.vars.currentSection = sections.tops[app.sections.vars.next];
            }

            app.navigation.highlight(app.$objs.menuLinks.filter(".app-section-" + app.sections.vars.currentSection.substr(1)));
        }
    };
})(app, jQuery, window);

app.init();