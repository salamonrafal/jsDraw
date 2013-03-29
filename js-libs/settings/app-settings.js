$l(function(){
    var coreRunner = new coreJsDraw ({
        'workspace_id': 'workspace-1',
        'workspace_size': {
            'width': 800,
            'height': 600
        },
        'title': 'Example workspace',
        'description': 'Example workspace description',
        'grids': true,
        'rulers': true
    }).createWorkspace();

    _debug(coreRunner);
});