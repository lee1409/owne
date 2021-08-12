export const getSegment = (pathname: string, segment: number): string => {
  const segments = pathname.split("/")
  return `/${segments[segment]}`
}
