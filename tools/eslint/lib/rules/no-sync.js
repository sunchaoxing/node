/**
 * @fileoverview Rule to check for properties whose identifier ends with the string Sync
 * @author Matt DuVall<http://mattduvall.com/>
 */

/* jshint node:true */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow synchronous methods",
            category: "Node.js and CommonJS",
            recommended: false
        },

        schema: []
    },

    create: function(context) {

        return {

            MemberExpression: function(node) {
                let propertyName = node.property.name,
                    syncRegex = /.*Sync$/;

                if (syncRegex.exec(propertyName) !== null) {
                    context.report(node, "Unexpected sync method: '" + propertyName + "'.");
                }
            }
        };

    }
};
