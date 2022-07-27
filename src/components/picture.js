import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function Picture() {
  const data = [
    {
      image:
        'https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/06bc6339376b3706107a2417504fb7bc.png',
    },
    {
      image:
        'https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/9ded35f5d4db48b0a38d70128775e8c4.png',
    },
    {
      image:
        'https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/67e48efc54b41af96fdceb1eb2f1e8fa.png',
    },
    {
      image:
        'https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/4196572828305b986d6757de36bc973b.png',
    },
    {
      image:
        'https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/caaa58fdb069912de2b13f0a049959ea.png',
    },
  ];
  return (
    <div>
      Hello World!
      <Carousel
        data={data}
        //time={2000}
        width="850px"
        height="500px"
        radius="10px"
        //automatic={true}
        //dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        showNavBtn={false}
        style={{
          textAlign: 'center',
          maxWidth: '850px',
          maxHeight: '500px',
          margin: '40px auto',
        }}
      />
    </div>
  );
}

export default Picture;
