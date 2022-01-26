// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What was the first computer that had a colour display?",
    answer: "Apple II",
    options: [
      "iMac",
      "Apple II",
      "BBC Micro",
      "Amiga 500"
    ]
  },
    {
    numb: 3,
    question: "Who created the first modern computer?",
    answer: "Charles Babbage",
    options: [
      "Robert E Kahn",
      "Charles Babbage",
      "William Richards",
      "James G Harper"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "Which of the following is not a function of a network?",
    answer: "Sign",
    options: [
      "News",
      "Data",
      "Sign",
      "Opinion"
    ]
  },
  {
    numb: 6,
    question: "Which Technology company has launched a new initiative called ‘Startup School’?",
    answer: "Google",
    options: [
      "Microsoft",
      "Google",
      "Amazon",
      "Apple"
    ]
  },
  {
    numb: 7,
    question: "With reference to astronomy, what is ‘Osiris’, that was seen in the news recently?",
    answer: "Exo-Planet",
    options: [
      "Meteor",
      "Black Hole",
      "Exo-Planet",
      "Asteroid"
    ]
  },
  {
    numb: 8,
    question: "What is ‘Mayflower 400’, which was making news recently?",
    answer: "Artificial Intelligence Ship",
    options: [
      "Mining Robot",
      "Artificial Intelligence Ship",
      "Solar Probe",
      "Vaccine Delivering Robot"
    ]
  },
  {
    numb: 9,
    question: "Which social media platform is testing a feature named ‘Tip Jar’, which enables users to send money to favourite accounts?",
    answer: "Twitter",
    options: [
      "Facebook",
      "Twitter",
      "Tik Tok",
      "Signal"
    ]
  },
  {
    numb: 10,
    question: "IIT Ropar’s new mobile cremation system works on the principle of ……..?",
    answer: "Wick Stove",
    options: [
      "Induction Stove",
      "Wick Stove",
      "Electric Coil Stove",
      "None of the above"
    ]
  },
  {
    numb: 11,
    question: "Which global institution launched the ‘Programmable Digital Fiber’?",
    answer: "MIT",
    options: [
      "Oxford University",
      "MIT",
      "Yale University",
      "Harvard University"
    ]
  },
  {
    numb: 12,
    question: "What is the main objective of the ‘Chip-off technique’, that has been developed recently?",
    answer: "Data Retrieval",
    options: [
      "Data Retrieval",
      "Gold Mining",
      "Cryptocurrency Mining",
      "Bio Gas Production"
    ]
  },
  {
    numb: 13,
    question: "Firmina, the longest cable in the world when built, is being constructed by which technology company?",
    answer: "Google",
    options: [
      "Microsoft",
      "Google",
      "Apple",
      "Amazon"
    ]
  },
  {
    numb: 14,
    question: "Which IT major has proposed to roll out blockchain-based open-source system to track vaccine supply chains?",
    answer: "Tech Mahindra",
    options: [
      "Infosys",
      "TCS",
      "HCL",
      "Tech Mahindra"
    ]
  },
  {
    numb: 15,
    question: "Researchers from which organization has developed noise control sheet absorber by mimicking bee hives?",
    answer: "IIT Hyderabad",
    options: [
      "IISER Pune",
      "IIT Kharagpur",
      "IIT Hyderabad",
      "DRDO"
    ]
  },
  
  // uncomment the below codes and make duplicate as more as you want to add question
  // but remember the need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];