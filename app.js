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

$("#sent").click(function (e) {
	e.preventDefault();
	let position = $("option:selected").val();
	let name = $("input[name=name]").val();
	let surname = $("input[name=surname]").val();
	let additionalInformation = $("textarea").val();
	let phone = $("input[name=phone]").val();
	let email = $("input[name=email]").val();
	let vacant = $("#vacantDate").val();
	let dateEducationStart = $("#dateEducationStart").val();
	let dateEducationFinish = $("#dateEducationFinish").val();
	let dateExperienceStart = $("#dateExperienceStart").val();
	let dateExperienceFinish = $("#dateExperienceFinish").val();
	let education = $("input[name=education]").val();
	let fieldOfStudy = $("input[name=fieldOfStudy]").val();
	let experience = $("input[name=experience]").val();
	let formerPosition = $("input[name=formerPosition]").val();

	console.log(dateExperienceStart);
});
