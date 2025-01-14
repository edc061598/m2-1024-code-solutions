export type Item = {
  itemId: number;
  name: string;
  image: string;
  description: string;
};

const items = [
  {
    itemId: 8,
    name: 'Harry Houdini',
    image:
      'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQjD45v-qOUv4wtdI0Xl5NZsPF548LH3-cPAZt3RB8IAUIIbF_yMb3t-2o4prHe1pSQJghDstd8jbm8aQM',
    description: 'The most famous American magician and escape artist.',
  },
  {
    itemId: 12,
    name: 'Dorothy Dietrich',
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBdp8xPuESU1ZftDol_pqQYJffdwKROHhvzTo3KMzg2dwL6YWB',
    description:
      'The first woman to perform a straitjacket escape while suspended hundreds of feet in the air from a burning rope.',
  },
  {
    itemId: 3,
    name: 'Criss Angel',
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPc0RZ6Z3CjEKZihl0E4KNHSAjiTp3NDm0eth3NG8d3JRAkFAz',
    description:
      "Perhaps the world's most successful American magician, illusionist and musician.",
  },
  {
    itemId: 42,
    name: 'Dean Gunnarson',
    image:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuhEJE6lAIeY6xpiSggUF0gKujG8k8GVSfZTDHrcGc-9U8zlv6',
    description:
      'A Canadian escape artist who won China\'s "The World\'s Top Escape Artist" award.',
  },
  {
    itemId: 95,
    name: 'Robert Gallup',
    image:
      'https://www.hollywoodreporter.com/wp-content/uploads/2014/04/robert_gallup_magic_a_p.jpg',
    description:
      "The world's premier extreme magician and death-defying escape artist.",
  },
];

export function readItems(): Promise<Item[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.05
        ? resolve(items)
        : reject(new Error('What bad luck!'));
    }, 100);
  });
}

export function readItem(itemId: number): Promise<Item | undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.05
        ? resolve(items.find((i) => i.itemId === itemId))
        : reject(new Error('What bad luck!'));
    }, 100);
  });
}
