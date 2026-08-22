export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  image: string
  body: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'chasing-light-in-reykjavik',
    title: 'Chasing Light in Reykjavík',
    excerpt:
      'Ten days of blue hour that never quite ends, and what shooting in permanent twilight taught me about patience.',
    date: 'March 2024',
    readingTime: '6 min read',
    category: 'Field Notes',
    image:
      'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600',
    body: [
      'In Iceland the light does not arrive, it leaks. For ten days in February I woke before a sunrise that behaved more like a rumour, and I learned to stop waiting for a decisive moment that was never going to announce itself.',
      'The work that came out of that trip is the quietest I have made. No drama, no contrast tricks, just long grey gradients and the occasional human figure for scale. It took me three months to admit I liked it.',
      'If there is a lesson here, it is that a location will not give you the photograph you planned. It gives you the photograph it has. Your only job is to recognise it before you pack the bag.',
    ],
  },
  {
    slug: 'the-portrait-is-a-negotiation',
    title: 'The Portrait Is a Negotiation',
    excerpt:
      'Every frame of a stranger is a small contract. Here is how I try to keep my side of it.',
    date: 'January 2024',
    readingTime: '8 min read',
    category: 'Craft',
    image:
      'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1600',
    body: [
      'A portrait is never taken. It is given, briefly, and usually on conditions that are never spoken out loud. The person in front of the lens is deciding, second by second, how much of themselves to hand over.',
      'I stopped shooting the first five minutes of any session. Not because the frames are bad, but because they belong to the version of the person who is still performing calm.',
      'The rest is technical: one light, one lens, and enough silence that the room starts to feel awkward. Awkward is where the honest expressions live.',
    ],
  },
  {
    slug: 'why-i-still-shoot-film',
    title: 'Why I Still Shoot Film on Commercial Jobs',
    excerpt:
      'Not nostalgia, not texture, not the grain. It is about the number of frames I am allowed to waste.',
    date: 'November 2023',
    readingTime: '5 min read',
    category: 'Process',
    image:
      'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=1600',
    body: [
      'Clients ask about it on every pre-production call, usually with a polite scepticism. The honest answer has nothing to do with the look of the emulsion.',
      'Thirty-six frames is a constraint, and constraint is the fastest way to force a decision. Digital lets me postpone every choice until the edit; film makes me make them in the room, while the subject is still there.',
      'I still deliver digital alongside it. But the roll is where the picture usually is.',
    ],
  },
  {
    slug: 'documentary-work-in-an-age-of-synthetic-images',
    title: 'Documentary Work in an Age of Synthetic Images',
    excerpt:
      'When anything can be generated, the value of a photograph shifts from what it shows to who stood there.',
    date: 'September 2023',
    readingTime: '9 min read',
    category: 'Essay',
    image:
      'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1600',
    body: [
      'The argument that synthetic imagery ends documentary photography assumes the medium was ever about the pixels. It was not. It was about presence and accountability.',
      'A generated image has no witness attached to it. A documentary photograph carries a person who can be asked what happened before and after the frame, and who can be held responsible for the answer.',
      'That is the part worth defending: not the craft, not the cameras, but the chain of custody between an event and the person who chose to point a lens at it.',
    ],
  },
]

export const getPostBySlug = (slug?: string) =>
  blogPosts.find((post) => post.slug === slug)
