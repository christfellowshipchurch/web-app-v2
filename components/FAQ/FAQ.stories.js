import FAQ from './FAQ';

export default {
  component: FAQ,
  tags: ['autodocs'],
  argTypes: {
    data: {
      name: 'Data',
      control: 'array',
    },
    showDescription: {
      name: 'Show Description',
      control: 'boolean',
    },
    displayAll: {
      name: 'Display All',
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    data: [
      {
        title: 'What does Heart for the House go to?',
        description:
          "Heart for the House goes toward Christ Fellowship's efforts in reaching more people for Jesus—whether that's new campuses or new initiatives, both inside and outside the walls of our church. <a target='_blank' href='https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_web?fr=sNDM3ZjU5MDEzMDk'>Read more</a> about the Heart for the House vision for 2023!",
      },
      {
        title: 'What does Heart for the House go to?',
        description:
          "Heart for the House goes toward Christ Fellowship's efforts in reaching more people for Jesus—whether that's new campuses or new initiatives, both inside and outside the walls of our church. <a target='_blank' href='https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_web?fr=sNDM3ZjU5MDEzMDk'>Read more</a> about the Heart for the House vision for 2023!",
      },
      {
        title: 'What does Heart for the House go to?',
        description:
          "Heart for the House goes toward Christ Fellowship's efforts in reaching more people for Jesus—whether that's new campuses or new initiatives, both inside and outside the walls of our church. <a target='_blank' href='https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_web?fr=sNDM3ZjU5MDEzMDk'>Read more</a> about the Heart for the House vision for 2023!",
      },
    ],
    showDescription: true,
    displayAll: false,
  },
};
