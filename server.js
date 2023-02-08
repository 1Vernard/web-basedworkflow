//importing the required packages

const multer =require('multer');
const xlsx = require('xlsx')
//express creation
const app = express();


//setting the file upload using multer
const storage =multer.diskStorage({destination: (req,file,cb)=>{cb(null, "./uploads");},filename:(req, file, cb)=>{cb(null, file.fieldname + "-" +Date.now());},});
const upload= multer({storage:storage});
//routes setup for form submissions
/*app.use(express.urlencoded({extended:true}));
app.use(express.json());*/
    
//process the excel file:
const workbook=xlsx.readFile(read.file.path);
const sheet =workbook.sheet[workbook.sheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);

