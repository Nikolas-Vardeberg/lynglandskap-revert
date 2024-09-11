import 'styles/index.css'

import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import SearchFeedback from 'components/static/SearchFeedback'

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter()
  const isSanityStudio = route.startsWith('/studio')
  const isBlog = route.startsWith("/blog")
  const navigation = pageProps?.global?.navigation
  const footer = pageProps?.global?.footer

  return (
    <>
      {!isSanityStudio && (
        <Head>
          <link rel="icon" href='/favicon/favicon.ico' />
          <title>{pageProps?.page?.seo?.seoTitle}</title>
          <meta name='description' content={pageProps?.page?.seo?.seoDescription} />
          <meta name="keywords" content={pageProps?.page?.seo?.seoKeywords} />
        </Head>
      )}

      {pageProps?.preview && <PreviewBanner />}
      {!isSanityStudio && <Navigation blog={navigation?.blog} menu={navigation?.menu} />}
      <Component {...pageProps} />
      {isBlog && <SearchFeedback />}
      {!isSanityStudio && <Footer {...footer} />}
    </>
  )
}
