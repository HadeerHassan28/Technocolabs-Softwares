"use strict";
//? Parent
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //!Get
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  //!Set
  set numberOfStudents(numberOfStudents) {
    if (typeof numberOfStudents === "number")
      this._numberOfStudents = numberOfStudents;
    else
      console.log("Invalid input: numberOfStudents must be set to a Number.");
  }

  //!Method:
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level}.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const radomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[radomIndex];
  }
}

//?Child: PrimarySchool:
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//?HighSchool:
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  sportsTeams() {
    console.log(this._sportsTeams);
    // return this._sportsTeams;
  }
}

//!Instances of PrimarySchool and HighSchool:
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
const substituteTeacher = School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

lorraineHansbury.quickFacts();
alSmith.sportsTeams();

console.log(`Substitute teacher: ${substituteTeacher}`);
