/**
 * todo : Keep in mind that some of the other campuses will have altered FAQs, we'll need to determine how we want to manage those as well.
 */

const faqDefaultData = [
  {
    title: 'What does Christ Fellowship believe?',
    description:
      'Christ Fellowship is a church in South Florida with a passion to help you know God and grow in your relationships so that you can discover your purpose and impact your world. Led by senior pastors Todd & Julie Mullins, our mission is to impact the world with the love and message of Jesus Christ—everyone, everyday, everywhere. <br />  <br />  Find out more about <a target="_blank" href="/about">our church and our beliefs.</a>',
  },

  {
    title: 'Are there any expectations for visitors?',
    description: `Not at all. When we say "welcome home", we mean it! Be yourself, relax, and enjoy the service. We can't wait to see you!`,
  },
  {
    title: 'How long are the services?',
    description:
      "Our church services last a little over an hour. We'll sing a few worship songs and hear a message from our pastors or guest speakers. We suggest arriving a little early so you can park, get coffee, and find your seat!",
  },
  {
    title: 'What should I wear?',
    description:
      'You can wear whatever you feel most comfortable in! Every Sunday, we have casual, relaxing services where everyone is welcome. Come as you are and expect to feel right at home!',
  },
  {
    title: 'Where do I park?',
    description:
      'As you pull onto the campus, our parking team will help you find a great spot! We reserve the best parking spots for our visitors right in front of the main entrance, and can help you locate accessible parking if needed.',
  },
  {
    title: 'Is childcare provided?',
    description:
      'Yes! We have a fun, safe, and clean area for kids & students (newborn–grade 5). <br/> <br/> <b> New to Christ Fellowship Kids?</b> <br/> We’d love to meet you! Let us know a little about your family using this <a target="_blank" href="https://rock.gocf.org/FamilyRegistration">brief form</a> so that our team can help get you connected when you arrive. <br/> <br/> If you are planning on visiting Christ Fellowship Kids this Sunday, <a target="_blank" href="https://rock.gocf.org/CFKidsPlanaVisit">let us know</a> so we can help your family experience all that CFKids has to offer! <br/> <br/> You can learn more about Christ Fellowship Kids programming <a target="_blank" href="https://www.christfellowship.church/christ-fellowship-kids">here</a>!',
  },
];

export const faqCBO = [
  {
    title: 'What should I give?',
    description:
      "Christ Birthday Offering is a special offering we get to be a part of every Christmas, where we give above our regular tithes and offerings to help fund our mission projects throughout the year. There isn't a set amount you should give, but we often say our Christ Birthday Offering is the greatest gift on our list because its joy will outlast and outlive any other gift we will give! We encourage you to pray about how God wants you to be a part of it.",
  },

  {
    title: 'When can I give my offering?',
    description: `Traditionally, we give to the Christ Birthday Offering during our Christmas Services. However, you can give your offering any time throughout the Christmas season!`,
  },
  {
    title: 'What does the Christ Birthday Offering go to?',
    description:
      "Every dollar you give to Christ Birthday Offering will make a difference toward continuing our impact both locally and globally through our mission projects throughout the year. <a style='color: #CB2C30' target='_blank' href='https://issuu.com/christfellowshipchurch/docs/events_2023_cbo_print_handouts_8.5x11_web_final/36?fr=xKAE9_zU1NQ'>Read more about the Vision for 2024.</a>",
  },
];

