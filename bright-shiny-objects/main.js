// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(first, last) {
    const user = {
        firstName: first,
        lastName: last
    }
    return user
}

function setAge(user, num) {
    user.age = num
    return user
}

function incrementAge(user) {
    user.age++
    return user
}

function fixCar(car) {
    car.needsMaitenance = false
    return car
}


function addGrades(student, newgrades) {
    for (const i of newgrades) {
        student.grades.push(i)
    }
    return student
}

function getDataType(obj, key) {
    return typeof obj[key]
}

function addTodo(arr, newItems) {
    arr.push(newItems)
    return arr
}

function addSong(pl, song) {
    pl.duration += song.duration
    pl.songs.push(song)
    return pl
}

function updateReportCard(reportCard, newGrade) {

    // Adds the new grade to the report card's grades
    reportCard.grades.push(newGrade)

    // Update lowest
    if (newGrade < reportCard.lowestGrade) {
        reportCard.lowestGrade = newGrade
    }

    // Update highest
    if (newGrade > reportCard.highestGrade) {
        reportCard.highestGrade = newGrade
    }

    // Update average
    let gradeSum = 0, gradeAvg = 0

    for (const i of reportCard.grades) {
        gradeSum += i
    }

    gradeAvg = gradeSum / reportCard.grades.length
    reportCard.averageGrade = gradeAvg

    return reportCard
}

// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
