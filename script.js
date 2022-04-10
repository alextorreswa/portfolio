let numPhoto = 2;
var i=0,j=0,k=0;
var speed=40;
var arrowOption = "exp";
var expi = 0, proji = 0;
const summary = "Hello! My name is Alex Torres. I am pursuing the Google Data Analytics Certificate. Prior to this, I got a JavaScript Developer certificate from W3Schools. Also, I studied Systems Engineering and Business. In my previous experience I resolved management problems. To achieve this, I not only use my management skills also I developed applications and tools that use data to make decisions. Now, I am working to upgrade my professional skills because I’m Interested to excel as a developer or data analyst.";
const experience = "--------EXPERIENCE-------";
const experiences = [["Web developer - Freelancer","Volar, Seattle, WA","01/2021 - Present","• Web developer focused on the development of new businesses, e-commerce and engaging clients."],
                     ["Installer","Zuber Polymers, Seattle, WA","04/2019 - 11/2020","• Technical installation of waterproofing products for more than 50 construction projects in expensive houses and commercial buildings in Seattle, Bellevue, Kirkland and Mercer Island with a billing of more than $2.000.000 with high quality, manual skills, project management and met deadlines."],
                     ["Secretary of Transit","City Council, Yopal, Colombia","09/2017 - 12/2017","• Generated recommendations across accident rates by analyzing and translating data into actionable insights and statistics that allowed the reduction by 15%. <br/>• Created and coordinated the local road safety committee to reduce accident rates."],
                     ["Professional Administrative and Financial","EAAAY, Yopal, Colombia","02/2017 - 06/2017","• I managed the purchasing and supply process with 100% effectiveness of the materials and services requerided. <br/>• Developed indicators and reports to understand, simplify, statistically analyze, and effectively interpret data and report problems through written and graphical formats (Advanced Excel, Pivot Tablets, Formulas, SQL, Databases)."],
                     ["Secretary of Public Works","City Council, Yopal, Colombia","01/2016 - 08/2016","• Planned, organized, coordinated and controlled construction projects in accordance with established policies, procedures, systems and requirements approved by the city. <br/>• Led of the maintenance road program for more than 80 miles of road and 5000 square meters of patching.<br/>• Managed construction of two vehicular bridges to connect low income communities."],
                     ["Logistics Superintendent","Perenco Oil Company, Yopal, Colombia","01/2013 - 04/2015","• Significant reductions in area costs of 20% (US1.5MM) in 2014. <br/>• Built daily, weekly and monthly analyses and reports using analytical tools, working on ways to streamline. processes using advanced SQL, data mining and troubleshooting data issues. <br/>• Extracted, interpreted, and analyzed datasets to answer ambiguous questions to establish a new transport strategy."],
                     ["Administrative Superintendent","Perenco Oil Company, Yopal, Colombia","07/2006 - 12/2012","• Designated business requirements into meaningful and explanatory visualization in dashboards and reports. through ASP. NET and the company’s intranet with accuracy and attention to detail. <br/>• Collaborated with internal teams to analyze datasets and identify opportunities. <br/>• Performed frequent ad hoc reporting on demand to assist Operations Management with decision making."],
                     ["Maintenance Coordinator","Perenco Oil Company, Yopal, Colombia","05/2004 - 06/2006","• Scheduled maintenance services for equipment with statistical control of spare parts, labor, lubricants. <br/>• Gathered, validated, translated and imported data with quality assurance and integrity to successfully manage. Build datasets and queries to drive decisions. <br/>• Analyzed lost productivity, failures, costs to guarantee the reliability and ready availability of equipment and labor."]];
const project = "--------PROJECTS--------";
const projects =  [["Web Development","Designed, built, and developed a websites using WordPress, Shopify, HTML, CSS, JavaScript, Bootstrap.","• Portfolio • Seattle, WA	• 04/2022 • <a href='https://alextorreswa.github.io/portfolio/' target='_blank'>Web page</a> • <a href='https://github.com/alextorreswa/portfolio' target='_blank'>Git Hub</a> <br/> • Task List Web Application • Washington DC	• 03/2022 • <a href='https://alextorreswa.github.io/taskList/' target='_blank'>Web page</a> • <a href='https://github.com/alextorreswa/taskList' target='_blank'>Git Hub</a> <br/>• Tourist Agency • Seattle, WA	• 03/2022 • <a href='https://alextorreswa.github.io/CozumelParadiseTours/' target='_blank'>Web page</a> • <a href='https://github.com/alextorreswa/CozumelParadiseTours' target='_blank'>Git Hub</a> <br/>• Centro Familiar Cristiano • Seattle, WA	• 11/2021 • <a href='https://cfcwa.com/' target='_blank'>Web page</a> <br/>• Orkid Web Pet Store • Seattle, WA	11/2018"],
                  ["Databases and Web Application","Design and build of relational databases with forms, SQL queries, reports, web forms, dashboards. Collect data, Analysis and Visualization","• Administrative System Information • Perenco Oil Company • 06/2015 <br/>• Maintenance Database  • Perenco Oil Company • 12/2007 <br/>• Corporate Social Responsibility Database • Perenco Oil Company • 12/2006 <br/>• Medical Appointments Application • Capresoca IPS • 06/2003"]];
