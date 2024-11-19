
function generateCv(){

// first name
let firstname_F = document.getElementById("firstname_form")
let firstname_T = document.getElementById("firstname_template")
firstname_T.innerText = firstname_F.value


// last name
let lastname_F = document.getElementById("firstname_form")
let lastname_T = document.getElementById("lastname_template")
lastname_T.innerText = lastname_F.value

// email
let email_F = document.getElementById("email_form")
let email_T = document.getElementById("email_template")
email_T.innerText = email_F.value

// image
let file = document.getElementById("image_form").files[0]
if(file){

    let reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onloadend=function(){
        let imageT_A = document.getElementById("image_template")
        imageT_A.src = reader.result
    }
}

// address
let address_F = document.getElementById("address_form")
let address_T = document.getElementById("adddress_template")
address_T.innerText = address_F.value

// phone
let phone_F = document.getElementById("phone_form")
let phone_T = document.getElementById("phone_template")
phone_T.innerText = phone_F.value

// designation
let designation_F = document.getElementById("designation_form")
let designation_T = document.getElementById("designation_template")
designation_T.innerText = designation_F.value

// language
let language_F = document.getElementById("languages_form")
let language_T = document.getElementById("language_template")
language_T.innerText = language_F.value

// ========== OBJECTIVE SECTION ==========

let objective_F = document.getElementById("objective_form")
let objective_T = document.getElementById("objective-des")
objective_T.innerText = objective_F.value

// ========== ACHIEVEMENT SECTION ==========

// tittle
let title_F = document.getElementById("title_form")
let title_T = document.getElementById("title_template")
title_T.innerText = title_F.value

// description
let description_F = document.getElementById("description_form")
let description_T = document.getElementById("description_template")
description_T.innerText = description_F.value

// ========== EXPERIENCE SECTION ==========

// title
let title_F_E = document.getElementById("title_form_E")
let title_T_E = document.getElementById("experience-tittle-template")
title_T_E.innerText = title_F_E.value

// company
let company_F_E = document.getElementById("company_form")
let company_T_E = document.getElementById("experience-company-template")
company_T_E.innerText = company_F_E.value

// description
let description_F_E = document.getElementById("description_form_E")
let description_T_E = document.getElementById("experience-description-template")
description_T_E.innerText = description_F_E.value

// startdate
let startdate_F_E = document.getElementById("start_date_form_E")
let startdate_T_E = document.getElementById("experience-startdate-template")
startdate_T_E.innerText = startdate_F_E.value

// enddate
let enddate_F_E = document.getElementById("end_date_form_E")
let enddate_T_E = document.getElementById("experience-enddate-temlate")
enddate_T_E.innerText = enddate_F_E.value

// ========== EDUACTION SECTION ==========

//  degree
let degree_F = document.getElementById("degree_form")
let degree_T = document.getElementById("degree-template")
degree_T.innerText = degree_F.value

// college
let college_F = document.getElementById("school_form")
let college_T = document.getElementById("school-degree")
college_T.innerText = college_F.value

// start date
let startdate_F_ED = document.getElementById("start_date_form_ED")
let startdate_T_ED = document.getElementById("start-date-template-ED")
startdate_T_ED.innerText = startdate_F_ED.value

// end date
let enddate_F_ED = document.getElementById("end_date_form_ED")
let enddate_T_ED = document.getElementById("end-date-template-ED")
enddate_T_ED.innerText = enddate_F_ED.value

// ========== SKILL SECTION ==========

// skill
let skill_F = document.getElementById("skill_form")
let skill_T = document.getElementById("skill-item-template")
skill_T.innerText = skill_F.value


let form = document.getElementById("form")
let template = document.getElementById("template")
let generate_cv = document.getElementById("generate-cv")
let edit_cv = document.getElementById("edit-cv")
let print_cv = document.getElementById("print-cv")
let body = document.body


template.style.display="block"
form.style.display="none"
generate_cv.style.display="none"
print_cv.style.display="block"
edit_cv.style.display="block"
body.style.height=100%
edit_cv.addEventListener("click",()=>{
    template.style.display="none"
    form.style.display="block"
    generate_cv.style.display="block"
})

}

