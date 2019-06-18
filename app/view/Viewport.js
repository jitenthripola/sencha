// Ext.define('TMS.view.Viewport', {
//     extend:'Ext.container.Viewport',
//     layout: 'border',
//     items: [{
//         region: 'south',
//         title: 'South Panel',
//         collapsible: true,
//         html: 'Information goes here',
//         split: true,
//         height: 100,
//         minHeight: 100
//     },  {
//         region: 'center',
//         xtype: 'tabpanel',
//         activeTab: 0,     
//         items: {
//             title: 'Default Tab',
//             html: 'The first tab\'s content. Others may be added dynamically'
//         }
//     }]
// });

Ext.define('TMS.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'Ext.toolbar.Toolbar',
        'Ext.panel.Panel',
    ],
    id: 'viewport',
    layout: 'border',

    items: [{
        region: 'south',
        title: 'Sencha POC',
        height: 'auto',
    },
        {
        xtype: 'toolbar',
        region: 'north',
        itemId: 'main-nav-toolbar',
        defaults: {
            scale: 'large',
            padding: '0 20',
            toggleGroup: 'main-nav',
            allowDepress: false
        },
        items: [{
            text: 'Home',
            itemId: 'home',
            pressed: true,
            handler: function() {
                Ext.History.add("#main")
            }
        },{
            text: 'Training',
            itemId: 'addCustomer',
            handler: function() {
                Ext.History.add("#addCustomer")
            }
        },{
            text: 'Login',
            itemId: 'customers',
            handler: function() {
                Ext.History.add("#customers")
            }
        },{
            text: 'Registraion',
            itemId: 'settings',
            handler: function() {
                Ext.History.add("#settings")
            }
        }]
    },{
        xtype: 'container',
        itemId: 'viewport-target',
        region: 'center',
        layout: 'fit'
    }]
});