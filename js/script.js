
document.addEventListener("DOMContentLoaded", function () {

    const detailsBtn = document.getElementById("detailsBtn");
    const attendanceBtn = document.getElementById("attendanceBtn");

    detailsBtn.addEventListener("click", function () {
        document.getElementById("message").innerText =
            "Employee details loaded successfully!";
    });

    attendanceBtn.addEventListener("click", function () {
        document.getElementById("attendance").innerText =
            "Attendance marked successfully!";
    });

});
