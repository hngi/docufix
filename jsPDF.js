var doc = new jsPDF(); 
var specialElementHandlers = { 
    '#editor': function (element, renderer) { 
        return true; 
    } 
};
$('#cmd').click(function () { 
    var fileName = document.getElementById('saveAs').value
    doc.fromHTML($('#textareaDifferences').html(), 15, 15, { 
        'width': 190, 
            'elementHandlers': specialElementHandlers 
    }); 
    doc.save(fileName + " " + '.pdf'); 
});
