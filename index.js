import mongoose from 'mongoose';

const conn = mongoose.connect('mongodb://127.0.0.1:27017/zenclass')
	.then(() => console.log('Connected!'));


const mentorSchema = mongoose.Schema({
	id: { type: String, unique: true, required: true, },
	mentor_name: { type: String, required: true, },
	mentee: [String]
});

const mentor = mongoose.model("mentors", mentorSchema);

// const createMentor = await mentor.create({
// 	id:"12",
// 	mentor_name:"ramesh",
// 	mentee: ["x","hari", 'ram', "john", "vijay", "sha", "ghee", "alan", "rave", "appise", "tim", "ko", "ji", "way", "nelson", "gokul", "jagadesh"]
// })

// console.log(createMentor);

const driveSchema = mongoose.Schema({
	company_name: { type: String, required: true, },
	appeared_date: Date,
	students: []
});

const drive = mongoose.model("companyDrive", driveSchema);

// const createDrive = await drive.create({
// 	company_name:"ta",
// 	appeared_date: "2020-10-10",
// 	students: ["que", "alice", "geetha"]
// })

// console.log(createDrive);


const userSchema = mongoose.Schema({
	name: { type: String, required: true, },
	codekata: Number
});

const user = mongoose.model("user", userSchema);

// const createuser = await user.create({
// 	name:"f",
// 	codeKeta: 1
// })

// console.log(createuser);


const classSchema = mongoose.Schema({
	topics: [String],
	task: [String],
	present: [String],
	absent: [String],
	date: Date,
	task_submission: [String]
})

const classes = mongoose.model("classes", classSchema);

// const createClass = await classes.create({
// 	topics:["react app"],
// 	task:["create react app"],
// 	present:["rajesh"],
// 	absent:["ram", "x", "Hari", "a", "b"],
// 	date: "2020-10-25",
// 	task_submission:["ram", "rajesh"]
// });

// Find all the topics and tasks which are thought in the month of October

const findTopicsTask = await classes.find({ date: { $gte: "2020-10-01", $lte: "2020-10-31" } }).select("task topics -_id");

console.log(findTopicsTask);

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

const findComapnyDriveSort = await drive.find({ appeared_date: { $gte: "2020-10-15", $lte: "2020-10-31" } });

console.log(findComapnyDriveSort);

// Find all the company drives and students who are appeared for the placement.

const findComapnyDrive = await drive.find({}).select("company_name students -_id");

console.log(findComapnyDrive);

// Find the number of problems solved by the user in codekata

const userCodekata = await user.find({}).select("name codekata -_id");

console.log(userCodekata);