import { styled } from "@material-ui/core/styles"
import { StoryButton } from "../../components/Button"
import ChickenRice from "../../assets/chicken_rice.jpg"
import { useMediaQueryUp } from "../../utils/hook"

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

const StoriesContainer = styled("div")({
  margin: "10px 0",
  "&>:first-child": {
    marginRight: "6px",
  },
  "&>:not(:first-child):not(:last-child)": {
    margin: "0 6px",
  },
  "&>:last-child": {
    marginLeft: "6px",
  },
  // To allow horizontal scroll
  overflowX: "scroll",
  whiteSpace: "nowrap",
  // Hide scrollbar for Chrome, Safari and Opera
  "&::-webkit-scrollbar": {
    display: "none",
  },
  // Hide scrollbar for IE, Edge and Firefox
  msOverflowStyle: "none",
  scrollbarWidth: "none",
})

const Story = () => {
  const matchedLg = useMediaQueryUp("lg")
  // TODO: load story from API

  // Hide story in desktop mode
  if (matchedLg) {
    return null
  }

  return (
    <StoriesContainer>
      {dummyStories.map(story => (
        <StoryButton key={story.alt} src={story.src} alt={story.alt} />
      ))}
    </StoriesContainer>
  )
}

export default Story
