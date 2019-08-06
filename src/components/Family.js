export default [
  {
    name: "Bob",
    partner: "Emma",
    dob: "03/03/1892",
    dod: "02/06/1966",
    children: [
      {
        name: "Ashley",
        partner: "Manish",
        dob: "15/12/1922",
        dod: "2002",
        children: [
          {
            name: "smita",
            dob: "03/04/1950",
            children: [
              {
                name: "Prashant",
                dob: "03/04/1980",
                children: [
                  {
                    name: "n_child1",
                    children: [
                      { name: "n_child2", children: [{ name: "n_child_3" }] }
                    ]
                  }
                ]
              },
              { name: "Prashant", dob: "03/04/1980" }
            ]
          },
          { name: "pushpa", dob: "18/07/1955" }
        ]
      },
      {
        name: "Logan",
        partner: "Olivia",
        dob: "10/02/1927",
        dod: "2002",
        children: [
          { name: "smita", dob: "03/04/1950" },
          { name: "pushpa", dob: "18/07/1955" }
        ]
      }
    ]
  },
  {
    name: "riem",
    children: [
      {
        name: "hau"
      },
      {
        name: "tich",
        children: [
          {
            name: "con tich"
          }
        ]
      },
      {
        name: "phu",
        children: [
          {
            name: "con phu"
          }
        ]
      }
    ]
  }
];
