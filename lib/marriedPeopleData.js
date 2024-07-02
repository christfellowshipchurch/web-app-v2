export const faqData = [
  {
    title: 'ARE THERE PREMARITAL REQUIREMENTS',
    description:
      'Whether you are requesting a Christ Fellowship pastor to officiate a wedding or considering a wedding at one of our church venues, all couples must complete the <a style="display: inline;" href="#dating-and-engaged">Prep for Marriage</a> class and an online assessment when they plan to be married by a Christ Fellowship pastor.',
  },
  {
    title: 'WHAT VENUES ARE AVAILABLE',
    description:
      'While we do not host wedding receptions at our venues, we offer venues of varying sizes for your memorable wedding experience. Our venues include: Trinity Chapel, Trinity Auditorium and Smith Chapel (at our South Campus in Palm Beach Gardens.)',
  },
  {
    title: 'WHO CAN OFFICIATE MY WEDDING',
    description:
      'It is required that a Christ Fellowship pastor officiate all wedding ceremonies held at any of our venues. The Wedding Coordinator can assist you in selecting a pastor from our staff to officiate your wedding.',
  },
  {
    title: 'WHAT IS MY NEXT STEP IN PLANNING A WEDDING',
    description:
      'Review the <a style="display: inline;" href="/wedding-guide">Wedding Guide</a> and then complete the Wedding Inquiry Form contained within. Our Wedding Coordinator will follow up with information on available venues, pastors and dates.',
  },
];

export const webflowAccordionAnimation = element => {
  // Get the accordion icon
  var siblingItems = element.parentNode.children;
  var accordionIcon = null;
  for (var i = siblingItems.length; i--; ) {
    if (siblingItems[i].id) {
      accordionIcon = siblingItems[i];
      break;
    }
  }

  // Rotate the accordion icon
  if (accordionIcon && accordionIcon.style.transform !== 'rotate(180deg)') {
    accordionIcon.style.transform = 'rotate(180deg)';
  } else if (accordionIcon) {
    accordionIcon.style.transform = 'rotate(0deg)';
  }

  // Get the accordion container
  var accordionContainer = element.parentNode.parentNode.children;
  var accordionContainerId = null;
  for (var j = accordionContainer.length; j--; ) {
    if (accordionContainer[j].id) {
      accordionContainerId = accordionContainer[j];
      break;
    }
  }

  // Expand or collapse the accordion container
  if (
    accordionContainerId &&
    (accordionContainerId.style.maxHeight === '' ||
      accordionContainerId.style.maxHeight === '0px')
  ) {
    accordionContainerId.style.maxHeight = '300px';
  } else if (
    accordionContainerId &&
    accordionContainerId.style.maxHeight === '300px'
  ) {
    accordionContainerId.style.maxHeight = '0px';
  }
};
