// lab 3

//TASK 1
const personalPlanOleh = {
  name: "Oleh",
  age: "27",
  skills: {
    languages: ["ua", "en"],
    programmingLangs: {
      js: "20%",
      java: "10%",
    },
    exp: "5 month",
  },
  showAgeAndLangs: function (plan) {
    const {
      age,
      skills: { languages },
    } = plan;
    const upperCaseLanguages = languages.map((lang) => lang.toUpperCase()).join(" ");
    return `Мені ${age} і я володію мовами: ${upperCaseLanguages}`;
  },
};

//1
function showExperience(plan) {
  const {
    skills: { exp },
  } = plan;
  return exp;
}

// console.log(showExperience(personalPlanOleh));

//2
function showProgrammingLangs(plan) {
  let result = "";
  const {
    skills: { programmingLangs },
  } = plan;

  if (Object.keys(programmingLangs).length === 0) {
    return result;
  }

  for (let key in programmingLangs) {
    result += `Мова ${key} вивчена на ${programmingLangs[key]}\n`;
  }

  return result.trim();
}

// console.log(showProgrammingLangs(personalPlanOleh));

//3
// console.log(personalPlanOleh.showAgeAndLangs(personalPlanOleh));

// TASK 2
//1
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let result = "";

  if (arr.length === 0) {
    result += "Сім'я порожня";
  } else {
    result += "Сім'я складається з: ";

    for (elem in arr) {
      result += arr[elem];
      result += " ";
    }
  }

  return result.trim();
}

// console.log(showFamily(family));

//2
const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((str) => {
    console.log(str.toLowerCase() + "\n");
  });
}

standardizeStrings(favoriteCities);
