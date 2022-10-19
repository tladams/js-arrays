// with thanks to https://catalog.jmu.edu/content.php?filter%5B27%5D=CS&filter%5B29%5D=&filter%5Bcourse_type%5D=-1&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=50&expand=&navoid=2576&search_database=Filter#acalog_template_course_filter

// probably helpful to have a few more in here
const data = {
  items: [
    {
      prefix: "CS",
      number: 149,
      title: "Introduction to Programming",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257219",
      desc: "Fundamental problem-solving techniques using a modern programming language. Topics include variables, input/output, decisions, loops, functions, arrays, and objects. Students learn about algorithm development, testing strategies, and software tools.",
      prereqs: [],
      credits: 3,
    },
    {
      prefix: "CS",
      number: 159,
      title: "Advanced Programming",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257220",
      desc: "Students use advanced problem-solving strategies to develop algorithms using classes and objects and techniques such as recursion, exceptions and file I/O. This course also focuses on designing small applications and effective testing strategies.",
      prereqs: [149],
      credits: 3,
    },
    {
      prefix: "CS",
      number: 343,
      title: "Application Development",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=264748",
      desc: "Overview of application software development fundamentals and their use in building stand-alone applications, visualizing and interacting with complex data representations, and controlling the Internet of Things. This course provides an introduction to the technologies used to create modern user interfaces (e.g., web technologies), establishing a common foundation for later application-focused courses.",
      prereqs: [159],
      credits: 3,
    },
    {
      prefix: "CS",
      number: "430",
      title: "Programming Languages",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257205",
      desc: "Several actual programming languages are studied in terms of the fundamental principles of computer programming language design, including object-oriented programming, functional programming, concurrent programming and logic programming.",
      prereqs: [240, 261],
      credits: 3
    }, 
    {
      prefix: "CS",
      number: "345",
      title: "Software Engineering",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257201",
      desc: "Study of modern methods and tools for the development of software products. Topics include software development process models, software development tools, design and construction principles and practice, software quality assurance and program management.",
      prereqs: [159],
      credits: 3
    },
    {
      prefix: "CS",
      number: "361",
      title: "Computer Systems II",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257226",
      desc: "Intermediate exploration of modern interrupt-driven computer systems. Explores models of computation and complex systems, techniques for communication and synchronization of parallel and concurrent software, and the protocols that make up the Internet.",
      prereqs: [261],
      credits: 3
    }
  ],
};
