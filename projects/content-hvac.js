var PAGE_CONTENT = {

  meta:     { title: "HVAC System Design - Thien Nguyen" },
  nav:      [
    { label: "About Me", href: "../index.html" },
    { label: "Projects", href: "../projects.html", active: true }
  ],
  backHref: "../projects.html#past",
  hero:     null,
  title:    "HVAC System Design",
  subtitle: "Thermodynamics &middot; Cost Analysis &middot; Phoenix, AZ &middot; GCU STG-330 &middot; Dec 2019",

  sections: [
    {
      title: "Project Document",
      blocks: [
        { type: "paragraph", content: "Thermodynamics was one of my favorite courses because it felt like I was studying the combination of chemistry and physics, and it has a lot of maths. Below is an HVAC design for a standard-size residential home completed by me and three other members during our junior year. When possible, I would love to get a chance to pick up thermodynamics concepts again in one of my future projects." },
        { type: "doc-cards", items: [
          { title: "HVAC System Design Report", desc: "Complete project report submitted for GCU STG-330, December 2019.", modalId: "hvacModal" }
        ]}
      ]
    }
  ],

  modals: [
    { id: "hvacModal", title: "HVAC System Design Report", iframeSrc: "../../v1/projects/HVAC/HVAC%20System%20Design.pdf" }
  ]

};
