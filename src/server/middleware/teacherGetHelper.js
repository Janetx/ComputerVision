const Cache = require('./../utility/cacheData.js');
const bluebird = require('bluebird');
const CacheParser = require('./../utility/cacheParser.js');
////////////////////////////////////////////////////////////////
const Classes = function(req, res) {
	bluebird.promisify(Cache.getCache);
	Cache.getCache('teacherData').then(function(cache) {
			CacheParser.getClasses(cache, function(err, resp) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.status(200).send(resp);
				}
			});
	});
};

////////////////////////////////////////////////////////////////
const StudentsByClass = function(req, res) {
 	bluebird.promisify(Cache.getCache);
	Cache.getCache('teacherData').then(function(cache) {
		CacheParser.getStudents(cache, function(err, resp) {
			if (err) {
				res.status(400).send(err);
				res.end();
			} else {
				res.status(200).send(resp);
				res.end();
			}
		});
	});
};

////////////////////////////////////////////////////////////////
const TestsForClass = function(req, res) {
	let classId = req.query.classId;
	console.log('AAAAAAAAAAAAAAAAAA', classId);
	bluebird.promisify(Cache.getCache);
	Cache.getCache('teacherData').then(function(cache) {
		CacheParser.getTestsForClass(cache, classId, function(err, resp) {
			if (err) {
				res.status(400).send(err);
				res.end();
			} else {
				res.status(200).send(resp);
				res.end();
			}
		});
	});
}
////////////////////////////////////////////////////////////////
module.exports = {
	'Classes': Classes,
  'StudentsByClass': StudentsByClass,
  'TestsForClass': TestsForClass
}