export const faqEaster = [
  {
    title: 'What can I expect from service?',
    description:
      'When you walk through the doors at any location, someone will be there to greet you. If you have kids (babies-elementary), we can help you check them into Christ Fellowship Kids with our incredible team. Then, you’ll head to the main auditorium for a 70-minute service filled with celebratory songs and an encouraging Easter message. After service, stick around to enjoy the fun for everyone. Can’t join in person? You’ll get the same experience at an online service!',
  },
  {
    title: 'Is childcare available?',
    description: `Yes! We have Christ Fellowship Kids programming available for babies–elementary during all Good Friday and Easter services.  The MIX, for 5th and 6th graders, will only be offered during Easter services.`,
  },
  {
    title: 'Will there be activities for children after the service?',
    description:
      'Yes! Every location will have an After Party with interactive activities for kids after each service.',
  },
  {
    title: 'What time should I arrive?',
    description:
      'Doors will open approximately 30 minutes prior to each service. We recommend arriving early so you can find seats, snap those pictures, and enjoy time with your family and friends before the service starts!',
  },
  {
    title: 'What should I wear?',
    description:
      'Wear whatever you’re most comfortable in! Whether you want to keep it casual with jeans and a t-shirt or dress up in your favorite Easter outfit—you’ll fit right in.',
  },
  {
    title: 'Will there be live Spanish translation or ASL Interpretation? ',
    description:
      'Yes! <br/> <br/>Many of our locations offer live Spanish translation for family or friends who may need it. When you select a campus, you will see services that will offer Spanish translation  marked with an asterisk (*). <br/><br/><span style="font-style: italic;"><a href="/easter-espanol">¿Buscas un servicio de Pascua en español?</a> Ten en cuenta que contamos con traducción al inglés disponible en todos los servicios.</span> <br/><br/>American Sign Language (ASL) interpretation is available at our Trinity location at 9:30AM.',
  },
];

export const faqEasterCFE = [
  {
    title: '¿Qué puedo esperar del servicio?',
    description:
      'Cuando cruces las puertas en cualquiera de nuestras localizaciones, alguien estará listo para recibirte. Si tienes hijos bebés hasta primaria, podemos ayudarte a registrarlo en Christ Fellowship Kids con nuestro increíble equipo. Luego, te dirigirás al auditorio principal para un servicio de 70 minutos lleno de canciones de celebración y un mensaje alentador de Pascua. Después del servicio, quédate para disfrutar de la diversión para toda la familia. ¿No puedes unirte en persona? ¡Obtendrás la misma experiencia en el servicio en línea!',
  },
  {
    title: '¿Hay cuidado de niños disponible?',
    description:
      '¡Sí! Tenemos programación de Christ Fellowship Kids disponible para bebés hasta primaria, en todos nuestros servicios de Viernes Santo y Pascua. The MIX para estudiantes en 5to y 6to grado solo se tendrá durante los servicios de Pascua, pero invitamos a todos los niños de 5to grado en adelante a unirse a su familia en el auditorio principal para el servicio del Viernes Santo.',
  },
  {
    title: '¿Habrá actividades para niños después del servicio?',
    description:
      '¡Sí! Cada localización tendrá un After Party después de cada servicio con actividades interactivas para niños.',
  },
  {
    title: '¿A qué hora debo llegar?',
    description:
      'Las puertas se abrirán aproximadamente 30 minutos antes de cada servicio. Te recomendamos llegar temprano para que puedas encontrar asientos, sacarte fotos y disfrutar del tiempo con tu familia y amigos antes de que comience la celebración de Pascua.',
  },
  {
    title: '¿Cómo tendría que vestirme?',
    description:
      '¡Usa lo que te parezca más cómodo! Ya sea que quieras lucir informal con jeans y una camiseta o vestirte con tu outfit favorito de Pascua, encajarás perfectamente.¡Usa lo que te parezca más cómodo! Ya sea que quieras lucir informal con jeans y una camiseta o vestirte con tu outfit favorito de Pascua, encajarás perfectamente.',
  },
];

