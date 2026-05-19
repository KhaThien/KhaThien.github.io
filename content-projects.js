var PAGE_CONTENT = {

  meta: { title: "Projects - Thien Nguyen" },

  nav: [
    { label: "About",          href: "index.html" },
    { label: "Projects",       href: "projects.html", active: true },
    { label: "Certifications", href: "certifications.html" }
  ],

  tabs: [
    { id: "featured", label: "Featured",      active: true },
    { id: "past",     label: "Past Projects" }
  ],

  // ── Featured project: Trashbot ───────────────────────────────
  featured: {
    heroSrc:  "projects/images/trashbot/assem-animation-loop.mp4",
    heroAlt:  "Trashbot assembly animation",
    title:    "Trashbot",
    subtitle: "ESP32 &middot; DC Motors &middot; ESP-NOW Wireless &middot; Feb 2026 - Present",

    sections: [

      // ── THE STORY ──────────────────────────────────────────
      {
        id: "story", label: "The Story", active: true,
        subsections: [
          {
            title: "The Story",
            blocks: [
              { type: "paragraph", content: "Recently, I completed some programming courses (MITx 6.00.1x and Harvard CS50) and as I was looking for a final project idea, I came across the thought of building a robot that automates the one task nobody enjoys: taking the trashbin out to the curb (and back in) twice a week. Additionally, most of my neighbors are seniors who struggle most with this annoying task so the project scope expanded right after it came to my mind." },
              { type: "paragraph", content: "This documentation is a project log where I discuss my design choices in mechanical, electronics, and programming, as well as trials, errors, lessons, and end results. This project is broken into three phases: (1) RF controlled, (2) target following, and (3) fully self-driving. Phase 1 is wrapping up, and all I can say is that I have learned tremendously. Over the course of a few months, I have:" },
              { type: "ul", style: "padding-left:40px;line-height:2.0", items: [
                "Improved my skills in 3D modeling and earned a Certified SolidWorks Professional (CSWP)",
                "Trained on GD&amp;T because I needed a way to communicate my designs to manufacturers and other engineers efficiently and accurately",
                "Designed a printed circuit board (PCB) after burning a few controllers. It's more efficient to learn and use the right tools from the beginning than to keep fixing human errors repeatedly",
                "Coded the entire differential drive program while integrating microelectronic components",
                "Troubleshot so many failures, interruptions, and unexpected issues that I've developed a deep admiration for other makers"
              ]},
              { type: "paragraph", content: "This project is heavier on electronics and embedded programming than on complex mechanical systems. That said, I have plans for a subproject (a gate opener) to work alongside the Trashbot and create a fully automated system. This gate opener integration might change the robot's mechanical design if I later decide to build a robot arm to open the gate, rather than a separate subsystem with its own controller." }
            ]
          },
          {
            title: "Concept Designs",
            blocks: [
              { type: "concept-layout", items: [
                {
                  imgSrc: "projects/images/trashbot/concept-design-1.jpg",
                  imgAlt: "Design 1",
                  text: `<strong>Design #1: Replace the bin's wheels with motored wheels. Project box is on the side of the bin</strong> <span class="design-tag tag-elim">Eliminated</span><br><br>This design would require finding motored wheels that fit with the existing trashbin connectors and the housing for the electronics would likely be made out of plastic project box. Both requirements will be most costly, hard to find, and create other concerns such as the balance of the bin, permanent damages on the bin when attaching the project box, maintenance will require taking the project box off the bin, constant exposure to Arizona heat, and less protection against the rains as well.`
                },
                {
                  imgSrc: "projects/images/trashbot/concept-design-2.jpg",
                  imgAlt: "Design 2",
                  imgStyle: "object-fit:contain;background:#fff",
                  text: `<strong>Design #2: A separate motorized carrier</strong> <span class="design-tag tag-built">Selected</span><br><br>Separating the physical components of the motorized functions solves all the problems listed in Design #1. Compared to Design #3, it has the key benefit of handling tougher terraces. It's important to note that my garbage pickup truck does <strong>not</strong> use the mechanical arm to lift the entire bin and thus, this design works for both my yard condition and the garbage pickup method.`
                },
                {
                  imgSrc: "projects/images/trashbot/concept-design-3.3.jpg",
                  imgAlt: "Design 3",
                  text: `<strong>Design #3: A separate motorized robot that pulls the trashbin</strong> <span class="design-tag tag-wip">On the Shelf</span><br><br>I originally wanted to go with this design because it looks more fun but it doesn't handle rough terrance as well as the carrier. I will likely work on this design after phase 2 (target following) is completed. I want to help my friends' grandma/grandpa set up these robots and the robot's ability to find the trashbin will be needed for neighborhoods that use mechanical arms to lift the bin.`
                }
              ]},
              { type: "decision-matrix",
                title: "Ranked Weighted Decision Matrix",
                headers: ["Criteria", "Weight (%)", "Design #1", "Design #2", "Design #3"],
                rows: [
                  ["Manufacturability",               "15", "1", "3", "2"],
                  ["Cost to manufacture (affordable)", "15", "1", "3", "2"],
                  ["Durability (harsh weather)",       "20", "1", "2", "3"],
                  ["Maintenability",                   "20", "1", "2", "3"],
                  ["Functionality (rough terrance)",   "25", "2", "3", "1"],
                  ["Presentability (approachable)",     "5", "1", "2", "3"]
                ],
                totalRow: ["Total Weighted Score", "", "1.4", "2.7", "1.9"],
                winnerCol: 3,
                caption: "Table 1: Ranked Weighted Decision Matrix. Each design is rated on a 3-point scale, where 3 is highest."
              }
            ]
          }
        ]
      },

      // ── MECHANICAL ─────────────────────────────────────────
      {
        id: "mechanical", label: "Mechanical",
        subsections: [
          {
            title: "Mechanical",
            blocks: [
              { type: "paragraph", content: "There are two subsystems in phase (1) since it's being manually controlled and thus, there are two mechanical subsystems: (sub.1) a motored platform that carries the trashbin and (sub.2) is a handheld controller with two joysticks to control the maneuver and speed of the platform." },
              { type: "img", src: "projects/images/trashbot/assembly-drawing.png", alt: "Assembly drawing of the motorized platform", style: "aspect-ratio:16/9;object-fit:contain;background:#f5f5f5;border-radius:4px;margin:1.5rem 0" },
              { type: "mech-slideshow", id: "mechSlideshow", slides: [
                {
                  imgSrc: "projects/images/trashbot/motored-wheel.png",
                  imgAlt: "Motored wheel",
                  title: "Motored Wheels",
                  text: "I repurposed two motored wheels from a $2 hoverboard from a local Goodwill. Repurposing is always satisfying, especially during the development phase where mistakes happen and replacements are often needed. I also wanted parts that are local and easy to find. The hoverboard turned out as expected: battery was dead but a quick test on the wheels confirmed those motors still work. I simply rotated the wheels and felt the resistance of the hall sensors. The hoverboard also came with two motor controllers which were then connected to a new battery. By manually turning the potentiometer on the motor controller, I was able to test each controller with the attached wheel. Both LEDs on the controller and wheel lit up, the wheel spins as the potentiometer is adjusted. I repeated this step for the other pair of motor controller and wheel."
                },
                {
                  imgSrc: "projects/images/trashbot/platform.png",
                  imgAlt: "Platform",
                  title: "Platform",
                  text: "I utilized the round wooden board from Home Depot for the base since it's affordable (got a good discount on an imperfect board) and I like working with wood. It's readily available and I will be using mainly screws to attach all electronic components. It's firstly coated with a wood coat and will get another layer of truck bed liner to provide it with weather resistance capability."
                },
                {
                  imgSrc: "projects/images/trashbot/caster wheel.png",
                  imgAlt: "Caster wheel",
                  title: "Caster Wheel",
                  text: "I needed the caster wheel to roll, turn and lead (or follow) so I picked up a 6-in one from a local Ace store. Just a simple test right on the floor at the store and 6in seemed right to get enough space between the platform and the ground. It's also close to the size of the motored wheels."
                },
                {
                  imgSrc: "projects/images/trashbot/wheel and platform connectors.png",
                  imgAlt: "Wheels and platform connectors",
                  title: "3D-Printed Adapter",
                  text: "After modeling the motored wheels, the platform and the caster wheel in Solidworks, I designed a cube that sits between the platform and the connector pole (housing for the wires) so the motored wheels and the caster wheel are leveled. A picture speaks a thousand words here, and of course I designed new parts in assembly because it is awesome!!!!!"
                },
                {
                  imgSrc: "projects/images/trashbot/project-box.png",
                  imgAlt: "Project boxes",
                  title: "Project Boxes",
                  text: "One big project box (bought from Amazon) houses two (2) motor controllers and one main esp32 controller. I also added the toggle switch so I can turn power on/off since esp32 deep sleep mode doesn't completely turn everything off (which makes sense). Melted one leg of the first toggle switch which taught me to use the terminal connector to safely connect larger wires to a second toggle switch. I intend to add the toggle switch cover to give it more protection from accidents as well. The smaller project box (also from Amazon) houses a 36V battery (motor controller can handle between 6V-60V). Drilling the holes through these project boxes needed two steady hands, a secured setup to hold the boxes and a small prayer hoping I wouldn't break anything in the process."
                }
              ]},
              { type: "h3", text: "Handheld Controller" },
              { type: "paragraph", content: "I originally planned the three phases because they chronologically become more complex, but the one advantage of having phase #1 is I get the unexpected opportunity to work on mechanical design, specifically this handheld controller. I deemed it to be a simple task but it ended up requiring more effort than I expected. Mostly because I needed to find a way for the lid and the housing to cleanly fit into one another." },
              { type: "paragraph", content: "Again, I don't think I'll ever go back from designing in assembly (Solidworks) since it has been such an amazing way to design a completely non-existent component. It has so many benefits that I know my fellow engineers already know. That said, it had its challenges such as design intent is extremely serious here. Every step must be carefully planned or else, a small change could cause so many broken features requiring 10 times the effort to fix them over and over (speaking from my painful experience)." },
              { type: "concept-layout", items: [
                {
                  imgSrc: "projects/images/trashbot/handheld_design-1.jpg",
                  imgAlt: "Handheld Design 1",
                  imgStyle: "object-fit:contain;background:#f5f5f5",
                  text: `<strong>Design #1</strong> <span class="design-tag tag-elim">Eliminated</span><br><br>The very first draft which included the large dev board attached to the esp32 (green). The case is also more squared compared to the second design. The inner wall/structure for the screws are more complicated, taller poles are prone to break more, and overall, the whole design would cost me too much resin to print. These led me to making adjustments and ended up with design #2.`
                },
                {
                  imgSrc: "projects/images/trashbot/handheld_design_2_animation-2.gif",
                  imgAlt: "Handheld Design 2",
                  text: `<strong>Design #2</strong> <span class="design-tag tag-built">Built and Working</span><br><br>I love how the second design has much simpler parts and each can be taken apart. I also took the dev board away completely and soldered the wires onto the esp32 itself (still green). I like the bridge since it serves multiple purposes: locking in the battery, providing holes for screws, and two parallel &ldquo;channels&rdquo; for the esp32 legs to attach to. I also decreased the wall thickness and the overall shape is more rounded. I like the look and size of this current design, but it needs to be adjusted to have easy access to the switch of the battery to turn power on/off. I wanted to iterate through this fast and made a mistake of missing the important component of the battery (lesson learned is to always identify all important components of a part before modeling regardless how small the component is). Additionally, the snap-fit design doesn't work with 3d printed parts since it's bent given the 3d printed method.`
                },
                {
                  imgSrc: "projects/images/trashbot/handheld_snapfit_sketch.jpg",
                  imgAlt: "Handheld Design 3 snap-fit sketch",
                  imgStyle: "object-fit:contain;background:#f5f5f5",
                  text: `<strong>Design #3</strong> <span class="design-tag tag-wip">Iterating</span><br><br>The image is showing the snap-fit idea of the second design. I'm working on putting together the file for design #3 but roughly, it will focus on solving two problems of design #2. Please note that the battery I have has the switch on the side instead of on the top. The lid and bottom will have screw holes and on the side, there will be a cut-out hole for access to the switch. Picture coming soon.`
                }
              ]}
            ]
          }
        ]
      },

      // ── SOFTWARE ───────────────────────────────────────────
      {
        id: "software", label: "Software",
        subsections: [
          {
            title: "Software",
            blocks: [
              { type: "paragraph", content: `Let's discuss software since it explains the whole working logic of all components. First, all programs and schematics can be accessed via my <a class="inline-link" href="https://github.com/KhaThien/Trashbot" target="_blank" rel="noopener">Trashbot Github repository</a>. I can only discuss the general communication flow here.` },
              { type: "paragraph", content: `As mentioned above, there are two subsystems meaning the software also includes two programs. The program used for the handheld controller is called Master and the program used for the platform controller is called Slave (literally got these terms from Arduino examples). The names speak for themselves, the master board broadcasts &ldquo;commands&rdquo; to the slave board. These commands are just packages of data (mainly information of the two joysticks positions) and the slave program commands the two motor controllers based on the received data.` },
              { type: "paragraph", content: "I added a deep sleep mode to the Master program since the current design #2 handheld controllers do not give easy access to the power switch. When the left-right joystick button (located on the left side) is pressed, it activates deep sleep mode. The controller will wake up when the same switch is pressed again." },
              { type: "paragraph", content: `I'm proud of two features in this software development. One, I used Neovim (a text editor), coded, ran tests and basically &ldquo;lived&rdquo; completely in terminals. I ended up loving working in the terminal so much more than using an IDE for software development. It becomes one IDE for me to get good at and is a lot more informative and quicker to search/manipulate than learning to use multiple IDEs. Secondly, I figured out a differential drive program to use the input data of the two joystick positions to output the speed and turns of the two motored wheels. These three images below show some of my brainstorming process and the command lines I use in the terminal for the Arduino program.` },
              { type: "code", language: "bash", content:
`arduino-cli board list                              # find connected boards and ports
arduino-cli compile --fqbn <board>                  # compile the sketch
arduino-cli upload -p <port> --fqbn <board>         # upload to a board
arduino-cli monitor -p <port> --config 115200        # open serial monitor`
              },
              { type: "img-grid", cols: 2, images: [
                { src: "projects/images/trashbot/joystick-mapping-1.jpg", alt: "Joystick mapping notes 1", style: "object-fit:contain;background:#f5f5f5" },
                { src: "projects/images/trashbot/joystick-mapping-2.jpg", alt: "Joystick mapping notes 2", style: "object-fit:contain;background:#f5f5f5" }
              ]}
            ]
          }
        ]
      },

      // ── ELECTRONICS ────────────────────────────────────────
      {
        id: "electronics", label: "Electronics",
        subsections: [
          {
            title: "Electronics",
            blocks: [
              { type: "paragraph", content: `Please note that all codes and schematics can be accessed via my <a class="inline-link" href="https://github.com/KhaThien/Trashbot" target="_blank" rel="noopener">Trashbot Github repository</a>.` },
              { type: "paragraph", content: "So far, I've burned one esp8266, one motor controller and one esp32 (though I don't think this one is my fault). I also had to spend most logistic time on waiting for new parts to come in. Speaking from my current professional work, the devil is in the details. One missing symbol can lead to a completely different hardware.." },
              { type: "paragraph", content: "Thanks to this project, I've learned to:" },
              { type: "ol", items: [
                "Always document my process in a clear manner.",
                "Stay extremely organized because components are small and one wrong wire can take hours to troubleshoot plus burnt controller (speaking from more painful experience).",
                "Unit test!!!! This goes hand-in-hand with software development. One function and one small unit test at a time even if at the moment, it feels simple.",
                "Read the datasheet and make sure to understand it because each component has so many restrictions and requirements to work, it's fascinating.",
                "Always double check with a multimeter. Check individual parts, connected parts, and everything in between to make sure what I get from the multimeter meets the expectation."
              ]},
              { type: "paragraph", content: "To expand on point #5, the joystick I used has a 5V on its datasheet but I found out (by using a multimeter) that at 5V, it leaks current to other pins (x, y, button). When switching to 3.3V input, it stopped the issue. I had a wide chase because I kept getting very off x and y values at 5V but thought the reason was because the joystick was bad. I ended up buying a whole bag of joysticks and the new joysticks had the same issue." },
              { type: "paragraph", content: "After fixing the unreliable value issue, I found out another challenge when using one joystick to control both turns and speeds. It's almost impossible for a human (me) to push the joystick forward and backward without accidentally slightly tilting the joystick left or right. The input data is unforgiving so whenever I intended the platform to move straight, it never did. So to fix this issue, I utilized two joysticks, one for turns and one for forward/backward movement. It has worked very well and the turn joystick's button is used for deep sleep mode too." },
              { type: "paragraph", content: "I initially worked with esp8266 since my friend had one lying around from a different project which meant it had a pre-wired on the esp32 board itself. I figured I could still carefully make notes and avoid making mistakes of using the wrong pins. Well, I was wrong. The pre-wiring on the board is extremely hard to see and tangled way more than I expected. So after one long night of troubleshooting why one of my motors did not work, burning said motor and esp8266, I figured I could move onto esp32 since it's quite affordable now. I wanted to use esp because it has ESP-NOW protocol which is convenient, easy to set up, and has a long range of communication." },
              { type: "paragraph", content: "Pictures below are my notes when I had to study up on the motor controller, dc motor and hall sensors." },
              { type: "img-grid", images: [
                { src: "projects/images/trashbot/initial-board-and-programming-turning-logic.jpg", alt: "Initial board and turning logic",  style: "object-fit:contain;background:#f5f5f5" },
                { src: "projects/images/trashbot/hall-sensors.jpg",                               alt: "Hall sensors study",               style: "object-fit:contain;background:#f5f5f5" },
                { src: "projects/images/trashbot/brushless-motor-controllers.jpg",                alt: "Brushless motor controllers",       style: "object-fit:contain;background:#f5f5f5" }
              ]},
              { type: "paragraph", content: "And these two images are a few of unit tests I did during the development. I originally worked in Arduino IDE and arduino board (while waiting on the esp32 to come in) to make the dc motor work with an h-bridge. Once the whole system worked and verified, I moved on to adding one button -> one joystick -> two joysticks -> replacing the h-bridge with two motor controllers and arduino board with esp32." },
              { type: "img-grid", cols: 2, images: [
                { src: "projects/images/trashbot/dc-motor-and-button-1-11.jpg",    alt: "DC motor and button test",         style: "object-fit:contain;background:#f5f5f5" },
                { src: "projects/images/trashbot/dc-motor-hbridge-buttons-12.jpg", alt: "DC motor H-bridge and buttons test", style: "object-fit:contain;background:#f5f5f5" }
              ]},
              { type: "h3", text: "KiCad" },
              { type: "paragraph", content: "I'm picking up KiCad because drawing everything in a notepad is not sufficient anymore and tracing wires every single time is just asking for errors. The platform and controller were working as expected two weeks ago, but after soldering the wires to the slave esp32, I found out that the wires were switched at some point and no longer matched with the pins in the program. Even after isolating the esp from all wires, I could no longer upload updated programs to it. When powered, it's still on and populates some info out on the monitor, but that's all it does." },
              { type: "paragraph", content: "Therefore, I'm working on designing a PCB to prevent this whole human error from happening again." },
              { type: "quote", text: "Every wall is a door", author: "Waldo Emerson" },
              { type: "img", src: "projects/images/trashbot/wiring-diagram.png", alt: "KiCad schematic" },
              { type: "h3", text: "Protocol: ESP-NOW" },
              { type: "paragraph", content: "Built into the ESP32, no extra hardware, no added cost. Key reasons for choosing ESP-NOW:" },
              { type: "ul", items: [
                "Direct board-to-board communication, no router, no WiFi network dependency",
                "Range of 10+ meters comfortably covers the distance from a front door to the curb",
                "Low latency, 20 ms packet intervals is more than sufficient for real-time motor control",
                "Well-documented with real-world community examples in similar projects",
                "Supports two-way and one-to-many topologies, useful headroom for Phase 2 without a protocol change"
              ]}
            ]
          }
        ]
      },

      // ── BUILD LOG ──────────────────────────────────────────
      {
        id: "buildlog", label: "Build Log",
        subsections: [
          {
            title: "Procurement",
            blocks: [
              { type: "procurement-table",
                headers: ["Component", "Source", "Cost", "Notes"],
                rows: [
                  ["Hoverboard (motors + wiring)",                    "Goodwill",       "$2",                        "Dead battery, working motors"],
                  ["ESP32 dev boards x3",                             "Amazon",         "~$25-30",                   "Dev boards with breakout pins for prototyping"],
                  ["Motor controllers ZS-X11HV2 (x2, then x2 more)", "Amazon",         "~$25 first set, ~$27 second set", "First set: one burnt due to ESP8266 wiring issue"],
                  ["6-inch caster wheel",                             "Ace Hardware",   "~$8-10",                    "Rounded profile, selected in-store"],
                  ["24-inch round pine board",                        "Hardware store", "&lt;$10",                   "Slightly imperfect board, discounted"]
                ],
                note: "The hoverboard's stock motor controllers use proprietary firmware with no accessible reprogramming path. Replaced with off-the-shelf brushless controllers (ZS-X11HV2, 6-60V, 400W) for clean PWM inputs and full control."
              }
            ]
          },
          {
            title: "Build Log",
            blocks: [
              { type: "build-log", entries: [
                {
                  title: "Joystick wiring bug", tag: "Fixed", tagClass: "tag-built",
                  text: "One axis reading incorrectly. Tried a second joystick, problem persisted. Multimeter showed Y pin voltage changing on X axis movement. Cause: Vcc wired to 5V instead of 3.3V. Always check the datasheet first."
                },
                {
                  title: "ESP-NOW between two ESP32 boards", tag: "Working", tagClass: "tag-built",
                  text: `Successfully sent joystick data wirelessly using ESP-NOW. Key learnings: used <code>memcpy()</code> to unpack received bytes back into a struct; sending every 20 ms (50 packets/sec) is more than enough for smooth motor control; both boards must be on the same WiFi channel; max payload is 250 bytes per packet.`
                },
                {
                  title: "Joystick-to-motor control logic", tag: "Working", tagClass: "tag-built",
                  text: "X axis controls direction, Y axis controls speed and forward/reverse. A deadzone of ~40-60 (on a 0-100 scale) prevents motor twitching at idle. ADC2 pins are unsafe with any wireless protocol active, use ADC1 pins (GPIO 32-39) for analog reads."
                },
                {
                  title: "Switched from H-bridge to brushless motor controllers", tag: "Done", tagClass: "tag-built",
                  text: "Moved from the small test H-bridge to the ZS-X11HV2 controllers (6-60V, 400W). PWM input range: 2.5-5V amplitude, 50Hz-20kHz. Direction control: LOW is active reverse. Brake: HIGH is active."
                },
                {
                  title: "The burnt motor controller", tag: "Resolved", tagClass: "tag-built",
                  text: "An early attempt used a modified ESP8266 from a previous project with pre-connected internal pins, not visually obvious. Wrong pins bridged during wiring, sending bad signals that burnt the controller. Debug process: stripped code to minimal unit tests -> researched controller specs -> verified each pin's voltage output with a multimeter -> found internal connections on ESP8266. Retired the ESP8266, switched to ESP32."
                }
              ]}
            ]
          }
        ]
      }

    ] // end sections
  }, // end featured

  // ── Past projects ─────────────────────────────────────────────
  past: [
    {
      href:    "projects/asme-hpvc.html",
      imgSrc:  "projects/images/asme-hpvc/asme-hpvc.jpg",
      imgAlt:  "Fabricated recumbent tricycle",
      title:   "ASME Human Powered Vehicle Competition",
      summary: "I led the GCU ASME team to compete in the 2021 Human Powered Vehicle Competition (HPVC), the club's first entry, during the pandemic and in my senior year. We divided 10+ members across multiple subsystems, repurposed bicycle parts and completed the build (without fairing) before passing it to the next club's president for the following year's competition."
    },
    {
      href:    "projects/k9-dummy.html",
      imgSrc:  "projects/images/k9-dummy/sitting-position.JPG",
      imgAlt:  "Metal K9 crash test dummy",
      title:   "K9 Crash Test Dummy",
      summary: "My capstone project was to design, build and test a K9 dummy to be used in car crash tests to analyze the quality of commercial pet harnesses. Proposed by Exponent, the project spanned two semesters and concluded with a memorable drop test from 30ft inside the GCU Arena."
    },
    {
      href:     "projects/hvac.html",
      imgSrc:   "projects/images/HVAC/thermo-laws.svg",
      imgAlt:   "4 laws of thermodynamics",
      imgStyle: "width:100%;height:auto;display:block",
      title:    "HVAC System Design for a Phoenix resident",
      summary:  "Designed a full HVAC system for an average 1,832 sq ft Phoenix home, comparing a hybrid swamp cooler + AC approach against AC-only. Thermodynamic calculations and cost analysis across all 12 months showed the hybrid saves ~$293/year, roughly $3,000 over a decade."
    }
  ]

};
