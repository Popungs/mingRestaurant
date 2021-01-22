$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

function submitForm(fname, email, nums) {
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var phonenum = document.getElementById("nums").value;
  alert(
    "thank you contacting! your name is " +
      fname +
      " email is : " +
      email +
      " phone number is " +
      phonenum
  );
  return false;
}
