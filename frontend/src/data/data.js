export const SCHOLARS = [
  {id:1,name:"Aarav Mehta",email:"aarav@vahani.org",year:"2nd",programme:"Computer Science",attendance:94,score:88,status:"Active",batch:"2024"},
  {id:2,name:"Priya Sharma",email:"priya@vahani.org",year:"1st",programme:"Engineering",attendance:87,score:76,status:"Active",batch:"2025"},
  {id:3,name:"Rohan Verma",email:"rohan@vahani.org",year:"3rd",programme:"Medicine",attendance:91,score:92,status:"Active",batch:"2023"},
  {id:4,name:"Sneha Patel",email:"sneha@vahani.org",year:"2nd",programme:"Law",attendance:78,score:65,status:"At Risk",batch:"2024"},
  {id:5,name:"Kabir Singh",email:"kabir@vahani.org",year:"1st",programme:"Architecture",attendance:96,score:84,status:"Active",batch:"2025"},
  {id:6,name:"Anjali Nair",email:"anjali@vahani.org",year:"3rd",programme:"Computer Science",attendance:72,score:58,status:"At Risk",batch:"2023"},
  {id:7,name:"Dev Joshi",email:"dev@vahani.org",year:"2nd",programme:"Engineering",attendance:89,score:91,status:"Active",batch:"2024"},
  {id:8,name:"Meera Iyer",email:"meera@vahani.org",year:"1st",programme:"Medicine",attendance:100,score:97,status:"Active",batch:"2025"}
];

export const TRAINERS = [
  {id:1,name:"Dr. Sunita Rao",email:"sunita@vahani.org",subject:"English Communication",scholars:45,sessions:28,rating:4.8,joined:"Jan 2023"},
  {id:2,name:"Prof. Alok Gupta",email:"alok@vahani.org",subject:"Professional Literacy",scholars:60,sessions:32,rating:4.6,joined:"Mar 2022"},
  {id:3,name:"Ms. Ritu Kapoor",email:"ritu@vahani.org",subject:"Computer Literacy",scholars:55,sessions:24,rating:4.9,joined:"Jun 2023"},
  {id:4,name:"Mr. Vikram Nair",email:"vikram@vahani.org",subject:"Career Development",scholars:40,sessions:18,rating:4.7,joined:"Sep 2023"}
];

export const PROGRAMMES = [
  {id:1,name:"English Communication",enrolled:45,capacity:50,completion:90,resources:12,trainer:"Dr. Sunita Rao",color:"#0D1B5E"},
  {id:2,name:"Professional Literacy",enrolled:60,capacity:60,completion:75,resources:8,trainer:"Prof. Alok Gupta",color:"#1A7F5A"},
  {id:3,name:"Computer Literacy",enrolled:55,capacity:60,completion:60,resources:15,trainer:"Ms. Ritu Kapoor",color:"#5B35B0"},
  {id:4,name:"Career Development",enrolled:40,capacity:50,completion:95,resources:10,trainer:"Mr. Vikram Nair",color:"#C0392B"},
  {id:5,name:"Leadership Workshop",enrolled:30,capacity:35,completion:45,resources:6,trainer:"Dr. Sunita Rao",color:"#0E6E8C"},
  {id:6,name:"Financial Literacy",enrolled:50,capacity:50,completion:80,resources:9,trainer:"Prof. Alok Gupta",color:"#7C3AED"}
];

export const ASSIGNMENTS = [
  {id:1,title:"Resume Workshop Draft",programme:"Career Development",due:"2026-03-18",submitted:32,total:40,status:"Open"},
  {id:2,title:"Excel Data Analysis",programme:"Computer Literacy",due:"2026-03-20",submitted:48,total:55,status:"Open"},
  {id:3,title:"English Essay – Leadership",programme:"English Communication",due:"2026-03-15",submitted:45,total:45,status:"Closed"},
  {id:4,title:"Business Case Study",programme:"Professional Literacy",due:"2026-03-25",submitted:12,total:60,status:"Open"},
  {id:5,title:"Public Speaking Recording",programme:"English Communication",due:"2026-03-30",submitted:5,total:45,status:"Open"}
];

export const RESOURCES = [
  {id:1,title:"English Grammar Masterclass",type:"Video",programme:"English Communication",size:"245 MB",date:"2026-02-10"},
  {id:2,title:"Resume Templates Pack",type:"Document",programme:"Career Development",size:"12 MB",date:"2026-02-15"},
  {id:3,title:"Excel Advanced Formulas",type:"Notes",programme:"Computer Literacy",size:"3.2 MB",date:"2026-02-20"},
  {id:4,title:"Power BI Dashboard Tutorial",type:"Video",programme:"Computer Literacy",size:"380 MB",date:"2026-02-25"},
  {id:5,title:"Professional Email Writing",type:"Notes",programme:"Professional Literacy",size:"1.8 MB",date:"2026-03-01"},
  {id:6,title:"Financial Planning Basics",type:"Document",programme:"Financial Literacy",size:"8.5 MB",date:"2026-03-05"}
];

export const ACTIVITIES = [
  {id:1,name:"Sports Day 2026",date:"2026-03-22",registered:28,capacity:50,type:"Sports"},
  {id:2,name:"Cultural Night",date:"2026-04-05",registered:62,capacity:80,type:"Cultural"},
  {id:3,name:"Entrepreneurship Summit",date:"2026-04-12",registered:35,capacity:40,type:"Academic"},
  {id:4,name:"Photography Workshop",date:"2026-04-18",registered:18,capacity:25,type:"Creative"}
];