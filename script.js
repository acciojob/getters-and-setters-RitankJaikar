//complete this code
class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	set age(age) {
		if (typeof age === 'number' && age >= 0) {
	      this._age = age;
	    } else {
	      throw new Error("Age must be a non-negative number.");
	    }
	}
}

class Student extends Person {
	study() {
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`)
	}
}

// Example Usage
const student = new Student("Alice", 20);
console.log(student.name); // Alice
student.study(); // Alice is studying

const teacher = new Teacher("Bob", 35);
console.log(teacher.name); // Bob
teacher.teach(); // Bob is teaching

// Using the age setter
student.age = 21;
console.log(student._age); // 21

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