const skills = ["DATA∙ANALYSIS","DATA∙CLEANSING","SQL","R∙PROGRAMMING","RSTUDIO","SPREADSHEETS","TABLEAU","DATA∙COLLECTION","METADATA","DATA∙ETHICS","HTML","CSS","JAVASCRIPT","BOOTSTRAP","VBA","MS∙ACCESS","MS∙EXCEL","ASP∙NET","SHOPIFY","WORDPRESS","GITHUB","COREL∙SUIT","SCRUM","BASH","SAP","BILINGUAL","SPANISH"];                   
let skillsShuffle =  shuffle(skills);
skillsShuffle.unshift("AVOID∙∙∙LETTERS","∙∙∙∙∙∙AND∙∙∙∙∙∙","USE∙∙THE∙ARROWS","<∙∙∙GO∙∙UP!∙∙∙>","PLAY∙THIS∙GAME!","KNOW∙∙MY∙SKILLS");
//console.log(skillsShuffle);
let matrix = [];
let gameY = 0, gameX = 7;
const positions = ["Web Developer","Data Developer","Daya Analyst","Data Base Develper","SQL Developer","Business Analyst","Web programmer","Programmer","Web specialist","Junior software engineer","JavaScript developer","Front-end developer",".Net developer","Associate developer",];
let positionInd = 0;
/////////////////////////////////////////////////////////////////////////////////////
//                      GAME SKILLS
/////////////////////////////////////////////////////////////////////////////////////

function shuffle(array) {
   let currentIndex = array.length,  randomIndex;
 
   // While there remain elements to shuffle...
   while (currentIndex != 0) {
 
     // Pick a remaining element...
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;
 
     // And swap it with the current element.
     [array[currentIndex], array[randomIndex]] = [
       array[randomIndex], array[currentIndex]];
   }
 
   return array;
 }

function FillMatrix() { 
   for(let i=0;i<=70;i++) {
      matrix[i] = ["∙"];
      for(let j=0;j<=13;j++) {
      matrix[i].push("∙");         
      }
   }
}
 
function Matrix() {
   let x=0,y=1; 
   let str = "";
   for(let i=0; i<skillsShuffle.length; i++) {
      str = skillsShuffle[i].split(''); 

      if(skillsShuffle[i+1]!==undefined && (str.length+skillsShuffle[i+1].length<=14)){
         str.push('∙');
         str.push.apply(str,skillsShuffle[i+1].split(''))      
         i++;
      }        

      if ((y)%3!=0) {
         x=15-str.length;
      }

      for(j in str) {
         matrix[y][x] = str[j];
         x++;       
      }
      x=0;
      y=y+2;           
   }
 
   str = ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
   for(j in str) {
      matrix[y][x] = str[j];    
      x++;   
   }
   x=0;
   y=y+2;   
   for(j in str) {
      matrix[y][x] = str[j];    
      x++;   
   }
   str = ["<","-","Y","O","U"," ","D","I","D"," ","I","T","!","-",">"]
   x=0;
   y=y-1;     
   for(j in str) {
      matrix[y][x] = str[j];    
      x++;   
   }   
   
}
FillMatrix();
Matrix();
renderMatrix(gameY);
setInterval(changePosition, 5000);

function changePosition() {

   if(positionInd<positions.length) {
      document.getElementById("roles").innerHTML = positions[positionInd];
      positionInd++;     
   }
   else {
   positionInd=0;
   }
}



function renderMatrix(start) {
   let cad = "";
   for(index=start;index<=start+11;index++) {
      cad = matrix[index].join('') + '<br/>' + cad;
   }   
   document.getElementById("game").innerHTML = cad;      
}

function renderCursorGame() {
   let cad = "";   
   for(index=0;index<gameX;index++) {
      cad += "&nbsp";
   }    
   cad += "█";
   document.getElementById("gameCursor").innerHTML = cad;   
}

function arrowRight2() {
   if (gameX<14) gameX++;
   renderCursorGame();
   evalGame();
}

function arrowLeft2() {
   if (gameX>0) gameX--;      
   renderCursorGame();
   evalGame();    
}

