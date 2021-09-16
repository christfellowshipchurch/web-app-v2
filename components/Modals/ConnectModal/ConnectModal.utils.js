import isEmpty from 'lodash/isEmpty';

export const generateTitle = (key, args) => {
  const leaderName = args?.leaderName || '';
  const hasLeader = !isEmpty(leaderName);

  switch (key) {
    case 'LOADING':
      return 'Loading';
    case 'FULL':
      return 'Sorry, this group is now full.';
    case 'PENDING':
      return hasLeader
        ? `${leaderName} will be in contact soon!`
        : `You will be contacted soon!`;
    case 'MEMBER':
      return `You're already a member of this group.`;
    case 'OPEN':
    default:
      return hasLeader ? `Connect with ${leaderName}` : 'Get connected!';
  }
};

export const generateSummary = (key, args) => {
  const leaderName = args?.leaderName || '';
  const hasLeader = !isEmpty(leaderName);

  switch (key) {
    case 'OPEN':
      return `Contact the leader to let them know you're interested.`;
    case 'PENDING':
      return `Your status in this group is "pending".`;
    case 'MEMBER':
      return hasLeader
        ? `Contact ${leaderName} if you have any questions.`
        : `Contact your leader if you have any questions.`;
    case 'LOADING':
    case 'FULL':
    default:
      return ``;
  }
};

export const generateButtonTitle = key => {
  switch (key) {
    case 'OPEN':
      return `Send`;
    case 'LOADING':
    case 'PENDING':
    case 'MEMBER':
    case 'FULL':
    default:
      return `Find Another Group`;
  }
};
