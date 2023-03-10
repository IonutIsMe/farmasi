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
        "first_section_title": "Bun??,",
        "first_section_description": "M?? numesc Gabriela Gavita ??i sunt mam?? de b??iat iar ??n urma cu 3 ani, am venit ??n Spania pentru o via???? mai bun?? ??i s?? ??mi sprijin mai mult b??iatul! Venind ??n Spania am g??sit o ??ar?? cu oameni minuna??i, calzi, deschi??i, cu o cultur?? de care m-am ??ndr??gostit! ??nmomentul beauty influencer la marea familie Farmasi, care ??i-a deschis por??ile ??i ??n Spania, Germania, Portugalia iar ??n cur??nd ??i ??n Republica Moldova!",
        "second_section_left_title": "Oportunitate",
        "second_section_left_description1": "Marea deschidere a avut loc!! E??ti preg??tit pentru succesul Farmasi?!",
        "second_section_left_description2": "Pe formularul de mai jos te vei putea ??nscrie ??n echip?? mea",
        "second_section_left_description3": "??nainte de a ??ncepe, haide??i s?? vedem ce beneficii ????i poate aduce Farmasi ??i cum ????i poate schimba via??a ??n bine!",
        "second_section_left_description4": "Farmasi Cosmetics, cu cea mai mare cre??tere la nivel mondial din ultimii 3 ani ??n Mexic, SUA, Turcia, Rom??nia , Costa Rica ??i alte 20 ????ri, a oferit bucurii ??i realiz??ri oamenilor care au decis s?? ni se al??ture.",
        "second_section_right_title": "Acum ai o oportunitate pe care nu vei dori s?? o ratezi!",
        "second_section_right_description1": "Daca ????i dore??ti s?? te al??turi familiei Farmasi, una dintre cele mai de top companii din lume, ??i vrei s?? ??nve??i ??i s?? evoluezi te afli ??n locul potrivit!",
        "second_section_right_description2": "????i pot oferi tot sprijinul posibil ??i s?? te ??ndrum spre visul t??u , ce poate deveni realitate!",
        "register_button": "Inregistrare",
        "third_section_title": "Despre beauty influencer",
        "third_section_description": "Dac?? e??ti o persoan?? ambi??ioas??,muncitoare ,deschis?? , ????i place s?? lucrezi cu oamenii ??i vrei sa beneficiezi de vacan??e, program flexibil ??i s?? ai un venit ??n plus, te a??tept cu drag in echipa mea!",
        "third_section_benefits1": "Inscrierea este gratuit??",
        "third_section_benefits2": "Dup?? ce ????i activezi contul, ??ti oferim discount ??ntre 30-50% fa???? de pre??ul din catalog",
        "third_section_benefits3": "Beneficiezi de cadouri in primele 4 luni, ??i de training",
        "third_section_benefits4": "Nu ai nici o obliga??ie in familia Farmasi!",
        "catalog_button": "Catalog",
    },

    "es":
    {
        "first_section_title": "Hola,",
        "first_section_description": "Mi nombre es Gabriela Gavita y soy madre de un ni??o y hace de 3 a??os yo veine a Espa??a para una vida mejor y para ajudar m??s a mi ni??o. Quando viene a Espa??a encontr?? un pa??s con gente maravillosa, c??lida, abierta, con una cultura de que  me enamor??! Actualmente soy influencer de belleza de la gran familia Farmasi, que ha abierto sus puertas en Espa??a, Alemania, Portugal y pr??ximamente en la Rep??blica de Moldavia!",
        "second_section_left_title": "Oportunidad",
        "second_section_left_description1": "????La gran inauguraci??n ha tenido lugar!!  ??Est??s listo para el ??xito de Farmasi?",
        "second_section_left_description2": "En el siguiente formulario podr??s unirte a mi equipo",
        "second_section_left_description3": "Antes de comenzar, ??veamos qu?? beneficios puede brindarle Farmasi y c??mo puede cambiar su vida para mejor!",
        "second_section_left_description4": "Farmasi Cosmetics, con el mayor crecimiento a nivel mundial en los ??ltimos 3 a??os en M??xico, USA, Turqu??a, Rumania, Costa Rica y otros 20 pa??ses, ha regalado alegr??as y logros a las personas que decidieron acompa??arnos.",
        "second_section_right_title": "????Ahora tienes una oportunidad que no querr??s perder!!",
        "second_section_right_description1": "Si quieres unirte a la familia Farmasi, una de las empresas m??s importantes del mundo, y quieres aprender y evolucionar, ??est??s en el lugar correcto!",
        "second_section_right_description2": "??Puedo brindarte todo el apoyo posible y guiarte hacia tu sue??o, que puede convertirse en realidad!",
        "register_button": "Registro",
        "third_section_title": "Sobre influencers de belleza",
        "third_section_description": "Si eres una persona ambiciosa, trabajadora, abierta, te gusta trabajar con personas y ??Quieres beneficiarte de vacaciones, horario flexible y tener un ingreso extra? Te espero tenerte en mi equipo!y",
        "third_section_benefits1": "El registro es gratuito",
        "third_section_benefits2": "Despu??s de activar su cuenta, le ofrecemos un descuento entre 30-50% en comparaci??n con el precio del cat??logo",
        "third_section_benefits3": "Te beneficias de regalos en los primeros 4 meses y formaci??n",
        "third_section_benefits4": "??No tienes ninguna obligaci??n en la familia Farmasi!",
        "catalog_button": "Cat??logo",
    },

    "uk":
    {
        "first_section_title": "Hello,",
        "first_section_description": "My name is Gabriela Gavita and I have a son. I came to Spain 3 years ago for a better life and to support my son! When I came to Spain I found a country filled with wonderful, warm and open-minded people, a culture with which I felt in love! At the moment I am a beauty influencer at Farmasi family, which opened its gates even in Spain, Germany, Portugal and soon in Republic of Moldova!",
        "second_section_left_title": "Opportunity",
        "second_section_left_description1": "The big opening took place! Are you ready for Farmasi???s success?!",
        "second_section_left_description2": "You can sign up in my team in the form below",
        "second_section_left_description3": "Before starting, let???s see which are the benefits that Farmasi can bring you and how it can change your life for the better!",
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