export const faqGive = [
  {
    title: 'What happens to my money when I give to Christ Fellowship?',
    description:
      'Christ Fellowship Church is an elder-governed, staff-led church with a passion to help you know God and grow in your relationships so that you can discover your purpose and impact the world. We adhere to high standards of biblical accountability, board governance, financial transparency, integrity, and proper use of charitable resources. Every year, we undergo a full financial audit by an independent CPA firm. Anyone interested in learning more about our stewardship and accountability practices can request a meeting through <span style="color: red;">[email].</span>',
  },
  {
    title: 'Why should I tithe?',
    description: `Tithing is a biblical principle that means the tenth. The first tenth, which belongs to God, is Holy and set apart for Him. Tithing is about training our hearts to trust God at His Word. He gave us the greatest gift, His Son, and in response to this gift, we also give.
    Tithing isn’t as much about finances as it is about faith. It’s not about what God wants from you but what He has for you.  <br/><br/>In Malachi 3:10, The Bible says we can test this promise. When we bring our first and best back to God, He promises to bless the rest of our resources so that we could be a blessing toward others.`,
  },
  {
    title: 'What’s the best way to give?',
    description:
      'To be a part of all God is doing through Christ Fellowship you can give easily and securely online through our giving platform. You can make a gift, schedule your giving, and review your giving history all in one place. Automating your giving by setting up a recurring gift is a great way to consistently put God first in your finances. It’s easy and takes just a few minutes to set up. Simply choose your schedule and amount to start automating your giving today.',
  },
  {
    title: 'How can I get my giving statement for tax purposes?',
    description:
      'If you give through our online giving platform, you can access your giving history anytime We will also send you a giving statement via email at the end of each quarter. If you need help getting a copy of your giving statement, need to update your email address, or have questions about your giving history, just let us know at contributions@christfellowship.church and we’d be happy to help!',
  },
  {
    title: 'What’s the difference between the tithe and offerings?',
    description: `As Pastor Todd has shared, "We're never more like Jesus than when we serve and give." In scripture, we're told that God so loved the world that He gave. Our offerings go beyond the obedience of the tithe; they are a reflection of a life marked by generosity. We believe generosity has a divine purpose connected to it, which is why we invite our church family to give beyond the tithe in one of these ways throughout the year. 
    <br/><br/> <a href="/heart-for-the-house" style="font-weight: bold;">Heart for the House</a> is a special offering we get to be a part of every year, where we give above our regular tithes and offerings. Heart for the House goes toward Christ Fellowship's efforts in reaching more people for Jesus—whether that's new campuses or new initiatives, both inside and outside the walls of our church. 
    <br/><br/> <a href="/2023-christ-birthday-offering" style="font-weight: bold;">Christ Birthday Offering</a> is a special offering we get to be a part of every Christmas, where we give above our regular tithes and offerings to help fund our mission projects throughout the year. Every dollar you give to Christ Birthday Offering will make a difference toward continuing our impact both locally and globally through our mission projects throughout the year. 
    <br/><br/> <span style="font-weight: bold;">The Kingdom Builders Fund</span> supports People, Places, and Partnerships in and through Christ Fellowship, including initiatives, strategic partnerships, and building projects in new regions. <a href="/kingdom-builders" style="font-weight: bold;">Learn more about Kingdom Builders.</a>
    <br/><br/> <a href="#need-link" style="font-weight: bold;">The Crisis Fund</a> meets needs as soon as they arise and allows Christ Fellowship to be among the first on the ground when a disaster strikes in our region and around the world. 
    <br/><br/> <span style="font-weight: bold;">The Missions Fund</span> supports the current mission projects happening both locally and globally.`,
  },
];

const faqDowntownData = [
  {
    title: 'What does Christ Fellowship believe?',
    description:
      'Christ Fellowship is a church in South Florida with a passion to help you know God and grow in your relationships so that you can discover your purpose and impact your world. Led by senior pastors Todd & Julie Mullins, our mission is to impact the world with the love and message of Jesus Christ—everyone, everyday, everywhere. <br />  <br />  Find out more about <a href="/about">our church and our beliefs.</a>',
  },
  {
    title: 'Are there any expectations for visitors?',
    description: `Not at all. When we say "welcome home", we mean it! Be yourself, relax, and enjoy the service. We can't wait to see you!`,
  },
  {
    title: 'How long are the services?',
    description:
      "Our church services last a little over an hour. We'll sing a few worship songs and hear a message from our pastors or guest speakers. We suggest arriving a little early so you can park, get coffee, and find your seat!",
  },
  {
    title: 'What should I wear?',
    description:
      'You can wear whatever you feel most comfortable in! Every Sunday, we have casual, relaxing services where everyone is welcome. Come as you are and expect to feel right at home!',
  },
  {
    title: 'Where do I park?',
    description:
      'Since Christ Fellowship Church in Downtown West Palm Beach is located in The Square, we encourage you to park in one of the shopping center parking garages or on the street. Street parking in The Square is typically free on Sundays. If you’re a student at Palm Beach Atlantic University, we offer a complimentary shuttle prior to the service times that picks up and drops off in front of the Warren Library. </br></br> <i>*Please note that the parking fees vary in The Square</i>',
  },
  {
    title: 'Is childcare provided?',
    description:
      'While Christ Fellowship Church in Downtown West Palm Beach doesn’t offer traditional kids programming, our team has devices available where your child can access Christ Fellowship Kids programming digitally! <br/> <br/> To find a Christ Fellowship location near you where kids programming is offered, please visit <a href="https://www.christfellowship.church/locations">https://www.christfellowship.church/locations</a>',
  },
];

