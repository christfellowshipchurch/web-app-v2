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
      'Yes! We have a fun, safe, and clean area for kids & students (newborn–grade 6). <br/> <br/> <b> New to Christ Fellowship Kids?</b> <br/> We’d love to meet you! Let us know a little about your family using this <a target="_blank" href="https://rock.gocf.org/FamilyRegistration">brief form</a> so that our team can help get you connected when you arrive. <br/> <br/> If you are planning on visiting Christ Fellowship Kids this Sunday, <a target="_blank" href="https://rock.gocf.org/CFKidsPlanaVisit">let us know</a> so we can help your family experience all that CFKids has to offer! <br/> <br/> You can learn more about Christ Fellowship Kids programming <a target="_blank" href="https://www.christfellowship.church/articles/whats-happening-in-cf-kids">here</a>!',
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
      'Yes! We have a fun, safe, and clean area for kids & students (newborn–grade 6). <br/> <br/> <b> New to Christ Fellowship Kids?</b> <br/> We’d love to meet you! Let us know a little about your family using this <a target="_blank" href="https://rock.gocf.org/FamilyRegistration">brief form</a> so that our team can help get you connected when you arrive. <br/> <br/> If you are planning on visiting Christ Fellowship Kids this Sunday, <a target="_blank" href="https://rock.gocf.org/CFKidsPlanaVisit">let us know</a> so we can help your family experience all that CFKids has to offer! <br/> <br/> You can learn more about Christ Fellowship Kids programming <a target="_blank" href="https://www.christfellowship.church/articles/whats-happening-in-cf-kids">here</a>!',
  },
];

const faqWestlakeData = [
  {
    title: 'What does Christ Fellowship believe?',
    description:
      'Christ Fellowship is a church in South Florida with a passion to help you know God and grow in your relationships so that you can discover your purpose and impact your world. Led by senior pastors Todd & Julie Mullins, our mission is to impact the world with the love and message of Jesus Christ—everyone, everyday, everywhere. <br />  <br />  Find out more about <a target="_blank" href="/about">our church and our beliefs.</a>',
  },
  {
    title: 'When is the Westlake location opening?',
    description: `We’re anticipating being able to officially open the doors in December 2022! Be sure to  <a target="_blank" href="https://rock.gocf.org/WestlakeInterest">sign up for updates</a> to be the first to know more details!`,
  },
  {
    title: 'Will there be any community events before opening?',
    description:
      'Yes! Be sure to <a target="_blank" href="https://rock.gocf.org/WestlakeInterest">sign up for updates</a> to be the first to know about upcoming community events!',
  },
  {
    title: 'Can I experience Christ Fellowship before the Westlake opening?',
    description:
      'Yes! You can experience a Christ Fellowship service live online every Sunday or  <a target="_blank" href="/locations">find another campus</a> near you!',
  },
  {
    title: 'Are there any expectations for visitors?',
    description: `Not at all. When we say "welcome home," we mean it! Be yourself, relax, and enjoy the service. We can't wait to see you!`,
  },
  {
    title: 'How long will the services be?',
    description: `Our church services last a little over an hour. We'll sing a few worship songs and hear a message from our pastors or guest speakers. We suggest arriving a little early so you can park, get coffee, and find your seat!`,
  },
  {
    title: 'What should I plan to wear?',
    description: `You can wear whatever you feel most comfortable in! Every Sunday, we’ll have casual, relaxing services where everyone is welcome. Come as you are and expect to feel right at home!`,
  },
  {
    title: 'Will childcare be provided?',
    description: `Yes! We will have a fun, safe, and clean area for kids & students (newborn–grade 6).`,
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
    default:
      return faqDefaultData;
  }
};

export default faqData;
