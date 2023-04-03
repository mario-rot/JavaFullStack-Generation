let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

// solution 1
for(let i = 0; i < student1Courses.length; i++){
	for(let j = 0; j < student2Courses.length; j++){
		if(student1Courses[i] == student2Courses[j]){
			console.log(`Curso compartido: ${student1Courses[i]}`)
		}
	}
}

// Solution 2
for(let i = 0; i < student1Courses.length; i++){
	if(student1Courses[i] == student2Courses[i]){
			console.log(`Curso compartido: ${student1Courses[i]}`)
	}
}

