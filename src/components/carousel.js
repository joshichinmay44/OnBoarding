import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function Picture() {
  const data = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg'
    
    },
    {
      image:
        'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg'
    },
    {
      image:
        'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg'
    },
    {
      image:
        'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg'
    }
   
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