const faqJupiterData = [
  {
    title: 'What does Christ Fellowship believe?',
    description:
      'Christ Fellowship is a church in South Florida with a passion to help you know God and grow in your relationships so that you can discover your purpose and impact your world. Led by senior pastors Todd & Julie Mullins, our mission is to impact the world with the love and message of Jesus Christ—everyone, everyday, everywhere. <br />  <br />  Find out more about <a target="_blank" href="/about">our church and our beliefs.</a>',
  },
  {
    title: 'Are there any expectations for visitors?',
    description: `Not at all. When we say "welcome home", we mean it! Be yourself, relax, and enjoy the service. We can't wait to see you!`,
  },
  {
    title: 'How long are the services?',
    description:
      "Our church services last a little over an hour. We'll sing a few worship songs and hear a message from our pastors or guest speakers. We suggest arriving a little early so you can park, get coffee, and find your seat!",
  },
  {
    title: 'What should I wear?',
    description:
      'You can wear whatever you feel most comfortable in! Every Sunday, we have casual, relaxing services where everyone is welcome. Come as you are and expect to feel right at home!',
  },
  {
    title: 'Where do I park?',
    description:
      'Since Christ Fellowship Church in Jupiter is located in Harbourside Place, we encourage you to park in the north parking garage, directly across the street from the Wyndham Grand Hotel (parking in this garage is free for Christ Fellowship attendees). You may also park on the street in Harbourside Place (street parking is free every day).',
  },
  {
    title: 'Is childcare provided?',
    description:
      'Yes! We have a fun, safe, and clean area for kids & students (newborn–grade 6). <br/> <br/> <b> New to Christ Fellowship Kids?</b> <br/> We’d love to meet you! Let us know a little about your family using this <a target="_blank" href="https://rock.gocf.org/FamilyRegistration">brief form</a> so that our team can help get you connected when you arrive. <br/> <br/> If you are planning on visiting Christ Fellowship Kids this Sunday, <a target="_blank" href="https://rock.gocf.org/CFKidsPlanaVisit">let us know</a> so we can help your family experience all that CFKids has to offer! <br/> <br/> You can learn more about Christ Fellowship Kids programming <a target="_blank" href="https://www.christfellowship.church/christ-fellowship-kids">here</a>!',
  },
];

const faqWestlakeData = [
  {
    title: 'What does Christ Fellowship believe?',
    description:
      'Christ Fellowship is a church in South Florida with a passion to help you know God and grow in your relationships so that you can discover your purpose and impact your world. Led by senior pastors Todd & Julie Mullins, our mission is to impact the world with the love and message of Jesus Christ—everyone, everyday, everywhere. <br />  <br />  Find out more about <a target="_blank" href="/about">our church and our beliefs.</a>',
  },

  {
    title: 'Are there any expectations for visitors?',
    description: `Not at all. When we say "welcome home", we mean it! Be yourself, relax, and enjoy the service. We can't wait to see you!`,
  },
  {
    title: 'How long are the services?',
    description:
      "Our church services last a little over an hour. We'll sing a few worship songs and hear a message from our pastors or guest speakers. We suggest arriving a little early so you can park, get coffee, and find your seat!",
  },
  {
    title: 'What should I wear?',
    description:
      'You can wear whatever you feel most comfortable in! Every Sunday, we have casual, relaxing services where everyone is welcome. Come as you are and expect to feel right at home!',
  },
  {
    title: 'Where do I park?',
    description:
      'As you pull onto the campus, our parking team will help you find a great spot! We reserve the best parking spots for our visitors right in front of the main entrance, and can help you locate accessible parking if needed.',
  },
  {
    title: 'Is childcare provided?',
    description:
      'Yes! We have a fun, safe, and clean area for kids & students (newborn–grade 6). <br/> <br/> <b> New to Christ Fellowship Kids?</b> <br/> We’d love to meet you! Let us know a little about your family using this <a target="_blank" href="https://rock.gocf.org/FamilyRegistration">brief form</a> so that our team can help get you connected when you arrive. <br/> <br/> If you are planning on visiting Christ Fellowship Kids this Sunday, <a target="_blank" href="https://rock.gocf.org/CFKidsPlanaVisit">let us know</a> so we can help your family experience all that CFKids has to offer! <br/> <br/> You can learn more about Christ Fellowship Kids programming <a target="_blank" href="https://www.christfellowship.church/christ-fellowship-kids">here</a>!',
  },
];

