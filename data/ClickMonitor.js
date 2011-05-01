this.on('click', function(node)
{

    	console.log(document.innerHTML);

	var src=outerHTML(node);
	postMessage(src);
});

function outerHTML(node)
{
    var div = document.createElement('div'), h;
    div.appendChild( node.cloneNode(true) );
    h = div.innerHTML;
    div = null;
    return h;
}
