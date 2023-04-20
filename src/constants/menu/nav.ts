export const items = [
  {
    label: "Records",
    // icon: "pi pi-database",
    items: [
      [
        {
          label: "Users",
          items: [
            { label: "Users", url: "/users", icon: "pi pi-users" },
            { label: "Add user", url: "/create-user", icon: "pi pi-user-plus" },
          ],
        },
      ],
      [
        {
          label: "Business",
          items: [
            {
              label: "Resources",
              url: "/resource-create",
              icon: "pi pi-sale",
            },
          ],
        },
      ],
    ],
  },
];
