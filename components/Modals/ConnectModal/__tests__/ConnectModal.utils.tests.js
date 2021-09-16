import {
  generateTitle,
  generateSummary,
  generateButtonTitle,
} from '../ConnectModal.utils';

const mockWithLeader = {
  leaderName: 'Ted',
};

const mockWithoutLeader = {
  leaderName: '',
};

describe('generateTitle', () => {
  it('returns a string for "LOADING" key', () => {
    const result = generateTitle('LOADING', mockWithLeader);

    expect(result).toBe('Loading');
  });

  it('returns a string for "FULL" key', () => {
    const result = generateTitle('FULL', mockWithLeader);

    expect(result).toBe('Sorry, this group is now full.');
  });

  it('returns a string for "PENDING" key', () => {
    const result = generateTitle('PENDING', mockWithLeader);

    expect(result).toBe('Ted will be in contact soon!');
  });

  it('returns a string for "PENDING" key without a leader', () => {
    const result = generateTitle('PENDING', mockWithoutLeader);

    expect(result).toBe('You will be contacted soon!');
  });

  it('returns a string for "MEMBER" key', () => {
    const result = generateTitle('MEMBER', mockWithLeader);

    expect(result).toBe("You're already a member of this group.");
  });

  it('returns a string for "OPEN" key', () => {
    const result = generateTitle('OPEN', mockWithLeader);

    expect(result).toBe('Connect with Ted');
  });

  it('returns a string for "OPEN" key without a leader', () => {
    const result = generateTitle('OPEN', mockWithoutLeader);

    expect(result).toBe('Get connected!');
  });

  it('returns a default string value', () => {
    const result = generateTitle('some reandom value', mockWithLeader);

    expect(result).toBe('Connect with Ted');
  });

  it('returns a default string value without a leader', () => {
    const result = generateTitle('some reandom value', mockWithoutLeader);

    expect(result).toBe('Get connected!');
  });
});

describe('generateSummary', () => {
  it('returns a string for "LOADING" key', () => {
    const result = generateSummary('LOADING', mockWithLeader);

    expect(result).toBe('');
  });

  it('returns a string for "FULL" key', () => {
    const result = generateSummary('FULL', mockWithLeader);

    expect(result).toBe('');
  });

  it('returns a string for "PENDING" key', () => {
    const result = generateSummary('PENDING', mockWithLeader);

    expect(result).toBe('Your status in this group is "pending".');
  });

  it('returns a string for "MEMBER" key', () => {
    const result = generateSummary('MEMBER', mockWithLeader);

    expect(result).toBe('Contact Ted if you have any questions.');
  });

  it('returns a string for "MEMBER" key without a leader', () => {
    const result = generateSummary('MEMBER', mockWithoutLeader);

    expect(result).toBe('Contact your leader if you have any questions.');
  });

  it('returns a string for "OPEN" key', () => {
    const result = generateSummary('OPEN', mockWithLeader);

    expect(result).toBe(
      "Contact the leader to let them know you're interested."
    );
  });

  it('returns a default string value', () => {
    const result = generateSummary('some random value', mockWithLeader);

    expect(result).toBe('');
  });
});

describe('generateButtonTitle', () => {
  it('returns a string for "LOADING" key', () => {
    const result = generateButtonTitle('LOADING', mockWithLeader);

    expect(result).toBe('Find Another Group');
  });

  it('returns a string for "FULL" key', () => {
    const result = generateButtonTitle('FULL', mockWithLeader);

    expect(result).toBe('Find Another Group');
  });

  it('returns a string for "PENDING" key', () => {
    const result = generateButtonTitle('PENDING', mockWithLeader);

    expect(result).toBe('Find Another Group');
  });

  it('returns a string for "MEMBER" key', () => {
    const result = generateButtonTitle('MEMBER', mockWithLeader);

    expect(result).toBe('Find Another Group');
  });

  it('returns a string for "OPEN" key', () => {
    const result = generateButtonTitle('OPEN', mockWithLeader);

    expect(result).toBe('Send');
  });

  it('returns a default string value', () => {
    const result = generateButtonTitle('some random value', mockWithLeader);

    expect(result).toBe('Find Another Group');
  });
});