const faqTrinityData = [
  {
    title: 'Is Trinity a part of Christ Fellowship Church?',
    description:
      'Yes! Christ Fellowship Church at Trinity is a unique location that features a smaller church setting while still being a part of Christ Fellowship as a whole. Conveniently located just down the street from Christ Fellowship Palm Beach Gardens, the Christ Fellowship Trinity location has access to even more classes, groups, and special events!',
  },
  {
    title: 'What does Christ Fellowship believe?',
    description:
      'Christ Fellowship is a church in South Florida with a passion to help you know God and grow in your relationships so that you can discover your purpose and impact your world. Led by senior pastors Todd & Julie Mullins, our mission is to impact the world with the love and message of Jesus Christ—everyone, everyday, everywhere. <br />  <br />  Find out more about <a target="_blank" href="/about">our church and our beliefs.</a>',
  },
  {
    title: 'Are there any expectations for visitors?',
    description: `Not at all. When we say "welcome home", we mean it! Be yourself, relax, and enjoy the service. We can't wait to see you!`,
  },
  {
    title: 'Is there nearby parking available?',
    description:
      "Yes! Parking is located on-site, and the best part—it's free!",
  },
  {
    title: 'How long are the services?',
    description:
      "Our church services last a little over an hour. We'll sing a few worship songs and hear a message from our pastors or guest speakers. We suggest arriving a little early so you can park, get coffee, and find your seat!",
  },
  {
    title: 'Is childcare provided?',
    description:
      'Yes! We have a fun, safe, and clean area for kids & students (newborn–grade 5). <br/> <br/> <b> New to Christ Fellowship Kids?</b> <br/> We’d love to meet you! Let us know a little about your family using this <a target="_blank" href="https://rock.gocf.org/FamilyRegistration">brief form</a> so that our team can help get you connected when you arrive. <br/> <br/> If you are planning on visiting this Sunday, <a target="_blank" href="https://rock.gocf.org/CFKidsPlanaVisit">let us know</a> so we can help your family experience all that Christ Fellowship Kids has to offer! <br/> <br/> You can learn more about Christ Fellowship Kids programming <a target="_blank" href="https://www.christfellowship.church/christ-fellowship-kids">here</a>!',
  },
  {
    title: 'Is there anything available for students and young adults?',
    description:
      'Yes! There is programming for middle and high school students available just down the street at Christ Fellowship Palm Beach Gardens. <br/> <br/><a target="_blank" href="https://www.christfellowship.church/students"> CFStudents</a> (6th–12th grade) meet regionally at Christ Fellowship Palm Beach Gardens every Wednesday night at 6:30PM. <br/> <br/>Christ Fellowship Young Adults gatherings for <a target="_blank" href="https://www.christfellowship.church/events/20s-30s">20s + 30s</a> happen regionally at Christ Fellowship Palm Beach Gardens every Tuesday night at 7PM. <br/> <br/>Young Adults also hosts <a href="https://www.christfellowship.church/events/college-nights">College Nights</a> right here at the Christ Fellowship Trinity location every Thursday night at 7:30PM in the fall and spring semesters.',
  },
];

