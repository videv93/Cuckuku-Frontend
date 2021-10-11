import { sampleBlogData, sampleSearchResults } from "../utils/sample-data";
import { useRouter } from 'next/router'


const usePageHeader = () => {
  const router = useRouter();
  const onRedirect = (path) => {
    router.push(path || '/')
  }

  return { onRedirect }
}

export default usePageHeader
