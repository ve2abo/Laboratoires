var tasks = [];

exports.getAllTasks = function(req,res) {
	res.status(200).json({tasks: tasks});
};

exports.createTask = function(req,res) {
	if (req.body.task === undefined) {
		res.send(400);
	}
	tasks.push(req.body);
	res.status(201).send();
};

exports.updateTask = function(req,res) {
	if ((req.body.task === undefined) || (req.body.task == "")) {
		res.send(400);
	} else {
		var bFound = false;

		for (i=0; i<tasks.length; i++) {
			if (tasks[i].id === req.body.id) {
				tasks[i] = req.body;
				res.status(200).send();
				bFound = true;
			}
		}

		if (bFound == false) {
			res.status(404).send();
		}
	}
};

exports.deleteTask = function(req,res) {
	if (req.params.id === undefined) {
		res.send(400);
	} else {
		var bFound = false;

		for (i=0; i<tasks.length; i++) {
			if (tasks[i].id == req.params.id) {
				tasks.splice(i,1);
				res.status(200).send();
				bFound = true;
			}
		}

		if (bFound == false) {
			res.status(404).send();
		}
	}
};