function arrowUp2(){
   if (gameY<=60) gameY++;
   renderMatrix(gameY);   
   evalGame(); 
}

function arrowDown2(){
   if (gameY>0) gameY--;      
   renderMatrix(gameY);  
   evalGame();     
}

document.addEventListener('keydown', (event) => {
   const keyName = event.key;
   if(event.key == 'ArrowUp'){      
      if (gameY<=60) gameY++;
      renderMatrix(gameY);   
      evalGame();      
   } 
   if(event.key == 'ArrowDown'){     
      if (gameY>0) gameY--;      
      renderMatrix(gameY);  
      evalGame();       
   } 
   if(event.key == 'ArrowLeft'){   
      if (gameX>0) gameX--;      
      renderCursorGame();
      evalGame();      
   } 
   if(event.key == 'ArrowRight'){   
      if (gameX<14) gameX++;
      renderCursorGame();
      evalGame();
   } 
 });

 function evalGame() {
   if(matrix[gameY][gameX]=="*") {
      Swal.fire({
         icon: 'success',
         title: 'Good Job',
         text: 'Your company could get an excellent professional with my skills!',
       })
      gameY = 0, gameX = 7;
      FillMatrix();
      Matrix();      
      renderCursorGame(); 
      renderMatrix(gameY);          
   } else if(matrix[gameY][gameX]!="∙") {
      Swal.fire({
         icon: 'error',
         title: 'Oops...You lost!',
         text: 'You touched a letter. Try again!'
       })      
      gameY = 0, gameX = 7;
      FillMatrix();
      Matrix();      
      renderCursorGame(); 
      renderMatrix(gameY);            
   }   
 }


// console.log(matrix);
//Matrix();

/////////////////////////////////////////////////////////////////////////////////////
//                      EVENT HANDLE
/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("profilePhoto").onmouseenter = function() {profilePhotoOME()};
document.getElementById("profilePhoto").onmouseleave = function() {profilePhotoOML()};
document.getElementById("profilePhoto").onmouseup = function() {profilePhotoClick()};
document.getElementById("name").onmouseup = function() {profilePhotoClick()};
document.getElementById("closeText").onmouseup = function() {closeClick()};
document.getElementById("experience").onmouseup = function() {experienceClick()};
document.getElementById("arrowDown").onmouseup = function() {arrowDownClick()};
document.getElementById("arrowUp").onmouseup = function() {arrowUpClick()};
document.getElementById("project").onmouseup = function() {projectClick()};
document.getElementById("resume").onmouseup = function() {resumeClick()};
document.getElementById("arrowUp2").onmouseup = function() {arrowUp2()};
document.getElementById("arrowDown2").onmouseup = function() {arrowDown2()};
document.getElementById("arrowRight2").onmouseup = function() {arrowRight2()};
document.getElementById("arrowLeft2").onmouseup = function() {arrowLeft2()};



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
   i = 0;
   j = 0;
   k = 0;
   document.getElementById("textScreen").innerHTML = "";   
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
   i = 0;
   j = 0;
   k = 0;
   document.getElementById("textScreen").innerHTML = "";   
   hideTitles(); 
   document.getElementById("screen").hidden = false;
   typeWriterXLine();
   arrowOption = "exp";
   renderExp();
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
   i = 0;
   j = 0;
   k = 0;
   document.getElementById("textScreen").innerHTML = "";
   hideTitles(); 
   document.getElementById("screen").hidden = false;
   typeWriterPLine();
   arrowOption = "proj";
   renderProj();
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

function showInstructions() {
   alert("Entre");
   document.getElementById("invitation").hidden = true;
}

function resumeClick(){
   window.open("./resume.pdf");
}

function closeClick() {
   i = 0;
   j = 0;
   k = 0;
   document.getElementById("textScreen").innerHTML = "";
   showTitles();
   document.getElementById("closeText").style.visibility =  "hidden";    
}

function hideTitles() {
   document.getElementById("textScreenDetailTitle").innerHTML="";
   document.getElementById("textScreenDetailSubTitle").innerHTML="";      
   document.getElementById("textScreenDetailParag").innerHTML="";    
   document.getElementById("name").style.visibility = "hidden";
   document.getElementById("project").style.visibility = "hidden";
   document.getElementById("resume").style.visibility = "hidden";
   document.getElementById("experience").style.visibility = "hidden";  
   document.getElementById("game").style.visibility = "hidden";   
   document.getElementById("gameCursor").style.visibility = "hidden";  
   document.getElementById("icos").style.visibility = "hidden";              
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
   document.getElementById("game").style.visibility = "visible";   
   document.getElementById("gameCursor").style.visibility = "visible";  
   document.getElementById("icos").style.visibility = "visible";            
}
