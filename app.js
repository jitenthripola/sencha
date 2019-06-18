Ext.application({    

    name: 'TMS',     
    
    views: [
        'TMS.view.Viewport',
    ],

    requires: [
        'Ext.container.Viewport',        
    ], 
    autoCreateViewport: true,            
});
