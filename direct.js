//REQUIREMENTS
// 1. Pass the directory name using command line argument
// 2. Access the input directory in such a way that it should read all the files and subdirectories in it but with a condition that it should not exceed 10 contents .
// 3. If the accessed one is a sub directory repeat the accessing process as in step2
// 4. the output should be in the following manner
// mainDir
//      SubDir1
//              file11
//              file12
//              file13
//              ...others(if there are more than 10 contents)
//      subDir2
//              file21
//              file22
//      file1
//      file2
//      ...others(if there are more than 10 contents)


//input through command line arguments
const testFolder = process.argv[2];
const fs = require('fs');
//reading the files in directory
const dir=(files)=>fs.readdir(files,(err,file) => {
            console.log(files);
            let count=0;
            for(let i in file) {
                if(count<9){            //to print upto 9 files
                    console.log("   "+file[count]);
                    count++;
                }
                else{
                    console.log("...others")    //otherwisw print ..others
                    break
                }
            }
        });
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
	if(file.isDirectory){
		console.log(file);
	}else{
 	fs.readdir(file,(err,files) => {
		console.log(file);
		let count=0;
		for(let i in files) {
            if(files[i].isDirectory){
                //console.log("fuctio called")
                //console.log(files[i])
                dir(files[i])       //Function is called when there is a directory
                
            }
            else{
			if(count<9){
                console.log("   "+files[count]);
                count++;
            }
            else{
                console.log("...others")
                break
            }
        }
		}
	});
      }
  });
});