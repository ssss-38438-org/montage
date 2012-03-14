/* <copyright>
 This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
 No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
 (c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
 </copyright> */
/*global require,exports */
var Montage = require("montage").Montage,
    Component = require("ui/component").Component;    

/**
 * The input type="text" field
 */
var TextInput = exports.TextInput = Montage.create(Component, {

    draw: {
        value: function() {
            //This is just a temporary hack to prevent the type to be doubled.
            this._element.type = "text";
        }
    }

});