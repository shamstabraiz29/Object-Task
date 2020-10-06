let family = {
  name: "john",
  john: {
    firstSon: "charis",
    chris: {
      firstSon: "Ali",
      secondSon: "karim",
    },
    secondSon: "Alex",
    Alex: {
      firstSon: "john",
      john: {
        firstSon: "Ali",
        Ali: {
            firstSon:'  Suleiman',
          Suleiman: {
            firstSon: "kareem",
            secondSon: "Raheem",
            Raheem: {
              firstSon: "nadim",
              secondSon: "Kaleem",
              Kaleem: {
                firstSon: "Amir",
                secondSon: "liaqat",
              },
            },
          },
          secondSon: "usman",
          thirdSon: "salan",
          fourthSon: "javed",
        },
        secondSon: "jack",
      },
      secondSon: "Alex",
      thirdSon: "Garret",
      fourthSon: "Wood",
      Wood: {
        firstSon: "Chris",
        secondSon: "Roy",
        thirdSon: "Max",
        Max: {
          firstSon: " Usman",
          secondSon: "Salman",
          thirdSon: "Javed",
          fourthSon: "Mark",
          fifthSon: "Alex",
        },
        fourthSon: "Nova",
        fifthSon: "Root",
        sixthSon: "Mark",
        Mark: {
          firstSon: " Morgan",
          secondSon: "Watson",
        },
      },
      fifthSon: " Hales",
    },
    thirdSon: " Jack",
    jack: {
      firstSon: "Kevin",
      secondSon: "DerekWood",
    },
    fourthSon: "David",
    David: {
      firstSon: "Kegan",
      Kegan: {
        firstSon: "Alex",
        Alex: {
          firstSon: "Jackma",
          Jackma: {
            firstSon: "Kevin",
            secondSon: "Derek",
            thirdSon: "Trump",
            fourthSon: "Obama",
            fifthSon: "Bush",
          },
          secondSon: "Bill",
          Bill: {
            firstSon: "Robert",
            secondSon: "John",
          },
        },
      },
    },
  },
};
// task 2
family.john.jack.secondSon="Derek Khan";
// task 3
family.john.David.Kegan.Alex.Jackma.thirdSon = "Donald Trump";
// task 4
delete family.john.David.Kegan.Alex.Jackma.fourthSon;
// task 6
document.write(family.name, "<br/>");
document.write(family.john.firstSon, "<br/>");
document.write(family.john.chris.firstSon, "<br/>");
document.write(family.john.chris.secondSon, "<br/>");
document.write(family.john.secondSon, "<br/>");
document.write(family.john.Alex.firstSon, "<br/>");
document.write(family.john.Alex.john.firstSon, "<br/>");
document.write(family.john.Alex.john.Ali.firstSon, "<br/>");
document.write(family.john.Alex.john.Ali.Suleiman.firstSon, "<br/>");
document.write(family.john.Alex.john.Ali.Suleiman.secondSon, "<br/>");
document.write(family.john.Alex.john.Ali.Suleiman.Raheem.firstSon, "<br/>");
document.write(family.john.Alex.john.Ali.Suleiman.Raheem.secondSon, "<br/>");
document.write(family.john.Alex.john.Ali.Suleiman.Raheem.Kaleem.firstSon, "<br/>");
document.write(family.john.Alex.john.Ali.Suleiman.Raheem.Kaleem.secondSon, "<br/>");
document.write(family.john.Alex.john.Ali.secondSon, "<br/>");
document.write(family.john.Alex.john.Ali.thirdSon, "<br/>");
document.write(family.john.Alex.john.Ali.fourthSon, "<br/>");
document.write(family.john.Alex.john.secondSon, "<br/>");
document.write(family.john.Alex.secondSon, "<br/>");
document.write(family.john.Alex.thirdSon, "<br/>");
document.write(family.john.Alex.fourthSon, "<br/>");
document.write(family.john.Alex.Wood.firstSon, "<br/>");
document.write(family.john.Alex.Wood.secondSon, "<br/>");
document.write(family.john.Alex.Wood.thirdSon, "<br/>");
document.write(family.john.Alex.Wood.Max.firstSon, "<br/>");
document.write(family.john.Alex.Wood.Max.secondSon, "<br/>");
document.write(family.john.Alex.Wood.Max.thirdSon, "<br/>");
document.write(family.john.Alex.Wood.Max.fourthSon, "<br/>");
document.write(family.john.Alex.Wood.Max.fifthSon, "<br/>");
document.write(family.john.Alex.Wood.fourthSon, "<br/>");
document.write(family.john.Alex.Wood.fifthSon, "<br/>");
document.write(family.john.Alex.Wood.sixthSon, "<br/>");
document.write(family.john.Alex.Wood.Mark.firstSon, "<br/>");
document.write(family.john.Alex.Wood.Mark.secondSon, "<br/>");
document.write(family.john.Alex.fifthSon, "<br/>");
document.write(family.john.thirdSon, "<br/>");
document.write(family.john.jack.firstSon, "<br/>");
document.write(family.john.jack.secondSon, "<br/>");
document.write(family.john.fourthSon, "<br/>");
document.write(family.john.David.firstSon, "<br/>");
document.write(family.john.David.Kegan.firstSon, "<br/>");
document.write(family.john.David.Kegan.Alex.firstSon, "<br/>");
document.write(family.john.David.Kegan.Alex.Jackma.firstSon, "<br/>");
document.write(family.john.David.Kegan.Alex.Jackma.secondSon, "<br/>");
document.write(family.john.David.Kegan.Alex.Jackma.thirdSon, "<br/>");
document.write(family.john.David.Kegan.Alex.Jackma.fourthSon, "<br/>");
document.write(family.john.David.Kegan.Alex.Jackma.fifthSon, "<br/>");
document.write(family.john.David.Kegan.Alex.secondSon, "<br/>");
document.write(family.john.David.Kegan.Alex.Bill.firstSon, "<br/>");
document.write(family.john.David.Kegan.Alex.Bill.secondSon, "<br/>");

console.log(family)