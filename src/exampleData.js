const exampleData = {
  personalDetails: {
    fullName: "John Doe",
    email: "johndoe@email.com",
    phoneNumber: "(123)-456-7891",
    address: "New York City, NY",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Business",
        school: "New York University",
        location: "New York City, NY",
        startDate: "08/2019",
        endDate: "05/2023",
        isCollapsed: true,
        isHidden: true,
        id: crypto.randomUUID(),
      },
      {
        degree: "Master's in Finance",
        school: "Columbia University",
        location: "New York City, US",
        startDate: "08/2023",
        endDate: "present",
        isCollapsed: true,
        isHidden: true,
        id: crypto.randomUUID(),
      },
    ],

    experiences: [
      {
        company: "Cool Corp",
        position: "Product Manager",
        location: "New York City, US",
        description: "Managed some cool projects.",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: crypto.randomUUID(),
      },
      {
        company: "Extra Awesome Corp",
        position: "Intern",
        location: "Los Angeles, CA",
        description: "Moved boxes and set tables for corporate lunches.",
        startDate: "04/2018",
        endDate: "02/2019",
        isCollapsed: true,
        isHidden: false,
        id: crypto.randomUUID(),
      },
    ],
  },
};

export default exampleData;
