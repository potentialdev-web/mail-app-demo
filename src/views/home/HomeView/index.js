import React from 'react';
import {
  Box,
  Container,
  Grid as GridBase,
  makeStyles
} from '@material-ui/core';
import styled from 'styled-components';
import Page from '../../../components/Page';
import ConnectSettingsForm from './ConnectSettingsForm';
import MessagesList from './MessagesList';
import MessageBody from './MessageBody';
import moment from 'moment';

const Grid = styled(GridBase)`
  &.MuiGrid-container {
    flex-grow: 1;
    .MuiGrid-item {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column'
  },
  fullHeight: {
    height: '100%'
  },
  flexFullHeight: {
    display: 'flex',
    flex: '1 1 auto'
  },
  grow: {
    flexGrow: 1
  }
}));

const messages = [
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcc3e1b53b6365d71638',
    isUnread: true,
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com',
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com',
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcbd8406cd3055f2b6c8',
    isUnread: false,
    subject: 'Amazing work',
    message: `
Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com'
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com'
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcb9fee1ec12453fa13b',
    folder: 'inbox',
    isImportant: false,
    isStarred: false,
    isUnread: false,
    labelIds: ['5e892628d4bc60b4514d5d36'],
    subject: 'Flight reminder',
    message: `
Dear Shen, Your flight is coming up soon. Please don’t forget to check in for your scheduled flight.
    `,
    from: {
      name: 'Jose Lopez',
      email: 'jose@maildemo.com'
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com'
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  },
  {
    id: '5e86bcb5575181a5e527e24f',
    isUnread: true,
    subject: 'Posible candidates for the position',
    message: `
My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis
    `,
    from: {
      name: 'Rebeca Mejia',
      email: 'rebeca@maildemo.com'
    },
    to: [
      {
        name: 'Gavin Lin',
        email: 'gavin@maildemo.com'
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  }
];

const Index = ({
  ...rest
}) => {
  const classes = useStyles();
  // const [messages, setMessages] = useState([]);

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ConnectSettingsForm />
          <Box mt={2} flexGrow={1}>
            <MessagesList messages={messages} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <MessageBody />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Index;
