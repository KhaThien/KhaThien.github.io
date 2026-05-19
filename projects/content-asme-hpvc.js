var PAGE_CONTENT = {

  meta:     { title: "ASME HPVC - Thien Nguyen" },
  nav:      [
    { label: "About Me", href: "../index.html" },
    { label: "Projects", href: "../projects.html", active: true }
  ],
  backHref: "../projects.html#past",
  hero:     { src: "images/asme-hpvc/chassis-drawing.png", alt: "GCU ASME HPVC chassis drawing", style: "object-fit:contain;background:#f5f5f5" },
  title:    "ASME Human Powered Vehicle Competition",
  subtitle: "Team Lead &middot; Mechanical Design &middot; GCU ASME &middot; 2020/2021",

  sections: [
    {
      title: "Overview",
      blocks: [
        { type: "paragraph", content: "I led the GCU ASME team to compete in the 2020/2021 ASME Human Powered Vehicle Competition (HPVC). It was the club's first time entering, during the pandemic, and in my senior year. The competition challenges engineering students to design and build a vehicle that is sustainable, safe, power-efficient, and practical." },
        { type: "paragraph", content: "The club had 10+ members so I divided everyone into subsystems (chassis, gears, fairing, etc.) and we came together for the final assembly. The budget was very tight and because of COVID, organizing fundraising events was extremely challenging, so I repurposed many used parts (pedals, gears, tires, wheels, etc.) from old bicycles donated by the GCU public safety department." },
        { type: "paragraph", content: "There were many other challenges such as the lack of dedicated space to store materials or personal vehicles big enough to transport long metal pipes so delivery cost more. This project led me to become a Technical Project Manager (that I am now) because I wanted to learn how to put all puzzle-pieces together efficiently." },
        { type: "callout", html: `<p>Among many lessons, this project taught me to plan diligently during the concept design phase, with a strong emphasis on Design for Manufacturing and Assembly. All machines have strict restrictions and limitations of what can be possible to fabricate as well as the setup during the assembly process. For example, angle-cut on a round pipe required extensive time on marking, measuring, and grinding to ensure safety and assembly. Another instance was setting up the pipes to be angled before being welded on took elaborated planning, time and labor.</p><p><strong>What I do differently now is to work closely with the manufacturing team during the entire concept design phase to discuss concerns, questions, limitations and everything else that will make the design truly practical.</strong></p>` },
        { type: "paragraph", content: "In the end, we completed the build but without the fairing due to time and budget constraints. The tricycle was passed down to the next president of the club to continue improving it for the 2021/2022 competition." },
        { type: "paragraph", content: "The project encountered so many challenges that I often got caught up in the stress, worries and planning, but the moment we finished the frame (including the wheels) and put it down on the ground getting ready for the spray paint job, I was tremendously proud of everyone's efforts in making this project into a reality." }
      ]
    },
    {
      title: "Photos &amp; Videos",
      blocks: [
        { type: "gallery", id: "hpvcGallery", autoplay: true, intervalMs: 5000, slides: [
          { type: "img",   src: "images/asme-hpvc/asme-hpvc.jpg",         alt: "Completed tricycle" },
          { type: "img",   src: "images/asme-hpvc/IMG_8918.jpg",           alt: "Build photo" },
          { type: "img",   src: "images/asme-hpvc/IMG_8921.jpg",           alt: "Build photo" },
          { type: "img",   src: "images/asme-hpvc/IMG_8923.jpg",           alt: "Build photo" },
          { type: "img",   src: "images/asme-hpvc/IMG_8924.jpg",           alt: "Build photo" },
          { type: "img",   src: "images/asme-hpvc/IMG_8925.jpg",           alt: "Build photo" },
          { type: "img",   src: "images/asme-hpvc/IMG_8927.jpg",           alt: "Build photo" },
          { type: "video", src: "images/asme-hpvc/IMG_3856_silent.MOV" }
        ]}
      ]
    },
    {
      title: "Project Documents",
      blocks: [
        { type: "paragraph", content: "The two documents below cover the frame simulation analysis and the full innovation report submitted for the competition." },
        { type: "doc-cards", items: [
          { title: "Frame Simulation Report",       desc: "Structural analysis and simulation results for the vehicle frame.",          modalId: "docModal1" },
          { title: "GCU HPVC 2021 Innovation Report", desc: "Full competition innovation report submitted by the Lopes Engineers team.", modalId: "docModal2" }
        ]}
      ]
    }
  ],

  modals: [
    { id: "docModal1", title: "Frame Simulation Report",           iframeSrc: "../../v1/projects/ASME%20HPVC/frame-simulation-report.pdf" },
    { id: "docModal2", title: "GCU HPVC 2021 Innovation Report",  iframeSrc: "../../v1/projects/ASME%20HPVC/GCU%20HPVC%202021%20Innovation%20Report%20_%20Lopes%20Engineers%20Team.pdf" }
  ]

};