export const faqHeartForHouseData = [
  {
    color: '#414141',
    fontStyle: 'normal',
    title: 'What should I give',
    description:
      "Heart for the House is a special offering we get to be a part of every year, where we give above our regular tithes and offerings. There isn't a set amount you should give, but as we often say,  it’s not the size of your gift—it's the size of your sacrifice! We encourage you to pray about how God wants you to be a part of it.",
  },

  {
    color: '#414141',
    fontStyle: 'normal',
    title: 'Can I give to Heart for the House later?',
    description: `Yes! You can give to Heart for the House any time throughout 2024, either as a one-time gift or you can set up a recurring gift (weekly/monthly) through December 31 until your goal is met.`,
  },
  {
    color: '#414141',
    fontStyle: 'normal',
    title: 'How do I give to Heart for the House?',
    description: `On Sunday, May 19, you can be a part of giving to this special offering called Heart for the House by either giving a one-time gift online AND/OR planning your giving goal for 2024 and setting up a recurring gift online through December 31 until your goal is met. You can also give in person using a giving container in service or at a giving station with the envelope available at your location.<br/><br/>
      Gifts can also be mailed to:<br/>
      Christ Fellowship Church Contributions<br/>
      5343 Northlake Blvd. Palm Beach Gardens, FL 33418<br/>
      <span style="font-style: italic;">*Note: Please designate "Heart for the House" on the memo line.</span>`,
  },
  {
    color: '#414141',
    fontStyle: 'normal',
    title: 'If I set up a recurring gift, can I change it later?',
    description:
      'Yes! Indicating your plan to give to Heart for the House is for Christ Fellowship Church’s budget purposes only. You may change and/or rescind your indication at any time. Recurring gifts can be managed by logging into your PushPay account.',
  },
  {
    color: '#414141',
    fontStyle: 'normal',
    title: 'What does Heart for the House go to?',
    description:
      "Heart for the House goes toward Christ Fellowship's efforts in reaching more people for Jesus—whether that's new campuses or new initiatives, both inside and outside the walls of our church. <a target='_blank' href='https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/16?fr=sNWI3MDcyMzY3MDE' style='color: #E63E51;'>Read more</a> about the Heart for the House vision for 2024!",
  },
];

export const faqEspanolData = [
  {
    title: '¿En qué cree Christ Fellowship?',
    description:
      'Christ Fellowship es una iglesia en el sur de Florida con una pasión por ayudarte a conocer a Dios y crecer en tus relaciones para que puedas descubrir tu propósito e impactar tu mundo. Dirigidos por los Senior Pastors Todd y Julie Mullins, nuestra misión es impactar al mundo con el amor y el mensaje de Jesucristo: a todos, todos los días, en todas partes. <br />  <br />  Obtén más información sobre <a target="_blank" href="/about">nuestra iglesia y nuestras creencias.</a>',
  },
  {
    title: '¿Hay alguna expectativa de parte de los visitantes?',
    description: `Para nada. Cuando decimos "bienvenido a casa", ¡lo decimos en serio! Sé tú mismo, relájate y disfruta del servicio. ¡Estamos emocionados por verte!`,
  },
  {
    title: '¿Cuánto tiempo duran los servicios?',
    description:
      'Nuestros servicios duran un poco más de una hora. Cantaremos juntos algunas canciones de alabanza y escucharemos un mensaje transformador por parte de nuestros pastores. ¡Te sugerimos llegar temprano para que puedas estacionarte, tomar  café y encontrar tu asiento!',
  },
  {
    title: '¿Qué debería vestir?',
    description:
      '¡Puedes vestirte como te sientas más cómodo! Todos los domingos contamos con servicios casuales y relajados donde todos son bienvenidos. ¡Ven tal como eres y esperamos que te sientas como en casa!',
  },
  {
    title: '¿Dónde me puedo estacionar?',
    description:
      'Al ingresar al campus, nuestro equipo de Parking Host (estacionamiento), te ayudará a encontrar el lugar ideal para ti. Reservamos los mejores lugares de estacionamiento para nuestros visitantes justo en frente de la entrada principal y de ser necesario, podemos ayudarte a ubicar un estacionamiento con mejor accesibilidad a la entrada principal. Cuando llegues, déjale saber al Parking Host que es tu primera vez visitándonos. ',
  },
  {
    title: '¿Tienen cuidado de niños?',
    description:
      '¡Sí! Contamos con un área divertida, segura y limpia para niños y estudiantes (desde recién nacidos hasta quinto grado).<br/> <br/> <b> ¿Nuevo en Christ Fellowship Kids?</b> <br/> ¡Nos encantaría conocerte! Agradecemos que nos hagas saber un poco más sobre tu familia utilizando <a target="_blank" href="https://rock.gocf.org/FamilyRegistration">este breve formulario</a> para que nuestro equipo pueda ayudar a tus hijos a conectarse con Christ Fellowship Kids. <br/> <br/> Si planeas visitar Christ Fellowship Kids este domingo, ¡<a target="_blank" href="https://rock.gocf.org/CFKidsPlanaVisit">déjanos saber</a> ,para que podamos ayudar a tu familia a experimentar todo lo que Christ Fellowship Kids tiene para ofrecerte! <br/> <br/> ¡Puedes aprender más sobre la programación de Christ Fellowship Kids <a target="_blank" href="https://www.christfellowship.church/christ-fellowship-kids">aquí</a>!',
  },
];