// add langauge section
let language_F = document.getElementById("languages_form")
let language_T = document.getElementById("language_template")
let languages_btn = document.getElementById("language_btn")
let accessElem = document.getElementById("language")

languages_btn.addEventListener("click",()=>{
    let randomLanguageFormId = `language_form_${Math.floor(Math.random() * 1000)}`
    let randomLanguageTemplateId = `language_Template_${Math.floor(Math.random() * 1000)}`
    if(language_F.value){
        // form
        let createDiv = document.createElement("div")
        createDiv.innerHTML = `
            <div>
                <input type="text" id="${randomLanguageFormId}" placeholder="Enter here">
            </div>
        `
        accessElem.append(createDiv)

        // template 
        let createLi = document.createElement("li")
        createLi.setAttribute("id",randomLanguageTemplateId)

        language_T.after(createLi)
    }

    function addInCv(){
        let language_F = document.getElementById(randomLanguageFormId).value
        let language_T = document.getElementById(randomLanguageTemplateId)

        language_T.innerText = language_F
    }

    
    let generateCv = document.getElementById("generate-cv")

    generateCv.addEventListener("click",()=>{
        addInCv()
    })
})


// present
let present = document.getElementById("present")
let present_form = document.getElementById("present_form")
let not_present = document.getElementById("not-present_form")
let enddate_T_ED = document.getElementById("end-date-template-ED")
let end_date_F = document.getElementById("end-date-F")

present_form.addEventListener("click",()=>{

    let generateCv = document.getElementById("generate-cv")
    generateCv.addEventListener("click",()=>{
        enddate_T_ED.innerText="Present"
    })

})

not_present.addEventListener("click",()=>{
    present.style.display="none"
    end_date_F.style.display="block"
})


// add achievement section
function achievement(){

    let description_F = document.getElementById("description_form")
    let title_F = document.getElementById("title_form")

    let randomTitleId_F = `title_form_${Math.floor(Math.random() * 1000)}`
    let randomTitleId_T = `title_template_${Math.floor(Math.random() * 1000)}`
    let randomDescriptionId_F = `description_form_${Math.floor(Math.random() * 1000)}`
    let randomDescriptionId_T = `description_template_${Math.floor(Math.random() * 1000)}`
    let randomAchievementDeleteId = `achievement_delete_${Math.floor(Math.random() * 1000)}`
    let achievement_items = document.getElementById("achievement-items")


    if(description_F.value && title_F.value){
        // form
        let createDiv = document.createElement("div")
        createDiv.innerHTML = `
            <div class="title-description">
                <div class="achievement-btn1">
                    <button id="${randomAchievementDeleteId}">-</button>
                </div>
                <!-- TITTLE -->
                <div>
                    <label for="title">title</label><br>
                    <input type="text" id="${randomTitleId_F}" placeholder="Enter here">
                </div>
                <!-- DESCRIPTION -->
                <div class="description">
                    <label for="description">description</label><br>
                    <textarea name="description" id="${randomDescriptionId_F}"  rows="4" placeholder="Enter here"></textarea>
                </div>
            </div>  
        `
        achievement_items.append(createDiv)

        // template
        let achievement_template = document.querySelector(".achievement-template")
        let createDiv2 = document.createElement("div")
        createDiv2.innerHTML=`
            <h5 id="${randomTitleId_T}">title</h5>
            <p id="${randomDescriptionId_T}">description</p>
        `
        achievement_template.append(createDiv2)


        // delete element
        let achievement_delete = document.getElementById(randomAchievementDeleteId)

        achievement_delete.addEventListener("click",()=>{
            console.log("muneebfffffffffffffffffffffffffffffffffffffffffffffff")
            createDiv.remove()
            createDiv2.remove()
        })
    }
    
    function addInCv(){
        let title_F = document.getElementById(randomTitleId_F)
        let title_T = document.getElementById(randomTitleId_T)
        title_T.innerText = title_F.value

        let description_F = document.getElementById(randomDescriptionId_F)
        let description_T = document.getElementById(randomDescriptionId_T)
        description_T.innerText = description_F.value
    }

    let generateCv = document.getElementById("generate-cv")

    generateCv.addEventListener("click",()=>{
        addInCv()
    })
}

