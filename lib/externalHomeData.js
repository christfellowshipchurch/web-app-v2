const contentBlocks = [
  {
    id: 'new-here',
    image: '/external-landing/new-here-1.jpeg',
    imageRatio: '16by9',
    pt: 'xl',
  },
  {
    title: 'Attending a Church for the First Time Has Never Been Easier',
    htmlContent: `<div><p>No longer do you have to look up the directions on how to get there, wonder what time the service starts, or worry about what to expect when you arrive. Let us do all of that work for you.</p><br><p>When you set a reminder today, we’ll send you a personalized email with all the information you’ll need prior to your visit here at Christ Fellowship.That’s right! We’ll let you know exactly how to get here, when the service starts, what you can expect when you arrive, and more. </p><br><p>So all you have to do is sit back, relax, and enjoy your first visit to your future church home.</p><p><br></p></div>`,
    actions: [
      {
        title: 'Plan Your Visit',
        relatedNode: { url: '/visit-one-of-our-church-locations' },
      },
    ],
    contentLayout: 'left',
    mb: 'xl',
  },
  {
    title: 'Here’s What Your First Visit Will Look Like',
    subtitle: 'WHAT TO EXPECT',
    htmlContent: `<div><p>We know that going anywhere for the first time can be a little intimidating, so we want to make sure you know exactly what to expect when you visit Christ Fellowship.</p><p>When you’re here you’re family so don’t feel stressed about your “Sunday best”—just come as you are.&nbsp;</p><p>When you arrive, our team will greet you at the doors and direct you to the main auditorium where the service is held. Once you’re in service, we’ll sing a few songs together with a live band and hear an encouraging message from our lead pastors or guest speakers. Altogether, you’ll be in service for a little over an hour. Afterward, if you have any questions or would like more information, anyone from our team will be happy to help you.</p><p><br></p></div>`,
    actions: [{ title: 'Plan Your Visit' }],
    image: '/external-landing/new-here-2.png',
    imageRatio: '1by1',
    contentLayout: 'LEFT',
    mb: 'xxl',
  },
  {
    title: 'Watch a Service From Wherever You Are',
    subtitle: 'TUNE IN ONLINE',
    htmlContent: `<div><p>Not ready to attend a service in person just yet? That’s totally fine too. We have an awesome online experience that you can check out from wherever you are.</p></div>`,
    actions: [{ title: 'Watch Online' }],
    image: '/external-landing/new-here-3.jpeg',
    imageRatio: '1by1',
    contentLayout: 'RIGHT',
    mb: 'xxl',
  },
];

export default contentBlocks;
