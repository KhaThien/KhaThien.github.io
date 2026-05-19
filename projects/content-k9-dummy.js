var PAGE_CONTENT = {

  meta:     { title: "K9 Crash Test Dummy - Thien Nguyen" },
  nav:      [
    { label: "About Me", href: "../index.html" },
    { label: "Projects", href: "../projects.html", active: true }
  ],
  backHref: "../projects.html#past",
  hero:     { src: "images/k9-dummy/assembly-drawing.png", alt: "K9 crash test dummy assembly drawing", style: "object-fit:contain;background:#f5f5f5" },
  title:    "K9 Crash Test Dummy",
  subtitle: "Capstone Project &middot; Team of 4 &middot; GCU x Exponent &middot; 2 Semesters",

  sections: [
    {
      title: "Overview",
      blocks: [
        { type: "paragraph", content: "My capstone project was to design, build and test a K9 dummy. The idea is to create a dummy to be used in car crash tests to analyze the functions and quality of commercial pet harnesses. In a car crash, a pet harness should protect the pets and human passengers from being further endangered by their own pets. Thus, the project scope was proposed to GCU capstone by Exponent, an engineering consultant firm." },
        { type: "paragraph", content: "This project developed a canine test device prototype to be used for crash testing seat belt harnesses to define a crash test standard for pet (canine) harness restraints. The ASTM standard minimally outlines the design of the crash canine dummy in five different sizes. The deliverables include dimensions (including center of mass), weight, and material properties." },
        { type: "paragraph", content: "Add-on vehicle seat belt systems designed to restrain pets, namely canines, in the rear seat of vehicles were being marketed to indicate that the restraint systems had been crash tested. However, no crash test standard exists for testing pet restraints. A consortium of pet restraint manufacturers began working with ASTM in 2020 to define a crash test standard that all pet harnesses would have to &ldquo;pass&rdquo; if manufacturers were going to market the system as being &ldquo;crash tested&rdquo;." },
        { type: "paragraph", content: "This was the combined efforts from our team of 4 members completing the project from research and selection of 25lbs Beagle canine, CAD modeling, procurement, manufacturing, assembly, testing and documentation. The project spanned over 2 semesters with the guidance of our mentors and support from the GCU workshop managers." }
      ]
    },
    {
      title: "The Drop Test",
      blocks: [
        { type: "paragraph", content: "One unique opportunity came out of this project's challenges during the test and validation phase. Since we couldn't get access to a car crash test facility, I worked with the GCU workshop manager (John) to find an alternative. To mimic the crash test in a simple manner, I decided on a drop test (because gravity is free and readily available) and a simple calculation determined that I needed at least 30ft of drop to achieve 30mph velocity." },
        { type: "paragraph", content: "As I presented the idea to John, he quickly connected me with the GCU Arena managers who then let us coordinate a day in the arena for the drop test. We got to tour the highest level of the arena (the beams), of course, with careful supervision and harnesses." },
        { type: "paragraph", content: "The test was an absolute highlight since it was out of the ordinary. It got not only our team excited but John and his crew at the workshop. The workshop team had additional cameras and software to record the entire drop, especially when the 30ft rope is fully extended and the impact from the rope on the harness onto the canine dummy was clearly shown in the recorded video. I truly believe engineers live for such moments where teamwork and innovations happen organically." },
        { type: "paragraph", content: "Since we were given a small window for the test and had the final presentation right after, unfortunately, the crew accidentally lost the recorded video and we didn't have another chance for a redo. That said, you can view some of the pictures of the setup below. In the end, the canine dummy was completely on-time, within budget and satisfied all required scope including the drop test." },
        { type: "gallery", id: "k9Gallery", autoplay: true, intervalMs: 3000, slides: [
          { type: "img", src: "images/k9-dummy/sitting-position.JPG",    alt: "K9 dummy sitting position" },
          { type: "img", src: "images/k9-dummy/lying-down-position.JPG", alt: "K9 dummy lying down" },
          { type: "img", src: "images/k9-dummy/drop-test.jpg",           alt: "Drop test" },
          { type: "img", src: "images/k9-dummy/IMG_4106.jpg",            alt: "Build photo" },
          { type: "img", src: "images/k9-dummy/IMG_4109.jpg",            alt: "Build photo" },
          { type: "img", src: "images/k9-dummy/IMG_4148.JPG",            alt: "Drop test setup" },
          { type: "img", src: "images/k9-dummy/IMG_4149.jpg",            alt: "Drop test setup" },
          { type: "img", src: "images/k9-dummy/IMG_4150.jpg",            alt: "Drop test setup" },
          { type: "img", src: "images/k9-dummy/IMG_4173.jpg",            alt: "GCU Arena setup" },
          { type: "img", src: "images/k9-dummy/IMG_4174.jpg",            alt: "GCU Arena setup" },
          { type: "img", src: "images/k9-dummy/IMG_4237.JPG",            alt: "Drop test at GCU Arena" },
          { type: "img", src: "images/k9-dummy/IMG_4260.JPG",            alt: "Drop test rigging" }
        ]}
      ]
    },
    {
      title: "Data Summary",
      blocks: [
        { type: "paragraph", content: "<em>Medium-size Beagle</em>" },
        { type: "data-table", rows: [
          ["Mass",                      "25 lbs"],
          ["Height",                    "22&rdquo;"],
          ["Length (nose tip to glutes)", "23.1&rdquo;"],
          ["Chest girth",               "26.25&rdquo;"],
          ["Width",                     "9.5&rdquo;"],
          ["Center of mass",            "Front and upper chest cavity"],
          ["Drop test result",          "Passed at 30 mph"],
          ["Total material cost",       "$1,110"]
        ]}
      ]
    },
    {
      title: "Project Documents",
      blocks: [
        { type: "paragraph", content: "The three documents below are our main reports covering the design review, project portfolio, and verification test plan." },
        { type: "doc-cards", items: [
          { title: "Design Review",          desc: "Design review report covering concept selection, analysis, and decisions.",  modalId: "docModal1" },
          { title: "Project Portfolio",      desc: "Full project portfolio documenting the design and build process.",            modalId: "docModal2" },
          { title: "Verification Test Plan", desc: "Test plan and results from the drop test validation.",                       modalId: "docModal3" }
        ]}
      ]
    }
  ],

  modals: [
    { id: "docModal1", title: "Design Review",          iframeSrc: "../../v1/projects/K9%20Metal%20Dummy/Desing%20Review.pdf" },
    { id: "docModal2", title: "Project Portfolio",      iframeSrc: "../../v1/projects/K9%20Metal%20Dummy/Project%20Portfolio%20Revision.pdf" },
    { id: "docModal3", title: "Verification Test Plan", iframeSrc: "../../v1/projects/K9%20Metal%20Dummy/Verification%20Test%20Plan" }
  ]

};
