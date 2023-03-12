// import data from './languageData';

const langEl = document.querySelector('.lang-wrap');
const languageButton = document.querySelectorAll('.language-button');
// const descrEl = document.querySelector('.text');
const firstSectionTitle = document.querySelector('.first-section-title');
const firstSectionDescription = document.querySelector('.first-section-description');
const secondSectionLeftTitle = document.querySelector('.second-section-left-title');
const secondSectionLeftDescription1 = document.querySelector('.second-section-left-description1');
const secondSectionLeftDescription2 = document.querySelector('.second-section-left-description2');
const secondSectionLeftDescription3 = document.querySelector('.second-section-left-description3');
const secondSectionLeftDescription4 = document.querySelector('.second-section-left-description4');

const secondSectionRightTitle = document.querySelector('.second-section-right-title');
const secondSectionRightDescription1 = document.querySelector('.second-section-right-description1');
const secondSectionRightDescription2 = document.querySelector('.second-section-right-description2');

const registerButton = document.querySelector('.register-button');
const thirdSectionTitle = document.querySelector('.third-section-title');
const thirdSectionDescription = document.querySelector('.third-section-description');
const thirdSectionBenefits1 = document.querySelector('.third-section-benefits1');
const thirdSectionBenefits2 = document.querySelector('.third-section-benefits2');
const thirdSectionBenefits3 = document.querySelector('.third-section-benefits3');
const thirdSectionBenefits4 = document.querySelector('.third-section-benefits4');
const catalogButton = document.querySelector('.catalog-button');


languageButton.forEach(e => {
    e.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        e.classList.add('active');

        const attr = e.getAttribute('language');

        // descrEl.textContent = data[attr].text;
        firstSectionTitle.textContent = data[attr].first_section_title;
        firstSectionDescription.textContent = data[attr].first_section_description;
        secondSectionLeftTitle.textContent = data[attr].second_section_left_title
        secondSectionLeftDescription1.textContent = data[attr].second_section_left_description1
        secondSectionLeftDescription2.textContent = data[attr].second_section_left_description2
        secondSectionLeftDescription3.textContent = data[attr].second_section_left_description3
        secondSectionLeftDescription4.textContent = data[attr].second_section_left_description4
        secondSectionRightTitle.textContent = data[attr].second_section_right_title
        secondSectionRightDescription1.textContent = data[attr].second_section_right_description1
        secondSectionRightDescription2.textContent = data[attr].second_section_right_description2
        registerButton.textContent = data[attr].register_button
        thirdSectionTitle.textContent = data[attr].third_section_title
        thirdSectionDescription.textContent = data[attr].third_section_description
        thirdSectionBenefits1.textContent = data[attr].third_section_benefits1
        thirdSectionBenefits2.textContent = data[attr].third_section_benefits2
        thirdSectionBenefits3.textContent = data[attr].third_section_benefits3
        thirdSectionBenefits4.textContent = data[attr].third_section_benefits4
        catalogButton.textContent = data[attr].catalog_button
    });
});

// document.getElementsByClassName("register-button").onclick = function () {
//     location.href = "https://www.farmasi.es/gabrielagavita";
// };
// document.getElementsByClassName("register-button").onclick = function () {
//     location.href = "https://www.farmasi.es/gabrielagavita";
// };

