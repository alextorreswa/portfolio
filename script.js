let numPhoto = 2;
var i=0,j=0,k=0;
var speed=50;
var arrowOption = "exp";
var expi = 0, proji = 0;
const summary = "Hello! My name is Alex Torres. I am pursuing the Google Data Analytics Certificate. Prior to this, I got a JavaScript Developer certificate from W3Schools. Also, I studied Systems Engineering and Business. In my previous experience I resolved management problems. To achieve this, I not only use my management skills also I developed applications and tools that use data to make decisions. Now, I am working to upgrade my professional skills because I’m Interested to excel as a developer or data analyst.";
const experience = "-------------------------EXPERIENCE-------------------------";
const experiences = [["Web developer - Freelancer","Volar, Seattle, WA","01/2021 - Present","• Web developer focused on the development of new businesses, e-commerce and engaging clients."],
                     ["Installer","Zuber Polymers, Seattle, WA","04/2019 - 11/2020","• Technical installation of waterproofing products for more than 50 construction projects in expensive houses and commercial buildings in Seattle, Bellevue, Kirkland and Mercer Island with a billing of more than $2.000.000 with high quality, manual skills, project management and met deadlines."],
                     ["Secretary of Transit","City Council, Yopal, Colombia","09/2017 - 12/2017","• Generated recommendations across accident rates by analyzing and translating data into actionable insights and statistics that allowed the reduction by 15%. <br/>• Created and coordinated the local road safety committee to reduce accident rates."],
                     ["Professional Administrative and Financial","EAAAY, Yopal, Colombia","02/2017 - 06/2017","• I managed the purchasing and supply process with 100% effectiveness of the materials and services requerided. <br/>• Developed indicators and reports to understand, simplify, statistically analyze, and effectively interpret data and report problems through written and graphical formats (Advanced Excel, Pivot Tablets, Formulas, SQL, Databases)."],
                     ["Secretary of Public Works","City Council, Yopal, Colombia","01/2016 - 08/2016","• Planned, organized, coordinated and controlled construction projects in accordance with established policies, procedures, systems and requirements approved by the city. <br/>• Led of the maintenance road program for more than 80 miles of road and 5000 square meters of patching.<br/>• Managed construction of two vehicular bridges to connect low income communities."],
                     ["Logistics Superintendent","Perenco Oil Company, Yopal, Colombia","01/2013 - 04/2015","• Significant reductions in area costs of 20% (US1.5MM) in 2014. <br/>• Built daily, weekly and monthly analyses and reports using analytical tools, working on ways to streamline. processes using advanced SQL, data mining and troubleshooting data issues. <br/>• Extracted, interpreted, and analyzed datasets to answer ambiguous questions to establish a new transport strategy."],
                     ["Administrative Superintendent","Perenco Oil Company, Yopal, Colombia","07/2006 - 12/2012","• Designated business requirements into meaningful and explanatory visualization in dashboards and reports. through ASP. NET and the company’s intranet with accuracy and attention to detail. <br/>• Collaborated with internal teams to analyze datasets and identify opportunities. <br/>• Performed frequent ad hoc reporting on demand to assist Operations Management with decision making."],
                     ["Maintenance Coordinator","Perenco Oil Company, Yopal, Colombia","05/2004 - 06/2006","• Scheduled maintenance services for equipment with statistical control of spare parts, labor, lubricants. <br/>• Gathered, validated, translated and imported data with quality assurance and integrity to successfully manage. Build datasets and queries to drive decisions. <br/>• Analyzed lost productivity, failures, costs to guarantee the reliability and ready availability of equipment and labor."]];
const project = "-------------------------PROJECTS-------------------------";
const projects =  [["Web Development","Designed, built, and developed a websites using WordPress, Shopify, HTML, CSS, JavaScript, Bootstrap.","• Portfolio • Seattle, WA	• 04/2022 • <a href='https://alextorreswa.github.io/CozumelTours/'>Web page</a> • <a href='https://github.com/alextorreswa/CozumelTours'>Git Hub</a> <br/>• Tourist Agency • Seattle, WA	• 03/2022 • <a href='https://alextorreswa.github.io/CozumelTours/'>Web page</a> • <a href='https://github.com/alextorreswa/CozumelTours'>Git Hub</a> <br/>• Centro Familiar Cristiano • Seattle, WA	• 11/2021 • <a href='https://cfcwa.com/'>Web page</a> <br/>• Orkid Web Pet Store • Seattle, WA	11/2018"],
                  ["Databases and Web Application","Design and build of relational databases with forms, SQL queries, reports, web forms, dashboards. Collect data, Analysis and Visualization","• Administrative System Information • Perenco Oil Company • 06/2015 <br/>• Maintenance Database  • Perenco Oil Company • 12/2007 <br/>• Corporate Social Responsibility Database • Perenco Oil Company • 12/2006 <br/>• Medical Appointments Application • Capresoca IPS • 06/2003"]];
                     
document.getElementById("profilePhoto").onmouseenter = function() {profilePhotoOME()};
document.getElementById("profilePhoto").onmouseleave = function() {profilePhotoOML()};
document.getElementById("profilePhoto").onmouseup = function() {profilePhotoClick()};
document.getElementById("name").onmouseup = function() {profilePhotoClick()};
document.getElementById("closeText").onmouseup = function() {closeClick()};
document.getElementById("experience").onmouseup = function() {experienceClick()};
document.getElementById("arrowDown").onmouseup = function() {arrowDownClick()};
document.getElementById("arrowUp").onmouseup = function() {arrowUpClick()};
document.getElementById("project").onmouseup = function() {projectClick()};