// add experience section
function experience(){
    let title_F = document.getElementById("title_form_E")
    let company_F_E = document.getElementById("company_form")
    let description_F_E = document.getElementById("description_form_E")
    let startdate_F_E = document.getElementById("start_date_form_E")
    let enddate_F_E = document.getElementById("end_date_form_E")

    let randomTitleId_F = `title_form_E-${Math.floor(Math.random() * 1000)}`
    let randomTitleId_T = `title_template_E-${Math.floor(Math.random() * 1000)}`
    let randomcompanyId_F = `company_form_E_${Math.floor(Math.random() * 1000)}`
    let randomcompanyId_T = `company_template_E_${Math.floor(Math.random() * 1000)}`
    let randomstartdateId_F = `startdate_form_E_${Math.floor(Math.random() * 1000)}`
    let randomstartdateId_T = `startdate_template_E_${Math.floor(Math.random() * 1000)}`
    let randomenddateId_F = `enddate_form_E_${Math.floor(Math.random() * 1000)}`
    let randomenddateId_T = `enddate_template_E_${Math.floor(Math.random() * 1000)}`
    let randomdescription_F = `description_form_E_${Math.floor(Math.random() * 1000)}`
    let randomdescription_T = `description_template_E_${Math.floor(Math.random() * 1000)}`
    let randomExperienceDeleteId = `experience_delete_E_${Math.floor(Math.random() * 1000)}`

if(title_F.value && company_F_E.value){
    // form
    let experience_itmes = document.querySelector(".experience-items")
    let createDiv = document.createElement("div")
    createDiv.innerHTML = `
        <div class="experience-btn1">
            <button id="${randomExperienceDeleteId}">-</button>
        </div>
        <div class="title-company">
            <!-- TITTLE -->
            <div>
                <label for="title">title</label><br>
                <input type="text" id="${randomTitleId_F}"  placeholder="Enter here">
            </div>
            <!-- COMPANY -->
            <div>
                <label for="company">company</label><br>
                <input type="text" id="${randomcompanyId_F}"  placeholder="Enter here">
            </div>
        </div>
        <div class="location-description">
            <!-- DESCRIPTION -->
            <div>
                <label for="description">description</label><br>
                <input type="text" id="${randomdescription_F}" placeholder="Enter here">
            </div>
        </div>
        <div class="start-end">
            <!-- START DATE -->
            <div>
                <label for="start-date">start-date</label><br>
                <input type="date" id="${randomstartdateId_F}"  placeholder="Enter here">
            </div>
            <!-- END DATE -->
            <div class="end-date-F" >
                <label for="end-date">end-date</label><br>
                <input type="date" id="${randomenddateId_F}"  placeholder="Enter here">
            </div>
        </div>
    `
    experience_itmes.append(createDiv)

    // template
    let experience_template = document.querySelector(".experience-template ul")
    let createli = document.createElement("li")
    createli.innerHTML = `
        <h3 id="${randomTitleId_T}">tiitle</h3>
        <h5 id="${randomcompanyId_T}">company</h5>
        <div>
            <p id="${randomstartdateId_T}">startdate</p>-<p id="${randomenddateId_T}">enddate</p>
        </div>
        <p id="${randomdescription_T}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque odio beatae voluptas, esse rem voluptatibus itaque consequuntur officia eos? Consequuntur quidem aspernatur adipisci, facilis alias ratione voluptate voluptatum tenetur voluptatibus.</p>
    `
    experience_template.append(createli)

    
    let experience_delete_btn = document.getElementById(randomExperienceDeleteId)

    experience_delete_btn.addEventListener("click",()=>{
        createDiv.remove()
        createli.remove()
    })
}

    function addInCv(){
        
        // title
        let title_F = document.getElementById(randomTitleId_F)
        let title_T = document.getElementById(randomTitleId_T)
        title_T.innerText = title_F.value

        // company
        let company_F = document.getElementById(randomcompanyId_F)
        let company_T = document.getElementById(randomcompanyId_T)
        company_T.innerText = company_F.value

        // description
        let description_F = document.getElementById(randomdescription_F)
        let description_T = document.getElementById(randomdescription_T)
        description_T.innerText = description_F.value

        // start date
        let startdate_F = document.getElementById(randomstartdateId_F)
        let startdate_T = document.getElementById(randomstartdateId_T)
        startdate_T.innerText = startdate_F.value

        // end date
        let enddate_F = document.getElementById(randomenddateId_F)
        let enddate_T = document.getElementById(randomenddateId_T)
        enddate_T.innerText = enddate_F.value
    }

    let generateCv = document.getElementById("generate-cv")

    generateCv.addEventListener("click",()=>{
        addInCv()
    })
        // let endate = document.querySelector(".end-date-F")
        // endate.style.display="block"
}