export const data = {
    "ro":
    {
        "first_section_title": "Bună,",
        "first_section_description": "Mă numesc Gabriela Gavita și sunt mamă de băiat iar în urma cu 3 ani, am venit în Spania pentru o viață mai bună și să îmi sprijin mai mult băiatul! Venind în Spania am găsit o țară cu oameni minunați, calzi, deschiși, cu o cultură de care m-am îndrăgostit! Înmomentul beauty influencer la marea familie Farmasi, care și-a deschis porțile și în Spania, Germania, Portugalia iar în curând și în Republica Moldova!",
        "second_section_left_title": "Oportunitate",
        "second_section_left_description1": "Marea deschidere a avut loc!! Ești pregătit pentru succesul Farmasi?!",
        "second_section_left_description2": "Pe formularul de mai jos te vei putea înscrie în echipă mea",
        "second_section_left_description3": "Înainte de a începe, haideți să vedem ce beneficii îți poate aduce Farmasi și cum îți poate schimba viața în bine!",
        "second_section_left_description4": "Farmasi Cosmetics, cu cea mai mare creștere la nivel mondial din ultimii 3 ani în Mexic, SUA, Turcia, România , Costa Rica și alte 20 țări, a oferit bucurii și realizări oamenilor care au decis să ni se alăture.",
        "second_section_right_title": "Acum ai o oportunitate pe care nu vei dori să o ratezi!",
        "second_section_right_description1": "Daca îți dorești să te alături familiei Farmasi, una dintre cele mai de top companii din lume, și vrei să înveți și să evoluezi te afli în locul potrivit!",
        "second_section_right_description2": "Îți pot oferi tot sprijinul posibil și să te îndrum spre visul tău , ce poate deveni realitate!",
        "register_button": "Inregistrare",
        "third_section_title": "Despre beauty influencer",
        "third_section_description": "Dacă ești o persoană ambițioasă,muncitoare ,deschisă , îți place să lucrezi cu oamenii și vrei sa beneficiezi de vacanțe, program flexibil și să ai un venit în plus, te aștept cu drag in echipa mea!",
        "third_section_benefits1": "Inscrierea este gratuită",
        "third_section_benefits2": "După ce îți activezi contul, îti oferim discount între 30-50% față de prețul din catalog",
        "third_section_benefits3": "Beneficiezi de cadouri in primele 4 luni, și de training",
        "third_section_benefits4": "Nu ai nici o obligație in familia Farmasi!",
        "catalog_button": "Catalog",
    },

    "es":
    {
        "first_section_title": "Hola,",
        "first_section_description": "Mi nombre es Gabriela Gavita y soy madre de un niño y hace de 3 años yo veine a España para una vida mejor y para ajudar más a mi niño. Quando viene a España encontré un país con gente maravillosa, cálida, abierta, con una cultura de que  me enamoró! Actualmente soy influencer de belleza de la gran familia Farmasi, que ha abierto sus puertas en España, Alemania, Portugal y próximamente en la República de Moldavia!",
        "second_section_left_title": "Oportunidad",
        "second_section_left_description1": "¡¡La gran inauguración ha tenido lugar!!  ¿Estás listo para el éxito de Farmasi?",
        "second_section_left_description2": "En el siguiente formulario podrás unirte a mi equipo",
        "second_section_left_description3": "Antes de comenzar, ¡veamos qué beneficios puede brindarle Farmasi y cómo puede cambiar su vida para mejor!",
        "second_section_left_description4": "Farmasi Cosmetics, con el mayor crecimiento a nivel mundial en los últimos 3 años en México, USA, Turquía, Rumania, Costa Rica y otros 20 países, ha regalado alegrías y logros a las personas que decidieron acompañarnos.",
        "second_section_right_title": "¡¡Ahora tienes una oportunidad que no querrás perder!!",
        "second_section_right_description1": "Si quieres unirte a la familia Farmasi, una de las empresas más importantes del mundo, y quieres aprender y evolucionar, ¡estás en el lugar correcto!",
        "second_section_right_description2": "¡Puedo brindarte todo el apoyo posible y guiarte hacia tu sueño, que puede convertirse en realidad!",
        "register_button": "Registro",
        "third_section_title": "Sobre influencers de belleza",
        "third_section_description": "Si eres una persona ambiciosa, trabajadora, abierta, te gusta trabajar con personas y ¿Quieres beneficiarte de vacaciones, horario flexible y tener un ingreso extra? Te espero tenerte en mi equipo!y",
        "third_section_benefits1": "El registro es gratuito",
        "third_section_benefits2": "Después de activar su cuenta, le ofrecemos un descuento entre 30-50% en comparación con el precio del catálogo",
        "third_section_benefits3": "Te beneficias de regalos en los primeros 4 meses y formación",
        "third_section_benefits4": "¡No tienes ninguna obligación en la familia Farmasi!",
        "catalog_button": "Catálogo",
    },

    "uk":
    {
        "first_section_title": "Hello,",
        "first_section_description": "My name is Gabriela Gavita and I have a son. I came to Spain 3 years ago for a better life and to support my son! When I came to Spain I found a country filled with wonderful, warm and open-minded people, a culture with which I felt in love! At the moment I am a beauty influencer at Farmasi family, which opened its gates even in Spain, Germany, Portugal and soon in Republic of Moldova!",
        "second_section_left_title": "Opportunity",
        "second_section_left_description1": "The big opening took place! Are you ready for Farmasi’s success?!",
        "second_section_left_description2": "You can sign up in my team in the form below",
        "second_section_left_description3": "Before starting, let’s see which are the benefits that Farmasi can bring you and how it can change your life for the better!",
        "second_section_left_description4": "Farmasi Cosmetics, had a significant increase worldwide in the last 3 years in Mexico, SUA, Turkey, Romania, Costa Rica and other 20 countries and offered joys and accomplishments to the people which decided to join us.",
        "second_section_right_title": "Now you have an opportunity that you do not wish to miss!!",
        "second_section_right_description1": "If you wish to join Farmasi, one of the top companies worldwide and want to learn and grow, you are in the right place!",
        "second_section_right_description2": "I can offer you the best support and guide you, so that your dreams can become true!",
        "register_button": "Register",
        "third_section_title": "About beauty influencer",
        "third_section_description": "If you are an ambitious, hardworking, open-minded person and you like to work with other people and to benefit from holidays, a flexible schedule and to have an extra income, I look forward to having you in my team!",
        "third_section_benefits1": "Sign up for free",
        "third_section_benefits2": "After you activate your account, we offer you a discount between 30-50% compared to the original price from the magazine",
        "third_section_benefits3": "You benefit from gifts in the first 4 months and training",
        "third_section_benefits4": "You have no obligations in Farmasi family!",
        "catalog_button": "Magazine",
    },
}



