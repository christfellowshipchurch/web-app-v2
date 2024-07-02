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

export const faqClick = element => {
  var siblings = element.parentNode.children;
  var sibWithId = null;
  for (var i = siblings.length; i--; ) {
    if (siblings[i].id) {
      sibWithId = siblings[i];
      break;
    }
  }
  if (sibWithId && sibWithId.style.transform !== 'rotate(180deg)') {
    sibWithId.style.transform = 'rotate(180deg)';
  } else if (sibWithId) {
    sibWithId.style.transform = 'rotate(0deg)';
  }

  var uncle = element.parentNode.parentNode.children;
  var uncleId = null;
  for (var j = uncle.length; j--; ) {
    if (uncle[j].id) {
      uncleId = uncle[j];
      break;
    }
  }
  if (
    uncleId &&
    (uncleId.style.maxHeight === '' || uncleId.style.maxHeight === '0px')
  ) {
    uncleId.style.maxHeight = '600px';
  } else if (uncleId && uncleId.style.maxHeight === '600px') {
    uncleId.style.maxHeight = '0px';
  }
};
