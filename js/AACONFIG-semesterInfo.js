
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("01/23/2019 4:00:00"),
    lastDayOfSemester:  new Date("05/09/2019 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Winter Vacation",    new Date("03/02/2019"), new Date("03/10/2019")),
        new VacationDays("Spring Vacation",    new Date("04/17/2019"), new Date("04/22/2019"))
        //new VacationDays("Snow Day",           new Date("xx/xx/2019"), new Date("xx/xx/2019")),
    ]
};
