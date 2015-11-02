var textObject = {

    delay : 300,
    effect : 'replace',
    classColour : 'blue',

    flash : function(identity, effect, delay) {

        "use strict";

        var self = this;

        $(identity).each(function() {

            effect = effect || self.effect;
            delay = delay || self.delay;
            self.flashExe($(this), effect, delay);

        });

    },

    flashExe : function(obj, effect, delay) {

        "use strict";

        var self = this;

        setTimeout(function() {

            switch(effect) {

                case 'replace':
                    obj.toggle();
                    break;

                case 'colour':
                    obj.toggleClass(self.classColour);
                    break;

            }

            self.flashExe(obj, effect, delay);

        }, delay);

    }

};

$(function() {

    "use strict";

    textObject.flash('.flash');

});