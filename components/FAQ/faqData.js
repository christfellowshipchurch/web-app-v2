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
    title: 'Is Trinity Church a part of Christ Fellowship?',
    description:
      'Yes! Trinity Church by Christ Fellowship is a unique location that features a smaller and more traditional church setting while still being a part of Christ Fellowship as a whole. Conveniently located just down the street from Christ Fellowship Palm Beach Gardens, Trinity Church has access to even more classes, groups, and special events!',
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
    title: 'How long are the services?',
    description:
      "Our church services last a little over an hour. We'll sing a few worship songs and hear a message from our pastors or guest speakers. We suggest arriving a little early so you can park, get coffee, and find your seat!",
  },
  {
    title: 'Is childcare provided?',
    description:
      'Yes! We have a fun, safe, and clean area for kids & students (newborn–grade 5). <br/> <br/> <b> New to Christ Fellowship Kids?</b> <br/> We’d love to meet you! Let us know a little about your family using this <a target="_blank" href="https://rock.gocf.org/FamilyRegistration">brief form</a> so that our team can help get you connected when you arrive. <br/> <br/> If you are planning on visiting Christ Fellowship Kids this Sunday, <a target="_blank" href="https://rock.gocf.org/CFKidsPlanaVisit">let us know</a> so we can help your family experience all that CFKids has to offer! <br/> <br/> You can learn more about Christ Fellowship Kids programming <a target="_blank" href="https://www.christfellowship.church/christ-fellowship-kids">here</a>!',
  },
  {
    title: 'Is there anything available for students and young adults?',
    description:
      'Yes! There is programming for students and young adults available just down the street at Christ Fellowship Palm Beach Gardens. <br/> <br/> <a target="_blank" href="https://www.christfellowship.church/students"> CFStudents</a> programming available for 6th–12th graders regionally at Christ Fellowship Palm Beach Gardens every Wednesday night at 6:30PM. <br/> <br/> <a target="_blank" href="https://www.christfellowship.church/young-adults"> Christ Fellowship Young Adults</a> gatherings happening regionally at Christ Fellowship Palm Beach Gardens every Thursday night at 7:30PM.',
  },
];

export const faqHeartForHouseData = [
  {
    title: 'What should I give',
    description:
      "Heart for the House is a special offering we get to be a part of every year, where we give above our regular tithes and offerings. There isn't a set amount you should give, but as we often say,  it’s not the size of your gift—it's the size of your sacrifice! We encourage you to pray about how God wants you to be a part of it.",
  },

  {
    title: 'Can I give to Heart for the House later?',
    description: `Yes! You can give to Heart for the House any time throughout 2023, either as a one-time gift or you can set up a recurring gift (weekly/monthly) through December 31.`,
  },
  {
    title: 'What does Heart for the House go to?',
    description:
      "Heart for the House goes toward Christ Fellowship's efforts in reaching more people for Jesus—whether that's new campuses or new initiatives, both inside and outside the walls of our church. <a target='_blank' href='https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_web?fr=sNDM3ZjU5MDEzMDk'>Read more</a> about the Heart for the House vision for 2023!",
  },
];

export const faqCfEverywhereData = [
  {
    title: 'Which campus is live-streamed?',
    description:
      'We broadcast Sunday services, including the worship and teaching, from our Palm Beach Gardens location in South Florida.',
  },
  {
    title: 'What can I expect from a live-streamed service?',
    description:
      'Every Sunday, we craft a unique livestream experience for our Christ Fellowship Everywhere audience. We have live services at 8:30, 10, and 11:45AM every Sunday but we would love to see you for our interactive pre-service segment that begins 6 minutes before services. You never know what’s going to happen, but we promise it’ll always be fun.',
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
    description: `We are so excited to get you involved with Christ Fellowship Everywhere and want to help you take your next step. <a href=/events/journey> Journey</a> is a great first step that will lay out a variety of ways to get involved. Looking for your next step? <a href="online@christfellowship.church"> Send us an email</a> so we can help you discover your next step!`,
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
    case 'Cf Everywhere':
      return faqCfEverywhereData;
    default:
      return faqDefaultData;
  }
};

export default faqData;
