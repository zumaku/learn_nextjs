import { StaticImageData } from "next/image";
import photo1 from "./photos/react.png"
import photo2 from "./photos/nextjs.png"
import photo3 from "./photos/vuejs.png"
import photo4 from "./photos/angular.png"
import photo5 from "./photos/svelte.png"
import photo6 from "./photos/kotlin.png"
import photo7 from "./photos/flutter.png"
import photo8 from "./photos/swift.png"

export type FeedData = {
  id: number,
  name: string,
  src: StaticImageData,
  description: string
}


export const feedData: FeedData[] = [
  {
    id: 1,
    name: "React",
    src: photo1,
    description:
      "A JavaScript library for building user interfaces, developed by Facebook.",
  },
  {
    id: 2,
    name: "Next.js",
    src: photo2,
    description:
      "A React framework for production, providing hybrid static and server rendering.",
  },
  {
    id: 3,
    name: "Vue.js",
    src: photo3,
    description:
      "A progressive JavaScript framework for building UI and single-page applications.",
  },
  {
    id: 4,
    name: "Angular",
    src: photo4,
    description:
      "A TypeScript-based web application framework developed by Google.",
  },
  {
    id: 5,
    name: "Svelte",
    src: photo5,
    description:
      "A radical new approach to building user interfaces, compiling components to highly efficient JavaScript.",
  },
  {
    id: 6,
    name: "Kotlin",
    src: photo6,
    description:
      "A modern programming language that makes developers happier, used for Android development.",
  },
  {
    id: 7,
    name: "Flutter",
    src: photo7,
    description:
      "An open-source UI software development toolkit created by Google for building natively compiled applications.",
  },
  {
    id: 8,
    name: "Swift",
    src: photo8,
    description:
      "A powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS apps.",
  }
];