// add eduaction section
function eduaction(){
    let randomdegreeId_F = `degree_form_ED-${Math.floor(Math.random() * 1000)}`
    let randomdegreeId_T = `degree_template_ED-${Math.floor(Math.random() * 1000)}`
    let randomschoolId_F = `school_form_ED_${Math.floor(Math.random() * 1000)}`
    let randomschoolId_T = `school_template_ED_${Math.floor(Math.random() * 1000)}`
    let randomstartdateId_F = `startdate_form_ED_${Math.floor(Math.random() * 1000)}`
    let randomstartdateId_T = `startdate_template_ED_${Math.floor(Math.random() * 1000)}`
    let randomenddateId_F = `enddate_form_ED_${Math.floor(Math.random() * 1000)}`
    let randomenddateId_T = `enddate_template_ED_${Math.floor(Math.random() * 1000)}`
    let randomEducationDeleteId = `experience_delete_E_${Math.floor(Math.random() * 1000)}`

    // form
    let education_items = document.querySelector(".education-items")
    let createDiv = document.createElement("div")
    createDiv.innerHTML = `
        <div class="education-btn1">
            <button id="${randomEducationDeleteId}">-</button>
        </div>
        <div class="school-degree">  
            <!-- SCHOOL -->
            <div>
                <label for="school">College/Universty</label><br>
                <input type="text" id="${randomschoolId_F}" placeholder="Enter here">
            </div>
            <!-- DEGREE -->
            <div>
                <label for="degree">degree</label><br>
                <input type="text" id="${randomdegreeId_F}"  placeholder="Enter here">
            </div>
        </div>
        <!-- DATE -->
        <div class="start-end">
            <!-- START DATE -->
                <div>
                <label for="start-date">start-date</label><br>
                <input type="date" id="${randomstartdateId_F}" placeholder="Enter here">
            </div>
            <!-- END DATE -->
            <div>
                <label for="end-date">end-date</label><br>
                <input type="date" id="${randomenddateId_F}" placeholder="Enter here">
            </div>
        </div>
    `

    education_items.append(createDiv)

    // template
    let education_template = document.querySelector(".education-template ul")
    let createli = document.createElement("li")
    createli.innerHTML = `
        <h3 id="${randomdegreeId_T}">degreeee</h3>
        <h5 id="${randomschoolId_T}">school/colleage</h5>
        <div>
            <p id="${randomstartdateId_T}">startdate</p>-<p id="${randomenddateId_T}">enddate</p>
        </div>
    `
    education_template.append(createli)

    let delete_btn = document.getElementById(randomEducationDeleteId)

    delete_btn.addEventListener("click",()=>{
        createDiv.remove()
        createli.remove()
    })

    function addInCv(){
        let school_F = document.getElementById(randomschoolId_F)
        let school_T = document.getElementById(randomschoolId_T)
        school_T.innerText = school_F.value

        let degree_F = document.getElementById(randomdegreeId_F)
        let degree_T = document.getElementById(randomdegreeId_T)
        degree_T.innerText = degree_F.value
        
        let startdate_F = document.getElementById(randomstartdateId_F)
        let startdate_T = document.getElementById(randomstartdateId_T)
        startdate_T.innerText = startdate_F.value

        let enddate_F = document.getElementById(randomenddateId_F)
        let enddate_T = document.getElementById(randomenddateId_T)
        enddate_T.innerText = enddate_F.value
    }

    let generateCv = document.getElementById("generate-cv")

    generateCv.addEventListener("click",()=>{
        addInCv()
    })

}