export const faqEspanolOtherData = {
  title: 'Preguntas Frecuentes',
  question: '¿Tienes preguntas adicionales?',
  description:
    'Alguien de nuestro equipo estará encatado de responder a tus preguntas',
  contactUs: 'Contáctanos',
};

export const faqDefaultOtherData = {
  title: 'FAQ',
  question: 'Have additional questions?',
  description:
    'Someone from our team is happy to answer any of your questions!',
  contactUs: 'Contact Us',
};

export const faqCfEverywhereData = [
  {
    title: 'Which campus is live-streamed?',
    description:
      'We broadcast Sunday services, including the worship and teaching, from our Palm Beach Gardens location in South Florida.',
  },
  {
    title: 'What can I expect from a live-streamed service?',
    description:
      'Every Sunday, we craft a unique livestream experience for our Christ Fellowship Everywhere audience. We have live services at 8:30, 10, and 11:45AM ET every Sunday but we would love to see you for our interactive pre-service segment that begins 6 minutes before services. You never know what’s going to happen, but we promise it’ll always be fun.',
  },
  {
    title: 'How can I get campus-specific information?',
    description: `If you are in South Florida, we hope you are getting connected to your local campus! <a href="/locations">Find a campus location near you here.</a>`,
  },
  {
    title: 'How can I get in contact with a pastor?',
    description: `One of our pastors would love to connect with you! If you have a question, please reach out <a target="blank" href="https://rock.gocf.org/contactus">here</a>. If you are in need of prayer, let us know on the <a target="blank" href="https://rock.gocf.org/RequestPrayer">prayer form</a> so we can follow up with you.`,
  },
  {
    title: 'How can I get involved?',
    description: `We are so excited to get you involved with Christ Fellowship Everywhere and want to help you take your next step. <a href=/events/journey> Journey</a> is a great first step that will lay out a variety of ways to get involved. Looking for your next step? <a target="blank" href="mailto:online@christfellowship.church"> Send us an email</a> so we can help you discover your next step!`,
  },
];

const faqData = campus => {
  switch (campus) {
    case 'Downtown West Palm Beach':
      return faqDowntownData;
    case 'Jupiter':
      return faqJupiterData;
    case 'Westlake':
      return faqWestlakeData;
    case 'Trinity':
      return faqTrinityData;
    case 'Online (CF Everywhere)':
      return faqCfEverywhereData;
    case 'CBO':
      return faqCBO;
    case 'Easter':
      return faqEaster;
    case 'Easter CFE':
      return faqEasterCFE;
    case 'Give':
      return faqGive;
    case 'Christ Fellowship Español Palm Beach Gardens':
      return faqEspanolData;
    case 'Christ Fellowship Español Royal Palm Beach':
      return faqEspanolData;
    default:
      return faqDefaultData;
  }
};

export const otherData = campus => {
  switch (campus) {
    case 'Christ Fellowship Español Palm Beach Gardens':
      return faqEspanolOtherData;
    case 'Christ Fellowship Español Royal Palm Beach':
      return faqEspanolOtherData;
    default:
      return faqDefaultOtherData;
  }
};

export default faqData;
