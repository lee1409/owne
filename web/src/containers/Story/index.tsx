import { StoryButton } from "../../components/Button"
import ChickenRice from "../../assets/chicken_rice.jpg"
import { useMediaQueryUp } from "../../utils/hook"
import HorizontalDrawer from "../../components/HorizontalDrawer"

// TODO: remove dummyStories after integrating with API
const dummyStories = [
  {
    src: ChickenRice,
    alt: "chickenRice",
  },
  {
    src: ChickenRice,
    alt: "chickenRice2",
  },
  {
    src: ChickenRice,
    alt: "chickenRice2",
  },
  {
    src: ChickenRice,
    alt: "chickenRice2",
  },
  {
    src: ChickenRice,
    alt: "chickenRice2",
  },
]

const Story = () => {
  const matchedLg = useMediaQueryUp("lg")
  // TODO: load story from API

  // Hide story in desktop mode
  if (matchedLg) {
    return null
  }

  return (
    <HorizontalDrawer>
      {dummyStories.map(story => (
        <StoryButton key={story.alt} src={story.src} alt={story.alt} />
      ))}
    </HorizontalDrawer>
  )
}

export default Story