// add skill section
function skill(){
    let randomskillId_F = `skill_form_${Math.floor(Math.random() * 1000)}`
    let randomskillId_T = `skill_template_${Math.floor(Math.random() * 1000)}`
    let randomskillDeleteId = `experience_delete_E_${Math.floor(Math.random() * 1000)}`
    
    // form
    let skill_items = document.querySelector(".skill-items")
    let createDiv = document.createElement("div")
    createDiv.innerHTML = `
        <div class="skill-btn1">
            <button id="${randomskillDeleteId}">-</button>
        </div>
        <div>
            <label for="skill">skill</label><br>
            <input type="text" id="${randomskillId_F}"  placeholder="Enter here">
        </div>
    ` 

    skill_items.append(createDiv)

    //  template
    let skill_template = document.querySelector(".skill-template ul")
    let createli = document.createElement("li")
    createli.setAttribute("id",randomskillId_T)

    skill_template.append(createli)

    let delete_btn = document.getElementById(randomskillDeleteId)

    delete_btn.addEventListener("click",()=>{
        createDiv.remove()
        createli.remove()
    })

    function addInCv(){
        let skill_F = document.getElementById(randomskillId_F)
        let skill_T = document.getElementById(randomskillId_T)
        skill_T.innerText = skill_F.value
    }

    let generateCv = document.getElementById("generate-cv")

    generateCv.addEventListener("click",()=>{
        addInCv()
    })
}


// print cv
let print_cv = document.getElementById("print-cv")
let template = document.getElementById("template")
let edit_cv = document.getElementById("edit-cv")
let body = document.body
let html = document.html

print_cv.addEventListener("click",()=>{
    body.style.justifyContent="center"
    print_cv.style.display="none"
    edit_cv.style.display="none"
    body.style.backgroundColor="#FFF"    
    body.innerHTML = template.innerHTML
    template.style.filter = "drop-shadow(0px 0px 0.5em #000000)"
    
    window.print()
})

// // first name
// let firstname_F = document.getElementById("firstname_form")
// let firstname_T = document.getElementById("firstname_template")
// firstname_T.innerText = firstname_F.value


// // last name
// let lastname_F = document.getElementById("firstname_form")
// let lastname_T = document.getElementById("lastname_template")
// lastname_T.innerText = firstname_F.value

// // email
// let email_F = document.getElementById("email_form")
// let email_T = document.getElementById("email_template")
// email_T.innerText = email_F.value


// let image_F = document.getElementById("firstname_form")

// // address
// let address_F = document.getElementById("address_form")
// let address_T = document.getElementById("adddress_template")
// address_T.innerText = address_F.value

// // phone
// let phone_F = document.getElementById("phone_form")
// let phone_T = document.getElementById("phone_template")
// phone_T.innerText = phone_F.value

// // designation
// let designation_F = document.getElementById("designation_form")
// let designation_T = document.getElementById("designation_template")
// designation_T.innerText = designation_F.value

// // language
// let language_F = document.getElementById("languages_form")
// let language_T = document.getElementById("language_template")
// language_T.innerText = language_F.value


// let languages_btn = document.getElementById("language_btn")
// let accessElem = document.getElementById("language")

// languages_btn.addEventListener("click",()=>{
//     let randomLanguageFormId = `language_form_${Math.floor(Math.random() * 1000)}`
//     let randomLanguageTemplateId = `language_Template_${Math.floor(Math.random() * 1000)}`
//     if(language_F.value){
//         // form
//         let createDiv = document.createElement("div")
//         createDiv.innerHTML = `
//             <div>
//                 <input type="text" id="${randomLanguageFormId}" placeholder="Enter here">
//             </div>
//         `
//         accessElem.append(createDiv)

//         // template 
//         let createLi = document.createElement("li")
//         createLi.setAttribute("id",randomLanguageTemplateId)
//         createLi.innerText = ""

//         randomLanguageTemplateId.innerText = randomLanguageFormId.value

//         language_T.after(createLi)
//     }
// })

