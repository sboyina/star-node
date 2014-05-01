/* an empty file */
(function(){
	var server = undefined;
	
	function startServer(rootDir, port){
		var express = require('express');
		server = express();
		server.use(express.static(rootDir));
		server.listen(port, function(){			
			console.log('Server started on '+ port);
		});
	}
	
	function stopServer(){
		if(server){
			server.close();
		}
	}
	
	exports.start = startServer;
	exports.stop = stopServer;
})();