////////////////////////////////////////////////////////////////
//                      CHANGE PHOTO PROFILE
////////////////////////////////////////////////////////////////

function profilePhotoOML() {
   document.getElementById("profilePhoto").src = "./profile1.png";
}

function profilePhotoOME() {
   document.getElementById("profilePhoto").src = `./profile${numPhoto}.png`;
   if(numPhoto>=13) {
      numPhoto=2;
   }
   numPhoto++;
}

///////////////////////////////////////////////////////////
//                      PROFILE INFO
//////////////////////////////////////////////////////////

function profilePhotoClick() { 
   hideTitles(); 
   document.getElementById("screen").hidden = false;
   typeWriter(); 
}

function typeWriter() {
   if (i < summary.length) {
     document.getElementById("textScreen").innerHTML += summary.charAt(i);
     i++;
     setTimeout(typeWriter, speed);
   }   
   if(document.getElementById("textScreen").innerHTML==summary) {
      document.getElementById("textScreen").innerHTML += "<span> </span>";
      document.getElementById("closeText").style.visibility =  "visible";
   }
 }

/////////////////////////////////////////////////////  
//                   EXPERIENCE INFO
/////////////////////////////////////////////////////

function experienceClick(){
   hideTitles(); 
   document.getElementById("screen").hidden = false;
   typeWriterXLine();
   arrowOption = "exp";
   renderExp();
   console.log(expi);
}

 function typeWriterXLine() {
   if (j < experience.length) {
     document.getElementById("textScreen").innerHTML += experience.charAt(j);
     j++;
     setTimeout(typeWriterXLine, speed);
   }   
   if(document.getElementById("textScreen").innerHTML==experience) {
      document.getElementById("closeText").style.visibility =  "visible";
      document.getElementById("arrowUp").style.visibility =  "visible";  
      document.getElementById("arrowDown").style.visibility =  "visible";           
      document.getElementById("textScreenDetail").hidden = false;     
   }
 }

function renderExp() {
   if(expi<0){
      expi=0;      
   } else if(expi>=experiences.length) {
      expi=experiences.length-1; 
   }
   else if(expi>=0 || expi<=experiences.length-1) {
      document.getElementById("textScreenDetailTitle").innerHTML=experiences[expi][0];
      document.getElementById("textScreenDetailSubTitle").innerHTML=experiences[expi][1] + " -> " + experiences[expi][2];      
      document.getElementById("textScreenDetailParag").innerHTML=experiences[expi][3];       
   }
}

/////////////////////////////////////////////////////  
//                   PROJECTS INFO
/////////////////////////////////////////////////////

function projectClick(){

   hideTitles(); 
   document.getElementById("screen").hidden = false;
   typeWriterPLine();
   arrowOption = "proj";
   renderProj();
   console.log(expi);
}

 function typeWriterPLine() {
   if (k < project.length) {
     document.getElementById("textScreen").innerHTML += project.charAt(k);
     k++;
     setTimeout(typeWriterPLine, speed);
   }   
   if(document.getElementById("textScreen").innerHTML==project) {
      document.getElementById("closeText").style.visibility =  "visible";
      document.getElementById("arrowUp").style.visibility =  "visible";  
      document.getElementById("arrowDown").style.visibility =  "visible";           
      document.getElementById("textScreenDetail").hidden = false;     
   }
 }

function renderProj() {
   if(proji<0){
      proji=0;      
   } else if(proji>=projects.length) {
      proji=projects.length-1; 
   }
   else if(proji>=0 || proji<=projects.length-1) {
      document.getElementById("textScreenDetailTitle").innerHTML=projects[proji][0];
      document.getElementById("textScreenDetailSubTitle").innerHTML=projects[proji][1];      
      document.getElementById("textScreenDetailParag").innerHTML=projects[proji][2];       
   }
}

////////////////////////////////////////////////
//                   ARROWS
////////////////////////////////////////////////

function arrowDownClick() {
   switch(arrowOption) {
      case "exp": expi++; renderExp(); break;
      case "proj": proji++; renderProj(); break;      
      default: break;
   }
}

function arrowUpClick() {
   switch(arrowOption) {
      case "exp": expi--; renderExp(); break;
      case "proj": proji--; renderProj(); break;         
      default: break;      
   }
}

////////////////////////////////////////////////
//                   SUPPORT FUNCTIONS 
///////////////////////////////////////////////

function closeClick() {
   i = 0;
   j = 0;
   k = 0;
   document.getElementById("textScreen").innerHTML = "";
   showTitles();
   document.getElementById("closeText").style.visibility =  "hidden";    
}

function hideTitles() {
   document.getElementById("name").style.visibility = "hidden";
   document.getElementById("project").style.visibility = "hidden";
   document.getElementById("resume").style.visibility = "hidden";
   document.getElementById("experience").style.visibility = "hidden";     
}

function showTitles() {
   document.getElementById("textScreenDetail").hidden = true;
   document.getElementById("arrowUp").style.visibility = "hidden"
   document.getElementById("arrowDown").style.visibility = "hidden"        
   document.getElementById("screen").hidden = true;    
   document.getElementById("name").style.visibility = "visible";
   document.getElementById("project").style.visibility = "visible";
   document.getElementById("resume").style.visibility = "visible";
   document.getElementById("experience").style.visibility = "visible";    
}
