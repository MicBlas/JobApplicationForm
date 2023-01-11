$(function () {
	//console.log("ok");
});

let education = $(".education");
let experience = $(".experience");
let addEducation = $(".addEducation");
let deleteEducation = $(".deleteEducation");
let addExperience = $(".addExperience");
let deleteExperience = $(".deleteExperience");

addEducation.on("click", function (event) {
	event.preventDefault();
	let newEducation = education.clone(true).insertAfter(education);
	//newEducation.find("p").text("");
});
deleteEducation.on("click", function (event) {
	event.preventDefault();
	//console.log($(this).parent());
	let allEducation = $(".education");
	if (allEducation.length > 1) {
		$(this).parent().remove();
	} else {
		alert("If you don't have education, don't delete it, but leave it blank");
	}
});

addExperience.on("click", function (event) {
	event.preventDefault();
	let newExperience = experience.clone(true).insertAfter(experience);
	//newExperience.find("p").text("");
});
deleteExperience.on("click", function (event) {
	event.preventDefault();
	let allExperience = $(".experience");
	if (allExperience.length > 1) {
		$(this).parent().remove();
	} else {
		alert("If you don't have experience, don't delete it, but leave it blank");
	}
});
